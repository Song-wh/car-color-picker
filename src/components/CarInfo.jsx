import { Car, Calendar, Palette, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const CarInfo = ({ carData, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="car-info loading">
        <Loader2 className="spinner" size={32} />
        <p>AI가 차량을 분석하고 있습니다...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="car-info error">
        <AlertCircle size={32} />
        <p>{error}</p>
      </div>
    );
  }
  
  if (!carData) {
    return (
      <div className="car-info empty">
        <Car size={48} />
        <p>차량을 촬영하고 AI 분석 버튼을 눌러주세요</p>
      </div>
    );
  }
  
  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return '#22c55e';
    if (confidence >= 60) return '#eab308';
    return '#ef4444';
  };
  
  return (
    <div className="car-info">
      <div className="car-info-header">
        <Car size={24} />
        <h2>차량 정보</h2>
        <div 
          className="confidence-badge"
          style={{ backgroundColor: getConfidenceColor(carData.confidence) }}
        >
          <CheckCircle size={14} />
          {carData.confidence}% 신뢰도
        </div>
      </div>
      
      <div className="car-info-grid">
        <div className="info-item">
          <span className="info-label">제조사</span>
          <span className="info-value">{carData.brand || '알 수 없음'}</span>
        </div>
        
        <div className="info-item">
          <span className="info-label">모델</span>
          <span className="info-value">{carData.model || '알 수 없음'}</span>
        </div>
        
        {carData.year && (
          <div className="info-item">
            <Calendar size={16} />
            <span className="info-label">연식</span>
            <span className="info-value">{carData.year}</span>
          </div>
        )}
        
        {carData.bodyType && (
          <div className="info-item">
            <span className="info-label">차종</span>
            <span className="info-value">{carData.bodyType}</span>
          </div>
        )}
        
        <div className="info-item full-width">
          <Palette size={16} />
          <span className="info-label">색상</span>
          <span className="info-value highlight">
            {carData.colorDescription || '분석 필요'}
          </span>
        </div>
        
        {carData.estimatedColorCode && (
          <div className="info-item full-width">
            <span className="info-label">추정 페인트코드</span>
            <span className="info-value code">
              {carData.estimatedColorCode}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarInfo;



