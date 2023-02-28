let x: number = 10
// string, number, boolean, ...
x = 20
console.log(x)

// inferencia x annotation
let y = 12
// y = 'oi'

let z: number = 12

//  Tipos básicos 
let firstName: string = 'João'
let age: number = 17
let isAdmin: boolean = true

// String != string 
console.log(typeof firstName)
console.log(firstName)

// object
const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers)
console.log(myNumbers.length)
myNumbers.push(5)
console.log(myNumbers)

// tuplas --> tuple
let myTuple: [number, string, string[]]
myTuple = [5, 'teste', ['a', 'b']]  
// myTuple = [true, false, true]

// objects literals --> {prop: value}
const user: {name: string, age: number } = {
    name: 'João',
    age: 17,
}
console.log(user)
console.log(user.name)

// any
let a:any = 0

a = 'teste'
a = true
a = []

// union type
let id: string | number = '10'
id = 200

// type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = '00001'
const shirId: myIdType = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande',
}

const camisa = {
    name: 'camisa gola V',
    size: Size.G,
}
console.log(camisa)

const calca = {
    name: 'calça comprida',
    size: Size.M
}
console.log(calca)

// literal types 
let teste: 'autenticado' | null
teste = 'autenticado'
teste = null

// funções
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(2, 6))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}
console.log(sayHelloTo('João'))

function logger(msg: string): void {
    console.log(msg)
}
logger('Teste!')

function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Olá, ${greet} ${name}`)
    } else {
        console.log(`Olá ${name}`)
    }
}
greeting('João')
greeting('João', 'seja bem vindo(a)')

// interfaces 
interface MathFunctionParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}
console.log(sumNumbers({n1:1, n2:2}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers:MathFunctionParams = {
    n1: 4,
    n2: 5,
}

console.log(multiplyNumbers(someNumbers))

// narrowing
// checagem tipos 
function noSoemthing(info: number | boolean) {
    if(typeof info === 'number') {
        console.log(`O número é ${info}`)
        return
    }
    console.log('Não foi passado o número')
}
noSoemthing(5)
noSoemthing(true)

// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']

showArraysItems(arr1)
showArraysItems(arr2)

// classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`O trabalho do usuário é ${this.role}`)
            return
        }
        console.log('Informação restrita!');
        
    }
}

const joao = new User('João', 'Programador', true)
console.log(joao)
joao.showUserName()
joao.showUserRole(false)

// interfaces em classes
