(function (window) { 'use strict';

  function Tutorial() {

    this.state = {
      objectives: {
        initiateCalled: false,
        activateSet: false,
        activateTrue: false,
        completeCalled: false,
        completeCalledWithTrue: false,
        completeCalledWithNumber: false
      }
    };

  }

  Tutorial.prototype = {

    initiate: function () {
      this.state.objectives.initiateCalled = true;
    },

    complete: function (complete, delay) {
      var o = this.state.objectives;
      o.completeCalled = true;
      o.completeCalledWithTrue = !!complete;
      o.completeCalledWithNumber = typeof delay === 'number';
    },

    update: function () {
      var o = this.state.objectives;
      o.activateSet = this.hasOwnProperty('activate');
      o.activateTrue = this.activate === true;
    }

  };

  var tutorial = window.tutorial
    = window.tutorial || new Tutorial();

  window.addEventListener('load', onLoad);
  function onLoad() {
    (function animationCallback() {
      window.requestAnimationFrame(animationCallback);
      animate(tutorial);
    })();
  }

  function animate(tutorial) {

    tutorial.update();
    var o = tutorial.state.objectives;

    var initiateEl = document.getElementById('objective-initiate');
    initiateEl.textContent = !o.initiateCalled
      ? 'The initiate() method on the tutorial object was NOT called as expected!'
      : 'PASS!';
    var activateEl = document.getElementById('objective-activate');
    activateEl.textContent = !o.activateSet
      ? 'The activate property on the tutorial object was NOT set as expected!'
      : !o.activateTrue
        ? 'The activate property on the tutorial object was set, but it was NOT set to true as expected!'
        : 'PASS!';
    var completeEl = document.getElementById('objective-complete');
    completeEl.textContent = !o.completeCalled
      ? 'The complete method on the tutorial object was NOT called as expected!'
      : !o.completeCalledWithTrue
        ? 'The complete method on the tutorial object was called, but it was NOT passed true as the first argument as expected!'
        : !o.completeCalledWithNumber
          ? 'The complete method on the tutorial object was called, but it was NOT passed a number as the second argument as expected!'
          : 'PASS!';

  }


})(window);
