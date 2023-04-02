(() => {
  const tasksDiv = document.querySelector('.tasks');
  const inputTask = document.querySelector('.input-task');
  const inputSend = document.querySelector('.input-send');
  const tasks = document.getElementsByClassName('tasks-wrapper');
  const deleteBtn = document.querySelector('.button-delete');

  // EventListener that listen to a click on a target, if the target is a checkbox, it passes, otherwise, return. If it is a checkbox, on click, the checkbox goes to 'checked' state and a checked class is toggled.
  document.addEventListener('click', e => {
    if (e.target.type != 'checkbox') return;
    let parent = e.target.closest('.tasks-wrapper');
    parent.classList.toggle('checked');
  })

  // Creation of the elements that composes the 'Task' and class attribution.
  createTask = (task) => {
    const div = document.createElement('div');
    div.classList.add('tasks-wrapper', 'pad10');

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('tasks-check', 'mr10');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('tasks-radio', 'mg5');

    const p = document.createElement('p');
    p.classList.add('tasks-text','textCursive', 'fs26');
    p.innerText = task;

    // 'input[checkbox]' inside the 'checkbox div'
    checkboxDiv.appendChild(checkbox);
    // 'checkbox div' inside the 'main div'
    div.appendChild(checkboxDiv);
    // 'p' inside the 'main div'
    div.appendChild(p);
    // 'main div' inside the 'tasks parent div'
    tasksDiv.appendChild(div);

    // Calling of the saveTasks function to ensure the tasks are saved on localStorage.
    saveTasks();
  }

  clearInput = () => {
    inputTask.value = '';
  }

  // Submit task on click
  inputSend.addEventListener('click', () => {
    if (!inputTask.value) return;

    const taskText = inputTask.value;

    createTask(taskText);
    clearInput();
  });

  // Submit task on 'Enter' key.
  document.addEventListener('keydown', e => {
    if (!inputTask.value) return;

    let keyPress = e.key;
    const taskText = inputTask.value;

    if (keyPress === "Enter") {
      createTask(taskText);
      clearInput();
    }

    return;
  })

  // Tasks is a 'getElementsByClassName', so, it returns a HTMLCollection that can't be iteracted with a 'forEach' directly like a NodeList, so we use 'Array.from' to transform it in a array.
  deleteBtn.addEventListener('click', () => {
    Array.from(tasks).forEach(ele => {
      if (ele.classList.contains('checked')) ele.remove();
      saveTasks();
    });
  })

  // Saving the task on localStorage, so when the user closes the site and open again, his tasks are saved.
  saveTasks = () => {
    const getTasks = document.getElementsByClassName('tasks-wrapper');
    const taskList = [];

    Array.from(getTasks).forEach(ele => {
      taskList.push(ele.children[1].innerText);
    })

    // Only strings on localStorage, that's why the JSON Conversion
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
  }

  // IIFE that gets the tasks saved on localStorage if exist.
  (() => {
    const tasks = localStorage.getItem('tasks')
    const taskList = JSON.parse(tasks);
    for (let task of taskList) {
      createTask(task);
    }
  })();

})();