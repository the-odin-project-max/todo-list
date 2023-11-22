class TodoItem {
	constructor(description, dueDate, priority, notes) {
		dueDate = dueDate || new Date().toISOString().slice(0, 10);
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
		let priorityString = this.priority === "0" ? "Low" : this.priority === "1" ? "Medium" : this.priority === "2" ? "High" : undefined;
		return priorityString;
	}

	toString() {
		return `${this.getPriorityString()} ${this.getFormattedDescription()} (${this.getFormattedDueDate()})`;
	}

	display() {
		console.log(
			this.toString()
		);
	}
}

export default TodoItem;