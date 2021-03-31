module.exports = [
  {
    name: "Talking about software design, what is the best meaning of Abstraction?",
    type: "single",
    options: [
      {
        value: "Abstraction is about making classes in a way that they can be inherited avoiding code duplication",
        correct: false,
      },
      {
        value: "Abstraction is about hiding implementation details under concepts",
        correct: true,
      },
      {
        value: "Abstraction is creating business logic in a way every developer can understand it",
        correct: false,
      }
    ],
    tags: ["software-design"]
  },
  {
    name: "Select all that are true",
    type: "multiple",
    options: [
      {
        value: "const scopes a variable under the current execution context while var performs a hoisting of variables",
        correct: true,
      },
      {
        value: "const does not allow changing the value of a variable",
        correct: false,
      },
      {
        value: "const does not allow changing the reference of the variable",
        correct: true,
      },
      {
        value: "var can re-define a variable",
        correct: true
      }
    ],
    tags: ["javascript"],
  },
  {
    name: "What is the main reason why Javascript does perform good with I/O transactions?",
    type: "single",
    options: [
      {
        value: "Javascript uses the Event Loop to run multiple threads that allows a system to be parallelized and non-blocking",
        correct: false,
      },
      {
        value: "Javascript uses the Event Loop to create processes that allows a system to be parallelized and non-blocking",
        correct: false,
      },
      {
        value: "Javascript uses the Event Loop to keep running operations in a single thread while async operations get resolved",
        correct: true,
      },
    ],
    tags: ["javascript"]
  },
  {
    name: "What does a closure mean?",
    type: "single",
    options: [
      {
        value: "A closure is memorizing variables at a function definition level",
        correct: true,
      },
      {
        value: "A closure is creating a function inside another function",
        correct: false,
      },
      {
        value: "A closure is allowing variables outside of a function to access a function",
        correct: false,
      },
    ],
    tags: ["javascript"],
  },
  {
    name: "Select the correct options talking about arrow functions and normal functions",
    type: "multiple",
    options: [
      {
        value: "An arrow function binds the parent context to the function.",
        correct: true,
      },
      {
        value: "An arrow function does not need parenthesis for a single parameter",
        correct: false,
      },
      {
        value: "A closure is allowing variables outside of a function to access a function",
        correct: false,
      },
      {
        value: "An arrow function doesn't have a Prototype attribute",
        correct: true
      },
      {
        value: "An arrow function cannot use the yield keyword within it's body",
        correct: true
      }
    ],
    tags: ["javascript"],
  },
  {
    name: "What does the this keyword mean in Javascript? ",
    type: "single",
    options: [
      {
        value: "The 'this' keyword varies. Depending on how a function is invoked, the 'this' context will be different if a function is invoked directly by using parenthesis or by using the .call() method",
        correct: true
      },
      {
        value: "The 'this' keyword means the current scope of a function, meaning all the variables inside curly braces",
        correct: false
      },
      {
        value: "The 'this' keyword means that inheritance can be used",
        correct: false
      }
    ],
    tags: ["javascript"]
  },
  {
    name: "Which of the following options are valid regarding async/await?",
    type: "multiple",
    options: [
      {
        value: "Async tells an invocation of a function that it should be asynchronous.",
        correct: false
      },
      {
        value: "Await tells a function to sleep the main thread",
        correct: false
      },
      {
        value: "Async is a special keyword inside JS that allows a function to use the Await keyword, used to wait for an asynchronous function to be finished before moving to the next line.",
        correct: true
      },
      {
        value: "Async/Await is syntax sugar for promise handling.",
        correct: true
      },
      {
        value: "You cannot use the await keyword if it's not involved inside a try/catch",
        correct: true
      }
    ],
    tags: ["javascript"]
  },
  {
    name: "When invoking a function with extra argument than the function signature parameters, what happens with the extra arguments?",
    type: "single",
    options: [
      {
        value: "The extra arguments are stored inside an arguments variable accesible inside the function body",
        correct: true
      },
      {
        value: "The extra arguments are stored inside the extra variable accesible inside the function body",
        correct: false
      },
      {
        value: "They are ignored",
        correct: false
      }
    ],
    tags: ["javascript"]
  },
  {
    name: "What's the main difference between the == and === operators?",
    type: "single",
    options: [
      {
        value: "They === is commonly known as a strict equality operator, which means it will also check for the value types to assert the equality comparison",
        correct: true
      },
      {
        value: "The == operator can be used to assign multiple values to a variable",
        correct: false
      },
      {
        value: "There's no difference, they both perform the same comparison operation",
        correct: false
      }
    ],
    tags: ["javascript"]
  },
  {
    name: "What does the Array.map function do?",
    type: "single",
    options: [
      {
        value: "It creates a new array populated with the element results of calling a custom function on all the elements of the array",
        correct: true
      },
      {
        value: "It creates an object (usually called Map or HashMap in other languages) based on an array and a provided function",
        correct: false
      },
      {
        value: "It creates a function that allows the developer to iterate all the elements inside the array",
        correct: false
      }
    ],
    tags: ["javascript"]
  }
];
