class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("This is " + this._name + "!");
    }

    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dog("Buster");
myDog.introduce();  // Call by object (object.method)
Dog.bark();         // Call by class  (class.method)

// myDog.bark();   // Cannot call by object  (object.method)