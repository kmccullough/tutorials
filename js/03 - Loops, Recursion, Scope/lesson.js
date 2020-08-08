(function (tutorial) { 'use strict';

  /**
   * We've learned a lot in the previous lessons, and if all we had at our
   * disposal was what we've learned so far, we could do just about anything!
   * JavaScript needs HTML, the DOM, and events to do anything really
   * interesting in the browser. Input through window.prompt and output through
   * console.log, while useful in simple debugging, isn't very pretty. But
   * besides not yet having a pretty user-interface (UI), we could, in theory,
   * assign some variables to some made-up inputs and effectively create an
   * engine for generating a solution to some simple problem. However, we are
   * limited to running the exact code we wrote exactly as many times as it
   * appears, rather than just having a way to say "do this X amount of times".
   */
  var arrayOfNumbersV1 = function(n) {
    var result = [];
    if (n >= 0 && n <= 5) {
      result.push(0);
      if (n > 0) {
        result.push(1);
      }
      if (n > 1) {
        result.push(2);
      }
      if (n > 2) {
        result.push(3);
      }
      if (n > 3) {
        result.push(4);
      }
      if (n > 3) {
        result.push(5);
      }
    } else {
      throw Error(
        "Sorry, numbers less-than 0 and greater than 5 aren't supported; "
        + "we didn't have time to write `if` statements into infinite."
      );
    }
    return result;
  };
  console.log('Array of numbers V1 (5):', arrayOfNumbersV1(5));

  /**
   * The above is not too bad if you only ever need arrays with numbers up to 5,
   * but if you need it to go to 1000 your file is going to fill up with those
   * if statements. What if it's millions of pixels on the screen?
   *
   * We've already alluded to a way to solve this problem in a previous lesson,
   * by invoking a function inside itself. This is called recursion.
   *
   * The following is an example of infinite recursion. The function simply
   * calls itself, which calls itself, which calls itself, etc, into infinite.
   * It would be unwise to call this function, as it may lock up your browser.
   * When you invoke a function, JavaScript puts some information about the
   * function and arguments on a "stack" (like a stack of papers where the last
   * thing put onto the stack is the first thing that comes off of the stack),
   * so that when the function is done executing it knows where it left off
   * before your function was invoked. Each time the `infiniteRecursion`
   * function is called it adds another entry onto this stack, and eventually
   * you'll run into a maximum limit to the stack size.
   */
  var infiniteRecursion = function() {
    infiniteRecursion();
  };

  /**
   * Using the above example, let's take a moment to appreciate and understand
   * how "scope" works with functions in JavaScript. We talked a little bit in a
   * previous lesson about the immediately invoked function expression that
   * surrounds all of these lesson files, and how it protects the outside scope
   * from being polluted by any variables we define here, which would otherwise
   * become properties on the window object. Variables declared in a function
   * being isolated to that function is only half of the story. The other half
   * of the story is that variables defined outside a function are available for
   * use inside that function. So, since the function uses a reference to the
   * `infiniteRecursion` variable, JavaScript adds a reference to that variable
   * to the function's scope, and that function can then read or write to that
   * variable, changing the value that variable would have in the outer scope,
   * even after the function completed execution. To this point you may be
   * wondering why we pass in window.tutorial, when window is available within
   * the scope of our IIFE. In fact, all members on window (globals) are
   * available without specifying the window object first; so, even `tutorial`
   * is available to us as an existing variable within our IIFE and our alias
   * parameter is shadowing the outer variable of the same name. Passing
   * globally defined dependencies into a surrounding IIFE is merely a
   * convention to be explicit about what external dependencies are used within.
   *
   * Below is a broader solution to the above `arrayOfNumbersV1` limitations,
   * using what we've learned about recursion.
   */
  var arrayOfNumbersV2 = function(n, result) {
    // Limit recursion so that we don't overflow the stack
    var recursionLimit = 500;
    // Set result to itself, or if it's not already set, set it to a new array
    result = result || [];
    // Make sure we are within our limits
    if (n >= 0 && n <= recursionLimit) {
      // Unshift this number onto the start of the result array
      result.unshift(n);
      if (n > 0) {
        // Passing result array into the next call allows us to keep adding
        // numbers to the start of that array until n - 1 leads to n eventually
        // equaling 0 at the deepest recursion level.
        arrayOfNumbersV2(n - 1, result);
      }
    } else {
      throw Error(
        `Sorry, numbers less-than 0 and greater than ${recursionLimit} aren't `
        + "supported; we didn't want to overflow the stack."
      );
    }
    return result;
  };

  // Here we call it with only the required first argument.
  // Note the array has a length of 51 since the first number added was 0.
  console.log('Array of numbers V2 (50):', arrayOfNumbersV2(50));

  /**
   * Recursion has its uses, but there are other--often better--ways to repeat
   * a task. Typically we'd just use a loop. Doing so makes the intent clearer
   * and--aside from the memory taken up by result itself--only takes up memory
   * for a single number variable (i) rather than n times stack entries.
   */
  var arrayOfNumbersV3 = function(n) {
    var result = [];
    // Make sure we are within our limits
    if (n >= 0) {
      // An if condition's plural equivalent is a loop, offering a conditional
      // check on every iteration of the loop. The `for` loop has a special
      // syntax with three sections inside parentheses separated by semi-colons.
      // The first section runs a bit of code to initialize the loop; in this
      // case we create a variable `i` to keep track of our place in the loop,
      // and initialize it to the first number we'll output, zero. The second
      // section is the comparison, and like an `if` condition, will run the
      // code in the curly braces if the condition is true; in this case we want
      // to keep looping as long as i is less-than-or-equal-to n. The last
      // section is for updating your counter, and is equivalent to putting the
      // same code before the end curly-brace of the loop; in this case we use
      // the ++ unary operator to add 1 to the number stored in i.
      for (var i = 0; i <= n; ++i) {
        result.push(i);
      }
    } else {
      throw Error(
        "Sorry, numbers less-than 0 aren't supported; "
        + "we haven't yet implemented negative numbers."
      );
    }
    return result;
  };
  // Just to verify it still works...
  console.log('Array of numbers V3 (50):', arrayOfNumbersV3(50));

  /**
   * Let's add negative numbers and change the loop a little. We'll go back to
   * using unshift, because if we go backwards, we can eliminate the need for
   * the extra `i` variable.
   *
   * Note that although previously we've seen that we are able to add items to
   * a passed in array reference, which continued to exist after the function
   * returned, directly assigning a value to a function parameter from within
   * the function will just overwrite the local value, not update the passed in
   * reference. As a result, passed in primitives are always "pass by value".
   * So, when we assign a new value to `n` below, we won't change any variable
   * that may have been used to pass in the value into our function. This is
   * contrary to how directly accessing a variable in an outside scope works.
   */
  var arrayOfNumbersV4HasBeenRun = false;
  var arrayOfNumbersV4 = function(n) {
    arrayOfNumbersV4HasBeenRun = true;
    var result = [];
    // delta = -1, 0, or 1 depending on sign of n
    var delta = n > 0 ? -1 : n < 0 ? 1 : 0;
    for (; n !== 0; n += delta) {
      result.unshift(n);
    }
    // We need to add the final 0, since the loop exits once we hit 0.
    result.unshift(0);
    return result;
  };
  var n = 30;
  console.log('Array of numbers V4 (30):', arrayOfNumbersV4(n));
  console.log('Can we tell if it was run?', arrayOfNumbersV4HasBeenRun);
  console.log('N is still 50?', n); // n was passed to the function by value
  console.log('Array of numbers V4 negative!', arrayOfNumbersV4(-n));

  /**
   * If there is some logic other than mathematical iteration for the condition
   * of a loop we can also use a `while` loop.
   */
  var done = false;
  while (!done) {
    console.log('Not done yet...');
    done = true;
  }
  console.log('Now we are done!');
  // There's also the seldom used do/while, which just runs through the code
  // block once before running the condition.
  do {
    console.log('Guaranteed to run once!');
  } while (false);

  /**
   * Loop constructs are really powerful, and sometimes the above loop types are
   * the only way to go for an efficient implementation, but there are some
   * newer array methods that make iteration a little more fun. Remember our
   * `addNumbers` function from a previous lesson?
   */
  var addNumbers = function (a, b) {
    return +a + +b;
  };

  var numberArray = [1, '2', 3, 4, '5'];

  var sum = 0;
  // The array forEach method calls the given function once for each item in the
  // array, passing the current array item and index of it in the array.
  numberArray.forEach(function (current, index) {
    sum = addNumbers(sum, current);
  });
  console.log('forEach:', sum);

  // The array reduce method takes a function and a starting value; calls the
  // given function for each item of the array, passing in the return value of
  // the previous call or the starting value for the first call, the current
  // array item, and the index of the current item in the array; and then
  // returns the value returned from the final call to the given function.
  // So, calling it with `addNumbers` function and starting at 0, the following
  // will sum all the numbers in the array.
  console.log('reduce:', numberArray.reduce(addNumbers, 0));

  // Want to manipulate each item in the array? ...

  var plusItself = function (n) {
    return n + n; // Does it concatenate? Does it perform addition? We'll see...
  };
  var doubleNumber = function (n) {
    return addNumbers(n, n); // Coerce it!
  };
  var getType = function (n) {
    // `typeof` built-in keyword returns string describing type of given value
    return typeof n;
  };
  var doThemAll = function (n) {
    return {
      value:  n,
      plus:   plusItself(n),
      double: doubleNumber(n),
      type:   getType(n)
    };
  };

  // The array map function creates a new array whose items are the result of
  // calling the given function for each item in the original array.
  console.log('Plus map:',    numberArray.map(plusItself));
  console.log('Double map:',  numberArray.map(doubleNumber));
  console.log('Type map:',    numberArray.map(getType));
  console.log('Do them all:', numberArray.map(doThemAll));

  // Object keys aren't in guaranteed order, but you can iterate all the keys...

  var optionalParam = function(param, defaultValue) {
    return typeof param === 'undefined' || param === null ? defaultValue : param;
  };

  var getKeyValuePairs = function(obj, propertyDelimiter, keyValueDelimiter) {
    // Let's make delimiters optional, with default values
    propertyDelimiter = optionalParam(propertyDelimiter, ' | ');
    keyValueDelimiter = optionalParam(keyValueDelimiter, ': ');
    // The Object keys method returns an array of keys present in given object.
    var objKeys = Object.keys(obj);
    var pairsArray = objKeys.reduce(
      // Remember, these parameter names are just aliases, you can name them
      // whatever you like. Only the order of them is important.
      function(keyValuePairs, objectKey, indexNotGuaranteed) {
        keyValuePairs.push(
          // Adding the blank string guarantees string coercion
          '' + objectKey + keyValueDelimiter + obj[objectKey]
        );
        // Per the signature of reduce: we must return the array for it to be
        // given to us again the next go around.
        return keyValuePairs;
      },
      // The initial value to reduce is an array, that we'll iteratively
      // populate with key/value pair strings. We'll refer to this array as
      // `keyValuePairs` above.
      []
    );
    // On the final array we'll call array join method to join the array of
    // strings into a single array separated by the given delimiter string.
    return pairsArray.join(propertyDelimiter)
  };

  var obj = doThemAll('123');
  console.log('Object iteration!', getKeyValuePairs(obj));

  /**
   * OK, let's complete some exercises! Once you have successfully completed a
   * task, the status will be output to the page in your browser. Refresh your
   * browser a few times to test your functions against various random inputs.
   */

  /**
   * Task 1: Stars
   *
   * The `tutorial` object has a method called `stars`. Invoke the `stars`
   * method on the `tutorial` object, passing a function, which will be passed a
   * number argument `n`, and should return a string of `n` stars (*).
   *
   * Hint: If your function is called with `n` as 5 it should return '*****'.
   * Also, there is a string method called `repeat`.
   */
  // Add your code here
  tutorial.stars(function(n) {
    return '*'.repeat(n);
  });


  /**
   * Task 2: Stripes
   *
   * The `tutorial` object has a method called `stripes`. Invoke the `stripes`
   * method on the `tutorial` object, passing a function, which will be passed
   * number arguments `n` and `width`, and should return a string of `n` total
   * characters alternating between sections of "=" and "|" characters that are
   * `width` characters wide, starting with "=".
   *
   * Hint: If your function is called with `n` as 10 and `width` as 3, it should
   * return '===|||===|'.
   */
  // Add your code here
  tutorial.stripes(function(n, width) {
    var result = '';
    var stripes = ['=', '|'];
    for (var i = 0; i < n; ++i) {
      result += stripes[Math.floor(i % (width * stripes.length) / width)];
    }
    return result;
  });

  /**
   * Task 3: Diamonds
   *
   * The `tutorial` object has a method call `diamonds`. Invoke the `diamonds`
   * method on the `tutorial` object, passing a function, which will be passed a
   * number argument `n`, and should return a multi-line (delimited by "\n")
   * string representing an `n` wide by `n` height ASCII-art diamond shape,
   * using the "/" and "\" characters for all edges, and use the "<", "A", ">",
   * and "V" characters to represent corners where `n` is an odd number. The
   * argument `n` will always be greater-than one.
   *
   * Hint: Here are example diamonds for...
   *
   *   `n` = 2:          `n` = 3:
   *
   *      /\                 A
   *      \/                < >
   *                         V
   *
   *   `n` = 4:          `n` = 5:
   *
   *      /\                 A
   *     /  \               / \
   *     \  /              <   >
   *      \/                \ /
   *                         V
   */
  // Add your code here
  tutorial.diamonds(function(n) {
    var spc = function(n) {
      return ' '.repeat(n)
    };
    var odd = n % 2; // 0 or 1
    var even = -n % 2 + 1; // 0 or 1
    var pad = Math.floor((n - 1) / 2);
    var result = [];
    var line;
    for (var i = 0; i < n; ++i) {
      line = '';
      line += spc(Math.abs(pad - i) - (i > pad ? even : 0));
      if (i === 0) {
        line += odd ? 'A' : '/\\';
      } else if (i === n - 1) {
        line += odd ? 'V' : '\\/';
      } else {
        line += i > pad ? '\\' : i < pad || even ? '/'  : '<';
        line += spc((i > pad ? n - i - 1 : i) * 2 - odd);
        line += i > pad ? '/' : i < pad || even ? '\\' : '>';
      }
      result.push(line);
    }
    result = result.join('\n');
    console.log(n);
    console.log(result);
    return result;
  });

})(window.tutorial);
