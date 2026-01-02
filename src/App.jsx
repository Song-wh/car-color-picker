import { useState, useCallback } from 'react';
import { Settings as SettingsIcon, Camera, Palette, Info } from 'lucide-react';
import CameraView from './components/CameraView';
import ColorResult from './components/ColorResult';
import CarInfo from './components/CarInfo';
import Settings from './components/Settings';
import { analyzeCarWithOpenAI, getApiKey, hasApiKey } from './services/aiService';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('camera'); // camera, result, info
  const [capturedColor, setCapturedColor] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [carData, setCarData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  
  // 색상 캡처 핸들러
  const handleColorCapture = useCallback((rgb, imageDataUrl) => {
    setCapturedColor(rgb);
    setCapturedImage(imageDataUrl);
    setActiveTab('result');
  }, []);
  
  // AI 분석 핸들러
  const handleFrameCapture = useCallback(async (base64Image) => {
    if (!hasApiKey()) {
      setSettingsOpen(true);
      return;
    }
    
    setIsAnalyzing(true);
    setAiError(null);
    
    try {
      const result = await analyzeCarWithOpenAI(base64Image, getApiKey());
      setCarData(result);
      setActiveTab('info');
    } catch (error) {
      console.error('AI 분석 오류:', error);
      setAiError(error.message);
      setActiveTab('info');
    } finally {
      setIsAnalyzing(false);
    }
  }, []);
  
  return (
    <div className="app">
      {/* 헤더 */}
      <header className="app-header">
        <div className="logo">
          <Palette size={28} />
          <h1>CarColor</h1>
        </div>
        <button 
          className="settings-btn"
          onClick={() => setSettingsOpen(true)}
        >
          <SettingsIcon size={24} />
        </button>
      </header>
      
      {/* 메인 콘텐츠 */}
      <main className="app-main">
        {activeTab === 'camera' && (
          <CameraView
            onColorCapture={handleColorCapture}
            onFrameCapture={handleFrameCapture}
            isAnalyzing={isAnalyzing}
          />
        )}
        
        {activeTab === 'result' && (
          <ColorResult 
            rgb={capturedColor}
            capturedImage={capturedImage}
          />
        )}
        
        {activeTab === 'info' && (
          <CarInfo
            carData={carData}
            isLoading={isAnalyzing}
            error={aiError}
          />
        )}
      </main>
      
      {/* 하단 탭 네비게이션 */}
      <nav className="app-nav">
        <button 
          className={`nav-btn ${activeTab === 'camera' ? 'active' : ''}`}
          onClick={() => setActiveTab('camera')}
        >
          <Camera size={24} />
          <span>카메라</span>
        </button>
        
        <button 
          className={`nav-btn ${activeTab === 'result' ? 'active' : ''}`}
          onClick={() => setActiveTab('result')}
          disabled={!capturedColor}
        >
          <Palette size={24} />
          <span>색상</span>
        </button>
        
        <button 
          className={`nav-btn ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          <Info size={24} />
          <span>차량정보</span>
        </button>
      </nav>
      
      {/* 설정 모달 */}
      <Settings 
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
}

export default App;
