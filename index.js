// Your code here
// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says meow!`
    }
}
cat = new Cat("Sasha", "female");
cat.speak();


class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        return `${this.name} says woof!`
    }
}
let dog = new Dog('Rufio', 'male');
dog.speak();

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak() {
        if (this.sex === male) {
            return `It\'s me! ${this.name} the parrot!`

        } else if (this.sex === female){
           return  `${this.name} says squawk!`
        }

    }
}
