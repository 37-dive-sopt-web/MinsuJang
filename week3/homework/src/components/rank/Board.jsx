import Table from "../common/Table.jsx";
import styled from "@emotion/styled";

const Board = ({ children }) => {
  return (
    <div style={{ padding: '0 10px' }}>
      <Table height={100} gap={5} padding={{ vertical: 0, horizontal: 0 }}>
        {children}
      </Table>
    </div>
  );
};

Board.Row = ({ children }) => {
  return (
    <BoardRow>
      {children}
    </BoardRow>
  );
};

Board.HeadCell = ({ children, width }) => {
  return (
    <HeadSell width={width}>
      {children}
    </HeadSell>
  );
};

Board.Cell = ({ children }) => {
  return (
    <BoardSell>
      {children}
    </BoardSell>
  );
};

export default Board;

const HeadSell = styled.th`
  font: ${({ theme }) => theme.fonts.body1};
  width: ${({ width }) => width ? `${width}%` : 'auto'};
  padding: 6px 6px;
`;

const BoardRow = styled.tr`
  height: fit-content;
`;

const BoardSell = styled.td`
  font: ${({ theme }) => theme.fonts.body2};
  padding: 6px 6px;
`;
