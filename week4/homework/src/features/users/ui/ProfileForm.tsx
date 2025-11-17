import { Form, Row, Text } from '@shared/ui';
import React from 'react';

const ProfileForm = ({}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row justify='between'>
        <Text font='caption'>아이디</Text>
        <Text.Strong font='subheading'>아이디</Text.Strong>
      </Row>
      <Form.Field label='이름' id='profile-name' placeholder='이름' type='text' />
      <Form.Field
        label='이메일'
        id='profile-email'
        placeholder='이메일을 입력해 주세요'
        type='email'
      />
      <Form.Field label='나이' id='profile-age' placeholder='나이를 입력해 주세요.' type='number' />
      <Form.Button label='저장' type='submit' />
    </Form>
  );
};

export default ProfileForm;
