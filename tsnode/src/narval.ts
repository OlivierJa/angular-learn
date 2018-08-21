import {double} from "./hello";

class Animal {
    constructor(public name: string, public weight: number) {
    }
}

const lulu = new Animal('Cat', 7);

class Narval extends Animal {
    constructor(public length: number) {
        super('Gerard', 400);
    }

    detect(object: any) {
        console.log(object);
    }


}

const gerard = new Narval(30);
gerard.name = 'Toto';
console.log(gerard);
gerard.detect(lulu);


//Generics: we make a parameter T for the type. T is changeable
class Viewer<T> {
    viewable: T;

    view(thing: T) {
        this.viewable = thing;
    }
}

let viewer = new Viewer<Animal>();
viewer.view(lulu);
viewer.view(gerard);
console.log(viewer);

gerard.length = double(40);
console.log(gerard);

//backticks
const lorem = `This
is
on multiline
<html>
    <div>${gerard.name}</div>
</html>
`;

console.log(lorem);

// quick shortcut for interface
type operation = (x: number, y: number) => number;

let add: operation = (x, y) => x + y;
console.log(add(12, 15));

let div = (x: number, y: number) => x / y;

//duck typing works for any Type, including functions

let myOperation: operation = div;

//Splat operator
let people = ['Jim', 'John', 'Jack'];
const morePeople = people.concat('Jules'); // push is mutative, not concat
console.log('People', people);
const morePeopleSexy = [...people, 'Jacky', 'Joseph'];
console.log(morePeopleSexy);

//with objects: Only ES 2017
const house = {
    size: 50,
    price: 500000
};
let palace = {
    ...house,
    employees: 5
};

// let samePalace = Object.assign({employee:5, house});
console.log(palace);

let rental = {
    people, //shortcut for people: people
    palace: palace, // could make the shortcut also
    price: 10000,
    days: 7
};

console.log(rental);
