class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {}
    }

    addNode(node){
        this.nodes.push(node)
        this.adjList[node] = []
    }

    addEdge(node1, node2){
        this.adjList[node1].push(node2)
        this.adjList[node2].push(node1)
    }

    printGraph(){
        console.log(this.adjList)
    }

    searchNode(value){
        if(!this.nodes.length){
            return ;
        }
        return this.nodes.find(item => item === value);
    }

    printAdjacency(value){
        if(this.searchNode(value)){
            console.log(this.adjList[value])
        }else{
            return ;
        }
    }
}

const myGraph = new Graph();

myGraph.addNode("Julian");
myGraph.addNode("Veronica");
myGraph.addNode("Carlos");
myGraph.addNode("Camilo");
myGraph.addNode("Sarah");

myGraph.addNode("Monteria");
myGraph.addNode("Mocoa");
myGraph.addNode("Choachi");
myGraph.addNode("Carepa");
myGraph.addNode("Bogota");
myGraph.addNode("Cali");
// Julian
myGraph.addEdge("Julian", "Monteria");
myGraph.addEdge("Julian", "Mocoa");
// Veronica
myGraph.addEdge("Veronica", "Bogota");
myGraph.addEdge("Veronica", "Carepa");
//Carlos
myGraph.addEdge("Carlos", "Carepa");
myGraph.addEdge("Carlos", "Mocoa");
//Camilo
myGraph.addEdge("Camilo", "Choachi");
myGraph.addEdge("Camilo", "Monteria");
//Sarah
myGraph.addEdge("Sarah", "Bogota");
myGraph.addEdge("Sarah", "Cali");

console.log(myGraph.printGraph());

const cityToSearch = "Mocoa";
console.log(`Personas que viven en ${cityToSearch}:`);
myGraph.printAdjacency(cityToSearch);

