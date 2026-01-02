// 자동차 페인트 코드 데이터베이스
// 실제 자동차 제조사별 페인트 코드 (확장 버전)

export const paintCodes = {
  // ========== 국산 브랜드 ==========
  현대: [
    // 화이트 계열
    { code: 'WW8', name: '퓨어 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'WAW', name: '아틀라스 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'NW', name: '화이트 크림', hex: '#FEF9F3', rgb: [254, 249, 243] },
    { code: 'W8Y', name: '폴라 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    // 블랙 계열
    { code: 'N5M', name: '팬텀 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'MZH', name: '코스믹 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'AF', name: '오로라 블랙 펄', hex: '#151515', rgb: [21, 21, 21] },
    // 그레이 계열
    { code: 'YAC', name: '플래티넘 그라파이트', hex: '#4A4A4A', rgb: [74, 74, 74] },
    { code: 'SAW', name: '실키 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'N9V', name: '썬더 그레이', hex: '#6B7280', rgb: [107, 114, 128] },
    { code: 'R2T', name: '아이언 그레이', hex: '#555555', rgb: [85, 85, 85] },
    { code: 'M8S', name: '마그네틱 실버', hex: '#B8B8B8', rgb: [184, 184, 184] },
    { code: 'P7V', name: '새틴 실버', hex: '#A0A0A0', rgb: [160, 160, 160] },
    { code: 'T5G', name: '타이타늄 그레이', hex: '#787878', rgb: [120, 120, 120] },
    { code: 'M6T', name: '문스톤', hex: '#9E9E9E', rgb: [158, 158, 158] },
    // 레드 계열
    { code: 'R2U', name: '레이싱 레드', hex: '#B91C1C', rgb: [185, 28, 28] },
    { code: 'PR', name: '파이어리 레드', hex: '#D32F2F', rgb: [211, 47, 47] },
    { code: 'S2R', name: '소울 레드', hex: '#C62828', rgb: [198, 40, 40] },
    { code: 'V5R', name: '벨벳 버건디', hex: '#7B1E1E', rgb: [123, 30, 30] },
    { code: 'NKA', name: '플레임 레드', hex: '#E53935', rgb: [229, 57, 53] },
    // 블루 계열
    { code: 'U5B', name: '인텐스 블루', hex: '#1E3A5F', rgb: [30, 58, 95] },
    { code: 'YP5', name: '마린 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'N4B', name: '스타라이트 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'XU3', name: '일렉트릭 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'W5B', name: '오션 블루', hex: '#0369A1', rgb: [3, 105, 161] },
    { code: 'SAB', name: '블루 사파이어', hex: '#1D4ED8', rgb: [29, 78, 216] },
    // 그린 계열
    { code: 'T5K', name: '세이지 그린', hex: '#4B5D52', rgb: [75, 93, 82] },
    { code: 'NCM', name: '아마존 그린', hex: '#166534', rgb: [22, 101, 52] },
    { code: 'N3F', name: '포레스트 그린', hex: '#14532D', rgb: [20, 83, 45] },
    { code: 'GBG', name: '에메랄드 그린', hex: '#059669', rgb: [5, 150, 105] },
    // 브라운/베이지 계열
    { code: 'V4G', name: '가이아 브라운', hex: '#78716C', rgb: [120, 113, 108] },
    { code: 'N5N', name: '문라이트 클라우드', hex: '#E5E4E2', rgb: [229, 228, 226] },
    { code: 'WN9', name: '타우페 그레이', hex: '#8B7D6B', rgb: [139, 125, 107] },
    { code: 'S7N', name: '카멜', hex: '#A67C52', rgb: [166, 124, 82] },
    // 옐로우/오렌지 계열
    { code: 'P5W', name: '엠버런스 펄', hex: '#F59E0B', rgb: [245, 158, 11] },
    { code: 'RY3', name: '선샤인 옐로우', hex: '#FACC15', rgb: [250, 204, 21] },
    { code: 'S5Y', name: '레몬 옐로우', hex: '#FDE047', rgb: [253, 224, 71] },
  ],
  기아: [
    // 화이트 계열
    { code: 'UD', name: '글레이셔 화이트', hex: '#F8FAFC', rgb: [248, 250, 252] },
    { code: 'SAE', name: '스노우 화이트 펄', hex: '#F1F5F9', rgb: [241, 245, 249] },
    { code: 'SWP', name: '스노우 화이트 펄', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'UD', name: '클리어 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    // 블랙 계열
    { code: 'ABP', name: '오로라 블랙', hex: '#0F172A', rgb: [15, 23, 42] },
    { code: 'ABT', name: '오로라 블랙 펄', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'EB', name: '에보니 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    // 그레이 계열
    { code: 'C4S', name: '스틸 그레이', hex: '#94A3B8', rgb: [148, 163, 184] },
    { code: 'D5W', name: '인터스텔라 그레이', hex: '#334155', rgb: [51, 65, 85] },
    { code: 'KLG', name: '머신 그레이', hex: '#64748B', rgb: [100, 116, 139] },
    { code: 'C5G', name: '세라믹 실버', hex: '#CBD5E1', rgb: [203, 213, 225] },
    { code: 'MZH', name: '플래티넘 그라파이트', hex: '#475569', rgb: [71, 85, 105] },
    { code: 'A7S', name: '실키 실버', hex: '#B0B0B0', rgb: [176, 176, 176] },
    // 레드 계열
    { code: 'A3R', name: '러닝 레드', hex: '#DC2626', rgb: [220, 38, 38] },
    { code: 'RR', name: '레이싱 레드', hex: '#B91C1C', rgb: [185, 28, 28] },
    { code: 'R4R', name: '인페르노 레드', hex: '#C53030', rgb: [197, 48, 48] },
    // 블루 계열
    { code: 'B4U', name: '그래비티 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'JBB', name: '재즈 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'W9U', name: '딥 씨 블루', hex: '#1D4ED8', rgb: [29, 78, 216] },
    { code: 'U5B', name: '인텐스 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    // 그린 계열
    { code: 'KLG', name: '정글 그린', hex: '#166534', rgb: [22, 101, 52] },
    { code: 'GC', name: '제이드 그린', hex: '#059669', rgb: [5, 150, 105] },
    // 기타
    { code: 'D9Y', name: '스파크 옐로우', hex: '#EAB308', rgb: [234, 179, 8] },
    { code: 'V3G', name: '로버스트 에메랄드', hex: '#047857', rgb: [4, 120, 87] },
  ],
  제네시스: [
    // 화이트 계열
    { code: 'WC9', name: '우유니 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: 'WAA', name: '사빌로 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'YAC', name: '카푸치노 베이지', hex: '#E8D5C4', rgb: [232, 213, 196] },
    // 블랙 계열
    { code: 'PH3', name: '빅토리아 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'NKA', name: '반타 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    // 그레이 계열
    { code: 'SSS', name: '서울 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: 'M6T', name: '마탈라 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'V4N', name: '하바나 브라운', hex: '#78716C', rgb: [120, 113, 108] },
    { code: 'SSS', name: '사운던스 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
    { code: 'C5G', name: '세빌 실버', hex: '#D4D4D8', rgb: [212, 212, 216] },
    // 블루 계열
    { code: 'V3U', name: '아틀란티스 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'NCB', name: '나미브 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'U5B', name: '제네시스 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    // 그린 계열
    { code: 'NCM', name: '시에나 그린', hex: '#4B5563', rgb: [75, 85, 99] },
    { code: 'G3M', name: '가비야 그린', hex: '#3F6212', rgb: [63, 98, 18] },
    // 레드 계열
    { code: 'RY5', name: '마드리드 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: 'R3R', name: '카프리 로제', hex: '#BE185D', rgb: [190, 24, 93] },
  ],
  쌍용: [
    { code: 'WAA', name: '그랜드 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'LAK', name: '스페이스 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'SAK', name: '사일런트 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'RAK', name: '플레이밍 레드', hex: '#DC2626', rgb: [220, 38, 38] },
    { code: 'TAY', name: '딥 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'DAM', name: '다크 그레이', hex: '#4B5563', rgb: [75, 85, 99] },
  ],

  // ========== 일본 브랜드 ==========
  토요타: [
    { code: '040', name: '슈퍼 화이트 II', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: '070', name: '화이트 펄', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '202', name: '블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: '1F7', name: '클래식 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: '1G3', name: '마그네틱 그레이', hex: '#6B7280', rgb: [107, 114, 128] },
    { code: '3R3', name: '바르셀로나 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '8X8', name: '블루 이클립스', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: '6X3', name: '루나 록', hex: '#9CA3AF', rgb: [156, 163, 175] },
    { code: '8V5', name: '아이언 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '1J9', name: '셀레스티얼 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
  ],
  혼다: [
    { code: 'NH788P', name: '화이트 오키드 펄', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: 'NH731P', name: '크리스탈 블랙 펄', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'NH797M', name: '모던 스틸', hex: '#71717A', rgb: [113, 113, 122] },
    { code: 'R94', name: '산 마리노 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'B588P', name: '옵시디언 블루 펄', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'NH830M', name: '루나 실버', hex: '#B0B0B0', rgb: [176, 176, 176] },
    { code: 'NH883P', name: '플래티넘 화이트 펄', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'YR607P', name: '소닉 그레이 펄', hex: '#52525B', rgb: [82, 82, 91] },
  ],
  닛산: [
    { code: 'QAB', name: '퓨어 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'KH3', name: '슈퍼 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'K23', name: '브릴리언트 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'NAH', name: '건 메탈릭', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'RAY', name: '바이브런트 레드', hex: '#DC2626', rgb: [220, 38, 38] },
    { code: 'RBY', name: '카르마나 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: 'RCF', name: '딥 블루 펄', hex: '#1E3A8A', rgb: [30, 58, 138] },
  ],
  마쓰다: [
    { code: '25D', name: '스노우플레이크 화이트 펄', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: '41W', name: '제트 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: '46V', name: '소울 레드 크리스탈', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '42M', name: '머신 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: '45P', name: '소닉 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
    { code: '42B', name: '딥 크리스탈 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: '47C', name: '폴리메탈 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '38P', name: '에테르널 블루', hex: '#2563EB', rgb: [37, 99, 235] },
  ],
  스바루: [
    { code: '37J', name: '크리스탈 화이트 펄', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'D4S', name: '크리스탈 블랙 실리카', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'K1X', name: '아이스 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'M1Y', name: 'WR 블루 펄', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'M3Y', name: '마그네타이트 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'H8R', name: '퓨어 레드', hex: '#DC2626', rgb: [220, 38, 38] },
  ],

  // ========== 독일 브랜드 ==========
  BMW: [
    // 화이트 계열
    { code: '300', name: '알파인 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: 'A96', name: '미네랄 화이트', hex: '#E4E4E7', rgb: [228, 228, 231] },
    // 블랙 계열
    { code: '668', name: '제트 블랙', hex: '#09090B', rgb: [9, 9, 11] },
    { code: '416', name: '카본 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: '475', name: '블랙 사파이어', hex: '#0F172A', rgb: [15, 23, 42] },
    // 그레이 계열
    { code: 'C3E', name: '브루클린 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'A83', name: '글래시어 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'A52', name: '스페이스 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: 'C4K', name: '도랴 그레이', hex: '#6B7280', rgb: [107, 114, 128] },
    { code: 'X1D', name: '피톤 브라운', hex: '#78716C', rgb: [120, 113, 108] },
    // 블루 계열
    { code: 'B45', name: '지중해 블루', hex: '#1D4ED8', rgb: [29, 78, 216] },
    { code: 'C31', name: '포르티마오 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'A76', name: '딥 씨 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'C1M', name: '탄자나이트 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    // 레드 계열
    { code: 'A75', name: '멜버른 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: 'C4J', name: '토론토 레드', hex: '#C53030', rgb: [197, 48, 48] },
    // 그린 계열
    { code: 'C4N', name: '산 레모 그린', hex: '#166534', rgb: [22, 101, 52] },
    { code: 'C54', name: '아일 오브 맨 그린', hex: '#14532D', rgb: [20, 83, 45] },
  ],
  벤츠: [
    // 화이트 계열
    { code: '149', name: '폴라 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: '650', name: '칼사이트 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '799', name: '다이아몬드 화이트', hex: '#E4E4E7', rgb: [228, 228, 231] },
    // 블랙 계열
    { code: '040', name: '블랙', hex: '#0A0A0A', rgb: [10, 10, 10] },
    { code: '197', name: '옵시디언 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: '890', name: '카바나이트 블랙', hex: '#0F172A', rgb: [15, 23, 42] },
    // 그레이 계열
    { code: '992', name: '셀레나이트 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '988', name: '다이아몬드 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
    { code: '963', name: '하이테크 실버', hex: '#B0B0B0', rgb: [176, 176, 176] },
    { code: '723', name: '그라파이트 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    // 블루 계열
    { code: '890', name: '카바나이트 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '896', name: '브릴리언트 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: '894', name: '노틸러스 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    // 레드 계열
    { code: '996', name: '하야신스 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: '589', name: '주피터 레드', hex: '#C53030', rgb: [197, 48, 48] },
    // 그린 계열
    { code: '300', name: '에메랄드 그린', hex: '#166534', rgb: [22, 101, 52] },
  ],
  아우디: [
    // 화이트 계열
    { code: 'LY9C', name: '이비사 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'LS9R', name: '글래시어 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'LY9S', name: '툰드라 그레이', hex: '#E4E4E7', rgb: [228, 228, 231] },
    // 블랙 계열
    { code: 'LZ9Y', name: '미토스 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'LY9T', name: '판텀 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    // 그레이 계열
    { code: 'LZ7G', name: '문순 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: 'LY7W', name: '플로렛 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'LX7R', name: '데이토나 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'LZ9W', name: '나르도 그레이', hex: '#9CA3AF', rgb: [156, 163, 175] },
    // 블루 계열
    { code: 'LZ5H', name: '나바라 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'LG5D', name: '터보 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'LZ5M', name: '스카이퍼 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    // 레드 계열
    { code: 'LY3J', name: '미사노 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'LZ3M', name: '탱고 레드', hex: '#DC2626', rgb: [220, 38, 38] },
    // 그린 계열
    { code: 'LX6R', name: '디스트릭트 그린', hex: '#166534', rgb: [22, 101, 52] },
    { code: 'LZ6W', name: '소노마 그린', hex: '#4B5563', rgb: [75, 85, 99] },
  ],
  폭스바겐: [
    { code: 'LC9A', name: '딥 블랙 펄', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'LD7R', name: '퓨어 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'LB5K', name: '래피스 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'LB9A', name: '오릭스 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'LD7X', name: '리플렉스 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'LH1Y', name: '코넬리안 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'LR7H', name: '라임스톤 그레이', hex: '#9CA3AF', rgb: [156, 163, 175] },
    { code: 'LP3G', name: '킹스 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: 'LH5X', name: '아틀란틱 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
  ],
  포르쉐: [
    { code: 'L0', name: '화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: '2T', name: '카레라 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'A1', name: '블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'Y1', name: '제트 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: '84', name: '가즈 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '3Q', name: '레이싱 옐로우', hex: '#FACC15', rgb: [250, 204, 21] },
    { code: 'M5R', name: '크레용', hex: '#F5F5DC', rgb: [245, 245, 220] },
    { code: '39', name: '마이애미 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: '2Y', name: '젠티안 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'M7U', name: '드래곤피어 그린', hex: '#14532D', rgb: [20, 83, 45] },
    { code: 'M8S', name: '아가트 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '6B', name: 'GT 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
  ],

  // ========== 미국 브랜드 ==========
  쉐보레: [
    { code: 'GAZ', name: '서밋 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'GBA', name: '모자이크 블랙', hex: '#18181B', rgb: [24, 24, 27] },
    { code: 'G1W', name: '실버 아이스', hex: '#D4D4D8', rgb: [212, 212, 216] },
    { code: 'G7Q', name: '레드 핫', hex: '#B91C1C', rgb: [185, 28, 28] },
    { code: 'GXH', name: '퍼시픽 블루', hex: '#0369A1', rgb: [3, 105, 161] },
    { code: 'GLU', name: '섀도우 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'GAN', name: '오렌지 버스트', hex: '#EA580C', rgb: [234, 88, 12] },
    { code: 'G9K', name: '브라이트 블루', hex: '#2563EB', rgb: [37, 99, 235] },
  ],
  포드: [
    { code: 'YZ', name: '옥스포드 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'UM', name: '섀도우 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
    { code: 'UX', name: '마그네틱', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'JS', name: '인곳 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'RR', name: '루비 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: 'J4', name: '블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'HG', name: '아틀라스 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'LQ', name: '라피드 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'L3', name: '사이버 오렌지', hex: '#EA580C', rgb: [234, 88, 12] },
    { code: 'FT', name: '포드 퍼포먼스 블루', hex: '#1D4ED8', rgb: [29, 78, 216] },
  ],
  지프: [
    { code: 'PW7', name: '브라이트 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'PX8', name: '블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'PDN', name: '그래나이트 크리스탈', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'PBM', name: '빌릿 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: 'PRV', name: '레드헤드 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'PJT', name: '딥 오션 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'PLQ', name: '고비 클리어코트', hex: '#D97706', rgb: [217, 119, 6] },
    { code: 'PGG', name: '사르게 그린', hex: '#166534', rgb: [22, 101, 52] },
  ],
  테슬라: [
    { code: 'PPSW', name: '펄 화이트 멀티코트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: 'PBSB', name: '솔리드 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'PMNG', name: '미드나이트 실버', hex: '#52525B', rgb: [82, 82, 91] },
    { code: 'PPMR', name: '레드 멀티코트', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'PN00', name: '딥 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: 'PR01', name: '퀵실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
    { code: 'PPSB', name: '울트라 화이트', hex: '#FFFFFF', rgb: [255, 255, 255] },
  ],

  // ========== 영국/이탈리아 브랜드 ==========
  랜드로버: [
    { code: '1AQ', name: '퓨지 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: 'PUN', name: '산토리니 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'LQV', name: '에이거 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '2207', name: '인더스 실버', hex: '#A1A1AA', rgb: [161, 161, 170] },
    { code: '1DF', name: '피렌체 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: '2340', name: '카르파티아 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: '2229', name: '타이탄', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '1BS', name: '브리티시 레이싱 그린', hex: '#14532D', rgb: [20, 83, 45] },
  ],
  재규어: [
    { code: '1AQ', name: '퓨지 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '1AB', name: '산토리니 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'LQV', name: '에이거 그레이', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '2201', name: '피렌체 레드', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: '1BS', name: 'BRG 메탈릭', hex: '#14532D', rgb: [20, 83, 45] },
    { code: 'JBM', name: '세자레스카 블루', hex: '#1E40AF', rgb: [30, 64, 175] },
    { code: 'NAL', name: '실리콘 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
  ],
  미니: [
    { code: 'B15', name: '칠리 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'B01', name: '볼카닉 오렌지', hex: '#EA580C', rgb: [234, 88, 12] },
    { code: 'B37', name: '일렉트릭 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'A62', name: '브리티시 레이싱 그린', hex: '#14532D', rgb: [20, 83, 45] },
    { code: 'B11', name: '페퍼 화이트', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: 'B41', name: '미드나이트 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'A94', name: '멜팅 실버', hex: '#B0B0B0', rgb: [176, 176, 176] },
    { code: 'C3Y', name: '세이지 그린', hex: '#4B5563', rgb: [75, 85, 99] },
  ],
  페라리: [
    { code: '300', name: '로쏘 코르사', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '322', name: '로쏘 스쿠데리아', hex: '#991B1B', rgb: [153, 27, 27] },
    { code: '100', name: '비앙코 아부스', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '200', name: '네로', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: '228', name: '지알로 모데나', hex: '#FACC15', rgb: [250, 204, 21] },
    { code: '523', name: '블루 포지', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '226', name: '그리지오 실버스톤', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '520', name: '블루 스코지아', hex: '#2563EB', rgb: [37, 99, 235] },
  ],
  람보르기니: [
    { code: 'LY1L', name: '비앙코 모노세러스', hex: '#FFFFFF', rgb: [255, 255, 255] },
    { code: 'LY9B', name: '네로 알디가', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: 'L0L1', name: '지알로 오리온', hex: '#FACC15', rgb: [250, 204, 21] },
    { code: 'L0G5', name: '아란치오 보레알리스', hex: '#EA580C', rgb: [234, 88, 12] },
    { code: 'L0E9', name: '로쏘 마르스', hex: '#C53030', rgb: [197, 48, 48] },
    { code: 'LY5Q', name: '블루 지누', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: 'L0C6', name: '베르데 만티스', hex: '#14532D', rgb: [20, 83, 45] },
    { code: 'LZ7Y', name: '그리지오 에스토크', hex: '#52525B', rgb: [82, 82, 91] },
  ],

  // ========== 기타 브랜드 ==========
  볼보: [
    { code: '707', name: '크리스탈 화이트 펄', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '717', name: '오닉스 블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: '714', name: '썬더 그레이', hex: '#52525B', rgb: [82, 82, 91] },
    { code: '711', name: '브라이트 실버', hex: '#C0C0C0', rgb: [192, 192, 192] },
    { code: '702', name: '패션 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '723', name: '덴임 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '726', name: '파인 그레이', hex: '#9CA3AF', rgb: [156, 163, 175] },
    { code: '728', name: '오스뮴 그레이', hex: '#71717A', rgb: [113, 113, 122] },
  ],
  렉서스: [
    { code: '077', name: '소닉 퀄츠', hex: '#FAFAFA', rgb: [250, 250, 250] },
    { code: '212', name: '블랙', hex: '#0D0D0D', rgb: [13, 13, 13] },
    { code: '1L2', name: '소닉 티타늄', hex: '#71717A', rgb: [113, 113, 122] },
    { code: '3T5', name: '인페르노 레드', hex: '#C53030', rgb: [197, 48, 48] },
    { code: '8X5', name: '울트라소닉 블루', hex: '#2563EB', rgb: [37, 99, 235] },
    { code: '1J2', name: '에미넌트 화이트', hex: '#F5F5F5', rgb: [245, 245, 245] },
    { code: '8W9', name: '카발리 블루', hex: '#1E3A8A', rgb: [30, 58, 138] },
    { code: '1K1', name: '그래피트 블랙', hex: '#1A1A1A', rgb: [26, 26, 26] },
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

// 브랜드 목록 가져오기
export const getBrands = () => Object.keys(paintCodes);

// 특정 브랜드의 페인트 코드 가져오기
export const getPaintCodesByBrand = (brand) => {
  return paintCodes[brand] || [];
};

// 총 페인트 코드 개수
export const getTotalPaintCodeCount = () => getAllPaintCodes().length;
