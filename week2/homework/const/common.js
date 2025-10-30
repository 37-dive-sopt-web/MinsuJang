export const INITIAL_VALUE = '';
export const EMPTY_VALUE = '';
export const START_GROUP_NUMBER = 1;
export const END_GROUP_NUMBER = 9;
export const MIN_AGE = 18;
export const MAX_AGE = 60;
export const INITIAL_MEMBER_ID = 1;
export const MEMBER_ID_INCREMENT = 1;

export const GENDER = {
  ALL: 'ALL',
  MALE: 'male',
  FEMALE: 'female',
};

export const ROLE = {
  ALL: 'ALL',
  YB: 'YB',
  OB: 'OB',
};

export const REQUIRED_FIELDS = [
  { key: 'name', label: '이름' },
  { key: 'englishName', label: '영어 이름' },
  { key: 'github', label: '깃허브 아이디' },
  { key: 'role', label: '역할' },
  { key: 'gender', label: '성별' },
];


export const ALERT_MESSAGES = {
  MODAL: {
    ALREADY_OPEN: "이미 모달이 열려 있습니다",
    ALREADY_CLOSED: "이미 모달이 닫혀 있습니다",
  },
  VALIDATION_ERROR: {
    INVALID_GROUP: `금잔디조는 ${START_GROUP_NUMBER} ~ ${END_GROUP_NUMBER} 사이의 숫자를 입력해 주세요!`,
    INVALID_AGE: `나이는 ${MIN_AGE} ~ ${MAX_AGE} 사이의 숫자를 입력해 주세요!`,
    DUPLICATE_GITHUB_ID: "이미 존재하는 깃허브 아이디입니다.",
    INVALID_GENDER: '성별 값이 올바르지 않습니다.',
    INVALID_ROLE: `역할은 ${ROLE.YB} 또는 ${ROLE.OB}만 가능합니다,`,
  },
  CHECK_BOX: {
    UNCHECKED: '삭제할 항목을 선택해 주세요!',
    SUCCESS_REMOVE: '성공적으로 제거되었습니다!',
  },
};
