JavaScript -- Understanding the Weird Parts

IIFEs - Section 4.44

Closures - Section 4.46

- execution context has closed in its outer variables
- closures are a feature of JS -- they happen 
- JS engine creates the closure, we're taking advantage of the feature

Object Oriented Javascript and Prototypal Inheritance - Section 5.53

- Object is a collection of properties, and a property is an association between a name (key) and a value.

- Classical vs Prototypal Inheritance
    - Inheritance
        - One object gets access to properties and methods of another object
    - all objects have a prototype property
        - the property is a reference to another object (proto)
- prototype chain
    - where we have access to a property or method amongst a sequence of objects that are connected via the proto property
- Special reference in object that says where to look for other properties and methods - that's the prototype.
- Prototype
    - The prototype is an object that is associated with every function and object by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.
- Four principles of OOP
    - encapsulation
        - encapsulation is achieved when each object keeps its state private, inside a class. Other objects don't have direct access to this state. They can only call a list of public functions, called methods. If you want to communicate with the object, you should use the methods provided.
    - abstraction
        - Applying abstraction means that each object should only expose a high-level mechanism for using it. This mechanism should hide internal implementation details. It should only reveal operations relevant for the other objects. Think of it as a small set of public methods which any other class can call without “knowing” how they work. (IE, using a cell phone)
    - inheritance
        - One object gets access to properties and methods of another object. Child classes take all private fields and methods from the parent class. Child class can also add aditional fields of their own
    - polymorphism
        - The practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones. (IE, calculating surface and perimeter of a circle, square and triangle)

    - Everything that isn't a primitive has a prototype, except the base object in JS.

    Reflection

    - An object can look at itself, listing and changing its properties and methods

    Extend

    - Allows you to compose objects - don't need to always use prototype chain (_.extend(params) with underscore for example)

Function Constructors

- A normal function that is used to construct objects
    - The this variable points to a new empy object, and that object is returned from the function automatically once it finishes execution. New operator makes the new object. Function constructors are used for adding properties and methods to that 'new' object.
- "new" is an operator. An empty object is created.
- Constructing object via function
- All functions have a prototype
    - Used only by the new operator
    - Prototype property on function is not prototype of function; it's the proto of any objects created if you're using the function as a function constructor.