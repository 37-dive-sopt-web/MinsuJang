import {
  EMPTY_VALUE,
  END_GROUP_NUMBER,
  MAX_AGE,
  MIN_AGE,
  START_GROUP_NUMBER,
} from "../const/common.js";

export const qs = (sel, root = document) => root.querySelector(sel);

export const toNumberOrEmpty = (value) => {
  const stringValue = String(value ?? EMPTY_VALUE).trim();

  if (!stringValue) {
    return EMPTY_VALUE;
  }

  const numberValue = Number(stringValue);

  if (!Number.isFinite(numberValue)) {
    return EMPTY_VALUE;
  }

  return numberValue;
};

export const clampGroup = (value) => {
  const parsedGroupNumber = toNumberOrEmpty(value);

  if (parsedGroupNumber === EMPTY_VALUE) {
    return EMPTY_VALUE;
  }

  if (parsedGroupNumber < START_GROUP_NUMBER || parsedGroupNumber > END_GROUP_NUMBER) {
    return EMPTY_VALUE;
  }

  return parsedGroupNumber;
};

export const clampAge = (value) => {
  const parsedAge = toNumberOrEmpty(value);

  if (parsedAge === EMPTY_VALUE) {
    return EMPTY_VALUE;
  }

  if (parsedAge < MIN_AGE || parsedAge > MAX_AGE) {
    return EMPTY_VALUE;
  }

  return parsedAge;
};
