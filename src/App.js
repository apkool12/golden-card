import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import CardInfoPanel from "./components/cardInfoPanel";
import CardSection from "./components/cardSection";
import HistorySection from "./components/historySection";
import InfoBox from "./components/infoBox";
import AdminPage from "./components/AdminPage";
import { createGoldenCards, createCardRarities } from "./data/cardData";

const GameContext = createContext();

function GameProvider({ children }) {
  const [goldenCards, setGoldenCards] = useState(() => {
    const savedCards = localStorage.getItem("availableCards");
    return savedCards ? JSON.parse(savedCards) : createGoldenCards();
  });
  const [rarities] = useState(() => createCardRarities());
  const [currentCard, setCurrentCard] = useState(null);
  const [isOpening, setIsOpening] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isAdminPage, setIsAdminPage] = useState(false);
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem("gameCoins");
    return savedCoins ? parseInt(savedCoins, 10) : 10;
  });
  const [historyCards, setHistoryCards] = useState(() => {
    const savedHistory = localStorage.getItem("cardHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem("gameCoins", coins.toString());
  }, [coins]);

  useEffect(() => {
    localStorage.setItem("cardHistory", JSON.stringify(historyCards));
  }, [historyCards]);

  useEffect(() => {
    localStorage.setItem("availableCards", JSON.stringify(goldenCards));
  }, [goldenCards]);

  const drawRandomCard = () => {
    const random = Math.random();
    let selectedRarity;
    let cumulativeProbability = 0;

    for (const [rarity, details] of Object.entries(rarities)) {
      cumulativeProbability += details.prob;
      if (random <= cumulativeProbability) {
        selectedRarity = rarity;
        break;
      }
    }

    const filteredCards = goldenCards.filter((card) => {
      switch (selectedRarity) {
        case "UR":
          return card.type === "양주";
        case "SSR":
          return card.type === "비밀번호 공개";
        case "SR":
          return card.type === "열쇠 힌트";
        case "R":
          return ["보상", "벌칙", "도전"].includes(card.type);
        default:
          return true;
      }
    });

    if (filteredCards.length === 0) {
      return drawRandomCard();
    }

    const randomCardIndex = Math.floor(Math.random() * filteredCards.length);
    const selectedCard = filteredCards[randomCardIndex];

    setGoldenCards((prevCards) =>
      prevCards.filter((card) => card.id !== selectedCard.id)
    );

    return {
      ...selectedCard,
      rarity: selectedRarity,
      drawnAt: Date.now(),
      team: selectedTeam,
    };
  };

  const openCard = () => {
    if (goldenCards.length === 0) {
      alert("모든 카드를 소진했습니다. 관리자 페이지에서 카드를 초기화하세요.");
      return;
    }

    if (!selectedTeam) {
      alert("팀을 선택해주세요.");
      return;
    }

    setCoins((prev) => prev - 3);

    setIsOpening(true);
    setIsRevealed(false);

    setTimeout(() => {
      const drawnCard = drawRandomCard();
      setCurrentCard(drawnCard);

      setTimeout(() => {
        setIsRevealed(true);
        setIsOpening(false);

        setHistoryCards((prev) => [drawnCard, ...prev].slice(0, 10));
      }, 1500);
    }, 1000);
  };

  const handleCardEffect = (card) => {
    if (!card) return;
  };

  const resetCardData = () => {
    const initialCards = createGoldenCards();
    setGoldenCards(initialCards);
    setHistoryCards([]);
    setCoins(10);
    setCurrentCard(null);
    localStorage.removeItem("availableCards");
    localStorage.removeItem("cardHistory");
    localStorage.removeItem("gameCoins");
    alert("모든 데이터가 초기화되었습니다.");
  };

  const toggleAdminPage = () => {
    setIsAdminPage(prev => !prev);
  };

  const contextValue = {
    goldenCards,
    setGoldenCards,
    rarities,
    currentCard,
    setCurrentCard,
    isOpening,
    setIsOpening,
    isRevealed,
    setIsRevealed,
    selectedTeam,
    setSelectedTeam,
    isAdminPage,
    setIsAdminPage,
    coins,
    setCoins,
    historyCards,
    setHistoryCards,
    openCard,
    handleCardEffect,
    resetCardData,
    toggleAdminPage
  };

  return (
    <GameContext.Provider value={contextValue}>
      {children}
    </GameContext.Provider>
  );
}

function MainPage() {
  const { 
    goldenCards, 
    rarities, 
    currentCard, 
    setCurrentCard, 
    isOpening, 
    isRevealed, 
    openCard, 
    coins, 
    handleCardEffect, 
    selectedTeam, 
    setSelectedTeam,
    toggleAdminPage,
    historyCards
  } = useContext(GameContext);

  return (
    <>
      <Header toggleAdminPage={toggleAdminPage} />

      <CardInfoPanel
        rarities={rarities}
        availableCardsCount={goldenCards.length}
      />

      <CardSection
        currentCard={currentCard}
        setCurrentCard={setCurrentCard}
        isOpening={isOpening}
        isRevealed={isRevealed}
        openCard={openCard}
        coins={coins}
        rarities={rarities}
        handleCardEffect={handleCardEffect}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
      
      <Link to="/history" className="view-history-link">전체 카드 내역 보기</Link>

      <InfoBox />
    </>
  );
}

function FullHistoryPage() {
  const { historyCards } = useContext(GameContext);

  return (
    <div className="full-history-page">
      <Link to="/" className="back-to-main-link">메인으로 돌아가기</Link>
      <h2>전체 카드 내역</h2>
      <HistorySection historyCards={historyCards} />
    </div>
  );
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

function AppContent() {
  const { 
    isAdminPage, 
    toggleAdminPage, 
    goldenCards, 
    resetCardData 
  } = useContext(GameContext);

  return (
    <Router>
      <div className="app-container">
        {isAdminPage ? (
          <AdminPage
            resetCardData={resetCardData}
            toggleAdminPage={toggleAdminPage}
            availableCards={goldenCards}
          />
        ) : (
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/history" element={<FullHistoryPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;