import { ALERT_MESSAGES, INITIAL_MEMBER_ID, MEMBER_ID_INCREMENT } from "../const/common.js";

export const membersData = JSON.parse(localStorage.getItem("membersData"));
const managementListTable = document.querySelector(".management-list-table");
const headerCheckBox = document.querySelector(".management-list-table-header-checkbox");
const buttons = document.querySelectorAll(".management-list-header-button");
const removeButton = buttons[0];
export const addButton = buttons[1];

const GENDER = {
  male: '남자',
  female: '여자',
};

export const getMembers = () => JSON.parse(localStorage.getItem("membersData"));

export const nextMemberId = () => {
  const members = getMembers();
  if (members.length === 0) {
    return INITIAL_MEMBER_ID;
  }
  return Math.max(...members.map(member => Number(member.id) || 0)) + MEMBER_ID_INCREMENT;
};

export const renderRows = (data) => {
  managementListTable.querySelectorAll(".management-list-table-row").forEach(tr => tr.remove());

  data.forEach((member) => {
    const tr = document.createElement("tr");
    tr.className = "management-list-table-row";
    tr.innerHTML = `
      <td>
        <label>
          <input 
            type="checkbox" 
            class="management-list-table-row-checkbox"
            data-id="${member.id}" />
        </label>
      </td>
      <td>${member.name}</td>
      <td>${member.englishName}</td>
      <td><a href="https://github.com/${member.github}" target="_blank">${member.github}</a></td>
      <td>${GENDER[member.gender]}</td>
      <td>${member.role}</td>
      <td>${member.codeReviewGroup}</td>
      <td>${member.age}</td>
    `;
    managementListTable.appendChild(tr);
  });

  headerCheckBox.checked = false;
};

renderRows(membersData);

headerCheckBox.addEventListener('change', (e) => {
  const checked = e.target.checked;
  const rowCheckboxes = document.querySelectorAll(".management-list-table-row-checkbox");
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
});

const getCheckedIds = () => {
  const checkboxes = managementListTable.querySelectorAll(".management-list-table-row-checkbox");
  return [...checkboxes]
    .filter(checkbox => checkbox.checked)
    .map(checkbox => Number(checkbox.dataset.id));
};

managementListTable.addEventListener('change', (e) => {
  const target = e.target;
  if (target.classList.contains("management-list-table-row-checkbox")) {
    const allCheckboxes = managementListTable.querySelectorAll(".management-list-table-row-checkbox");
    headerCheckBox.checked = [...allCheckboxes].every((checkbox) => checkbox.checked);
  }
});

removeButton.addEventListener('click', () => {
  const checkedMemberIdx = getCheckedIds();
  if (checkedMemberIdx.length === 0) {
    alert(ALERT_MESSAGES.CHECK_BOX.UNCHECKED);
    return;
  }
  const filteredData = membersData.filter(member => !checkedMemberIdx.includes(member.id));

  localStorage.setItem('membersData', JSON.stringify(filteredData));
  membersData.length = 0;
  membersData.push(...filteredData);

  alert(ALERT_MESSAGES.CHECK_BOX.SUCCESS_REMOVE);
  renderRows(membersData);
});
