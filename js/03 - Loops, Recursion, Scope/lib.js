(function (window) { 'use strict';


  function ElStateText(elId, valueFn) {
    this.elId = elId;
    this.valueFn = valueFn;
  }

  ElStateText.prototype = {

    set: function(value) {
      this.el = this.el || document.getElementById(this.elId);
      if (this.el) {
        this.el.textContent = value;
      }
    },

    update: function(state) {
      if (typeof this.valueFn === 'function') {
        this.value = this.valueFn(state);
      }
      this.set(this.value);
    }

  };


  function ElStateList(els) {

    this.els = els;
    this.elKeys = Object.keys(els);
    this.states = this.elKeys.reduce(function (states, elKey) {
      states[elKey] = {};
      return states;
    }, {});

  }

  ElStateList.prototype = {

    state: function (elKey, state, replace) {
      if (typeof state === 'function') {
        state(this.states[elKey]);
      } else if (typeof state === 'object') {
        this.states[elKey] = replace ? state
          : Object.assign(this.states[elKey], state);
      }
      return this.states[elKey];
    },

    update: function() {
      var els = this.els;
      var states = this.states;
      this.elKeys.forEach(function(elKey) {
        els[elKey].update(states[elKey]);
      });
    }

  };

  var elStates = {

    stars: {
      input: function (fn) {
        var minNChars = 10;
        var maxNChars = 100;
        var nChars = Math.floor(Math.random() * (maxNChars - minNChars) + minNChars);
        var result = typeof fn !== 'function' ? undefined : fn(nChars);
        var isString = typeof result === 'string';
        this.objectives.state('stars', {
          called: true,
          calledWithFn: typeof fn === 'function',
          returnsString: isString,
          returnsStars: isString && result.indexOf('*') >= 0,
          returnsCorrectCount: isString && (result.match(/[*]/g) || []).length === nChars,
          returnsClean: isString && !result.match(/[^*]/g)
        });
      },
      output: function (state) {
        return (
          !state.called
            ? 'The stars() method on the tutorial object was NOT called as expected!'
          : !state.calledWithFn
            ? 'The stars() method on the tutorial object was called, but was not passed a function!'
          : !state.returnsString
            ? "The function passed to the stars() method doesn't return a string!"
          : !state.returnsStars
            ? "The function passed to the stars() method doesn't return any stars!"
          : !state.returnsCorrectCount
            ? 'The function passed to the stars() method returns the incorrect number of stars!'
          : !state.returnsClean
            ? 'The function passed to the stars() method returns the correct number of stars, but also contains non-star characters!'
            : 'PASS!'
        );
      }
    },

    stripes: {
      input: function (fn) {
        var minNChars = 10;
        var maxNChars = 100;
        var minWidth = 2;
        var maxWidth = 11;
        var nChars = Math.floor(Math.random() * (maxNChars - minNChars) + minNChars);
        var width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
        var result = typeof fn !== 'function' ? undefined : fn(nChars, width);
        var isString = typeof result === 'string';
        var correctResult = '';
        var stripes = ['=', '|'];
        for (var i = 0; i < nChars; ++i) {
          correctResult += stripes[Math.floor(i % (width * stripes.length) / width)];
        }
        this.objectives.state('stripes', {
          called: true,
          calledWithFn: typeof fn === 'function',
          returnsString: isString,
          returnsStripes: isString && result.match(/[=|]/),
          returnsCorrectCount: isString && result.length === nChars,
          returnsClean: isString && !result.match(/[^=|]/g),
          returnsCorrect: result === correctResult
        });
      },
      output: function (state) {
        return (
          !state.called
            ? 'The stripes() method on the tutorial object was NOT called as expected!'
          : !state.calledWithFn
            ? 'The stripes() method on the tutorial object was called, but was not passed a function!'
          : !state.returnsString
            ? "The function passed to the stripes() method doesn't return a string!"
          : !state.returnsStripes
            ? "The function passed to the stripes() method doesn't return any stripes!"
          : !state.returnsCorrectCount
            ? 'The function passed to the stripes() method returns the incorrect number of characters!'
          : !state.returnsClean
            ? 'The function passed to the stripes() method returns the correct number of characters, but also contains non-stripe characters!'
          : !state.returnsCorrect
            ? 'The function passed to the stripes() method returns the correct number of characters, but the stripes are wrong!'
            : 'PASS!'
        );
      }
    },

    diamonds: {
      input: function (fn) {
        var minNChars = 2;
        var maxNChars = 10;
        var nChars = Math.floor(Math.random() * (maxNChars - minNChars) + minNChars);
        var result = typeof fn !== 'function' ? undefined : fn(nChars);
        var isString = typeof result === 'string';
        var rresult = isString && result.split('').reverse().join('');
        var paddingWidth = Math.floor((nChars - 1) / 2);
        this.objectives.state('diamonds', {
          called: true,
          calledWithFn: typeof fn === 'function',
          returnsString: isString,
          returnsDiamondParts: isString && result.match(/[\\/<A>V]/),
          returnsClean: isString && !result.match(/[^\\/<A>V \n]/),
          returnsCorrectCorners: isString && (
            nChars % 2 === 0
              ? ( // Even
                result.match(/[/\\]/)
                && !result.match(/[<A>V]/)
              )
              : ( // Odd
                result.match(/[<A>V]/)
              )
          ),
          returnsCorrectTopCorner: isString
            && result.match(new RegExp(
              '^[^\n]{' + paddingWidth + '}(?:A|/\\\\)'
            )),
          returnsCorrectBottomCorner: isString
            && (result.match(/\n/g) || []).length === nChars - 1
            && rresult.match(new RegExp(
              '^[^\n]*(?:V|/\\\\)[^\n]{' + paddingWidth + '}\n'
            )),
          returnsCorrectLeftCorner: isString && (
            result.match(new RegExp(
              '^(?:[^\n]*\n){' + paddingWidth + '}(?:<|\\/[^\n]*\n\\\\)'
            ))
          ),
          returnsCorrectRightCorner: isString && (
            rresult.match(new RegExp(
              '^(?:[^\n]*\n){' + paddingWidth + '}(?:>|\\/[^\n]*\n\\\\)'
            ))
          )
        });
      },
      output: function (state) {
        return (
          !state.called
            ? 'The diamonds() method on the tutorial object was NOT called as expected!'
          : !state.calledWithFn
            ? 'The diamonds() method on the tutorial object was called, but was not passed a function!'
          : !state.returnsString
            ? "The function passed to the diamonds() method doesn't return a string!"
          : !state.returnsDiamondParts
            ? "The function passed to the diamonds() method doesn't return any diamond parts!"
          : !state.returnsClean
            ? 'The function passed to the diamonds() method returns non-diamond-part characters!'
          : !state.returnsCorrectCorners
            ? "The function passed to the diamonds() method doesn't output the correct corner type!"
          : !state.returnsCorrectTopCorner
            ? "The function passed to the diamonds() method doesn't output the top corner correctly!"
          : !state.returnsCorrectBottomCorner
            ? "The function passed to the diamonds() method doesn't output the bottom corner correctly!"
          : !state.returnsCorrectLeftCorner
            ? "The function passed to the diamonds() method doesn't output the left corner correctly!"
          : !state.returnsCorrectRightCorner
            ? "The function passed to the diamonds() method doesn't output the right corner correctly!"
            : 'PASS!'
        );
      }
    }

  };

  function Tutorial() {

    this.objectives = new ElStateList({
      stars: new ElStateText('objective-stars', elStates.stars.output),
      stripes: new ElStateText('objective-stripes', elStates.stripes.output),
      diamonds: new ElStateText('objective-diamonds', elStates.diamonds.output)
    });

  }

  Tutorial.prototype = {

    stars: elStates.stars.input,
    stripes: elStates.stripes.input,
    diamonds: elStates.diamonds.input,

    update: function() {
      this.objectives.update();
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
  }

})(window);
