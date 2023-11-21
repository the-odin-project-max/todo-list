class TodoItem {
	constructor(description, dueDate, priority = 0, notes) {
		this.description = description;
		this.dueDate = dueDate;
		this.completed = false;
		this.notes = notes;
		this.priority = priority;
	}

	markAsCompleted() {
		this.completed = true;
	}

	markAsIncomplete() {
		this.completed = false;
	}

	toggleCompleted() {
		this.completed = !this.completed;
	}

	getCompleted() {
		return this.completed;
	}

	getNotes() {
		return this.notes;
	}

	setNotes(notes) {
		this.notes = notes;
	}

	getFormattedDescription() {
		return this.completed ? `[x] ${this.description}` : `[ ] ${this.description}`;
	}

	getFormattedDueDate() {
		return this.dueDate;
	}

	getPriorityString() {
		let priorityString = this.priority === 0 ? "Low" : this.priority === 1 ? "Medium" : "High";
		return priorityString;
	}

	display() {
		console.log(
			`${this.getPriorityString()} ${this.getFormattedDescription()} (${this.getFormattedDueDate()})`
		);
	}
}

export default TodoItem;