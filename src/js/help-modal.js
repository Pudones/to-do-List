(() => {
  const header = document.querySelector('.app-title');
  const main = document.querySelector('main');
  const helpModal = document.querySelector('.help-modal');
  const helpBtn = document.querySelector('.button-help');
  const helpCloseBtn = document.querySelector('.help-modal-close-btn');
  let isVisible;

  toggleModal = () => {
    if (!isVisible) {
      helpModal.classList.toggle('modal--visibility');
      main.classList.add('blur');
      header.classList.add('blur');
      isVisible = true;
      return;
    }

    helpModal.classList.toggle('modal--visibility');
    main.classList.remove('blur');
    header.classList.remove('blur');
    isVisible = false;
    return;
  }

  helpBtn.addEventListener('click', toggleModal);
  helpCloseBtn.addEventListener('click', toggleModal);

})();