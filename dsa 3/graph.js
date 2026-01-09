class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdges(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw new Error('node vertex');
        }
        if(!this.adjacencyList[v1].includes(v2)){
            this.adjacencyList[v1].push(v2);
        }
        if(!this.adjacencyList[v2].includes(v1)){
            this.adjacencyList[v2].push(v1);
        }
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,'>>>',this.adjacencyList[vertex])
        }
    }
}



let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')

graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('B','C')
graph.addEdges('A','D')
graph.display()