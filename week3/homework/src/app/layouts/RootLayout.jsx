import styled from "@emotion/styled";

const RootLayout = ({ children }) => {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
};

export default RootLayout;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary.primary50};
  padding: 20px 10%;
  gap: 30px;
`;
