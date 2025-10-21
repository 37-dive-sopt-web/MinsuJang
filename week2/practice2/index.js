const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

/**
 * 로컬스토리지에서 데이터를 로드한다
 * 데이터가 존재하지 않으면 빈 배열을 할당한다
 */
let todos = [];
const savedTodos = localStorage.getItem('todos');
todos = savedTodos ? JSON.parse(savedTodos) : [];

todos.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;
  todoList.appendChild(li);
});

/**
 * 투두를 저장한다.
 */
const addTodo = () => {

  console.log(todoInput.value);
  if (todoInput.value === '') {
    return;
  }

  const li = document.createElement('li');
  li.textContent = todoInput.value;
  todoList.appendChild(li);

  todos.push(todoInput.value);
  localStorage.setItem('todos', JSON.stringify(todos));

  todoInput.value = '';
};

todoButton.addEventListener('click', addTodo);
