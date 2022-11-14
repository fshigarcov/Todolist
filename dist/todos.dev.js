"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Todos =
/*#__PURE__*/
function () {
  // В данном случае конструктор не принимает никаких параметров,
  // а только задает массив объектов — пунктов для списка задач
  function Todos() {
    _classCallCheck(this, Todos);

    this.todos = [{
      title: "Изучить Solidity",
      category: "работа"
    }, {
      title: "Продлить Netflix",
      category: "личное"
    }];
  } // Задание: Напишите код для каждого из методов экземпляра


  _createClass(Todos, [{
    key: "getAll",
    value: function getAll() {
      // Возвращает список задач
      return this.todos;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      // Возвращает количество задач
      return this.todos.length;
    }
  }, {
    key: "add",
    value: function add(title, category) {
      // Добавляет новый объект в существующий массив объектов
      this.todos.push({
        title: title,
        category: category
      });
    }
  }, {
    key: "getWork",
    value: function getWork() {
      // Возвращает массив объектов, содержащий только рабочие задачи
      return this.todos.filter(function (el) {
        return el.category.includes("работа");
      });
    }
  }, {
    key: "getWorkCount",
    value: function getWorkCount() {
      // Возвращает количество рабочих задач, использует метод getWork()
      return this.getWork().length;
    }
  }, {
    key: "getPersonal",
    value: function getPersonal() {
      // Возвращает массив объектов, содержащий только личные задачи
      return this.todos.filter(function (el) {
        return el.category.includes("личное");
      });
    }
  }, {
    key: "getPersonalCount",
    value: function getPersonalCount() {
      // Возвращает количество личных задач, использует метод getPersonal()
      return this.getPersonal().length;
    }
  }]);

  return Todos;
}();

exports["default"] = Todos;