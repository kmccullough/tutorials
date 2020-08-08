(function (tutorial) { 'use strict';

  // Initiate the tutorial
  tutorial.initiate();
  // Store state about the tutorial
  tutorial.activate = true;
  // Complete the tutorial with arguments
  tutorial.complete(true, 0);

})(window.tutorial);
