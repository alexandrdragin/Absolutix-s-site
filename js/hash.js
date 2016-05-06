'use strict';

(function() {

  var massive = document.querySelectorAll('.portfolio-link');
  var cross = null;
  var button = null;
  var modalWithId = null;

  for (var i = 0; i < massive.length; i++) {
    massive[i].addEventListener('click', click, false);
  }

  function click() {
    event.preventDefault();
    /**
     * поиск что модала в доме по клику
     */
    var currentModal = event.currentTarget;

    var hrefCurrentModal = currentModal.getAttribute('href');

    var forId = hrefCurrentModal.substr(1);

    modalWithId = document.getElementById(forId);

    /**
     * показ модала
     */
    document.body.classList.add('modal-open');
    document.body.style.paddingRight = '0';

    modalWithId.style.display = 'block';
    modalWithId.setAttribute('aria-hidden', 'false');
    modalWithId.classList.add('in');

    var div = document.createElement('div');
    div.classList.add('modal-backdrop', 'fade', 'in');
    modalWithId.insertBefore(div, modalWithId.childNodes[0]);

    cross = modalWithId.getElementsByClassName('close-modal');
    cross[0].addEventListener('click', closeClick);

    button = modalWithId.querySelector('button[type="button"]');
    button.addEventListener('click', closeClick);

    window.addEventListener('keydown', closeClick);
  }


  function closeClick() {
    document.body.removeAttribute('style');
    document.body.classList.remove('modal-open');

    modalWithId.classList.remove('in');
    modalWithId.removeAttribute('style');
    modalWithId.setAttribute('aria-hidden', 'true');

    window.removeEventListener('keydown', closeClick);

    button.removeEventListener('click', closeClick);
    cross[0].removeEventListener('click', closeClick);
    window.removeEventListener('click', closeClick);

    modalWithId.removeChild(modalWithId.childNodes[0]);
  }








  var Overlay = function() {

    this.massive = document.querySelectorAll('.portfolio-link');

    this._log = this._log.bind(this);
    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);
    this._cross = this._cross.bind(this);
    this._clButton = this._clButton.bind(this);

    this._onHashChange = this._onHashChange.bind(this);

    this.massive.addEventListener('click', this._log, true);

    Overlay.prototype._log = function() {
      console.log('click');
    };

    Overlay.prototype.show = function() {
      var cross = modal.querySelector('.close-modal');
      var button = modal.querySelector('button[type="button"]');

      cross.addEventListener('click', click);
      button.addEventListener('click', click);
    };

    Overlay.prototype.hide = function() {
      console.log('click');
    };

  };


//var overlay = new Overlay();

})();
