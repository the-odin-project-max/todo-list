import TodoList from "./todoClasses/todoList.js";
import DOMInteractions from "./DOMInterractions/DOMInterractions.js";


const myTodoList = new TodoList();
const domInteractions = new DOMInteractions(myTodoList);

domInteractions.createFormToAddNewProjects();
domInteractions.renderProjectsList();
