import {
  ALERT_MESSAGES,
  EMPTY_VALUE,
  GENDER,
  REQUIRED_FIELDS,
  ROLE,
} from "../const/common.js";

const isValidGender = (value) => {
  const validGender = [GENDER.MALE, GENDER.FEMALE];
  return validGender.includes(value);
};

const isValidRole = (value) => {
  const validRole = [ROLE.OB, ROLE.YB];
  return validRole.includes(value);
};

export const isDuplicateGithub = (newMember, currentMembers) => {
  return currentMembers.some((currentMember) => String(currentMember.github).toLowerCase() === newMember.github.toLowerCase());
};

export const validateRequiredFields = (values) => {
  for (const { key, label } of REQUIRED_FIELDS) {
    if (!values[key]) {
      alert(`${label}을(를) 입력해 주세요!`);
      return false;
    }
  }

  return true;
};

export const validateNumberFields = (values) => {
  if (values.codeReviewGroup === EMPTY_VALUE) {
    alert(ALERT_MESSAGES.VALIDATION_ERROR.INVALID_GROUP);
    return false;
  }

  if (values.age === EMPTY_VALUE) {
    alert(ALERT_MESSAGES.VALIDATION_ERROR.INVALID_AGE);
    return false;
  }

  return true;
};

export const validateMember = (newMember, currentMembers) => {
  if (!newMember) {
    return false;
  }

  if (isDuplicateGithub(newMember, currentMembers)) {
    alert(ALERT_MESSAGES.VALIDATION_ERROR.DUPLICATE_GITHUB_ID);
    return false;
  }

  if (!isValidGender(newMember.gender)) {
    alert(ALERT_MESSAGES.VALIDATION_ERROR.INVALID_GENDER);
    return false;
  }

  if (!isValidRole(newMember.role)) {
    alert(ALERT_MESSAGES.VALIDATION_ERROR.INVALID_ROLE);
    return false;
  }

  return true;
};
