import TodoList from "./todoClasses/todoList.js";
import DOMInteractions from "./DOMInterractions/DOMInterractions.js";

const myTodoList = new TodoList();
const domInteractions = new DOMInteractions(myTodoList);

domInteractions.createFormToAddNewProjects();

// myTodoList.display();

// const myFirstProject = myTodoList.getProject(0);
// const mySecondProject = myTodoList.getProject(1);

// myFirstProject.addItem("Buy groceries", "2022-12-31");
// myFirstProject.addItem("Finish coding project", "2022-12-15");
// myFirstProject.addItem("Clean apartment", "2022-12-01");

// mySecondProject.addItem("Buy Christmas presents", "2022-12-24");
// mySecondProject.addItem("Buy birthday present", "2022-12-10");
// mySecondProject.addItem("Buy anniversary present", "2022-12-01");

// myTodoList.display();

// myFirstProject.markItemAsCompleted(0);
// myFirstProject.removeItem(1);

// myTodoList.display();