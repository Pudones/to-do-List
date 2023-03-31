(() => {
  const tasksDiv = document.querySelector('.tasks');
  const inputTask = document.querySelector('.input-task');
  const inputSend = document.querySelector('.input-send');
  const tasks = document.getElementsByClassName('tasks-wrapper');
  const deleteBtn = document.querySelector('.button-delete');

  createTask = () => {
    const div = document.createElement('div');
    div.classList.add('tasks-wrapper', 'mb15', 'pad10');

    const p = document.createElement('p');
    p.classList.add('text');

    p.innerText = inputTask.value;

    div.appendChild(p);

    tasksDiv.appendChild(div);
  }

  clearInput = () => {
    inputTask.value = '';
  }

  inputSend.addEventListener('click', () => {
    if (inputTask.value === '') return;
    createTask();
    clearInput();
  });

  document.addEventListener('keydown', e => {
    if (inputTask.value === '') return;

    let keyPress = e.key;

    if (keyPress === "Enter") {
      createTask();
      clearInput();
    }

    return;
  })

  // Tasks is a 'getElementsByClassName', so, it returns a HTMLCollection that can't be iteracted with a 'forEach' directly like a NodeList, so we use 'Array.from' to transform it in a array.
  deleteBtn.addEventListener('click', () => {
    alert('Delete mode activated!');
    Array.from(tasks).forEach(elemento => elemento.addEventListener('click', deleteTask));
  })

  // Used 'function' instead of arrow function so 'this' keyword is the element that is being clicked.
  function deleteTask() {
    this.remove();
  }

})();