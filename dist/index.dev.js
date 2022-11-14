"use strict";

var _todos = _interopRequireDefault(require("./todos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var form = document.querySelector("#todo-form");
var title = document.querySelector("#todo-title");
var category = document.querySelector("#todo-category");
var list = document.querySelector("#todo-list");
var filter = document.querySelector("#todo-filter");
var count = document.querySelector("#todo-count");

var render = function render(items, itemsCount) {
  count.textContent = "(".concat(itemsCount, ")");
  list.innerHTML = items.map(function (todo) {
    return "<li>".concat(todo.title, " [").concat(todo.category, "]</li>");
  }).join("");
};

var todos = new _todos["default"]();

try {
  render(todos.getAll(), todos.getCount());
} catch (error) {
  console.error(error);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  try {
    todos.add(title.value, category.value);
    render(todos.getAll(), todos.getCount());
  } catch (error) {
    console.error(error);
  }

  title.value = "";
});
filter.addEventListener("change", function () {
  try {
    if (filter.value === "работа") {
      render(todos.getWork(), todos.getWorkCount());
    } else if (filter.value === "личное") {
      render(todos.getPersonal(), todos.getPersonalCount());
    } else {
      render(todos.getAll(), todos.getCount());
    }
  } catch (error) {
    console.error(error);
  }
});