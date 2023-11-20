
class TodoItem {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }

  markAsIncomplete() {
    this.completed = false;
  }

  getFormattedDescription() {
	return this.completed ? `[x] ${this.description}` : `[ ] ${this.description}`;
  }

  getFormattedDueDate() {
	return this.dueDate;
  }

  display() {
	console.log(
	  `${this.getFormattedDescription()} (${this.getFormattedDueDate()})`
	);
  }
}

class TodoList {
  constructor() {
    this.items = [];
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

  displayItems() {
	this.items.forEach((item) => {
	  item.display();
	});
  }
}

// Usage example:
const myTodoList = new TodoList();

console.log("******** My Todo List *********");
myTodoList.displayItems();

myTodoList.addItem("Buy groceries", "2022-12-31");
myTodoList.addItem("Finish coding project", "2022-12-15");
myTodoList.addItem("Clean apartment", "2022-12-01");

console.log("******** My Todo List *********");
myTodoList.displayItems();

myTodoList.markItemAsCompleted(0);
myTodoList.removeItem(1);

console.log("******** My Todo List *********");
myTodoList.displayItems();