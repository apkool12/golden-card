export const createGoldenCards = () => {
  const goldenCards = [
    // 양주 획득 (UR)
    { type: "양주", content: "축하드립니다 !", effect: "양주" },

    // 힌트 카드 (SSR)
    { type: "힌트", content: "7번 상자에는 3성구가 들어있습니다.", effect: "힌트 획득" },
    { type: "힌트", content: "1번 상자의 비밀번호 첫째 자리는 짝수입니다.", effect: "힌트 획득" },
    { type: "힌트", content: "5번 상자에는 5성구가 들어있습니다.", effect: "힌트 획득" },
    { type: "힌트", content: "3번의 비밀번호는 홀수로 끝납니다.", effect: "힌트 획득" },
    { type: "힌트", content: "2번 상자의 비밀번호에는 7이 포함되어 있습니다.", effect: "힌트 획득" },
    { type: "힌트", content: "어딘가에는 7성구가 있습니다.", effect: "힌트 획득" },
    { type: "힌트", content: "6번 상자의 비밀번호는 2024와 관련있습니다.", effect: "힌트 획득" },
    
    // 이벤트 및 특별 카드 (SR)
    { type: "event", content: "복면가왕 참가 시 추가 코인 3개 지급", effect: "이벤트 보너스" },
    { type: "event", content: "장기자랑 참가 시 추가 코인 5개 지급", effect: "이벤트 보너스" },
    { type: "special", content: "안주 세트 1개 즉시 획득", effect: "즉시 보상" },
    { type: "special", content: "다른 팀에게 코인 2개 뺏기 가능", effect: "특수 효과" },
    { type: "special", content: "다른 팀에게 코인 5개 뺏기 가능", effect: "특수 효과" },
    { type: "special", content: "다른 팀에게 코인 3개 뺏기 가능", effect: "특수 효과" },
    { type: "special", content: "다른 팀에게 코인 4개 뺏기 가능", effect: "특수 효과" },
    
    // 보상 및 벌칙 카드 (R)
    { type: "보상", content: "1코인 지급", effect: "코인 +1" },
    { type: "보상", content: "2코인 지급", effect: "코인 +2" },
    { type: "보상", content: "3코인 지급", effect: "코인 +3" },
    { type: "벌칙", content: "2코인 지불", effect: "코인 -2" },
    { type: "벌칙", content: "3코인 지불", effect: "코인 -3" },
    { type: "벌칙", content: "5코인 지불", effect: "코인 -5" },
  ];
  
  return goldenCards;
};

export const createCardRarities = () => {
  return {
    UR: { name: "UR", prob: 0.002, color: "gold" },
    SSR: { name: "SSR", prob: 0.095, color: "#ff1493" },
    SR: { name: "SR", prob: 0.1, color: "#1e90ff" },
    R: { name: "R", prob: 0.803, color: "#a9a9a9" }
  };
};