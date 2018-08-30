// Ignore this line again for now, but we'll explain it later below.
(function (tutorial) { 'use strict';

  /**
   * In the last lesson, we learned about how values can be stored in variables,
   * and that a value has a type which can affect the operation performed by
   * a built-in operator.
   *
   * In this lesson, we'll discover how all values in JavaScript, whether
   * "primitive" or "complex", are actually objects, which encapsulate both data
   * and functionality around that data or type. We'll also introduce the unique
   * `array` type object and create our own functions similar to the built-in
   * operators we've seen. And finally, we'll, create our own complex typed
   * objects and define functions and other data types as their members.
   *
   * Data types like string or number are considered "primitive", because they
   * only represent a single simple piece of data, but these primitives still
   * come with associated built-in functionality in the way of functions as
   * members on these value "objects". We access members of an object by
   * specifying the object, then a dot (.), then the name of the member. We then
   * call the function by passing in any required arguments within parentheses.
   *
   * Remember, Javascript doesn't mind extra space, so the space between each of
   * the pairs of closing parentheses below ") )" is only there for readability,
   * and is not required.
   */
  console.log( 'Lower Dog:', 'DOG'.toLowerCase() );
  // We'll discuss this later, but here '0' is item 0, '5' is item 5.
  console.log( 'Character:', '0123456789'.charAt(5) );
  // Start at item 3 ('3'), and include all characters up to item 6 ('345')
  console.log( 'Substring:', '0123456789'.substring(3, 6) );
  // Two dots here: one to signify decimal place, the other to access members.
  console.log( 'Fixed Decimals', 1.234.toFixed(2) );
  // Two dots here: one to signify decimal place, the other to access members.
  console.log( 'Digits Precision:', 1234..toPrecision(2) );
  // Not a whole lot to do with booleans, but you get the point.
  console.log( 'Value of Boolean:', true.valueOf() );

  /**
   * You might have guessed that `console` is an object and `log` is a member
   * function (called a "method") on the `console` object. The `log` method
   * takes any number of arguments and outputs them to the console.
   *
   * We'll talk more about objects when we make our own below, but first we'll
   * discuss a special object called an array. An array can have any number of
   * member variables (called properties) named by numbers starting from zero.
   * The array has additional members in the way of built-in methods and a
   * `length` property that keeps track of how many items are in the array.
   *
   * The following array has three items (1, 2, and 3) and a length property of
   * 3 to match:
   */
  var myFirstNumbers = [ 1, 2, 3 ];

  /**
   * In JavaScript, arrays start at zero. Expanded in the console you can see
   * item 0 is the number 1, item 1 is the number 2, and item 2 is the number 3.
   */
  console.log('My First Numbers:', myFirstNumbers);

  /**
   * This zero-based indexing might be confusing at first, but is pretty
   * prolific in programming and has it's advantages over one-based indexes.
   * Think of the index as the offset from the start of the list; zero is the
   * first element, because it is zero distance away from the start of the list.
   * These advantages will become more apparent in a future lesson on looping.
   *
   * With object member access with the dot notation, the name given after the
   * dot is an identifier, and is bound by the same rules as variable
   * identifiers, including not starting with a digit. However, an object member
   * name is not constrained to identifier rules, and can be any valid string.
   * So, technically the key that defines the index for the first element of an
   * array is the string '0'. To access object members with names that are
   * not known or are invalid identifiers, we can use the bracket notation:
   */
  console.log('My First First Number:', myFirstNumbers[0]); // Outputs: 1

  /**
   * If you are wondering what I meant by not knowing what the identifier is,
   * consider the following. Math.random returns a random decimal number between
   * 0 and 1, inclusive of 0 but not 1. Multiplying it by the length  * of the
   * array gives us instead a random number between 0 and 3, excluding 3.
   * Math.floor drops off any decimal part, assuring `randomNumberIndex` will
   * randomly contain the number 0, 1, or 2. Now, every time you reload the page
   * a random number will be generated and a random one of "my first numbers"
   * will be logged to the console.
   */
  var randomNumberIndex = Math.floor(
    Math.random() * myFirstNumbers.length
  );
  console.log(
    `The Number With Index ${randomNumberIndex} is:`,
    myFirstNumbers[randomNumberIndex]
  );

  /**
   * We can add items to an array using methods available to all arrays:
   */
  var myArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  // "Pops" OUT and returns LAST item in array
  myArray.pop();
  // Takes OUT and returns FIRST item in array, "shifting" all item numeric
  // indexes down by one. So, item indexed 1 becomes index 0, etc.
  myArray.shift();
  // "Pushes" IN item as new LAST item of the array
  myArray.push('A');
  // Adds IN item as new FIRST item of the array, "unshifting" all item numeric
  // indexes up by one. So, item indexed 0 becomes index 1, etc, and then the
  // unshifted item is indexed 0.
  myArray.unshift('B');
  // You can even splice a chunk out of the middle:
  var splicedOutItems = myArray.splice(
    4, // Start at index 4 (fifth item)
    3  // Remove three items
  );
  console.log('What did you do to my array?', myArray);
  console.log('Spliced items: ', splicedOutItems);

  /**
   * It should be noted that the developer console might not actually evaluate
   * a logged array or object until you click a little expansion icon next to
   * its output in the console. As a result, a prior console log could show the
   * results of the array in the state it is after later code manipulates the
   * array, resulting in some possible confusion. Keep this in mind when working
   * with the console, and if you absolutely need to see what an array or object
   * looks like at the exact time the console log statement is made, then
   * consider either outputting individual properties or use the JSON.stringify
   * method to convert the array or object to a string before logging.
   *
   * You should start to see how arrays can be powerful at working with dynamic
   * data, but at their core, arrays are simply lists of items in a specific
   * order with a known length of the list.
   *
   * Objects are powerful as well with such a small definition: a list of items
   * in no particular order with specific indexable string keys.
   *
   * Arrays can contain other arrays or objects, and objects can contain other
   * objects or arrays; remember an array is a type of object.
   *
   * Note, that although in general an object's properties are not ordered, the
   * way that an array stores its values using sequential numerical keys, along
   * with the methods an array offers for traversal, provides a way for an array
   * to keep track of the order of the properties added through the array's
   * methods. If you try to set a non-numeric indexed property directly on an
   * array (e.g. using dot notation), you would succeed at adding a new property
   * to the "object" that is the array, but without using the array's specific
   * interface for keeping track of the array items, the array won't know about
   * this property or count it in its length property.
   *
   * We'll have some more fun with objects momentarily, but first let's talk
   * functions. We've already used a bunch of functions, including console.log,
   * Math.floor, and Math.random, but now let's make our own function:
   */
  function myFirstFunction() {
    console.log('Hello Function!');
  }

  /**
   * What we've coded above is a "function statement", starting with the
   * `function` keyword, then a valid identifier for the function, then the
   * parameter list within parentheses, then the function's code block
   * surrounded by curly braces. In this case, there are no parameters to our
   * function, but we still need the parentheses. While it is good practice to
   * declare your functions prior to using them, JavaScript scans source files
   * for function statements and hoists them to the top of each parent function
   * or file, so any function declared through a function statement can be
   * called even before the line where it is declared. The same hoisting
   * mechanism works with variable declarations, but since it doesn't hoist the
   * variable definition it's not as helpful as function hoisting.
   *
   * Now that we've declared the function, no code has actually run, and won't
   * until we call the function. We make functions to easily run the same code
   * over and over, so let's call it three times. You should see three outputs.
   */
  myFirstFunction();
  myFirstFunction();
  myFirstFunction();

  /**
   * This is way better than typing the code inside the function over and over,
   * especially if the code of the function grows, but similar to arrays, the
   * power of functions will really become clear in a later lesson on looping.
   *
   * Let's make a more useful function. We can't call it `myFirstFunction`
   * since, like variables, functions must be named with unique identifiers.
   * We'll make a function to add two numbers together. Remember, the built-in
   * binary plus operator performs number addition or string concatenation
   * depending on the operand types, and the unary plus operator coerces another
   * type to a number. The below function takes two arguments as parameters:
   * `a` and `b`. It coerces each argument to number type to ensure the binary
   * plus performs an addition operation, in case a user passes in a number in
   * a string, expecting it to be understood and coerced. Essentially, we've
   * taken the functionality of the plus operator, and added functionality on
   * top of that, which always assumes the inputs are numbers, and always
   * performs numerical addition.
   */
  function addNumbers(a, b) {
    return +a + +b;
  }
  console.log('My First Useful Function', addNumbers(12, 34)); // 46

  /**
   * Using function statements is a good intro to functions in JavaScript, and
   * they can be useful for the hoisting mechanism, but there is another way
   * to define a function which has its own benefits: function expressions.
   * Where a function statement starts a line of code with the `function`
   * keyword, a function expression must be part of a larger expression, to be
   * recognized as a function expression and not a function statement. You may
   * have noticed above that a function statement is not terminated with a
   * semi-colon. Since a function expression is meant to be a part of a larger
   * expression or statement, the line-must be terminated by a semi-colon, as
   * dictated by the enclosing statement.
   *
   * When we store a function created with a function expression in a variable,
   * it becomes clearer that functions are simply another type of object and are
   * themselves values that can be passed around. Note however that, while the
   * `subtractNumbers` variable declaration is hoisted, it initially has the
   * value undefined until this line of code is reached; function expressions
   * are not hoisted. Which just means, don't try to call the function before
   * it is actually defined.
   */
  var subtractNumbers = function (a, b) {
    return +a - +b;
  };
  console.log('My First Function Expression', subtractNumbers(12, 34)); // -22

  /**
   * Just as we used the plus and minus operators within our functions, we can
   * use our functions inside other functions. It can even be useful to call the
   * same function from within itself, which we'll discover in a later lesson.
   *
   * In the below example we'll make a function that takes a string describing
   * an operation to perform, and two operands to work on. The function will add
   * the operands together if `op` is the string 'add', subtract `b` from `a` if
   * `op` is the string `subtract`, and will return null if the `op` is not
   * recognized.
   */
  var operateOnNumbers = function (op, a, b) {
    var operation;
    switch (op) {
      case 'add':
        // Assign reference to `addNumbers` function to the `operation` variable
        operation = addNumbers;
        break;
      case 'subtract':
        // Assign reference to `subtractNumbers` function to the `operation` variable
        operation = subtractNumbers;
        break;
      default:
        // Assign a new function, which returns null, to the `operation` variable
        // Any arguments passed into a function without required parameters will
        // just be ignored. So, when `a` and `b` are passed, they will be ignored.
        operation = function () {
          return null;
        };
    }
    // At this point the `operation` value should have a reference to some
    // function, and we know that any of the functions it can be, can take two
    // arguments and return our expected value. We call the `operation` variable
    // just as if it was the name of a function created with a function statement.
    return operation(a, b);
  };
  // We put the op here into a variable to illustrate that we don't need to know
  // which operation we are passing in, we just store it somewhere in a variable.
  var op = 'add';
  console.log('Abstracting Addition', operateOnNumbers(op, 12, 34)); // 46
  op = 'subtract';
  console.log('Abstracting Subtraction', operateOnNumbers(op, 12, 34)); // -22

  /**
   * Let's quickly demystify the function expression that surrounds this file,
   * before moving into a bit more detail with objects.
   *
   * The expression looks like this:
   *
   *     (function (tutorial) { 'use strict';
   *
   *         // ...  lesson code ...
   *
   *     })(window.tutorial);
   *
   * The function itself looks almost like a function statement, except it is
   * surrounded by parentheses. If we had stored this function in a variable
   * first, then those parentheses would not be required, but they are required
   * in this case so that JavaScript doesn't recognize it as a function
   * statement. Outside of using them to denote function parameters or passed in
   * arguments, parentheses as an operator simply return whatever is passed in,
   * and like in mathematics, serve to manipulate the order of operations in an
   * expression. In this case, they are only used so that the function keyword
   * is not the first in the code statement. In fact, you can do the same thing
   * without the parentheses by preceding the function keyword with some throw-
   * away unary operator, such as `+` or `!`, but it makes it less clear.
   *
   * The function takes a parameter `tutorial`, then there is a 'use strict'
   * string expression, which seems to do nothing, then in the function body is
   * this whole lesson, and then at the end, after the function body, the
   * function is immediately being called and passed in the argument
   * `window.tutorial`. This is called an "immediately invoked function
   * expression" or IIFE. The purpose is primarily to isolate the scope of our
   * code, so that any variables we define here, won't pollute the outer
   * namespace; and the 'use strict' string is actually a special notice to
   * modern browsers not to allow us to use any variables before we declare them.
   * This will be explained in greater detail in a future lesson. Finally, we
   * pass in `window.tutorial`, which is defined elsewhere, and alias it
   * internally as the `tutorial` parameter to our surrounding IIFE. After we
   * learn a little more about objects, we'll use this `tutorial` object to test
   * what you've learned.
   */
  // The inner function code shouldn't change our outer variable.
  var aVariable = 'A VALUE';
  console.log('Outer variable before:', aVariable);
  -function (numbers, letters) {
    // This is a unique variable; not the same as the one outside the function.
    var aVariable = 'A DIFFERENT VALUE';
    console.log(
      'My IIFE', numbers, letters,
      'Inner variable:', aVariable
    );
  }(123, 'abc');
  // The function assigned it's inner `aVariable`, but didn't affect the outer.
  console.log('Outer variable after:', aVariable);

  /**
   * In JavaScript, all values are essentially objects or can be treated as such.
   * As we've seen, even functions are objects, and in a later lesson we'll even
   * see and use some of the functions that live as methods on all functions!
   *
   * We've already defined objects above as: a list of items in no particular
   * order with specific indexable string keys. We call the combination of this
   * key and its value a "property" or "member" of the object, although
   * typically, any member of an object that is of type function is referred to
   * as a "method", while "property" is usually reserved to describe all other
   * non-function members.
   *
   * The easiest way to define a custom object is using an "object literal".
   * Which is just a curly-bracket block, with key/value pairs separated by
   * commas, and the keys separated from their values by colons (:).
   */
  var myFirstObject = {
    // Properties
    name: 'My First Object',
    123: 'Numbers as keys are coerced to string keys',
    myEmptyArray: [],
    // Methods
    foo: function (bar) {
      return '"' + bar + '"';
    }
  };
  console.log(
    myFirstObject.name,
    ' ... ',
    myFirstObject[123],
    ' ... ',
    myFirstObject.foo('Nifty')
  );

  /**
   * In a later lesson we'll learn another way to create an object and how to
   * create a sort of object template, to assist in creating multiple objects
   * of the same type. For now, you should have enough understanding to complete
   * the following exercises. Once you have successfully completed a task, the
   * status will be output to the page in your browser.
   */

  /**
   * Task 1: Method Invokation
   *
   * The `tutorial` object has a method called `initiate`. Invoke (call) the
   * `initiate` method on the `tutorial` object, passing no arguments.
   *
   * Hint: Invoke a function by specifying the arguments in parentheses.
   */
  // Add your code here


  /**
   * Task 2: Property Access
   *
   * The `tutorial` object has a property call `activate`. Assign the value
   * `true` to the `activate` property of the `tutorial` object.
   *
   * Hint: Assignment is performed with the equal operator, and the boolean
   * value `true` should have no quotes around it.
   */
  // Add your code here


  /**
   * Task 3: Invokation with Arguments
   *
   * The `tutorial` object has a method call `complete`. Invoke the `complete`
   * method on the `tutorial` object, passing boolean `true` as the first
   * argument, and any number as the second argument.
   *
   * Hint: Invoke a function by specifying the arguments in parentheses.
   */
  // Add your code here


// End of lesson
})(window.tutorial);
