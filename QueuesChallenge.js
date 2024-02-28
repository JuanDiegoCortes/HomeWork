class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }
    
    isEmpty(){
        return this.queue.length === 0;
    }

    print(){
        return this.queue;
    }
}

class people{
    constructor(name,arrivedTime){
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

const persona1 = new people("Juan", "9:10");
const persona2 = new people("Pedro", "9:15");
const persona3 = new people("Miguel", "9:20");

const cola = new Queue();

cola.enqueue(persona1);
cola.enqueue(persona2);
cola.enqueue(persona3);
cola.dequeue(persona1);
cola.print();

