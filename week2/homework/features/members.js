import { ALERT_MESSAGES } from "../const/common.js";
import { membersData, renderRows } from "./render.js";

const managementListTable = document.querySelector(".management-list-table");
const headerCheckBox = document.querySelector(".management-list-table-header-checkbox");
const buttons = document.querySelectorAll(".management-list-header-button");
const removeButton = buttons[0];
export const addButton = buttons[1];

export const getMembers = () => JSON.parse(localStorage.getItem("membersData"));

const getCheckedIds = () => {
  const checkboxes = managementListTable.querySelectorAll(".management-list-table-row-checkbox");
  return [...checkboxes]
    .filter(checkbox => checkbox.checked)
    .map(checkbox => Number(checkbox.dataset.id));
};

headerCheckBox.addEventListener('change', (e) => {
  const checked = e.target.checked;
  const rowCheckboxes = document.querySelectorAll(".management-list-table-row-checkbox");
  rowCheckboxes.forEach((checkbox) => {
    checkbox.checked = checked;
  });
});

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
