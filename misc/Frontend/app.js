class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("Alice", 30);
p1.talk();

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }
    greet(){
        return `Hi, I am ${this.name} and I am in grade ${this.grade}.`;
    }

}
let s1 = new Student("Bob", 16, 10);
console.log(s1.greet());