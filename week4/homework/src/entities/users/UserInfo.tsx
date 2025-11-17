import { Column, Row, Text } from '@shared/ui';

export const UserInfo = () => {
  return (
    <Column spacing='md'>
      <Row justify='between'>
        <Text font='caption'>이름</Text>
        <Text.Strong font='subheading'>{'장민수'}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>아이디</Text>
        <Text.Strong font='subheading'>{'alsnalstn'}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>이메일</Text>
        <Text.Strong font='subheading'>{'dlapdlfdlapdlf'}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>나이</Text>
        <Text.Strong font='subheading'>{'20'}</Text.Strong>
      </Row>
    </Column>
  );
};

export default UserInfo;
