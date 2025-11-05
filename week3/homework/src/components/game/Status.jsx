import Column from "../common/Column.jsx";
import theme from "../../styles/theme.js";
import styled from "@emotion/styled";
import Row from "../common/Row.jsx";
import List from "../common/List.jsx";
import Center from "../common/Center.jsx";

const Status = ({ children }) => {
  return (
    <Column
      height={100}
      gap={12}
      backgroundColor={theme.colors.primary.primary400}
      borderRadius={12}
    >
      {children}
    </Column>
  );
};

Status.Selector = ({ level, options, handleChange }) => {
  return (
    <label htmlFor={`level-select`}>
      <StatusSelect id={`level-select`} onChange={handleChange} value={level}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StatusSelect>
    </label>
  );
};

Status.Info = ({ time, successPairCount, totalPairCount }) => {
  const restPairCount = totalPairCount - successPairCount;

  return (
    <Row>
      <Row.Item flex={1} backgroundColor={theme.colors.primary.primary200} borderRadius={10} padding={5}>
        <InfoTitle>남은 시간</InfoTitle>
        <InfoValue>{time}0</InfoValue>
      </Row.Item>
      <Row.Item flex={1} backgroundColor={theme.colors.primary.primary200} borderRadius={10} padding={5}>
        <InfoTitle>성공한 짝</InfoTitle>
        <InfoValue>{`${successPairCount}/${totalPairCount}`}</InfoValue>
      </Row.Item>
      <Row.Item flex={1} backgroundColor={theme.colors.primary.primary200} borderRadius={10} padding={5}>
        <InfoTitle>남은 짝</InfoTitle>
        <InfoValue>{restPairCount}</InfoValue>
      </Row.Item>
    </Row>
  );
};

Status.Guide = ({ message }) => {
  return (
    <Column padding={0}>
      <Column.Item font={theme.fonts.body3} borderRadius={10}>
        안내 메시지
      </Column.Item>
      <Column.Item
        font={theme.fonts.body3}
        backgroundColor={theme.colors.primary.primary200}
        borderRadius={10}
        padding={15}
      >
        {message}
      </Column.Item>
    </Column>
  );
};

{/* 히스토리 부분 구조 개선 필요할듯 */
}
Status.History = ({ histories }) => {
  return (
    <Column height={100} padding={0}>
      <Column.Item font={theme.fonts.body3}>
        최근 히스토리
      </Column.Item>
      <List
        height={100}
        padding={{ vertical: 0, horizontal: 0 }}
        gap={10}
      >
        {histories.length === 0 && <Center>아직 뒤집은 카드가 없어요</Center>}
        {histories && histories.map((item) => (
          <List.Item
            key={item.time}
            display={'flex'}
            justifyContent={'space-between'}
            backgroundColor={theme.colors.primary.primary200}
            padding={{ vertical: 10, horizontal: 10 }}
            borderRadius={10}
          >
            <HistoryLogSpan
              color={item.status === '성공' ? 'green' : 'red'}>{`${item.valueA}, ${item.valueB}`}</HistoryLogSpan>
            <HistoryLogSpan>{item.status}</HistoryLogSpan>
          </List.Item>
        ))}
      </List>
    </Column>
  );
};

export default Status;

const StatusSelect = styled.select`
  width: 100%;
  border: none;
  padding: 5px;
  border-radius: 5px;
  font: ${({ theme }) => theme.fonts.body2};
`;

const InfoTitle = styled.h6`
  font: ${({ theme }) => theme.fonts.body4};
  text-align: center;
`;

const InfoValue = styled.p`
  font: ${({ theme }) => theme.fonts.sub1};
  text-align: center;
`;

const HistoryLogSpan = styled.span`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ color, theme }) => color || theme.colors.black};
`;
