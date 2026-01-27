import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";
import Deck from "./Deck.jsx";
import Status from "./Status.jsx";
import Row from "../common/Row.jsx";
import { useHandleDeck } from "../../features/game/useHandleDeck.js";
import { useCallback, useEffect } from "react";
import { GAME_GRID_SIZE, INITIAL_LEVEL, LEVEL_OPTIONS } from "../../const/game.js";
import { useHandleCardGame } from "../../features/game/useHandleCardGame.js";
import Modal from "../common/Modal.jsx";
import theme from "../../styles/theme.js";
import { useGameFlow } from "../../features/game/useGameFlow.js";

const Game = () => {
  const { deckInfo, generateDeck } = useHandleDeck();
  const { status, level, data } = deckInfo;
  const currentLevel = level ?? INITIAL_LEVEL;
  const {
    completeCards,
    guideMessage,
    histories,
    handleFlipCard,
    isComplete,
    isFlipped,
    isAllComplete,
    resetCards,
  } = useHandleCardGame(deckInfo);

  const onRestart = (nextLevel) => {
    resetCards();
    generateDeck(nextLevel);
  };
  const {
    formattedTime,
    isOpen,
    closeModal,
    countdown,
    handleFlip,
    handleChangeLevel,
    handleResetGame,
  } = useGameFlow(currentLevel, status, isAllComplete, handleFlipCard, onRestart);

  const cardSize = GAME_GRID_SIZE[currentLevel].size;
  const successPairCount = completeCards.size / 2 ?? 0;
  const totalPairCount = data ? data.length / 2 : 0;

  const handleChange = useCallback((e) => {
    const next = Number(e.target.value);
    handleChangeLevel(next);
  }, [handleChangeLevel]);

  useEffect(() => {
    if (status === 'idle') {
      generateDeck(INITIAL_LEVEL);
    }
  }, [status, generateDeck]);

  return (
    <>
      <Row height={100}>
        <Row.Item flex={7} height={100}>
          <Header>
            <Header.Title title={HEADER_TITLE.GAME} size="h4" />
            <Header.RightButton label="게임 리셋" onClick={handleResetGame} />
          </Header>
          <Deck status={status} level={level} contents={() => (
            data.map((card) => (
              <Deck.Card
                id={card.id}
                key={card.id}
                value={card.value}
                handleFlipCard={handleFlip}
                isFlipped={isFlipped}
                isComplete={isComplete}
                cardSize={cardSize}
              />
            ))
          )}
          />
        </Row.Item>
        <Row.Item flex={3} padding={20} height={100}>
          <Status>
            <Status.Selector
              level={currentLevel}
              handleChange={handleChange}
              options={LEVEL_OPTIONS}
            />
            <Status.Info
              time={formattedTime}
              successPairCount={successPairCount}
              totalPairCount={totalPairCount}
            />
            <Status.Guide message={guideMessage} />
            <Status.History histories={histories} />
          </Status>
        </Row.Item>
      </Row>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Title title={isAllComplete ? '축하해요!!!!' : '아쉽네요 ㅠㅠ'} />
        <Modal.Text
          text={isAllComplete ? `Level${level}을 ${45 - Number(formattedTime)}0초 만에 클리어했어요` : '모든 카드 짝 맞추기에 실패했어요 ㅜㅜ'} />
        <Modal.Text
          text={`${countdown}초 후 자동으로 새 게임을 시작해요`}
          font={theme.fonts.body2}
          color={isAllComplete ? 'green' : 'red'}
        />
      </Modal>
    </>
  );
};

export default Game;
