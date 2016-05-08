'use strict';

(function() {

  var massive = document.querySelectorAll('.portfolio-link');
  var cross = null;
  var button = null;
  var modalWithId = null;
  var wasOpen = false;

  var scrollHeight = 0;

  window.addEventListener('hashchange', onHashChange());
  window.onhashchange = function() {
    onHashChange();
  };

  for (var i = 0; i < massive.length; i++) {
    massive[i].addEventListener('click', click, false);
  }

  function onHashChange() {
    if (location.hash !== '') {
      modalWithId = document.getElementById(location.hash.substr(1));
      //modalWithId = document.querySelector('[href*="'+ location.hash +'"]');
      if (modalWithId !== null) {
        openModal();
      }
    }
    if (location.hash === '' && wasOpen === true) {
      closeModal();
    }
  }

  function click() {
    event.preventDefault();
    /**
     * поиск что модала в доме по клику
     */
    var linkToModal = event.currentTarget;

    modalWithId = document.querySelector(linkToModal.getAttribute('href'));

    location.hash = linkToModal.getAttribute('href');
  }

  function closeClick() {
    location.hash = '';
  }

  function openModal() {
    scrollHeight = window.scrollY;
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = '0';

    modalWithId.style.display = 'block';
    modalWithId.setAttribute('aria-hidden', 'false');

    cross = modalWithId.getElementsByClassName('close-modal');
    button = modalWithId.querySelector('button[type="button"]');

    button.addEventListener('click', closeClick);
    cross[0].addEventListener('click', closeClick);
    window.addEventListener('keydown', closeClick);

    setTimeout(function() {
      modalWithId.classList.add('in');
    }, 50);

    wasOpen = true;

    //var div = document.createElement('div');
    //div.classList.add('modal-backdrop', 'fade', 'in');
    //modalWithId.insertBefore(div, modalWithId.childNodes[0]);
  }

  function closeModal() {

    modalWithId.classList.remove('in');

    setTimeout(function() {
      modalWithId.removeAttribute('style');
      modalWithId.setAttribute('aria-hidden', 'true');
    }, 250);

    window.removeEventListener('keydown', closeClick);
    button.removeEventListener('click', closeClick);
    cross[0].removeEventListener('click', closeClick);

    document.body.removeAttribute('style');
    document.body.classList.remove('modal-open');

    window.scrollBy(0, scrollHeight);

    wasOpen = false;

    //modalWithId.removeChild(modalWithId.childNodes[0]);
  }

})();
