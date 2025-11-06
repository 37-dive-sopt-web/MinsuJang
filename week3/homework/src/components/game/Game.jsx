import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";
import Deck from "./Deck.jsx";
import Status from "./Status.jsx";
import Row from "../common/Row.jsx";
import { useHandleDeck } from "../../features/game/useHandleDeck.js";
import { useCallback, useEffect } from "react";
import { GAME_GRID_SIZE, GAME_PLAY_TIME, INITIAL_LEVEL, LEVEL_OPTIONS } from "../../const/game.js";
import { useTimer } from "../../features/game/useTimer.js";
import { useHandleCardGame } from "../../features/game/useHandleCardGame.js";
import Modal from "../common/Modal.jsx";
import useModal from "../../features/comon/useModal.js";
import { useCountdown } from "../../features/game/useCountdown.js";
import theme from "../../styles/theme.js";

const Game = () => {
  const { deckInfo, generateDeck } = useHandleDeck();
  const { status, level, data } = deckInfo;
  const {
    completeCards,
    guideMessage,
    history,
    handleFlipCard,
    isComplete,
    isFlipped,
    resetCards,
  } = useHandleCardGame(deckInfo);
  const { formattedTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(GAME_PLAY_TIME[level], deckInfo.status);
  const { isOpen, openModal, closeModal } = useModal();
  const { countdown } = useCountdown(3, isOpen, () => {
    closeModal();
    handleResetGame();
  });
  const currentLevel = level ?? INITIAL_LEVEL;
  const cardSize = GAME_GRID_SIZE[currentLevel].size;
  const successPairCount = completeCards.size / 2 ?? 0;
  const totalPairCount = data ? data.length / 2 : 0;
  const isAllComplete = totalPairCount > 0 && successPairCount === totalPairCount;

  const handleResetGame = () => {
    resetTimer();
    resetCards();
    generateDeck(currentLevel);
  };

  const handleChange = useCallback((e) => {
    const next = Number(e.target.value);
    resetTimer(GAME_PLAY_TIME[next]);
    resetCards();
    generateDeck(next);
  }, [generateDeck, resetCards, resetTimer]);

  const handleFlipWithStart = useCallback((id) => {
    if (!isRunning && status === 'ready') {
      startTimer();
    }
    handleFlipCard(id);
  }, [isRunning, status, startTimer, handleFlipCard]);

  useEffect(() => {
    if (status === 'idle') {
      generateDeck(INITIAL_LEVEL);
    }
  }, [status, generateDeck]);

  useEffect(() => {
    if (isAllComplete) {
      stopTimer();
      openModal();
    }
  }, [isAllComplete, stopTimer, openModal]);

  useEffect(() => {
    if (Number(formattedTime) === 0 && !isAllComplete) {
      stopTimer();
      openModal();
    }
  }, [formattedTime, isAllComplete, stopTimer, openModal]);

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
                handleFlipCard={handleFlipWithStart}
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
            <Status.History histories={history} />
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
      <button onClick={openModal}>open</button>
    </>
  );
};

export default Game;
