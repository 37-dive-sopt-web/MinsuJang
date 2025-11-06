import styled from "@emotion/styled";
import Grid from "../common/Grid.jsx";
import { GAME_GRID_SIZE } from "../../const/game.js";

const Deck = ({ status, level, contents }) => {
  const { rows, columns, size } = GAME_GRID_SIZE[level];

  return (
    <>
      {status === 'ready' && (
        <Grid gap={8} rows={rows} columns={columns} colSize={size} rowSize={size}>
          {contents()}
        </Grid>
      )}
    </>
  );
};

Deck.Card = ({ id, handleFlipCard, isFlipped, isComplete, value, cardSize }) => {
  const flipped = isFlipped(id);
  const matched = isComplete(id);

  return (
    <Card
      type="button"
      key={id}
      title={id}
      onClick={() => handleFlipCard(id)}
      cardSize={cardSize}
      disabled={matched}
    >
      <CardInner flipped={flipped || matched} matched={matched}>
        <CardFaceFront>{'?'}</CardFaceFront>
        <CardFaceBack>{value}</CardFaceBack>
        {matched && <Highlight />}
      </CardInner>
    </Card>
  );
};

export default Deck;

const Card = styled.button`
  all: unset;
  position: relative;
  border-radius: 8px;
  height: ${({ cardSize }) => `${cardSize}px`};
  width: ${({ cardSize }) => `${cardSize}px`};
  text-align: center;
  line-height: ${({ cardSize }) => `${cardSize}px`};
  perspective: 800px;
  outline: none;

  &:focus-visible {
    outline: 2px solid #6aa9ff;
    outline-offset: 2px;
  }
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transform-style: preserve-3d;
  transition: transform 400ms ease;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  cursor: pointer;

  &:active {
    transform: scale(0.94);
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.primary200} inset,
    0 2px 8px rgba(0, 0, 0, 0.4);
  }

  ${({ matched, theme }) =>
    matched && `
      animation: celebrate 600ms ease-out 1 forwards;
      box-shadow: 0 0 0 2px ${theme.colors.primary.primary400} inset,
                  0 0 18px 2px ${theme.colors.primary.primary400};
    `}
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 8px;
`;

const CardFaceFront = styled(CardFace)`
  background-color: ${({ theme }) => theme.colors.primary.primary400};
  color: white;
`;

const CardFaceBack = styled(CardFace)`
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  color: ${({ theme }) => theme.colors.primary.primary500};
  transform: rotateY(180deg);
`;

const Highlight = styled.i`
  position: absolute;
  inset: 0;
  pointer-events: none;

  &::after {
    filter: brightness(1.1);
  }
`;
