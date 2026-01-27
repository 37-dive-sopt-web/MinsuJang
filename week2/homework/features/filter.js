import { clampAge, clampGroup, qs } from "../utils/common.js";
import { EMPTY_VALUE, GENDER, INITIAL_VALUE, ROLE } from "../const/common.js";
import { getMembers } from "./members.js";
import { renderRows } from "./render.js";

const DEFAULT_FILTERS = {
  name: INITIAL_VALUE,
  engName: INITIAL_VALUE,
  githubId: INITIAL_VALUE,
  role: ROLE.ALL,
  gender: GENDER.ALL,
  group: INITIAL_VALUE,
  age: INITIAL_VALUE,
};

let filterOptions = { ...DEFAULT_FILTERS };

const optionDom = {
  name: qs('#user-name'),
  engName: qs('#user-name-eng'),
  githubId: qs('#user-github-id'),
  role: qs('#user-role'),
  gender: qs('#user-gender'),
  group: qs('#user-group'),
  age: qs('#user-age'),
};

const form = qs('.filter-form');

const readFilters = () => {
  return {
    name: optionDom.name.value.trim(),
    engName: optionDom.engName.value.trim(),
    githubId: optionDom.githubId.value.trim(),
    role: optionDom.role.value || ROLE.ALL,
    gender: optionDom.gender.value || GENDER.ALL,
    group: clampGroup(optionDom.group.value),
    age: clampAge(optionDom.age.value),
  };
};

const setFilter = (patchedOptions = {}) => {
  filterOptions = {
    ...filterOptions,
    ...patchedOptions,
  };
  return filterOptions;
};

const filterMembers = () => {
  const members = getMembers();
  return members.filter((member) => (
    (filterOptions.name === EMPTY_VALUE || member.name.includes(filterOptions.name)) &&
    (filterOptions.engName === EMPTY_VALUE || member.englishName.includes(filterOptions.engName)) &&
    (filterOptions.githubId === EMPTY_VALUE || member.github.includes(filterOptions.githubId)) &&
    (filterOptions.role === ROLE.ALL || member.role === filterOptions.role) &&
    (filterOptions.gender === GENDER.ALL || member.gender === filterOptions.gender) &&
    (filterOptions.group === EMPTY_VALUE || member.codeReviewGroup === filterOptions.group) &&
    (filterOptions.age === EMPTY_VALUE || member.age === filterOptions.age)
  ));
};

// 필터 폼 제출
form.addEventListener('submit', (e) => {
  e.preventDefault();

  filterOptions = readFilters();
  setFilter(filterOptions);

  const filteredMembers = filterMembers();
  renderRows(filteredMembers);
});

// 초기화
form.addEventListener('reset', () => {
  const members = getMembers();
  setFilter(DEFAULT_FILTERS);
  renderRows(members);
});
