import { Button, Column, Input, Text } from '@shared/ui';
import React from 'react';

type UserSearchBarProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const UserSearchBar = ({ handleChange, value, onSearch }: UserSearchBarProps) => {
  const disabled = value.length === 0;
  return (
    <Column spacing='md'>
      <Text font='caption'>회원 ID</Text>
      <Input
        value={value}
        label='회원 ID'
        type='number'
        id='member-id'
        placeholder='숫자만 입력'
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <Button label='확인' type='button' fullWidth={true} onClick={onSearch} tone={disabled ? 'secondary' : 'primary'} disabled={disabled} />
    </Column>
  );
};

export default UserSearchBar;
