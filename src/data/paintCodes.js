// 자동차 페인트 코드 데이터베이스
// 실제 서비스에서는 API로 받아오거나 더 큰 DB 사용

export const paintCodes = {
  현대: [
    { code: 'YAC', name: '플래티넘 그라파이트', hex: '#4A4A4A', rgb: [74, 74, 74] },
    { code: 'R2U', name: '레이싱 레드', hex: '#B91C1C', rgb: [185, 28, 28] },
    { code: 'WW8', name: '퓨어 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'N5M', name: '팬텀 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'U5B', name: '인텐스 블루', hex: '#1E3A5F', rgb: [30, 58, 95] },
    { code: 'SAW', name: '실키 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'N9V', name: '썬더 그레이', hex: '#6B7280', rgb: [107, 114, 128] },
    { code: 'T5K', name: '세이지 그린', hex: '#4B5D52', rgb: [75, 93, 82] },
    { code: 'V4G', name: '가이아 브라운', hex: '#78716C', rgb: [120, 113, 108] },
    { code: 'P5W', name: '엠버런스 펄', hex: '#F59E0B', rgb: [245, 158, 11] },
  ],
  기아: [
    { code: 'UD', name: '글레이셔 화이트', hex: '#F8FAFC', rgb: [248, 250, 252] },
    { code: 'ABP', name: '오로라 블랙', hex: '#0F172A', rgb: [15, 23, 42] },
    { code: 'C4S', name: '스틸 그레이', hex: '#94A3B8', rgb: [148, 163, 184] },
    { code: 'A3R', name: '러닝 레드', hex: '#DC2626', rgb: [220, 38, 38] },
    { code: 'B4U', name: '그래비티 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'KLG', name: '준글 그린', hex: '#166534', rgb: [22, 101, 52] },
    { code: 'SAE', name: '스노우 화이트 펄', hex: '#F1F5F9', rgb: [241, 245, 249] },
    { code: 'D5W', name: '인터스텔라 그레이', hex: '#334155', rgb: [51, 65, 85] },
  ],
  르노삼성: [
    { code: 'QNC', name: '펄 화이트', hex: '#FAFAF9', rgb: [250, 250, 249] },
    { code: 'KNM', name: '글래시어 화이트', hex: '#E7E5E4', rgb: [231, 229, 228] },
    { code: 'NV676', name: '블랙', hex: '#1C1917', rgb: [28, 25, 23] },
    { code: 'TED76', name: '레드', hex: '#EF4444', rgb: [239, 68, 68] },
    { code: 'RPL', name: '루나 그레이', hex: '#A8A29E', rgb: [168, 162, 158] },
  ],
  쉐보레: [
    { code: 'GAZ', name: '서밋 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'GBA', name: '모자이크 블랙', hex: '#18181B', rgb: [24, 24, 27] },
    { code: 'G1W', name: '실버 아이스', hex: '#D4D4D8', rgb: [212, 212, 216] },
    { code: 'G7Q', name: '레드 핫', hex: '#B91C1C', rgb: [185, 28, 28] },
    { code: 'GXH', name: '퍼시픽 블루', hex: '#0369A1', rgb: [3, 105, 161] },
  ],
  BMW: [
    { code: '300', name: '알파인 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: '668', name: '제트 블랙', hex: '#09090B', rgb: [9, 9, 11] },
    { code: 'A96', name: '미네랄 화이트', hex: '#E4E4E7', rgb: [228, 228, 231] },
    { code: 'B45', name: '지중해 블루', hex: '#1D4ED8', rgb: [29, 78, 216] },
    { code: 'C3E', name: '브루클린 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'C31', name: '포르티마오 블루', hex: '#2563EB', rgb: [37, 99, 235] },
  ],
  벤츠: [
    { code: '149', name: '폴라 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: '040', name: '블랙', hex: '#0A0A0A', rgb: [10, 10, 10] },
    { code: '992', name: '셀레나이트 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '890', name: '카바나이트 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '799', name: '다이아몬드 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
  ],
};

// 모든 페인트 코드를 평면 배열로
export const getAllPaintCodes = () => {
  const all = [];
  for (const [brand, codes] of Object.entries(paintCodes)) {
    codes.forEach(code => {
      all.push({ ...code, brand });
    });
  }
  return all;
};

// 색상 차이 계산 (Delta E - CIE76)
export const calculateColorDistance = (rgb1, rgb2) => {
  const lab1 = rgbToLab(rgb1);
  const lab2 = rgbToLab(rgb2);
  
  const deltaL = lab1[0] - lab2[0];
  const deltaA = lab1[1] - lab2[1];
  const deltaB = lab1[2] - lab2[2];
  
  return Math.sqrt(deltaL * deltaL + deltaA * deltaA + deltaB * deltaB);
};

// RGB to LAB 변환
const rgbToLab = (rgb) => {
  let r = rgb[0] / 255;
  let g = rgb[1] / 255;
  let b = rgb[2] / 255;

  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
  b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

  let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
  let y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.00000;
  let z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + 16/116;
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + 16/116;
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + 16/116;

  return [(116 * y) - 16, 500 * (x - y), 200 * (y - z)];
};

// 가장 가까운 페인트 코드 찾기
export const findClosestPaintCodes = (rgb, limit = 5) => {
  const allCodes = getAllPaintCodes();
  
  const withDistance = allCodes.map(code => ({
    ...code,
    distance: calculateColorDistance(rgb, code.rgb),
    similarity: Math.max(0, 100 - calculateColorDistance(rgb, code.rgb) * 2)
  }));
  
  withDistance.sort((a, b) => a.distance - b.distance);
  
  return withDistance.slice(0, limit);
};

