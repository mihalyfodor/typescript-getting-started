/*
Once Node.js is installed TypeScript can be added with
npm install -g typescript
and then
tsc filename.ts
can be used to generate the .js file.
 */

/***** Hello World *****/

/**
 * The typical hello world example, illustrating one of the basic advantages of TypeScript,
 * surprisingly, typed parameters.
 *
 * @param {string} name the name of the person we want to say hello to
 * @returns {string} the salutation string
 */
function helloWorld(name: string) {
    return "Hello, " + name;
}

// We can declare variables like in normal JavaScript, but in this case we specify string
var user : string = "John Doe";

// Since TypeScript is typed, we can not assign values of incompatible types.
// The following will not work:
// var wrongUser : string = 123;

// TypeScript has the following types: boolean, number, string, array, tuple, enum, any, void,
// null and undefined.

// uncomment this to see the hello
//document.body.innerHTML = helloWorld(user);




/***** Interfaces *****/

// if we want to use complex data structures, TypeScript provides interfaces. An intersting feature
// of TS is that interfaces are compatible, if their internal structure is compatible.

interface Person {
    firstName: string;
    lastName: string;
}

function helloPerson(person: Person) {
    return "Hello, " + person.firstName +" " + person.lastName;
}

// here we create a structure with firstName and lastName, and helloPerson accepts it as Person.
var somePerson = { firstName: "Jane", lastName: "Doe"};
//document.body.innerHTML = helloPerson(somePerson);



/***** Classes *****/

// JS can already build reusable components, using functions and prototyping. This functionality
// is abstracted away by TS with classes.
// Some caveats to watch out for:
// methods will be prototypes
// visibility exists only in TypeScript, once generated to JS everything is visible as normal in JS
class Student {

    // we can have member declarations
    private fullName: string;
    public otherProperty: number;


    // There can be only one constructor per class
    // Parameters can be declared directly as public, will show up as usable members of the class
    constructor(public firstName, public middleInitial, public lastName) {

        // this. denotes member access
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.otherProperty = 5;
    }

    // implicit visibility is public
    sayHello(name: string) {
        return name;
    }

    public getFullName() {
        return this.fullName;
    }

}

var studentPerson = new Student("Jane", "M.", "Student");
//document.body.innerHTML = studentPerson.getFullName();

// we also have inheritance
class OtherStudent extends Student {

    // constructor can have different number of parameters
    constructor(public firstName, public lastName) {
        // and call the super with the correct parameters
        super(firstName, 'CONSTRUCT_SET', lastName);
    }

    // also we can override methods
    public getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

var otherStudent : Student = new OtherStudent("Jane", "otherStudent");
document.body.innerHTML = otherStudent.getFullName();



/***** Decorators *****/


/***** Modules *****/


/***** Generics *****/


/***** FatArrow *****/