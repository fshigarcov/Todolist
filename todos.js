export default class Todos {
	// В данном случае конструктор не принимает никаких параметров,
	// а только задает массив объектов — пунктов для списка задач
 
	constructor() {
	  this.todos = [
		 {
			title: "Изучить Solidity",
			category: "работа"
		 },
		 {
			title: "Продлить Netflix",
			category: "личное"
		 }
	  ];
	}
 
	// Задание: Напишите код для каждого из методов экземпляра
 
	getAll() {
	  // Возвращает список задач
	  return this.todos;
	}
 
	getCount() {
	  // Возвращает количество задач
	  return this.todos.length;
	}
 
	add(title, category) {
	  // Добавляет новый объект в существующий массив объектов
	  this.todos.push({ title, category });
	}
 
	getWork() {
	  // Возвращает массив объектов, содержащий только рабочие задачи
	  return this.todos.filter((el) => el.category.includes("работа"));
	}
 
	getWorkCount() {
	  // Возвращает количество рабочих задач, использует метод getWork()
	  return this.getWork().length;
	}
 
	getPersonal() {
	  // Возвращает массив объектов, содержащий только личные задачи
	  return this.todos.filter((el) => el.category.includes("личное"));
	}
 
	getPersonalCount() {
	  // Возвращает количество личных задач, использует метод getPersonal()
	  return this.getPersonal().length;
	}
 }