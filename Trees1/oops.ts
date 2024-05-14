class Human {
    // Blueprint
    height: number;
    complexion: string;
    weight: number;
    iq: number;
    age: number;
    name: string;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak = function () {
        console.log("Hey my name is "+this.name);
    };
    compareAge = function(other: Human){
        if(this.age > other.age){
            console.log("My age is bigger")
        }else{
            console.log(other.name+" age is bigger")
        }
    }
}

let human1: Human = new Human("Bob", 20);
let human2: Human = new Human("Alice", 22);

human2.compareAge(human1)