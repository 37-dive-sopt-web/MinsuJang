import styled from "@emotion/styled";

const Center = ({ children }) => {
  return (
    <CenterWrapper>
      {children}
    </CenterWrapper>
  );
};

export default Center;

const CenterWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
