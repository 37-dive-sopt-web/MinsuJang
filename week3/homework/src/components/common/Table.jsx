import styled from "@emotion/styled";

const Table = ({ children, height, gap = 8, borderRadius, backgroundColor }) => {
  return (
    <TableWrapper
      height={height}
      gap={gap}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      {children}
    </TableWrapper>
  );
};

Table.Head = ({ children }) => {
  return (
    <TableHeaderWrapper>
      {children}
    </TableHeaderWrapper>
  );
};

Table.Body = ({ children }) => {
  return (
    <TableBodyWrapper>
      {children}
    </TableBodyWrapper>
  );
};

export default Table;

const TableWrapper = styled.table`
  width: 100%;
  gap: ${({ gap }) => gap}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-collapse: collapse;
  text-align: left;
`;

const TableHeaderWrapper = styled.thead`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.primary.primary400};
`;

const TableBodyWrapper = styled.tbody`
  background-color: transparent;
`;
