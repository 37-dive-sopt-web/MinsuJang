import { Button, Column, Input, Text } from '@shared/ui';

const UserSearchBar = () => {
  const handleSearch = () => {};

  return (
    <Column spacing='md'>
      <Text font='caption'>회원 ID</Text>
      <Input label='회원 ID' type='number' id='member-id' placeholder='숫자만 입력' />
      <Button label='확인' type='button' fullWidth={true} onClick={handleSearch} />
    </Column>
  );
};

export default UserSearchBar;
