// 색상 유틸리티 함수들

// RGB to HEX
export const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
};

// HEX to RGB
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
};

// RGB to HSL
export const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return [
    Math.round(h * 360),
    Math.round(s * 100),
    Math.round(l * 100)
  ];
};

// RGB to LAB
export const rgbToLab = (r, g, b) => {
  // Normalize RGB
  let rNorm = r / 255;
  let gNorm = g / 255;
  let bNorm = b / 255;

  // Gamma correction
  rNorm = rNorm > 0.04045 ? Math.pow((rNorm + 0.055) / 1.055, 2.4) : rNorm / 12.92;
  gNorm = gNorm > 0.04045 ? Math.pow((gNorm + 0.055) / 1.055, 2.4) : gNorm / 12.92;
  bNorm = bNorm > 0.04045 ? Math.pow((bNorm + 0.055) / 1.055, 2.4) : bNorm / 12.92;

  // Convert to XYZ
  let x = (rNorm * 0.4124 + gNorm * 0.3576 + bNorm * 0.1805) / 0.95047;
  let y = (rNorm * 0.2126 + gNorm * 0.7152 + bNorm * 0.0722) / 1.00000;
  let z = (rNorm * 0.0193 + gNorm * 0.1192 + bNorm * 0.9505) / 1.08883;

  // Convert to LAB
  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

  return [
    Math.round((116 * y) - 16),
    Math.round(500 * (x - y)),
    Math.round(200 * (y - z))
  ];
};

// 색상 이름 추정
export const getColorName = (r, g, b) => {
  const hsl = rgbToHsl(r, g, b);
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];

  // 무채색 판단
  if (s < 10) {
    if (l < 15) return '블랙';
    if (l < 35) return '다크 그레이';
    if (l < 65) return '그레이';
    if (l < 85) return '라이트 그레이';
    return '화이트';
  }

  // 채도가 낮으면
  let prefix = '';
  if (s < 30) prefix = '그레이시 ';
  else if (l < 25) prefix = '다크 ';
  else if (l > 75) prefix = '라이트 ';

  // 색상 판단
  let colorName = '';
  if (h < 15 || h >= 345) colorName = '레드';
  else if (h < 45) colorName = '오렌지';
  else if (h < 70) colorName = '옐로우';
  else if (h < 150) colorName = '그린';
  else if (h < 210) colorName = '시안';
  else if (h < 270) colorName = '블루';
  else if (h < 310) colorName = '퍼플';
  else colorName = '핑크';

  return prefix + colorName;
};

// 화이트밸런스 보정
export const applyWhiteBalance = (imageData, referenceWhite) => {
  const data = imageData.data;
  const refR = referenceWhite[0];
  const refG = referenceWhite[1];
  const refB = referenceWhite[2];
  
  // 기준값 대비 보정 계수 계산
  const avgRef = (refR + refG + refB) / 3;
  const scaleR = avgRef / refR;
  const scaleG = avgRef / refG;
  const scaleB = avgRef / refB;
  
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, Math.round(data[i] * scaleR));
    data[i + 1] = Math.min(255, Math.round(data[i + 1] * scaleG));
    data[i + 2] = Math.min(255, Math.round(data[i + 2] * scaleB));
  }
  
  return imageData;
};

// 특정 영역의 평균 색상 계산
export const getAverageColor = (imageData, x, y, size = 10) => {
  const data = imageData.data;
  const width = imageData.width;
  
  let totalR = 0, totalG = 0, totalB = 0;
  let count = 0;
  
  const halfSize = Math.floor(size / 2);
  const startX = Math.max(0, x - halfSize);
  const endX = Math.min(width, x + halfSize);
  const startY = Math.max(0, y - halfSize);
  const endY = Math.min(imageData.height, y + halfSize);
  
  for (let py = startY; py < endY; py++) {
    for (let px = startX; px < endX; px++) {
      const idx = (py * width + px) * 4;
      totalR += data[idx];
      totalG += data[idx + 1];
      totalB += data[idx + 2];
      count++;
    }
  }
  
  return [
    Math.round(totalR / count),
    Math.round(totalG / count),
    Math.round(totalB / count)
  ];
};



