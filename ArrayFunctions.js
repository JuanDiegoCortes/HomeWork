// length
let frutas = ['manzana', 'plátano', 'naranja'];
console.log(frutas.length); // Salida: 3

// concat
let frutas1 = ['manzana', 'plátano'];
let frutas2 = ['naranja', 'uva'];
let frutasCombinadas = frutas1.concat(frutas2);
console.log(frutasCombinadas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']

// copyWithin
let numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(0, 3, 5);
console.log(numeros); // Salida: [4, 5, 3, 4, 5]

// entries
let frutasIterator = frutas.entries();
for (let entrada of frutasIterator) {
  console.log(entrada);
}
// Salida:
// [0, 'manzana']
// [1, 'plátano']
// [2, 'naranja']

// every
let numerosPares = [2, 4, 6, 8];
let todosPares = numerosPares.every(num => num % 2 === 0);
console.log(todosPares); // Salida: true

// fill
let arreglo = [1, 2, 3, 4, 5];
arreglo.fill(0);
console.log(arreglo); // Salida: [0, 0, 0, 0, 0]

// filter
let numerosFiltrados = numerosPares.filter(num => num > 4);
console.log(numerosFiltrados); // Salida: [6, 8]

// find
let primerPar = numerosPares.find(num => num % 2 === 0);
console.log(primerPar); // Salida: 2

// findIndex
let indicePrimerPar = numerosPares.findIndex(num => num % 2 === 0);
console.log(indicePrimerPar); // Salida: 0

// findLastIndex
let ultimoIndicePar = numerosPares.findLastIndex(num => num % 2 === 0);
console.log(ultimoIndicePar); // Salida: 3

// flat
let numerosAnidados = [1, [2, 3], [4, [5, 6]]];
let numerosAplanados = numerosAnidados.flat(2);
console.log(numerosAplanados); // Salida: [1, 2, 3, 4, 5, 6]

// flatMap
let numerosDuplicados = numeros.flatMap(num => [num, num * 2]);
console.log(numerosDuplicados); // Salida: [1, 2, 2, 4, 3, 6]

// forEach
numeros.forEach(num => console.log(num * 2));
// Salida:
// 2
// 4
// 6
// 8
// 10

// includes
console.log(frutas.includes('naranja')); // Salida: true

// indexOf
console.log(frutas.indexOf('plátano')); // Salida: 1

// join
console.log(frutas.join(', ')); // Salida: 'manzana, plátano, naranja'

// keys
let keysIterator = frutas.keys();
for (let key of keysIterator) {
  console.log(key);
}
// Salida:
// 0
// 1
// 2

// lastIndexOf
console.log(frutas.lastIndexOf('naranja')); // Salida: 2

// map
let cuadradosNumeros = numeros.map(num => num * num);
console.log(cuadradosNumeros); // Salida: [1, 4, 9, 16, 25]

// pop
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Salida: 'naranja'
console.log(frutas); // Salida: ['manzana', 'plátano']

// push
frutas.push('uva');
console.log(frutas); // Salida: ['manzana', 'plátano', 'uva']

// reduce
let sumaNumeros = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(sumaNumeros); // Salida: 15

// reduceRight
let sumaNumerosDerecha = numeros.reduceRight((acc, curr) => acc + curr, 0);
console.log(sumaNumerosDerecha); // Salida: 15

// reverse
frutas.reverse();
console.log(frutas); // Salida: ['uva', 'plátano', 'manzana']

// shift
let primeraFruta = frutas.shift();
console.log(primeraFruta); // Salida: 'uva'
console.log(frutas); // Salida: ['plátano', 'manzana']

// slice
let frutasSeleccionadas = frutas.slice(1, 2);
console.log(frutasSeleccionadas); // Salida: ['manzana']

// some
let hayPlatano = frutas.some(fruta => fruta === 'plátano');
console.log(hayPlatano); // Salida: true

// sort
let frutasDesordenadas = ['naranja', 'manzana', 'uva', 'plátano'];
frutasDesordenadas.sort();
console.log(frutasDesordenadas); // Salida: ['manzana', 'naranja', 'plátano', 'uva']

// splice
let frutasCambiadas = ['manzana', 'pera', 'naranja'];
frutasCambiadas.splice(1, 1, 'plátano', 'uva');
console.log(frutasCambiadas); // Salida: ['manzana', 'plátano', 'uva', 'naranja']

// unshift
frutas.unshift('cereza');
console.log(frutas); // Salida: ['cereza', 'plátano', 'manzana']


