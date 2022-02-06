// Curryng 

// com uso de Function Expression
function soma(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

let resultado1 = soma(10)(10)(10)
console.log(resultado1) // 30

// com uso de Arrow Function
const soma2 = a => b => c => a + b + c

let resultado2 = soma2(1)(2)(3)
console.log(resultado2) // 6


// Processo
let res

const PRI = a => _ => a

res = PRI(3)(7)
console.log(res) // 3


const ULT = _ => b => b

res = ULT(3)(7)
console.log(res) // 7


const TRO = f => a => b => f(b)(a)

res = TRO(PRI)(3)(7)
console.log(res) // 7

res = TRO(ULT)(3)(7)
console.log(res) // 3

// boolean
// TRUE ? PRI : ULT
// FALSE ? PRI : ULT

const T = PRI
const F = ULT

T.inspect = () => 'Verdadeiro (PRI)'
F.inspect = () => 'Falso (ULT)'

// NOT
const NOT = a => a(F)(T)

res = NOT(T) // ULT (False)
console.log(res)

// AND
const AND = a => b => a(b)(F)

res = AND(T)(T)
console.log(res) // PRI (True)

res = AND(F)(T)
console.log(res) // ULT (False)

// OR
const OR = a => b => a(T)(b)

res = OR(T)(F) 
console.log(res) // PRI (True)

res = OR(F)(F)
console.log(res) // ULT (False)