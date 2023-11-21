/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMInterractions/DOMInterractions.js":
/*!**************************************************!*\
  !*** ./src/DOMInterractions/DOMInterractions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOMInteractions)\n/* harmony export */ });\n\nclass DOMInteractions {\n\tconstructor(todoList) {\n\t\tthis.todoList = todoList;\n\n\t\t// DOM Elements\n\t\tthis.formContainer = document.getElementById('form-container');\n\t\tthis.todoListContainer = document.getElementById('todo-list-container');\n\t}\n\n\tcreateFormToAddNewProjects() {\n\t\tconst form = document.createElement('form');\n\t\tform.id = 'todo-form';\n\n\t\tconst input = document.createElement('input');\n\t\tinput.type = 'text';\n\t\tinput.placeholder = 'Enter project name';\n\t\tinput.id = 'project-name';\n\n\t\tconst submitButton = document.createElement('button');\n\t\tsubmitButton.type = 'submit';\n\t\tsubmitButton.textContent = 'Create Project';\n\n\t\tsubmitButton.addEventListener('click', (e) => {\n\t\t\te.preventDefault();\n\t\t\tconst projectName = document.getElementById('project-name').value;\n\t\t\tthis.createTodoListProject(projectName);\n\t\t});\n\n\t\tform.appendChild(input);\n\t\tform.appendChild(submitButton);\n\n\t\tthis.formContainer.appendChild(form);\n\t}\n\n\trenderProjectsList() {\n\t\tthis.todoListContainer.innerHTML = '';\n\n\n\t\tthis.todoList.projects.forEach((project, projectIndex) => {\n\t\t\tconst projectDiv = document.createElement('div');\n\t\t\tprojectDiv.classList.add('project');\n\n\t\t\tprojectDiv.innerHTML = `\n\t\t\t<h2>${project.getName()}</h2>\n\t\t\t<button class=\"project-delete-btn\" data-projectindex=\"${projectIndex}\">Delete Project</button>\n\t\t\t<button class=\"project-add-task-btn\" data-projectindex=\"${projectIndex}\">Add Task</button>\n\t\t\t<ul id=\"${project.getName()}-list\">\n\t\t\t${project.items.map((item, itemIndex) => {\n\t\t\t\treturn `\n\t\t\t\t<li class=\"todo-item\">\n\t\t\t\t${item.getFormattedDescription()}\n\t\t\t\t<button class=\"todo-item-delete-btn\" data-itemindex=\"${itemIndex}\" data-projectindex=\"${projectIndex}\">Delete</button>\n\t\t\t\t</li>\n\t\t\t\t`;\n\t\t\t}).join('')}\n\t\t\t</ul>\n\t`;\n\t\t\tthis.todoListContainer.appendChild(projectDiv);\n\t\t});\n\n\t\tthis.toggleButtons();\n\t}\n\n\tcreateTodoListProject(projectName) {\n\t\t// If projectName is an empty string, set it to 'New Project'\n\t\tprojectName = projectName || `New Project ${this.todoList.projects.length + 1}`;\n\n\t\tthis.todoList.addProject(projectName);\n\n\t\tthis.renderProjectsList();\n\t}\n\n\ttoggleButtons() {\n\t\tdocument.querySelectorAll('.project-delete-btn').forEach(item => {\n\t\t\titem.addEventListener('click', event => {\n\t\t\t\tthis.todoList.removeProject(item.dataset.pojectIndex);\n\t\t\t\tthis.renderProjectsList();\n\t\t\t});\n\t\t});\n\n\t\tdocument.querySelectorAll('.project-add-task-btn').forEach(item => {\n\t\t\titem.addEventListener('click', event => {\n\t\t\t\tthis.todoList.getProject(item.dataset[\"projectindex\"]).addItem('New Task', '2022-12-31');\n\t\t\t\tthis.renderProjectsList();\n\t\t\t})\n\t\t});\n\n\t\tdocument.querySelectorAll('.todo-item-delete-btn').forEach(item => {\n\t\t\titem.addEventListener('click', event => {\n\t\t\t\tthis.todoList.getProject(item.dataset[\"projectindex\"]).removeItem(item.dataset[\"itemindex\"]);\n\t\t\t\tthis.renderProjectsList();\n\t\t\t})\n\t\t});\n\t}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/DOMInterractions/DOMInterractions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoClasses_todoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoClasses/todoList.js */ \"./src/todoClasses/todoList.js\");\n/* harmony import */ var _DOMInterractions_DOMInterractions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMInterractions/DOMInterractions.js */ \"./src/DOMInterractions/DOMInterractions.js\");\n\n\n\nconst myTodoList = new _todoClasses_todoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst domInteractions = new _DOMInterractions_DOMInterractions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](myTodoList);\n\ndomInteractions.createFormToAddNewProjects();\n\n// myTodoList.display();\n\n// const myFirstProject = myTodoList.getProject(0);\n// const mySecondProject = myTodoList.getProject(1);\n\n// myFirstProject.addItem(\"Buy groceries\", \"2022-12-31\");\n// myFirstProject.addItem(\"Finish coding project\", \"2022-12-15\");\n// myFirstProject.addItem(\"Clean apartment\", \"2022-12-01\");\n\n// mySecondProject.addItem(\"Buy Christmas presents\", \"2022-12-24\");\n// mySecondProject.addItem(\"Buy birthday present\", \"2022-12-10\");\n// mySecondProject.addItem(\"Buy anniversary present\", \"2022-12-01\");\n\n// myTodoList.display();\n\n// myFirstProject.markItemAsCompleted(0);\n// myFirstProject.removeItem(1);\n\n// myTodoList.display();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todoClasses/todoItem.js":
/*!*************************************!*\
  !*** ./src/todoClasses/todoItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoItem {\n\tconstructor(description, dueDate, priority = 0, notes) {\n\t\tthis.description = description;\n\t\tthis.dueDate = dueDate;\n\t\tthis.completed = false;\n\t\tthis.notes = notes;\n\t\tthis.priority = priority;\n\t}\n\n\tmarkAsCompleted() {\n\t\tthis.completed = true;\n\t}\n\n\tmarkAsIncomplete() {\n\t\tthis.completed = false;\n\t}\n\n\tgetNotes() {\n\t\treturn this.notes;\n\t}\n\n\tsetNotes(notes) {\n\t\tthis.notes = notes;\n\t}\n\n\tgetFormattedDescription() {\n\t\treturn this.completed ? `[x] ${this.description}` : `[ ] ${this.description}`;\n\t}\n\n\tgetFormattedDueDate() {\n\t\treturn this.dueDate;\n\t}\n\n\tgetPriorityString() {\n\t\tlet priorityString = this.priority === 0 ? \"Low\" : this.priority === 1 ? \"Medium\" : \"High\";\n\t\treturn priorityString;\n\t}\n\n\tdisplay() {\n\t\tconsole.log(\n\t\t\t`${this.getPriorityString()} ${this.getFormattedDescription()} (${this.getFormattedDueDate()})`\n\t\t);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n//# sourceURL=webpack://todo-list/./src/todoClasses/todoItem.js?");

/***/ }),

/***/ "./src/todoClasses/todoList.js":
/*!*************************************!*\
  !*** ./src/todoClasses/todoList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoProject.js */ \"./src/todoClasses/todoProject.js\");\n\n\n\nclass TodoList {\n\tconstructor() {\n\t\tthis.projects = [];\n\t}\n\n\taddProject(name) {\n\t\tconst newProject = new _todoProject_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n\t\tthis.projects.push(newProject);\n\t}\n\n\tremoveProject(index) {\n\t\tthis.projects.splice(index, 1);\n\t}\n\n\tgetProject(index) {\n\t\treturn this.projects[index];\n\t}\n\n\tdisplay() {\n\t\tconsole.log(\"******** My Todo List *********\");\n\t\tthis.projects.forEach((project) => {\n\t\t\tproject.display();\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n//# sourceURL=webpack://todo-list/./src/todoClasses/todoList.js?");

/***/ }),

/***/ "./src/todoClasses/todoProject.js":
/*!****************************************!*\
  !*** ./src/todoClasses/todoProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem.js */ \"./src/todoClasses/todoItem.js\");\n\n\n\nclass TodoProject {\n\tconstructor(name) {\n\t\tthis.items = [];\n\t\tthis.name = name;\n\t}\n\n\tgetName() {\n\t\treturn this.name;\n\t}\n\n\taddItem(description, dueDate) {\n\t\tconst newItem = new _todoItem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, dueDate);\n\t\tthis.items.push(newItem);\n\t}\n\n\tremoveItem(index) {\n\t\tthis.items.splice(index, 1);\n\t}\n\n\tmarkItemAsCompleted(index) {\n\t\tthis.items[index].markAsCompleted();\n\t}\n\n\tmarkItemAsIncomplete(index) {\n\t\tthis.items[index].markAsIncomplete();\n\t}\n\n\tdisplay() {\n\t\tconsole.log(`******** ${this.name} *********`);\n\t\tif(this.items.length === 0) {\n\t\t\tconsole.log(\"No items to display\");\n\t\t}\n\t\t\n\t\tthis.items.forEach((item) => {\n\t\t\titem.display();\n\t\t});\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoProject);\n\n//# sourceURL=webpack://todo-list/./src/todoClasses/todoProject.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;