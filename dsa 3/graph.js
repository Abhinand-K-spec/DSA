class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    
    addEdges(v1,v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
            throw new Error('no vertex');
        }
        if(!this.adjacencyList[v1].has(v2)){
            this.adjacencyList[v1].add(v2);
        }if(!this.adjacencyList[v2].has(v1)){
            this.adjacencyList[v2].add(v1);
        }
    }
    
    removeEdges(v1,v2){
        if(this.adjacencyList[v1].has(v2)){
            this.adjacencyList[v1].delete(v2);
        }
        if(this.adjacencyList[v2].has(v1)){
            this.adjacencyList[v2].delete(v1)
        }
    }
    
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return
        
        for(let adjVertex of this.adjacencyList[vertex]){
            this.adjacencyList[adjVertex].delete(vertex);
        }
        delete this.adjacencyList[vertex];
    }
    
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex,'-->',this.adjacencyList[vertex])
        }
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdges('A','B');
graph.addEdges('A','C');
graph.addEdges('A','D');
graph.addEdges('C','B');

graph.removeVertex('D')
graph.removeEdges('C','B')
graph.display()