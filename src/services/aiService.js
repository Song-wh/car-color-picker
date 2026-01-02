// AI 서비스 - 차량 인식 및 색상 분석
// Google Cloud Vision API 또는 OpenAI Vision API 사용 가능

const AI_CONFIG = {
  // OpenAI API (GPT-4 Vision)
  openai: {
    endpoint: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-4o-mini'
  },
  // Google Cloud Vision
  google: {
    endpoint: 'https://vision.googleapis.com/v1/images:annotate'
  }
};

// 이미지를 Base64로 변환
export const imageToBase64 = async (imageSource) => {
  // Canvas나 Video 요소에서 이미지 추출
  if (imageSource instanceof HTMLCanvasElement) {
    return imageSource.toDataURL('image/jpeg', 0.8).split(',')[1];
  }
  
  if (imageSource instanceof HTMLVideoElement) {
    const canvas = document.createElement('canvas');
    canvas.width = imageSource.videoWidth;
    canvas.height = imageSource.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageSource, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.8).split(',')[1];
  }
  
  // Blob이나 File
  if (imageSource instanceof Blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(imageSource);
    });
  }
  
  return imageSource;
};

// OpenAI Vision API로 차량 분석
export const analyzeCarWithOpenAI = async (base64Image, apiKey) => {
  if (!apiKey) {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const response = await fetch(AI_CONFIG.openai.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: AI_CONFIG.openai.model,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `이 자동차 이미지를 분석해주세요. 다음 정보를 JSON 형식으로 반환해주세요:
{
  "brand": "제조사 (현대, 기아, BMW 등)",
  "model": "차량 모델명",
  "year": "추정 연식 (예: 2020-2023)",
  "bodyType": "차종 (세단, SUV, 해치백 등)",
  "colorDescription": "색상 설명 (예: 메탈릭 그레이, 펄 화이트 등)",
  "estimatedColorCode": "추정 페인트 코드 (알 수 없으면 null)",
  "confidence": "분석 신뢰도 (0-100)"
}
JSON만 반환하고 다른 텍스트는 포함하지 마세요.`
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 500
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'AI 분석 실패');
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;
  
  try {
    // JSON 파싱 시도
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('JSON 파싱 실패');
  } catch (e) {
    console.error('AI 응답 파싱 오류:', content);
    return {
      brand: '알 수 없음',
      model: '알 수 없음',
      year: null,
      bodyType: null,
      colorDescription: '분석 필요',
      estimatedColorCode: null,
      confidence: 0,
      raw: content
    };
  }
};

// 색상 분석 전용 API 호출
export const analyzeColorWithAI = async (base64Image, apiKey) => {
  if (!apiKey) {
    throw new Error('OpenAI API 키가 설정되지 않았습니다.');
  }

  const response = await fetch(AI_CONFIG.openai.endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: AI_CONFIG.openai.model,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `이 이미지의 중앙 영역 색상을 분석해주세요. 자동차 도색 관점에서 분석해주세요.
다음 JSON 형식으로 반환:
{
  "dominantColor": {
    "hex": "#XXXXXX",
    "rgb": [R, G, B],
    "name": "색상 이름 (한글)"
  },
  "colorType": "솔리드/메탈릭/펄/매트 중 하나",
  "lightingCondition": "촬영 조명 상태 (좋음/보통/나쁨)",
  "colorAccuracy": "색상 추출 정확도 (0-100)",
  "notes": "색상 관련 참고사항"
}
JSON만 반환해주세요.`
            },
            {
              type: 'image_url',
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 300
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || '색상 분석 실패');
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content;
  
  try {
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    throw new Error('JSON 파싱 실패');
  } catch (e) {
    console.error('색상 분석 파싱 오류:', content);
    return null;
  }
};

// 로컬 저장소에서 API 키 관리
export const getApiKey = () => {
  return localStorage.getItem('openai_api_key') || '';
};

export const setApiKey = (key) => {
  localStorage.setItem('openai_api_key', key);
};

export const hasApiKey = () => {
  return !!localStorage.getItem('openai_api_key');
};

