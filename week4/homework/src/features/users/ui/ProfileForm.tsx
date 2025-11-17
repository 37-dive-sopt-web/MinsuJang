import { Form, Row, Text } from '@shared/ui';
import React from 'react';
import { useGetUserInfo } from '@features/users/model/useGetUserInfo.ts';

const ProfileForm = () => {
  const { data } = useGetUserInfo('1');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row justify='between'>
        <Text font='caption'>아이디</Text>
        <Text.Strong font='subheading'>{data?.id}</Text.Strong>
      </Row>
      <Form.Field
        label='이름'
        id='profile-name'
        placeholder='이름'
        type='text'
        value={data?.name}
      />
      <Form.Field
        label='이메일'
        id='profile-email'
        placeholder='이메일을 입력해 주세요'
        type='email'
        value={data?.email}
      />
      <Form.Field
        label='나이'
        id='profile-age'
        placeholder='나이를 입력해 주세요.'
        type='number'
        value={data?.age}
      />
      <Form.Button label='저장' type='submit' />
      {!data && <Text font={'heading'}>회원 정보가 존재하지 않습니다.</Text>}
    </Form>
  );
};

export default ProfileForm;
