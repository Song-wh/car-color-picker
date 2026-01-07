import { useState, useRef, useEffect, useCallback } from 'react';
import { Camera, Crosshair, Zap, ZapOff, RotateCcw } from 'lucide-react';
import { getAverageColor } from '../utils/colorUtils';

const CameraView = ({ onColorCapture, onFrameCapture, isAnalyzing }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [facingMode, setFacingMode] = useState('environment'); // 후면 카메라
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [currentColor, setCurrentColor] = useState([128, 128, 128]);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [error, setError] = useState(null);
  
  // 카메라 시작
  const startCamera = useCallback(async () => {
    try {
      // 기존 스트림 정리
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      const constraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      };
      
      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(newStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        await videoRef.current.play();
        setIsCameraReady(true);
        setError(null);
      }
    } catch (err) {
      console.error('카메라 시작 오류:', err);
      setError('카메라를 시작할 수 없습니다. 권한을 확인해주세요.');
      setIsCameraReady(false);
    }
  }, [facingMode, stream]);
  
  // 카메라 전환
  const switchCamera = () => {
    setFacingMode(prev => prev === 'environment' ? 'user' : 'environment');
  };
  
  // 플래시 토글
  const toggleFlash = async () => {
    if (stream) {
      const track = stream.getVideoTracks()[0];
      const capabilities = track.getCapabilities();
      
      if (capabilities.torch) {
        await track.applyConstraints({
          advanced: [{ torch: !flashEnabled }]
        });
        setFlashEnabled(!flashEnabled);
      }
    }
  };
  
  // 실시간 색상 추출
  useEffect(() => {
    if (!isCameraReady || !videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    let animationId;
    
    const extractColor = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0);
        
        // 중앙 영역 색상 추출
        const centerX = Math.floor(canvas.width / 2);
        const centerY = Math.floor(canvas.height / 2);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        const color = getAverageColor(imageData, centerX, centerY, 30);
        setCurrentColor(color);
      }
      
      animationId = requestAnimationFrame(extractColor);
    };
    
    extractColor();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isCameraReady]);
  
  // 컴포넌트 마운트 시 카메라 시작
  useEffect(() => {
    startCamera();
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [facingMode]);
  
  // 색상 캡처
  const captureColor = () => {
    if (!isCameraReady) return;
    
    const canvas = canvasRef.current;
    onColorCapture?.(currentColor, canvas.toDataURL('image/jpeg', 0.9));
  };
  
  // 전체 프레임 캡처 (AI 분석용)
  const captureFrame = () => {
    if (!isCameraReady || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const base64 = canvas.toDataURL('image/jpeg', 0.9).split(',')[1];
    onFrameCapture?.(base64);
  };
  
  return (
    <div className="camera-container">
      {error ? (
        <div className="camera-error">
          <Camera size={48} />
          <p>{error}</p>
          <button onClick={startCamera} className="retry-btn">
            <RotateCcw size={16} />
            다시 시도
          </button>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="camera-video"
          />
          <canvas ref={canvasRef} className="camera-canvas" />
          
          {/* 크로스헤어 */}
          <div className="crosshair">
            <Crosshair size={60} strokeWidth={1.5} />
            <div 
              className="color-preview"
              style={{ 
                backgroundColor: `rgb(${currentColor.join(',')})` 
              }}
            />
          </div>
          
          {/* 실시간 색상 표시 */}
          <div className="live-color-info">
            <div 
              className="live-color-swatch"
              style={{ backgroundColor: `rgb(${currentColor.join(',')})` }}
            />
            <span className="live-color-text">
              RGB({currentColor.join(', ')})
            </span>
          </div>
          
          {/* 컨트롤 버튼 */}
          <div className="camera-controls">
            <button 
              onClick={switchCamera} 
              className="control-btn"
              title="카메라 전환"
            >
              <RotateCcw size={24} />
            </button>
            
            <button 
              onClick={captureColor}
              className="capture-btn"
              disabled={isAnalyzing}
              title="색상 캡처"
            >
              <div className="capture-btn-inner" />
            </button>
            
            <button 
              onClick={toggleFlash}
              className={`control-btn ${flashEnabled ? 'active' : ''}`}
              title="플래시"
            >
              {flashEnabled ? <Zap size={24} /> : <ZapOff size={24} />}
            </button>
          </div>
          
          {/* AI 분석 버튼 */}
          <button 
            onClick={captureFrame}
            className="ai-analyze-btn"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? '분석 중...' : '🤖 AI 차량 분석'}
          </button>
        </>
      )}
    </div>
  );
};

export default CameraView;



