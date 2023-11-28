(()=>{"use strict";const t=class{constructor(t,e,o,i){e=e||(new Date).toISOString().slice(0,10),this.description=t,this.dueDate=e,this.completed=!1,this.notes=i,this.priority=o}markAsCompleted(){this.completed=!0}markAsIncomplete(){this.completed=!1}toggleCompleted(){this.completed=!this.completed}getCompleted(){return this.completed}getNotes(){return this.notes}setNotes(t){this.notes=t}getFormattedDescription(){return this.completed?`[x] ${this.description}`:`[ ] ${this.description}`}getFormattedDueDate(){return this.dueDate}getPriorityString(){return"0"===this.priority?"Low":"1"===this.priority?"Medium":"2"===this.priority?"High":void 0}toString(){return`${this.getPriorityString()} ${this.getFormattedDescription()} (${this.getFormattedDueDate()})`}display(){console.log(this.toString())}},e=class{constructor(t){this.items=[],this.name=t}getName(){return this.name}addItem(e,o,i=0,s=""){const n=new t(e,o,i,s);this.items.push(n)}removeItem(t){this.items.splice(t,1)}markItemAsCompleted(t){this.items[t].markAsCompleted()}markItemAsIncomplete(t){this.items[t].markAsIncomplete()}toggleItemCompleted(t){this.items[t].toggleCompleted()}display(){console.log(`******** ${this.name} *********`),0===this.items.length&&console.log("No items to display"),this.items.forEach((t=>{t.display()}))}},o=new class{constructor(){if(localStorage.getItem("todoList")){const o=JSON.parse(localStorage.getItem("todoList"));this.projects=o.projects.map((o=>{const i=new e(o.name);return i.items=o.items.map((e=>{const o=new t(e.description,e.dueDate,e.priority,e.notes);return o.completed=e.completed,o})),i}))}else this.projects=[]}addProject(t){const o=new e(t);this.projects.push(o)}removeProject(t){this.projects.splice(t,1)}getProject(t){return this.projects[t]}display(){console.log("******** My Todo List *********"),this.projects.forEach((t=>{t.display()}))}save(){localStorage.setItem("todoList",JSON.stringify(this))}},i=new class{constructor(t){this.todoList=t,this.formContainer=document.getElementById("form-container"),this.todoListContainer=document.getElementById("todo-list-container")}createDialogToAddNewItems(t){const e=document.createElement("dialog");e.id="todo-item-dialog",e.innerHTML='\n\t\t<h2>Add New Task</h2>\n\t\t<button class="close-dialog-btn" autofocus>X</button>\n\t\t<form id="todo-item-form">\n\t\t\t<input type="text" placeholder="Enter task description" id="task-description">\n\t\t\t<input type="date" id="due-date">\n\t\t\t<select id="priority">\n\t\t\t\t<option value="0">Low</option>\n\t\t\t\t<option value="1">Medium</option>\n\t\t\t\t<option value="2">High</option>\n\t\t\t\t<option value="undefined">None</option>\n\t\t\t</select>\n\t\t\t<textarea placeholder="Enter notes" id="notes"></textarea>\n\t\t\t<button type="submit">Add Task</button>\n\t\t</form>\n\t\t',this.formContainer.appendChild(e),e.querySelector('dialog#todo-item-dialog button[type="submit"]').addEventListener("click",(o=>{o.preventDefault();const i=document.getElementById("task-description").value,s=document.getElementById("due-date").value,n=document.getElementById("priority").value,r=document.getElementById("notes").value;this.todoList.getProject(t).addItem(i,s,n,r),this.renderProjectsList(),e.close(),this.formContainer.removeChild(e)})),e.querySelector("dialog#todo-item-dialog > button.close-dialog-btn").addEventListener("click",(t=>{e.close(),this.formContainer.removeChild(e)})),e.showModal()}createFormToAddNewProjects(){const t=document.createElement("form");t.id="todo-form";const e=document.createElement("input");e.type="text",e.placeholder="Enter project name",e.id="project-name";const o=document.createElement("button");o.type="submit",o.textContent="Create Project",o.addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("project-name").value;this.createTodoListProject(e)})),t.appendChild(e),t.appendChild(o),this.formContainer.appendChild(t)}renderProjectsList(){this.todoListContainer.innerHTML="",this.todoList.projects.forEach(((t,e)=>{const o=document.createElement("div");o.classList.add("project"),o.innerHTML=`\n\t\t\t<h2>${t.getName()}</h2>\n\t\t\t<button class="project-delete-btn" data-projectindex="${e}">Delete Project</button>\n\t\t\t<button class="project-add-task-btn" data-projectindex="${e}">Add Task</button>\n\t\t\t<ul id="${t.getName()}-list">\n\t\t\t${t.items.map(((t,o)=>`\n\t\t\t\t<li class="todo-item">\n\t\t\t\t${t.toString()}\n\t\t\t\t<button class="todo-item-complete-btn" data-itemindex="${o}" data-projectindex="${e}">${t.getCompleted()?"Uncomplete":"Complete"}</button>\n\t\t\t\t<button class="todo-item-delete-btn" data-itemindex="${o}" data-projectindex="${e}">Delete</button>\n\t\t\t\t</li>\n\t\t\t\t`)).join("")}\n\t\t\t</ul>\n\t`,this.todoListContainer.appendChild(o)})),this.todoList.save(),this.toggleButtons()}createTodoListProject(t){t=t||`New Project ${this.todoList.projects.length+1}`,this.todoList.addProject(t),this.renderProjectsList()}toggleButtons(){document.querySelectorAll(".project-delete-btn").forEach((t=>{t.addEventListener("click",(e=>{this.todoList.removeProject(t.dataset.pojectIndex),this.renderProjectsList()}))})),document.querySelectorAll(".project-add-task-btn").forEach((t=>{t.addEventListener("click",(e=>{this.createDialogToAddNewItems(t.dataset.projectindex),this.renderProjectsList()}))})),document.querySelectorAll(".todo-item-delete-btn").forEach((t=>{t.addEventListener("click",(e=>{this.todoList.getProject(t.dataset.projectindex).removeItem(t.dataset.itemindex),this.renderProjectsList()}))})),document.querySelectorAll(".todo-item-complete-btn").forEach((t=>{t.addEventListener("click",(e=>{this.todoList.getProject(t.dataset.projectindex).toggleItemCompleted(t.dataset.itemindex),this.renderProjectsList()}))}))}}(o);i.createFormToAddNewProjects(),i.renderProjectsList()})();