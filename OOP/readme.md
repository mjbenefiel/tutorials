Object Oriented JavaScript

- Object in JS is quite like objects in real life (IE, a car)
- They have properties and things they can do (methods)
- Methods
    - Functions associated with the object

- Classes emulate the idea of classes in JS
    - under the hood, classes are doing the same thing as the prototype model
- Classes are like blueprints that describes a particular object in a non-specific way (Car class, color)(User class that has email, name status, login() logout())
- Constructor Function is the function that actually constructs(creates) the object
- The 'new' keyword
    - creates a new empty object{}
    - set the value of 'this' to be the new empty object
    - calls the constructor method

- JS prototype model was original way we tend to create or emulate classes before the class keyword. JS is still working the way it was before the class keyword. Class keyword is syntactic sugar.
- Using class keyword, methods are attached to proto. Using function constructors, methods are attached directly inside object


- Prototype is like a map for the object type. It contains the functionality (different methods) for the object type.

