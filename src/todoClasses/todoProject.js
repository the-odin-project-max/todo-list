
import TodoItem from "./todoItem.js";

class TodoProject {
	constructor(name) {
		this.items = [];
		this.name = name;
	}

	getName() {
		return this.name;
	}

	addItem(description, dueDate, priority = 0, notes = "") {
		const newItem = new TodoItem(description, dueDate, priority, notes);
		this.items.push(newItem);
	}

	removeItem(index) {
		this.items.splice(index, 1);
	}

	markItemAsCompleted(index) {
		this.items[index].markAsCompleted();
	}

	markItemAsIncomplete(index) {
		this.items[index].markAsIncomplete();
	}

	toggleItemCompleted(index) {
		this.items[index].toggleCompleted();
	}

	display() {
		console.log(`******** ${this.name} *********`);
		if(this.items.length === 0) {
			console.log("No items to display");
		}
		
		this.items.forEach((item) => {
			item.display();
		});
	}
}

export default TodoProject;