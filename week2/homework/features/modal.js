import { addButton, getMembers, membersData, nextMemberId, renderRows } from "./members.js";
import { clampAge, clampGroup, qs } from "../utils/common.js";
import { ALERT_MESSAGES } from "../const/common.js";
import {
  validateMember,
  validateNumberFields,
  validateRequiredFields,
} from "../utils/validate.js";

const memberModal = document.getElementById('member-modal');
const closeButton = qs('.modal-close');
const form = qs('.modal-form');
const submitButton = qs('.modal-submit-button');

const openModal = () => {
  if (memberModal.open) {
    alert(ALERT_MESSAGES.MODAL.ALREADY_OPEN);
    return;
  }

  memberModal.showModal();
};

const closeModal = () => {
  if (!memberModal.open) {
    alert(ALERT_MESSAGES.MODAL.ALREADY_CLOSED);
    return;
  }

  memberModal.close();
};

const isClickedOutside = (e, modal) => {
  const rect = modal.getBoundingClientRect();
  const isClickedHorizontalOutside = e.clientX < rect.left || e.clientX > rect.right;
  const isClickedVerticalOutside = e.clientY < rect.top || e.clientY > rect.bottom;

  return isClickedVerticalOutside || isClickedHorizontalOutside;
};

const readFormValues = () => {
  const name = qs('#user-add-name').value.trim();
  const englishName = qs('#user-add-name-eng').value.trim();
  const github = qs('#user-add-github-id').value.trim();
  const role = qs('#user-add-role').value;
  const gender = qs('#user-add-gender').value;
  const codeReviewGroup = clampGroup(qs('#user-add-group').value);
  const age = clampAge(qs('#user-add-age').value);

  return {
    name,
    englishName,
    github,
    role,
    gender,
    codeReviewGroup,
    age,
  };
};

const createMember = () => {
  const formValues = readFormValues();

  if (!validateRequiredFields(formValues)) {
    return null;
  }

  if (!validateNumberFields(formValues)) {
    return null;
  }

  return {
    id: nextMemberId(),
    name: formValues.name,
    englishName: formValues.englishName,
    github: formValues.github,
    role: formValues.role,
    gender: formValues.gender,
    codeReviewGroup: formValues.codeReviewGroup,
    age: formValues.age,
  };
};

const setMembers = (members) => {
  localStorage.setItem("membersData", JSON.stringify(members));
  if (Array.isArray(membersData)) {
    membersData.length = 0;
    membersData.push(...members);
  }
};

const updateMembers = (currentMembers, newMember) => {
  if (!newMember) {
    return currentMembers;
  }

  const updatedMembers = [...currentMembers, newMember];
  setMembers(updatedMembers);

  return updatedMembers;
};

const addMember = (e) => {
  e?.preventDefault();

  const newMember = createMember();
  const currentMembers = getMembers();

  const isValid = validateMember(newMember, currentMembers);

  if (!isValid) {
    return;
  }

  const updatedMembers = updateMembers(currentMembers, newMember);

  renderRows(updatedMembers);
  form.reset();
  closeModal();
};


addButton.addEventListener("click", openModal);

closeButton.addEventListener("click", (e) => {
    if (!e.target === closeButton) {
      return;
    }
    closeModal();
  },
);

memberModal.addEventListener('click', (e) => {
  const isOutside = isClickedOutside(e, memberModal);

  if (!isOutside) {
    return;
  }

  closeModal();
}, { capture: true });

form.addEventListener("submit", addMember);
submitButton.addEventListener("click", addMember);


/*  로직 변경으로 인한 주석 처리
const normalizeMember = (newMember) => {
  return {
    id: nextMemberId(),
    name: newMember.name,
    englishName: newMember.englishName,
    github: newMember.github,
    role: newMember.role,
    gender: newMember.gender,
    codeReviewGroup: Number(newMember.codeReviewGroup),
    age: Number(newMember.age),
  };
};*/
