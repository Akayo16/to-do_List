'use strict';

const addTaskText = document.getElementById('inpAddTask');
const btnAddTask = document.getElementById('btnAddTask');
const newTaskBlock = document.querySelector('.addNewTask');
const ufinishedTasksBlock = document.querySelector('.tasks');
const tasksList = document.querySelector('.tasksList');
const btnTaskDone = document.querySelector('.btnTaskDone');


let tasks;
let taskBlock;



!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
updateTaskList();



//events

btnAddTask.addEventListener('click', () => {
  
  tasks.push(new Task(addTaskText.value));
  updateLocalStorage();
  updateTaskList();
  addTaskText.value = "";

});


//functions

function Task(desc) { 
    this.description = desc;
    this.completed = false;
}


function updateLocalStorage() {

  tasks.forEach((item, index) => item.description === '' ? tasks.splice(index, 1) : item)

  localStorage.setItem('tasks', JSON.stringify(tasks));

}



function updateTaskList() {

  tasksList.innerHTML = '';

  if(tasks.length > 0) {

    filterTasks();

    tasks.forEach((item, index) => tasksList.innerHTML += createTemplate(item, index));

    taskBlock = document.querySelectorAll('.task');

  }

}

function filterTasks() {

  const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
  const doneTasks = tasks.length && tasks.filter(item => item.completed == true);
  
  tasks = [...activeTasks, ...doneTasks];

}


function createTemplate(task, index) {
  return `

  <li>
    <div onclick="taskDone(${index})" class="task ${task.completed ? 'done' : ''}">
      <p class="textTask">${task.description}</p>
      <button onclick="deleteTask(${index})" class="btnTaskDone">Delete</button>
    </div>
  </li>
  
  `
}



function taskDone(index) {

  tasks[index].completed = !tasks[index].completed;

  updateLocalStorage();
  updateTaskList();

}


function deleteTask(index) {

  tasks.splice(index, 1);
  
  updateLocalStorage();
  updateTaskList();

}