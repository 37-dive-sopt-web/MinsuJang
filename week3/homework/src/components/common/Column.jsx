import styled from "@emotion/styled";

/**
 * @param {React.ReactNode} children
 * @param {number} gap
 * @param {string} backgroundColor
 * @param {number} borderRadius
 * @param {{ number, number }} padding: { horizontal, vertical }
 */
const Column = ({ children, gap = 8, backgroundColor, borderRadius = 12, padding = 10, height }) => {
  return (
    <ColumnWrapper
      height={height}
      gap={gap}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      padding={padding}
    >
      {children}
    </ColumnWrapper>
  );
};

export default Column;

Column.Item = ({ children, font, backgroundColor, padding, height, borderRadius }) => {
  return (
    <ColumnItemWrapper
      font={font}
      backgroundColor={backgroundColor}
      padding={padding}
      height={height}
      borderRadius={borderRadius}
    >
      {children}
    </ColumnItemWrapper>
  );
};

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ height }) => height ? `${height}%` : 'auto'};
  padding: ${({ padding }) => padding}px;
  gap: ${({ gap }) => gap}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;

const ColumnItemWrapper = styled.div`
  font: ${({ font }) => font};
  height: ${({ height }) => height ? `${height}%` : 'auto'};
  padding: ${({ padding }) => padding}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
