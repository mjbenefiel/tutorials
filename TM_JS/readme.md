TM JS

Execution contexts, hoisting, scopes and closures in JS

- Execution context
    - Environment in which code is run
    - Allow JS engine to manage complexity of interpreting and running the code
    - Each execution phase will have two contexts
        - creation phase of global execution context
            - 4 things happen
                - create global object
                - create object called this
                - set up memory space for variables and functions
                - assign variable declarations a default value of undefined, while placing any functions directly in memory
        - execution phase
            - where JS starts executing code line by line and assigns the real values to the variables already living in memory
        - function execution context
            - created whenever a function is invoked

    Difference between global and function execution context?
        - Instead of creating global variable, function execution context creates an arguments object

    Whenever a function execution context is created, the JS Engine will: 
        - Create an arguments object
        - Create an object called this
        - Set up memory space for variables and functions
        - Assign variable declarations a default value of “undefined” while placing any function declarations in memory

    Execution stack
        - Any time a function is invoked, a new execution context is created and added to the execution stack. Whenever a function is finished running through creation and execution phases, it is popped off the execution stack.

    Hoisting
        - process of assigning variable declaration a default value of undefined during the creation phase

    Closures
  