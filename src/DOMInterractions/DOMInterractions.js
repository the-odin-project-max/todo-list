
export default class DOMInteractions {
	constructor(todoList) {
		this.todoList = todoList;

		// DOM Elements
		this.formContainer = document.getElementById('form-container');
		this.todoListContainer = document.getElementById('todo-list-container');
	}

	createDialogToAddNewItems(projectIndex) {
		const dialog = document.createElement('dialog');
		dialog.id = 'todo-item-dialog';

		dialog.innerHTML = `
		<h2>Add New Task</h2>
		<button class="close-dialog-btn" autofocus>X</button>
		<form id="todo-item-form">
			<input type="text" placeholder="Enter task description" id="task-description">
			<input type="date" id="due-date">
			<select id="priority">
				<option value="0">Low</option>
				<option value="1">Medium</option>
				<option value="2">High</option>
				<option value="undefined">None</option>
			</select>
			<textarea placeholder="Enter notes" id="notes"></textarea>
			<button type="submit">Add Task</button>
		</form>
		`;

		this.formContainer.appendChild(dialog);

		const submitButton = dialog.querySelector('dialog#todo-item-dialog button[type="submit"]');
		submitButton.addEventListener('click', (e) => {
			e.preventDefault();
			const taskDescription = document.getElementById('task-description').value;
			const dueDate = document.getElementById('due-date').value;
			const priority = document.getElementById('priority').value;
			const notes = document.getElementById('notes').value;

			this.todoList.getProject(projectIndex).addItem(taskDescription, dueDate, priority, notes);

			this.renderProjectsList();

			dialog.close();
			this.formContainer.removeChild(dialog);
		});

		const closeButton = dialog.querySelector('dialog#todo-item-dialog > button.close-dialog-btn');
		closeButton.addEventListener('click', (e) => {
			dialog.close();
			this.formContainer.removeChild(dialog);
		});


		dialog.showModal();
	}

	createFormToAddNewProjects() {
		const form = document.createElement('form');
		form.id = 'todo-form';

		const input = document.createElement('input');
		input.type = 'text';
		input.placeholder = 'Enter project name';
		input.id = 'project-name';

		const submitButton = document.createElement('button');
		submitButton.type = 'submit';
		submitButton.textContent = 'Create Project';

		submitButton.addEventListener('click', (e) => {
			e.preventDefault();
			const projectName = document.getElementById('project-name').value;
			this.createTodoListProject(projectName);
		});

		form.appendChild(input);
		form.appendChild(submitButton);

		this.formContainer.appendChild(form);
	}

	renderProjectsList() {
		this.todoListContainer.innerHTML = '';


		this.todoList.projects.forEach((project, projectIndex) => {
			const projectDiv = document.createElement('div');
			projectDiv.classList.add('project');

			projectDiv.innerHTML = `
			<h2>${project.getName()}</h2>
			<button class="project-delete-btn" data-projectindex="${projectIndex}">Delete Project</button>
			<button class="project-add-task-btn" data-projectindex="${projectIndex}">Add Task</button>
			<ul id="${project.getName()}-list">
			${project.items.map((item, itemIndex) => {
				return `
				<li class="todo-item">
				${item.toString()}
				<button class="todo-item-complete-btn" data-itemindex="${itemIndex}" data-projectindex="${projectIndex}">${item.getCompleted() ? "Uncomplete" : "Complete"}</button>
				<button class="todo-item-delete-btn" data-itemindex="${itemIndex}" data-projectindex="${projectIndex}">Delete</button>
				</li>
				`;
			}).join('')}
			</ul>
	`;
			this.todoListContainer.appendChild(projectDiv);
		});
		
		this.todoList.save();
		this.toggleButtons();
	}

	createTodoListProject(projectName) {
		// If projectName is an empty string, set it to 'New Project'
		projectName = projectName || `New Project ${this.todoList.projects.length + 1}`;

		this.todoList.addProject(projectName);

		this.renderProjectsList();
	}

	toggleButtons() {
		document.querySelectorAll('.project-delete-btn').forEach(item => {
			item.addEventListener('click', event => {
				this.todoList.removeProject(item.dataset.pojectIndex);
				this.renderProjectsList();
			});
		});

		document.querySelectorAll('.project-add-task-btn').forEach(item => {
			item.addEventListener('click', event => {
				// this.todoList.getProject(item.dataset["projectindex"]).addItem('New Task', '2022-12-31');
				this.createDialogToAddNewItems(item.dataset["projectindex"]);
				this.renderProjectsList();
			})
		});

		document.querySelectorAll('.todo-item-delete-btn').forEach(item => {
			item.addEventListener('click', event => {
				this.todoList.getProject(item.dataset["projectindex"]).removeItem(item.dataset["itemindex"]);
				this.renderProjectsList();
			})
		});

		document.querySelectorAll('.todo-item-complete-btn').forEach(item => {
			item.addEventListener('click', event => {
				this.todoList.getProject(item.dataset["projectindex"]).toggleItemCompleted(item.dataset["itemindex"]);
				this.renderProjectsList();
			})
		});
	}
}
