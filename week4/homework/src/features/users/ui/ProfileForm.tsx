import { Form, Row, Text } from '@shared/ui';
import { useEffect } from 'react';
import { useGetUserInfo } from '@features/users/model/useGetUserInfo.ts';
import { useAuthStore } from '@shared/model/useAuthStore.ts';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type UserUpdateFormValues, userUpdateSchema } from '@features/users/model/userSchema.ts';
import { useUpdateUser } from '@features/users/model/useUpdateUser.ts';

const ProfileForm = () => {
  const { userId } = useAuthStore();
  const { data, isSuccess } = useGetUserInfo(String(userId));
  const { mutate, isSuccess: isUpdateSuccess } = useUpdateUser(String(userId));
  let defaultValues = {
    name: data?.name,
    email: data?.email,
    age: data?.age,
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(userUpdateSchema),
    mode: 'onTouched',
    defaultValues: defaultValues,
  });

  const isChanged = JSON.stringify(watch()) !== JSON.stringify(defaultValues);

  const handleUpdate = (data: UserUpdateFormValues) => mutate(data);

  useEffect(() => {
    if (!isSuccess || !data?.name) return;

    useAuthStore.setState((state) => {
      if (state.name === data.name) {
        return state;
      }
      return { ...state, name: data.name };
    });
  }, [isSuccess, data?.name]);

  useEffect(() => {
    if (isUpdateSuccess) {
      window.location.reload();
    }
  }, [isUpdateSuccess]);

  return (
    <Form onSubmit={handleSubmit(handleUpdate)}>
      <Row justify='between'>
        <Text font='caption'>아이디</Text>
        <Text.Strong font='subheading'>{data?.username}</Text.Strong>
      </Row>
      <Form.Field
        label='이름'
        id='profile-name'
        placeholder='이름'
        type='text'
        {...register('name')}
      />
      {errors.name && (
        <Text.Strong font='subheading' color='red'>
          {errors.name.message}
        </Text.Strong>
      )}
      <Form.Field
        label='이메일'
        id='profile-email'
        placeholder='이메일을 입력해 주세요'
        type='email'
        {...register('email')}
      />
      {errors.email && (
        <Text.Strong font='subheading' color='red'>
          {errors.email.message}
        </Text.Strong>
      )}
      <Form.Field
        label='나이'
        id='profile-age'
        placeholder='나이를 입력해 주세요.'
        type='number'
        {...register('age', {
          valueAsNumber: true,
        })}
      />
      {errors.age && (
        <Text.Strong font='subheading' color='red'>
          {errors.age.message}
        </Text.Strong>
      )}
      <Form.Button label='저장' type='submit' disabled={!isChanged || !isValid} />
      {!data && <Text font={'heading'}>회원 정보가 존재하지 않습니다.</Text>}
    </Form>
  );
};

export default ProfileForm;
