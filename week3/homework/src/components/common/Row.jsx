import styled from "@emotion/styled";


/**
 * @param {React.ReactNode} children
 * @param {number} gap
 * @param {number} height
 */
const Row = ({ children, gap = 16, height }) => {
  return (
    <RowWrapper gap={gap} height={height}>
      {children}
    </RowWrapper>
  );
};

/**
 * @param {React.ReactNode} children
 * @param {number} flex
 * @param {number} padding
 * @param {number} borderRadius
 * @param backgroundColor
 * @param {number} height
 */
Row.Item = ({ children, flex, padding = 0, borderRadius = 0, backgroundColor }) => {
  return (
    <RowWrapper
      flex={flex}
      padding={padding}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
    >
      {children}
    </RowWrapper>
  );
};

export default Row;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${({ height }) => height ? `${height}%` : 'auto'};
  gap: ${({ gap }) => gap}px;
`;

const RowWrapper = styled.div`
  flex: ${({ flex }) => flex};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ theme, backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => padding}px;
`;
