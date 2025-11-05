import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";
import Deck from "./Deck.jsx";
import Status from "./Status.jsx";
import Row from "../common/Row.jsx";
import { useHandleDeck } from "../../features/game/useHandleDeck.js";
import { useCallback, useEffect } from "react";
import { INITIAL_LEVEL, LEVEL_OPTIONS } from "../../const/game.js";
import { useTimer } from "../../features/game/useTimer.js";
import { useHandleCardGame } from "../../features/game/useHandleCardGame.js";

const Game = () => {
  const { deckInfo, generateDeck } = useHandleDeck();
  const {
    completeCards,
    guideMessage,
    history,
    handleFlipCard,
    isComplete,
    isFlipped,
    resetCards,
  } = useHandleCardGame(deckInfo);
  const { formattedTime, isRunning, startTimer, stopTimer, resetTimer } = useTimer(45, deckInfo.status);

  const { status, level, data } = deckInfo;
  const currentLevel = level ?? INITIAL_LEVEL;
  const cardSize = level === 1 ? 80 : 60;
  const successPairCount = completeCards.size / 2 ?? 0;
  const totalPairCount = data ? data.length / 2 : 0;

  const handleResetGame = () => {
    resetTimer();
    resetCards();
    generateDeck(currentLevel);
  };

  const handleChange = useCallback((e) => {
    resetTimer();
    resetCards();
    const next = Number(e.target.value);
    generateDeck(next);
  }, [generateDeck, resetCards, resetTimer]);

  const handleFlipWithStart = useCallback((id) => {
    console.log(isRunning, status);
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
    if (totalPairCount > 0 && successPairCount === totalPairCount) {
      stopTimer();
    }
  }, [successPairCount, totalPairCount, stopTimer]);

  return (
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
  );
};

export default Game;
