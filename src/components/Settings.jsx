import { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Key, Save, Eye, EyeOff, X, Trash2 } from 'lucide-react';
import { getApiKey, setApiKey, hasApiKey } from '../services/aiService';

const Settings = ({ isOpen, onClose }) => {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setApiKeyInput(getApiKey());
    }
  }, [isOpen]);
  
  const handleSave = () => {
    setApiKey(apiKeyInput);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };
  
  const handleClear = () => {
    setApiKeyInput('');
    setApiKey('');
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={e => e.stopPropagation()}>
        <div className="settings-header">
          <SettingsIcon size={24} />
          <h2>설정</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="settings-content">
          <div className="setting-group">
            <label>
              <Key size={18} />
              OpenAI API 키
            </label>
            <p className="setting-desc">
              AI 차량 인식 및 색상 분석을 위해 OpenAI API 키가 필요합니다.
              <a 
                href="https://platform.openai.com/api-keys" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                API 키 발급받기
              </a>
            </p>
            
            <div className="api-key-input-group">
              <input
                type={showKey ? 'text' : 'password'}
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="sk-..."
                className="api-key-input"
              />
              <button 
                className="toggle-visibility"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="api-key-actions">
              <button 
                className="save-btn"
                onClick={handleSave}
                disabled={!apiKeyInput}
              >
                <Save size={16} />
                {saved ? '저장됨!' : '저장'}
              </button>
              
              {hasApiKey() && (
                <button 
                  className="clear-btn"
                  onClick={handleClear}
                >
                  <Trash2 size={16} />
                  삭제
                </button>
              )}
            </div>
          </div>
          
          <div className="setting-group">
            <h3>색상 보정</h3>
            <p className="setting-desc">
              더 정확한 색상 추출을 위해 기준 카드를 사용할 수 있습니다.
            </p>
            <div className="calibration-info">
              <div className="calibration-card white">화이트 기준</div>
              <div className="calibration-card gray">그레이 기준</div>
              <p>촬영 시 기준 카드를 함께 촬영하면 더 정확한 결과를 얻을 수 있습니다.</p>
            </div>
          </div>
          
          <div className="setting-group">
            <h3>사용 팁</h3>
            <ul className="tips-list">
              <li>🌤️ 자연광에서 촬영하면 더 정확합니다</li>
              <li>📐 차량과 수직으로 촬영해주세요</li>
              <li>🎯 깨끗한 부분을 선택해 촬영하세요</li>
              <li>💡 그림자가 없는 곳에서 촬영하세요</li>
              <li>🔄 여러 각도에서 촬영해 비교하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;



