export type UserInfoResponse = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

export type LoginResponse = {
  userId: number;
  message: string;
};

export type SignUpResponse = UserInfoResponse;

export type UpdateUserInfoResponse = UserInfoResponse;
