import { qs } from "../utils/common.js";

export const membersData = JSON.parse(localStorage.getItem("membersData"));
const managementListTable = qs(".management-list-table");
const headerCheckBox = qs(".management-list-table-header-checkbox");

const GENDER = {
  male: '남자',
  female: '여자',
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
