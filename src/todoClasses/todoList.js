
import TodoProject from "./todoProject.js";

class TodoList {
	constructor() {
		this.projects = [];
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
}

export default TodoList;