"use strict";
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = 'João';
let age = 17;
let isAdmin = true;
console.log(typeof firstName);
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
const user = {
    name: 'João',
    age: 17,
};
console.log(user);
console.log(user.name);
let a = 0;
a = 'teste';
a = true;
a = [];
let id = '10';
id = 200;
const userId = 10;
const productId = '00001';
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'camisa gola V',
    size: Size.G,
};
console.log(camisa);
const calca = {
    name: 'calça comprida',
    size: Size.M
};
console.log(calca);
let teste;
teste = 'autenticado';
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 6));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo('João'));
function logger(msg) {
    console.log(msg);
}
logger('Teste!');
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá, ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting('João');
greeting('João', 'seja bem vindo(a)');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 4,
    n2: 5,
};
console.log(multiplyNumbers(someNumbers));
