import styled from "@emotion/styled";

/**
 * @param {React.ReactNode} children
 * @param {number} columns
 * @param {number} colSize
 * @param {number} rows
 * @param {number} rowSize
 * @param {number} gap
 * @param {number} padding
 */
const Grid = ({
    children,
    columns = 4,
    colSize = 40,
    rows = 4,
    rowSize = 40,
    gap = 8,
    padding = 16,
  }) => {
  return (
    <GridContainer
      columns={columns}
      colSize={colSize}
      rows={rows}
      rowSize={rowSize}
      gap={gap}
      padding={padding}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  gap: ${({ gap }) => `${gap}px`};
  grid-template-columns: ${({ columns, colSize }) => `repeat(${columns}, ${colSize}px)`};
  grid-template-rows: ${({ rows, rowSize }) => `repeat(${rows}, ${rowSize}px)`}
  padding: ${({ padding }) => `${padding}px`};
`;
