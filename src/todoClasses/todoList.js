
import TodoProject from "./todoProject.js";
import TodoItem from "./todoItem.js";

class TodoList {
	constructor() {
		if (localStorage.getItem('todoList')) {
			const myTodoList = JSON.parse(localStorage.getItem('todoList'));
			this.projects = myTodoList.projects.map(project => {
				const newProject = new TodoProject(project.name);
				newProject.items = project.items.map(item => {
					const newItem = new TodoItem(item.description, item.dueDate, item.priority, item.notes);
					newItem.completed = item.completed;
					return newItem;
				});
				return newProject;
			});
		} else {
			this.projects = [];
		}
	}

	addProject(name) {
		const newProject = new TodoProject(name);
		this.projects.push(newProject);
	}

	removeProject(index) {
		this.projects.splice(index, 1);
	}

	getProject(index) {
		return this.projects[index];
	}

	display() {
		console.log("******** My Todo List *********");
		this.projects.forEach((project) => {
			project.display();
		});
	}

	save() {
		localStorage.setItem('todoList', JSON.stringify(this));
	}
}

export default TodoList;