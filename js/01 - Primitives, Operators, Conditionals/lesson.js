/* Welcome to the first lesson in the JavaScript Tutorial!

First thing is first: sometimes you want to add explanatory text to describe
your code; you do so using a comment. In JavaScript, you can start a comment
with the two characters /* and end it with the same two character's reversed.
The following two characters end this multi-line comment: */


/**
 * Here we started another multi-line comment.
 * 
 * It's OK to put /* inside a comment, but we were forced to end the comment
 * when putting the * and / characters together to show how to end the comment.
 *
 * Sometimes you'll see multi-line comments like this one, where stars run down
 * the left side. It just looks nice, but it's still just whatever is between
 * the / * and * /. The additional stars along the side are just for show.
 * The next line is missing a star:
            ...    but the comment goes on    ...
 *
 * The beginning or end of the comment need not be on it's own line either, it's
 * just easier to see where the comment ends that way.
 */

// Comments can also be single-line.
// Everything after // on a line is ignored.
       // Everything before the // is NOT ignored. But space is ignored.
       

// You can ignore this and the last line in this file, for now.
(function () { 'use strict';


  /**
   * After this multi-line comment is a line of code that calls a built-in
   * function console.log to output debugging information. We'll go over
   * functions and objects in a later lesson, but for now just know that
   * everything you put between the parentheses, separated by commas, will be
   * output to the developer console in the browser (F12). This can be helpful
   * to get feedback about where you are in code or what values you have.
   *
   * In this case, we are passing in a string surrounded by single quotes (').
   * So, if you open index.html in your browser and open the developer
   * console (F12), you'll see the words appear 'Text I want to see...', along
   * with some other output from further down this file.
   */
  console.log('Text I want to see in the developer console');


  /**
   * After this comment we declare a variable. We use the `var` keyword to
   * signify we are about to name a variable, and then we provide that name.
   * In this case, the name of our variable is `countOfDogs`. A variable is a
   * sort of named "box" in computer memory; we want to be able to store
   * something in the box and come back later and retrieve what's in the box.
   */
  var countOfDogs; // We can comment on the end of a line of code too.
  
  /**
   * In the above case, we want to store a number in the variable that we can
   * retrieve and manipulate later, but since we didn't specify an initial
   * value, the "box" represented by `countOfDogs` currently contains an
   * `undefined` value, literally and figuratively. That is to say:
   * "figuratively", in the sense that since we didn't give an initial value,
   * we "declared" the variable, but we didn't "define" it; and "literally",
   * in the sense that when you declare a variable without defining it,
   * JavaScript puts an actual value in the box of `undefined`.
   * We can prove this by logging it:
   */
  console.log('Count of Dogs (without a value):', countOfDogs);
  
  /**
   * This allows you to tell the difference between an undefined variable, and
   * one that is just "empty". We named the variable `countOfDogs`, and our
   * intent is to store numbers in it, but unless we explicitly put a number in
   * it, JavaScript has no way of knowing that in this case, our "empty" might
   * be a zero (0), so it uses undefined for this purpose.
   * We can assign a value to our count now using the equals operator:
   */
  countOfDogs = 12; // That's a lot of dogs to have.
  
  /**
   * We can declare (make a "box" for) and define (assign an initial value to)
   * a variable in one line with both `var` and `=` together.
   */
  var countOfCats = 23; // SRSLY? NO MOR CATS!

  /**
   * We can also declare more than one variable per statement.
   */
  var countOfBirds = 1, countOfIguanas = 2,
    countOfPigs = 3;

  /**
   * You may have noticed by now that most lines of code end in a semi-colon (;)
   * character. This tells JavaScript where the end of a statement is, since
   * usually JavaScript ignores all whitespace, including new-lines.
   *
   * The following five code lines are a single console log statement.
   */
              console.log    (
      'Count of Dogs (with a value):',
                  countOfDogs // Should be 12
         ) // ... annoying spacing just to prove the point ...
              ; // This semi-colon marks the end of the statement


  /**
   * This gives us a lot of freedom to layout our code in a way that maximizes
   * readability. Typically you won't see sporadic spacing like above, but maybe
   * something like below, where we indent everything within parentheses to
   * highlight the items being passed to the console log.
   */
  console.log(
    'Count of Cats:',
    countOfCats
  );
  
  /**
   * Reserved words can't be used as variable names. This way JavaScript doesn't
   * confuse variable names for these words of special use. If you could name a
   * variable `var`, then whenever you used the word `var`, JavaScript wouldn't
   * have any way of knowing if you wanted to declare a new variable or if you
   * were just using your variable named `var`.
   *
   * These are all invalid variable identifiers:
   *
   *   abstract      else          instanceof    super
   *   boolean       enum          int           switch
   *   break         export        interface     synchronized
   *   byte          extends       let           this
   *   case          false         long          throw
   *   catch         final         native        throws
   *   char          finally       new           transient
   *   class         float         null          true
   *   const         for           package       try
   *   continue      function      private       typeof
   *   debugger      goto          protected     var
   *   default       if            public        void
   *   delete        implements    return        volatile
   *   do            import        short         while
   *   double        in            static        with
   *
   * There are some other keywords you should avoid, but those are the main
   * strictly reserved words.
   *
   * For the same reason that the above keywords are reserved, we must denote
   * any arbitrary string of text (e.g. that we intend to display to the user)
   * with quotes, so that we don't, for example, delete something when we only
   * meant to show the user the word "delete" in a sentence. We can create a
   * string using single (') or double (") quotes, or back-ticks (`).
   */
  var myFirstDogName    = 'Phil';
  var myFirstCatName    = "Paul";
  var myFirstIguanaName = `Punxsutawney`;
  
  /**
   * Single and double quotes must end on a single line or there will be an
   * error. You can break up a long string by adding (called "concatenating")
   * multiple strings to each other, like so:
   */
  var myComplicatedFirstPetName = 'Well, we called him "kitty", '
    + "but I can't be bothered to give more details at this point.";
   
  /**
   * Notice the external newline is not included in the output string.
   */
  console.log('My Complicated First Pet Name:', myComplicatedFirstPetName);
  
  /**
   * Back-ticks can be used across multiple lines, but any whitespace is
   * included within the string.
   */
  var myComplicatedSecondPetName = `Well, we called him super-crazy-glue,
    but... actually, it wasn't that complicated.`;

  /**
   * Notice the newline and indentation in the output string.
   */
  console.log('My Complicated Second Pet Name:', myComplicatedSecondPetName);

  /**
   * Back-ticks also have a mechanism for outputting variables right in the
   * string, which is why a back-ticked string is called a "template literal".
   */
  console.log(`I had ${countOfDogs} dogs, before going to the pet store.`);

  /**
   * So, strings have to be quoted, and numbers don't need them, but more than
   * that, a number without quotes is not the same as the same number with
   * quotes around it; one has a `number` type, while the other has a `string`
   * type. JavaScript is "weakly typed", in that it doesn't care what type of
   * value you put into a variable's "box", and you can replace a variable's
   * value with a value of a different type, without error. However, when a
   * variable does have a value, that value's type dictates how the variable is
   * to be used in various situations.
   *
   * For example, when the plus (+) operator is used between two number
   * operands, the result is the sum of the two values:
   */
  console.log(
    'Addition:',
    12 + 34 // 12 + 34  =  46
  );

  /**
   * Whereas, when a string is an operand on one side of the plus operator, the
   * operation becomes string concatenation and the other operand is coerced to
   * a string if it is not.
   */
  console.log(
    'Concatenation:',
    '12' + 34 // '12' + 34  =  '12' + '34'  =  '1234'
  );

  /**
   * We generally want to stick with using the appropriate type for the task at
   * hand, to avoid this implicit coercion. JavaScript offers some convenience
   * for working with mixed types that are expected to coerce gracefully, but
   * there can be some odd hang-ups. For example, the above concatenation of
   * '12' and 34 might have surprised you if you had expected 46 or '46'.
   * Another surprise might come when we compare two values of different types.
   *
   * We've seen the plus operator, which performs concatenation or addition,
   * depending on operand types; there is another operator, the equality
   * operator (==), that will take two values and return either `true`, if the
   * values are equal, or `false`, if they are not equal. However, if the
   * operands given on either side of the operator are of different types, one
   * of them will be coerced so that they can be compared with the same type.
   * So, comparing '123' with 123, coerces 123 to '123', and then compares
   * '123' with '123', returning true:
   */
  console.log(
    "Is '123' == 123 ?",
    '123' == 123 // true
  );

  /**
   * Now, if for some reason we have the same value 123 defined in two places in
   * two different types, and we are happy with this comparison, then all is
   * well. But you might be surprised that not all the comparison operators can
   * be so forgiving. For example, you might expect '123' > 45 to be false,
   * since a number tends to be coerced to a string when combined with a string,
   * and '123' is less than '45' in alphabetical order, but strangely,
   * JavaScript coerces the string to a number and compares them in a numerical
   * less-than context.
   */
  console.log(
    "Is '123' > 45 ?",
    '123' > 45 // true
  );

  /**
   * You might be further surprised to learn that if we quote both operands we
   * actually do get alphabetical ordering. Which operand gets coerced based on
   * which operator is used, is well defined in rules that we won't go into
   * here. Prefer using the right type for the job.
   */
  console.log(
    "Is '123' > '45' ?",
    '123' > '45' // false
  );

  /**
   * When we need to make sure things are really equal, firstly in their types,
   * with no coercion, we use the "strict equality" operator (===), or
   * "triple-equals".
   */
  console.log(
    "Is '123' === 123 ?",
    '123' === 123 // false
  );

  /**
   * So far we've used primitive types:
   *
   *   undefined - When we failed to define our variable at declaration
   *   string    - Quotes and template literals
   *   number    - Sequences of numerical digits
   *   boolean   - Results (true or false) of comparison operators
   *
   * Another primitive type we haven't used is `null`, which is a way to denote
   * a variable as "defined" but "empty" in an abstract way. Where `undefined`
   * implies an unset value, `null` explicitly denotes a valid "empty" value
   * that we would be watching out for.
   */
  var mySoonToBeSuperCoolThing = null;

  /**
   * There are a number of other operators:
   *
   *   a - b      - Subtracts two numbers
   *   a * b      - Multiplies two numbers
   *   a <= b     - Returns true if a less-than-or-equal-to b, else false
   *   a / b      - Divides a by b (possibly with decimal places)
   *   a % b      - Divides a by b, returning the remainder
   *   a += b     - Adds a and b, putting the sum into the a "box" (numbers)
   *   a += b     - Concatenates a and b, putting the combined string into
   *                the a "box" (strings)
   *   a && b     - Returns true if both a and b are true, else false
   *   a || b     - Returns true if either a or b are true, else false
   *
   * There are operators that work on a single operand:
   *
   *   -a         - Negates a single number (e.g. 45 becomes [negative] -45)
   *   +a         - Coerces a single value to a number (e.g. '67' becomes 67)
   *   !a         - Negates boolean; true becomes false, false becomes true
   *
   * There is even an operator that works on three operands:
   *
   *   a ? b : c  - Returns b if a evaluates to true, otherwise returns c
   *
   * The && and || logical operators are really useful to combine logic.
   * The "ternary operator" (?:) is particularly useful, because it allows
   * us to now be able to make choices.
   */
  var allDucksAreBirds = true;
  var allBirdsFly = true;
  var allDucksFly = allDucksAreBirds && allBirdsFly;
  console.log(
    'If all ducks are birds and all birds fly, do all ducks fly?',
    allDucksFly, // true
    allDucksFly ? 'They do!' : "They don't!" // Nicer output
  );

  /**
   * That ternary operator is useful to branch to one value or another depending
   * on a boolean input, but if you want to branch to one block of code or
   * another you'll need to use an `if/else` block:
   */

  var traditionalExclamation;

  // The code between the curly-braces { } only runs if the value between the
  // `if` parentheses can be coerced to a boolean value of true.
  if (true) {
    traditionalExclamation = false;
  }

  // All of these values coerce to boolean value of false; they are "falsey".
  // Any other value for each of the below value's types is considered "truthy".
  if ("" || 0 || null || undefined) {
    // ... so this code should never run
    console.log('FREAK OUT!! (1)');
  } else {
    // Since the above `if` didn't match, the code in the else block runs.
    console.log('Falsey for the win!!');
  }

  // Any other value for each of the above value's types is considered "truthy".
  if ("non-empty string" && 123 && -234) {
    // Since the above `if` matches for all the ANDed operands, this code runs.
    console.log('This is fun, to tell you the truthy.');
  } else {
    // ... so this code should never run
    console.log('FREAK OUT!! (2)');
  }

  if (!allDucksFly) {
    // This code only runs if allDucksFly is false.
    console.log("Why don't all ducks fly?!");
  } else if (traditionalExclamation) {
    // This code won't run while traditionalExclamation is false, and won't run
    // if allDucksFly is false either.
    console.log('Hello world!');
  } else {
    // If none of the above `if` and `else if` conditions are met, none of their
    // code is run, and the code inside this else block runs instead.
    console.log('Everything is Awesome!');
  }

  /**
   * If you only have a few conditions paths to isolate from each other or you
   * have varying operands for those comparisons, then if/else blocks are the
   * way to go, but if you are comparing a single value against various
   * possibilities a switch/case block might be nicer:
   */
  var keyCode = 13; // Imagine we got this from a key-press event
  // The value of keyCode will be compared with each case until one matches.
  switch (keyCode) {
    // If keyCode is equal to 37 the code under this case is run.
    case 37: // Keycode for Left Arrow key
      console.log('Left Arrow');
      // This break statement ends the case and doesn't run any of the other
      // code in other cases within this switch.
      break;
    case 38: // Keycode for Up Arrow key
      console.log('Up Arrow');
      break;
    case 39: // Keycode for Right Arrow key
      console.log('Right Arrow');
      break;
    case 40: // Keycode for Down Arrow key
      console.log('Down Arrow');
      break;

    // Without a `break` statement this case will fall-through and run the code
    // after the next case condition.
    // Therefore, enter and space keys will both initiate bass-boost.
    case 13: // Keycode for Enter key
    case 32: // Keycode for Spacebar key
      // TODO: add code to toggle bass-boost
      console.log('Bass-boost activated');
      break;

    // If no case condition matches (or a matched case above default is missing
    // a break statement) a default case can be used to catch unspecified cases.
    default:
      console.log('Unknown key pressed:', keyCode);
  }

  /**
   * Review
   *
   * - We learned how to document code with comments.
   * - JavaScript ignores most whitespace and semi-colons end statements.
   * - Variables are like boxes we can put data into, get data out of, and
   *   manipulate and store new data in.
   * - In JavaScript a variable's type is not fixed, and depends on the value
   *   contained within the variable.
   * - We learned various basic operators for typical data operations.
   * - Some operators react differently based on operand types.
   * - Boolean values and operations can help make logical calculations.
   * - Ternary operator, if/else blocks, and switch/case blocks are ways to
   *   branch to different values or code blocks based on boolean logic.
   */

// Ignore this line for now.
})();
