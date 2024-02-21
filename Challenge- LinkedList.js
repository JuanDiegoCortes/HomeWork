class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    append(node){
        const newNode = new Node(node)

        if (!this.head){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    peek(value,current = this.head){
        if (this.head === null){
            return false
        }

        if (current !== null){
            if(current.value === value){
                return true;
            }else{
                return this.peek(value,current.next)
            }
        }
        return false;
    }

    size(current = this.head, acum = 1){
        if (this.head === null){
            return 0
        }

        if (current.next != null){
            return this.size(current.next, acum = acum + 1)
        }
        return acum
    }

    remove(value, current = this.head){
        if (this.head === null){
            return false
        }
        if (this.head.value === value){
            return this.head = this.head.next
        }

        if (current.next != null){
            if (current.next.value === value){
                current.next = current.next.next;
                return true
            }else{
                return this.remove(value, curren.next)
            }
        }
    }

    print(){
        let node = this.head;
        while (node != null){
            console.log(`valor ${node.value} | next: ${node.next?.value || null }`)
            node = node.next
        }
    }
}

class Tareas{
    constructor(Titulo, Description, Points){
        this.Titulo = titulo;
        this.Description = descripcion;
        this.Points = puntos;
    }
}

const tarea1 = new Tareas("Despertar", "Despertarse a las 6 de la mañana", 90 );
const tarea2 = new Tareas("Desayunar", "Desayunar a las 8 de la mañana", 100 );
const tarea3 = new Tareas("Bañarse ", "Bañarse a las 10 de la mañana", 70 );
const tarea4 = new Tareas("Almorzar ", "Almorzar a las 12 del medio dia ", 120 );

const List = new LinkedList();

List.append(tarea1);
List.append(tarea2);
List.append(tarea3);
List.append(tarea4);

List.print();

