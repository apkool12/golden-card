import React from 'react';
import '../styles/info-box.css';

const InfoBox = () => {
  return (
    <div className="info-box">
      <h3>황금 카드 시스템 안내</h3>
      <p>- 미니게임을 통해 모은 코인으로 황금 카드를 구매할 수 있습니다.</p>
      <p>- 황금 카드는 보상, 벌칙, 힌트, 이벤트, 특별 효과가 있습니다.</p>
      <p>- 희귀 카드일수록 더 좋은 효과를 얻을 확률이 높습니다.</p>
      <p>- 힌트 카드를 통해 자물쇠 비밀번호에 대한 정보를 얻을 수 있습니다.</p>
    </div>
  );
};

export default InfoBox;
