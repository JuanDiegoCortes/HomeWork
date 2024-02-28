class  Stack {
    constructor(){
        this.stack = {};
        this.count = 0;   
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek(){
        return this.stack[this.count - 1];
    }

    size(){
        return this.count;
    }

    print(){
        console.log(this.stack);
    }    
}

class Books{
    constructor(name,ISBN,author,editorial){
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
    }
}

const book1 = new Books("Cien años de soledad", "978-0307474728", "Gabriel García Márquez", "Editorial Sudamericana");
const book2 = new Books("Don Quijote de la Mancha", "978-8424117867", "Miguel de Cervantes Saavedra", "Editorial Espasa Calpe");
const book3 = new Books("La casa de los espíritus", "978-8432210994", "Isabel Allende", "Editorial Seix Barral");

const pila = new Stack();

pila.push(book1);
pila.push(book2);
pila.push(book3);
pila.print();
