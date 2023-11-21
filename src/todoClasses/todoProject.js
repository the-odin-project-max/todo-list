
import TodoItem from "./todoItem.js";

class TodoProject {
	constructor(name) {
		this.items = [];
		this.name = name;
	}

	getName() {
		return this.name;
	}

	addItem(description, dueDate) {
		const newItem = new TodoItem(description, dueDate);
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