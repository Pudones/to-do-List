(() => {
  const tasksDiv = document.querySelector('.tasks');
  const inputTask = document.querySelector('.input-task');
  const inputSend = document.querySelector('.input-send');
  const tasks = document.getElementsByClassName('tasks-wrapper');
  const deleteBtn = document.querySelector('.button-delete');

  document.addEventListener('click', e => {
    if (e.target.type != 'checkbox') return;
    let parent = e.target.closest('.tasks-wrapper');
    parent.classList.toggle('checked');
  })

  createTask = (task) => {
    const div = document.createElement('div');
    div.classList.add('tasks-wrapper', 'pad10');

    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add('tasks-check', 'mr10');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('tasks-radio', 'mg5');

    const p = document.createElement('p');
    p.classList.add('textCursive', 'fs26');
    p.innerText = task;

    // Inserindo a 'checkbox' dentro da 'checkboxDiv'.
    checkboxDiv.appendChild(checkbox);
    // Inserindo a 'checkboxDiv' dentro da div principal.
    div.appendChild(checkboxDiv);
    // Inserindo o 'p' dentro da div principal.
    div.appendChild(p);
    // Inserindo a 'div' principal dentro da div das tasks.
    tasksDiv.appendChild(div);
  }

  clearInput = () => {
    inputTask.value = '';
  }

  inputSend.addEventListener('click', () => {
    if (!inputTask.value) return;

    const taskText = inputTask.value;

    createTask(taskText);
    clearInput();
  });

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
      if(ele.classList.contains('checked')) ele.remove();
    });
  })

})();