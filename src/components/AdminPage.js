import React from 'react';
import '../styles/admin-page.css';

const AdminPage = ({ resetCardData, toggleAdminPage, availableCards }) => {
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>관리자 페이지</h1>
        <button onClick={toggleAdminPage} className="close-admin-btn">닫기</button>
      </div>
      
      <div className="admin-content">
        <section className="card-management">
          <h2>카드 관리</h2>
          <div className="card-stats">
            <p>현재 남은 카드 수: {availableCards.length}</p>
            <div className="card-type-breakdown">
              {['양주', '비밀번호 공개', '열쇠 힌트', '보상', '벌칙', '도전'].map(type => (
                <p key={type}>
                  {type}: {availableCards.filter(card => card.type === type).length}
                </p>
              ))}
            </div>
          </div>
          
          <div className="reset-actions">
            <button 
              onClick={resetCardData} 
              className="reset-all-btn"
            >
              모든 카드 및 게임 데이터 초기화
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;