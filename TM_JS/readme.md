TM JS

<strong>Execution contexts, hoisting, scopes and closures in JS</strong>

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

- Difference between global and function execution context?
    - Instead of creating global variable, function execution context creates an arguments object

- Whenever a function execution context is created, the JS Engine will: 
    - Create an arguments object
    - Create an object called this
    - Set up memory space for variables and functions
    - Assign variable declarations a default value of “undefined” while placing any function declarations in memory

- Execution stack
    - Any time a function is invoked, a new execution context is created and added to the execution stack. Whenever a function is finished running through creation and execution phases, it is popped off the execution stack.

- Hoisting
    - process of assigning variable declaration a default value of undefined during the creation phase

- Scope chain
    - Process of the JavaScript engine going one by one and checking each individual parent Execution Context if a variable doesn’t exist in the local Execution Context

- Closures
    - The concept of a child function “closing” over the variable environment of its parent function

<strong>Understanding the this keyword, call, apply, and bind in JavaScript</strong>
  
- This keyword
    - The “this” keyword allows you to decide which object should be focal when invoking a function or a method.
    
- 5 rules
    - Implicit binding
    - Explicit binding
    - new Binding
    - window Binding
    - Lexical Binding        

Always ask this question for this keyword: "Where is this function invoked?"

- Implicit binding (most common rule)
    - Implicit binding says that when you call a function, and it's invoked, look to the left of the dot, and that's what the this keyword is invoking (IE, me.SayName() refers to me object)

- Explicit binding with call, apply, bind
    - .call()
        - a method on every function that allows you to invoke the function specifying in what context the function will be invoked
        - explicitly stating what "this" keyword is
        - can pass along arguments one by one
    - .apply()
        - same thing as .call(), but it passes in array of arguments 
    - .bind()
        - same thing as .call(), but it will return new function you can invoke at a later time instead of invoking original function
    - new binding
        - Behind the scenes, JS will create brand new object and call it "this"
    - window binding
        - if none of the above rules apply, "this" keyword is going to default to window object, unless in strict mode, then it will be undefined
            
- Lexical binding
    - with ES6 and =>, this is determined lexically
    - Arrow functions don’t have their own this. Instead, just like with variable lookups, the JavaScript interpretor will look to the enclosing (parent) scope to determine what this is referencing.
    - Without =>, we need to specify that we want the anonymous function we pass to .reduce() in order to be invoked in the context of user object. (IE, use .bind(this) at the end of object).

- These are the steps I take in order to figure out what it’s referencing.
    - Look to where the function was invoked.
    - Is there an object to the left of the dot? If so, that’s what the “this” keyword is referencing. If not, continue to #3.
    - Was the function invoked with “call”, “apply”, or “bind”? If so, it’ll explicitly state
    - Was the function invoked using the “new” keyword? If so, the “this” keyword is referencing the newly created object that was made by the JavaScript interpretor. If not, continue to #5.
    - Is “this” inside of an arrow function? If so, its reference may be found lexically in the enclosing (parent) scope. If not, continue to #6.
    - Are you in “strict mode”? If yes, the “this” keyword is undefined. If not, continue to #6.
    - JavaScript is weird. “this” is referencing the “window” object.
    
<strong> The Event Loop </strong>
- Event Loop
    - Call Stack (Async functions go to Web API) > Web API > Task Queue (Job Queue with promises, higher priority than TQ) > Call Stack

<strong>Async JavaScript: From Callbacks, to Promises, to Async/Await</strong>

- Higher order function
    - Function that receives another function as its argument. Function you're passing in as the Arg is called a callback.

- Callback function
    - callback is a function that is to be executed after another function has finished executing

- Callback usage
    - Abstraction over turning one value into another (.map, .filter)
    - Allows you to delay execution of a function until a particular time, or until we have the data we need.

- Callback hell
    - nested callbacks within nested callbacks
        - solution is to modularize code

- Inversion of control
    - When you write a callback, you’re assuming that the program you’re giving the callback to is responsible and will call it when (and only when) it’s supposed to.

- Promises
    - The eventual result of an asynchronous operation
    - Promises exist to make the complexity of making async requests more manageable
    - A promise can be in three states
        - pending, fulfilled, rejected
    - How do you create a promise?
        - Create a new instance of a promise
    - How do you change the status of a promise?
        - The Promise constructor takes a single argument, a callback function. This function is going to be passed two arguments, resolve and reject.
            - resolve - a function that allows you to change the status of the promise to fulfilled
            - reject - a function that allows you to change the status of a promise to rejected
    - How do you listen for when the status of a promise changes?
        - Once you create a promise, you’ll pass the function you want to run if the async request is successful to .then. You’ll pass the function you want to run if the async request fails to .catch.
        - When the status of the promise changes to fulfilled, the function that was passed ot .then will get invoked.
        - When the status of a promise changes to rejected, the function that was passed to .catch will be invoked

- Async/Await
    - Whenever you have an async function, it implicitly returns a promise
    - When you add async to a function it does two things. It makes it so the function itself returns (or wraps what gets returned in) a promise and makes it so you can use await inside of it.
    - Try/Catch

<strong>Prototype</strong>

- Prototype
    - property on a function that points to an object (every function has a proto)
    - allows us to share methods across all instances of a function

- Functional instantiation 

- Functional instantiation with shared methods

- Object.create
    - Allows you to create an object which will delegate to another object on failed lookups

- Enumerable properties
    - Those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer (properties defined via Object.defineProperty and such default enumerable to false)

- One thing you might have never thought about is how does every instance of an array have all of those built in methods (splice, slice, pop, etc)?
    - it’s because those methods live on Array.prototype and when you create a new instance of Array

<strong> Private and Public Class Fields </strong>

- Class Fields Proposal will allow you to add instance properties directly as a property on the class without having to use the constructor method.

- Can create private field using #

<strong> JS inheritance and the prototype chain </strong>

- class SubClass extends BaseClass {}
- super() calls the constructor function of the class we're extending

<strong> Composition vs Inheritance </strong>

- With inheritance, you structure your classes around what they are, a User, an Animal, a Dog, a Cat - all of those words encapsulate a meaning centered around what those things are. 
- Rather than thinking in terms of what things are, what if we think in terms of what things do?
- By favoring composition over inheritance and thinking in terms of what things do rather than what things are, you free yourself of fragile and tightly coupled inheritance structures.

<strong> From IIFEs to CommonJS to ES6 Modules </strong>

- Modules
    - Imports (dependencies)
    - code
    - exports (interface of the module)
    - Including only scripts pollutes the global namespace
    - IIFE Module Pattern
    - CommonJS
        - Pros
            - Node
        - Cons
            - Not in browsers
            - Synchronous
    - Module Bundler
        - ie, Webpack
    - ES Modules
        - Now part of official ECMAscript specification
        - Support Async
        - "import" keyword
        - "export" keyword
        
Callback usage -- asynchronous requests, API calls
Closure usage -- think something like a click counter on a website.

Destructuring
    - Allows us to extract data from an object or array.












