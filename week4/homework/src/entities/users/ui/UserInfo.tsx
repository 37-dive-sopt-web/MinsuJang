import { Column, Row, Text } from '@shared/ui';
import { useGetUserInfo } from '@features/users/model/useGetUserInfo.ts';

type UserInfoProps = {
  searchQuery: string;
};

export const UserInfo = ({ searchQuery }: UserInfoProps) => {
  const { data } = useGetUserInfo(searchQuery);

  return (
    <Column spacing='md'>
      <Row justify='between'>
        <Text font='caption'>이름</Text>
        <Text.Strong font='subheading'>{data?.name}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>아이디</Text>
        <Text.Strong font='subheading'>{data?.id}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>이메일</Text>
        <Text.Strong font='subheading'>{data?.email}</Text.Strong>
      </Row>
      <Row justify='between'>
        <Text font='caption'>나이</Text>
        <Text.Strong font='subheading'>{data?.email}</Text.Strong>
      </Row>
    </Column>
  );
};

export default UserInfo;
