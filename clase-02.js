// 🔴 Paso uno: crear un objeto y sus métodos
let animal = {}
animal.nombre = 'Benito'
animal.energia = 10

animal.come = function (suma) {
    console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
}

animal.duerme = function(length) {
    console.log(`${this.name} esta duemriendo `)
    this.energia += length
}

animal.juega = function(length) {
    console.log(`${this.nombre} esta jugando `)
    this.energia -= length
}



// 🔴 Paso dos: meter todo en una función
/* 
Un método no es gran cosa. Sin embargo, los 
programas grandes a menudo tienen decenas 
de métodos que necesitan los objetos. 
Si un objeto necesita acceso a 20 métodos 
y creamos 100,000 objetos, el motor de JavaScript 
ha creado 2,000,000 nuevas funciones.
*/

function Animal (nombre, energia) {
let animal = {}
animal.nombre = nombre
animal.energia = energia

animal.come = function (suma) {
    console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
}

animal.duerme = function(length) {
    console.log(`${this.nombre} esta duemriendo `)
    this.energia += length
}

animal.juega = function(length) {
    console.log(`${this.nombre} esta jugando `)
    this.energia -= length
}

return animal;

};


//🔴 Paso tres: Pasamos los métodos a un nuevo objeto

function Animal (nombre, energia) {
let animal = Object.create(metodosAnimal)
animal.nombre = nombre
animal.energia = energia

return animal
}

const metodosAnimal = {

come (suma)  {
    console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
},

duerme (length) {
    console.log(`${this.nombre} esta duemriendo `)
    this.energia += length
},

juega (length) {
    console.log(`${this.nombre} esta jugando `)
    this.energia -= length
},

}





// 🔴 Paso cuatro: ¿Qué es un prototipo? 
//Es una propiedad de una función que apunta a un objeto

//Ahora sabemos construir una función constructora
//Esto es una función constructora 👇🏻
//porque está construyendo un objeto para nosotros
function Animal (nombre, energia) {
let animal = Object.create(Animal.prototype)
animal.nombre = nombre
animal.energia = energia

return animal
}

//Aquí estamos agregando métodos al prototype
//de funcion del constructor 👆🏻👇🏻
Animal.prototype.come =  function (suma) {
console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
}

Animal.prototype.duerme = function (length) {
console.log(`${this.nombre} esta duemriendo `)
    this.energia += length
}

Animal.prototype.juega = function (length) {
console.log(`${this.nombre} esta jugando `)
    this.energia -= length
}



// 🔴 Paso cuatro: agregando la palabra clave 'new'
//El código es mucho más limpio 

function AnimalConNew (nombre, energia) {
this.nombre = nombre
this.energia = energia
}

AnimalConNew.prototype.come =  function (suma) {
console.log( `${this.nombre} esta comiendo `)
    this.energia += suma
}

AnimalConNew.prototype.duerme = function (length) {
console.log(`${this.nombre} esta duemriendo `)
    this.energia += length
}

AnimalConNew.prototype.juega = function (length) {
console.log(`${this.nombre} esta jugando `)
    this.energia -= length
}

//🔴 Paso cinco: lo volvemos una clase 

class Animal {
constructor (nombre, energia) {
    this.nombre = nombre
    this.energia = energia
}
come() {

}
duerme() {

}
juega() {

}

}



/* 

Lo que tenemos ahí es una función 
que crea un objeto y al final lo retorna
habiendo agregado algunas propiedades

*/

const Benito = Animal('Benito', 100);
const Penelope = new AnimalConNew('Penelope', 100)
const Cora = Animal('Cora', 85);
console.log(Benito)
console.log(Penelope)
console.log(Cora)

Benito.juega(4)
Cora.duerme(80)
Cora.come(10)




//¿Dónde viven los métodos en JS?
Array.prototype

/* push, pop, todos los métodos que usamos en la clase
anterior viven dentro del objeto prototype. 

¿Cómo encuentras todos esos métodos? 
Ve a la consola del navegador y escribe:
Array.prototype
*/


//Ejemplo de herencia: 

const padre = {
nombre: 'Carlos',
edad: 50,
nacionalidad: 'mexicana'
}

const hijo = Object.create(padre)
hijo.nombre = 'Alfredo'
hijo.edad = 23
console.log(hijo.nombre)
console.log(hijo.edad)
console.log(hijo.nacionalidad)



//Ejemplo de soyUnaFuncion.prototype 
//Poner en el navegador 
function soyUnaFuncion () {}
soyUnaFuncion.prototype
//Un prototipo es una propiedad de una función que apunta a un objeto 
