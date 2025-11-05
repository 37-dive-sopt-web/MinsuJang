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
  return (
    <CardWrapper
      key={id}
      title={id}
      onClick={() => handleFlipCard(id)}
      cardSize={cardSize}
    >
      {isFlipped(id) || isComplete(id) ? value : '?'}
    </CardWrapper>
  );
};

export default Deck;

const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  height: ${({ cardSize }) => `${cardSize}px`};
  width: ${({ cardSize }) => `${cardSize}px`};
  text-align: center;
  line-height: ${({ cardSize }) => `${cardSize}px`};
  background-color: ${({ theme }) => theme.colors.primary.primary400};
`;
