(() => {
  const header = document.querySelector('.app-title');
  const main = document.querySelector('main');
  const helpModal = document.querySelector('.help-modal');
  const helpBtn = document.querySelector('.button-help');
  const helpCloseBtn = document.querySelector('.help-modal-close-btn');
  let isVisible;

  main.classList.add('transition-filter');
  header.classList.add('transition-filter');

  toggleModal = () => {
    if (!isVisible) {
      helpBtn.removeEventListener('click', toggleModal);
      helpBtn.classList.remove('pointer');

      main.classList.add('blur');
      header.classList.add('blur');

      setTimeout(() => {
        helpModal.classList.toggle('modal--visibility');
      }, 500);

      isVisible = true;
      return;
    }

    helpBtn.addEventListener('click', toggleModal);
    helpBtn.classList.add('pointer');
    helpModal.classList.toggle('modal--visibility');

    setTimeout(() => {
      main.classList.remove('blur');
      header.classList.remove('blur');
    }, 500);

    isVisible = false;
    return;
  }

  const btnArray = [helpBtn, helpCloseBtn];
  btnArray.forEach(el => el.addEventListener('click', toggleModal));

})();