import styled from "@emotion/styled";

/**
 * @param {React.ReactNode} children
 * @param {number} height
 * @param {number} gap
 * @param {number} borderRadius
 * @param {string} backgroundColor
 * @param {{ number, number }} padding: { horizontal, vertical }
 */
const List = ({ children, height, gap = 8, borderRadius, backgroundColor, padding: { horizontal, vertical } }) => {
  return (
    <ListWrapper
      height={height}
      gap={gap}
      padding={{ vertical, horizontal }}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}>
      {children}
    </ListWrapper>
  );
};


/**
 * @param {React.ReactNode} children
 * @param {string} display
 * @param {string} justifyContent
 * @param {number} borderRadius
 * @param {string} backgroundColor
 * @param {{ number, number }} padding: { horizontal, vertical }
 */
List.Item = ({ children, display, justifyContent, borderRadius, backgroundColor,  padding: { horizontal, vertical } }) => {
  return (
    <ListItem
      display={display}
      borderRadius={borderRadius}
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      padding={{ horizontal, vertical }}
    >
      {children}
    </ListItem>
  );
};

export default List;

const ListWrapper = styled.ul`
  display: flex;
  flex: 1 1 0;
  overflow-y: scroll;
  flex-direction: column;
  height: ${({ height }) => height ? `${height}%` : 'auto'};
  gap: ${({ gap }) => gap}px;
  height: ${({ height }) => height ? `${height}%` : 'auto'}%;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => `${padding.vertical}px ${padding.horizontal}px`}
`;

const ListItem = styled.li`
  display: ${({ display }) => display ? display : ''};
  width: 100%;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding }) => `${padding.vertical}px ${padding.horizontal}px`};
  justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : ''};
`;
