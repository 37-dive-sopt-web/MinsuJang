import styled from "@emotion/styled";

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      {children}
    </HeaderContainer>
  );
};

/**
 * @param {string} title
 * @param {'h3' | 'h4' } size
 */
Header.Title = ({ title, size }) => {
  return (
    <HeaderTitle size={size}>{title}</HeaderTitle>
  );
};

Header.Tabs = ({ tabList, handleChangeTab, tabLabel, isCurrent }) => {
  return (
    <HeaderTabWrapper>
      {tabList.map((tab) => (
        <HeaderTab
          key={tab}
          onClick={() => handleChangeTab(tab)}
          isActive={isCurrent(tab)}>
          {tabLabel[tab]}
        </HeaderTab>
      ))}
    </HeaderTabWrapper>
  );
};

Header.RightButton = ({ label, onClick }) => {
  return (
    <HeaderRightButton onClick={onClick}>{label}</HeaderRightButton>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 400px;
  background-color: ${({ theme }) => theme.colors.primary.primary200};
  border-radius: 10px;
  padding: 20px;
`;

const HeaderTitle = styled.h3`
  font: ${({ theme, size }) => size ? theme.fonts[size] : theme.fonts.h3};
  color: ${({ theme }) => theme.colors.black};
`;

const HeaderTabWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const HeaderTab = styled.span`
  font: ${({ theme, isActive }) => isActive ? theme.fonts.body1 : theme.fonts.body2};
  color: ${({ theme, isActive }) => isActive ? theme.colors.black : theme.colors.grayScale.gray600};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary.primary400 : theme.colors.primary.primary50};
  border-radius: 15px;
  padding: 5px 15px;
  text-align: center;
  cursor: pointer;
`;

const HeaderRightButton = styled.button`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary.primary400};
  border-radius: 15px;
  padding: 5px 10px;
`;
