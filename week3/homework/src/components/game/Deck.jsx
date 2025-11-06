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
  const flipped = isFlipped(id) || isComplete(id);
  return (
    <Card
      type="button"
      key={id}
      title={id}
      onClick={() => handleFlipCard(id)}
      cardSize={cardSize}
    >
      <CardInner flipped={flipped}>
        <CardFaceFront>{'?'}</CardFaceFront>
        <CardFaceBack>{value}</CardFaceBack>
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
  transform: rotateY(180deg); /* 뒤집혔을 때 정면으로 */
`;
