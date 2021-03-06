document.querySelector('.shows')
  .addEventListener('click', e => {
    let target = e.target;

    let targetClasses = target.classList;

    if (targetClasses.contains('tile__left')){
      target.nextSibling.nextElementSibling.classList.toggle('tile__right--open-l');
    } else {
      targetClasses.remove('tile__right--open-l');
      targetClasses.toggle(`${e.target.classList[0]}--open`);
    }
  });
