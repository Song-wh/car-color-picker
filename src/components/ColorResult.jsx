import { useState } from 'react';
import { Copy, Check, Palette, Droplets } from 'lucide-react';
import { rgbToHex, rgbToHsl, rgbToLab, getColorName } from '../utils/colorUtils';
import { findClosestPaintCodes } from '../data/paintCodes';

const ColorResult = ({ rgb, capturedImage }) => {
  const [copiedField, setCopiedField] = useState(null);
  const [showAllMatches, setShowAllMatches] = useState(false);
  
  if (!rgb) return null;
  
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
  const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
  const lab = rgbToLab(rgb[0], rgb[1], rgb[2]);
  const colorName = getColorName(rgb[0], rgb[1], rgb[2]);
  const matchingCodes = findClosestPaintCodes(rgb, showAllMatches ? 10 : 3);
  
  const copyToClipboard = async (text, field) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };
  
  const CopyButton = ({ text, field }) => (
    <button 
      className="copy-btn"
      onClick={() => copyToClipboard(text, field)}
    >
      {copiedField === field ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
  
  return (
    <div className="color-result">
      {/* 캡처된 이미지 미리보기 */}
      {capturedImage && (
        <div className="captured-preview">
          <img src={capturedImage} alt="캡처된 이미지" />
        </div>
      )}
      
      {/* 색상 미리보기 */}
      <div className="color-preview-large">
        <div 
          className="color-swatch-large"
          style={{ backgroundColor: hex }}
        />
        <div className="color-name-badge">
          <Palette size={16} />
          {colorName}
        </div>
      </div>
      
      {/* 색상 값들 */}
      <div className="color-values">
        <div className="color-value-row">
          <span className="label">HEX</span>
          <span className="value">{hex}</span>
          <CopyButton text={hex} field="hex" />
        </div>
        
        <div className="color-value-row">
          <span className="label">RGB</span>
          <span className="value">{rgb.join(', ')}</span>
          <CopyButton text={`rgb(${rgb.join(', ')})`} field="rgb" />
        </div>
        
        <div className="color-value-row">
          <span className="label">HSL</span>
          <span className="value">{hsl[0]}°, {hsl[1]}%, {hsl[2]}%</span>
          <CopyButton text={`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`} field="hsl" />
        </div>
        
        <div className="color-value-row">
          <span className="label">LAB</span>
          <span className="value">L:{lab[0]} a:{lab[1]} b:{lab[2]}</span>
          <CopyButton text={`Lab(${lab.join(', ')})`} field="lab" />
        </div>
      </div>
      
      {/* 매칭되는 페인트 코드 */}
      <div className="paint-matches">
        <h3>
          <Droplets size={18} />
          매칭 페인트 코드
        </h3>
        
        <div className="paint-match-list">
          {matchingCodes.map((paint, idx) => (
            <div key={idx} className="paint-match-item">
              <div 
                className="paint-swatch"
                style={{ backgroundColor: paint.hex }}
              />
              <div className="paint-info">
                <div className="paint-code">
                  <span className="brand">{paint.brand}</span>
                  <span className="code">{paint.code}</span>
                </div>
                <div className="paint-name">{paint.name}</div>
              </div>
              <div className="paint-similarity">
                <div 
                  className="similarity-bar"
                  style={{ 
                    '--similarity': `${paint.similarity}%`,
                    backgroundColor: paint.similarity > 80 ? '#22c55e' : 
                                    paint.similarity > 60 ? '#eab308' : '#ef4444'
                  }}
                />
                <span>{Math.round(paint.similarity)}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="show-more-btn"
          onClick={() => setShowAllMatches(!showAllMatches)}
        >
          {showAllMatches ? '간략히 보기' : '더 많은 매칭 보기'}
        </button>
      </div>
    </div>
  );
};

export default ColorResult;



