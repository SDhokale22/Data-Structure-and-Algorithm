/*
class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node, new Set([{adj, weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
    }

    getEdges(node){
        return this.adjList.get(node);
    }

    getAllNodes(){
        return Array.from(this.adjList.keys());
    }

    print(){
        console.log(this.adjList);
    }
}

var g = new Graph();
g.addEdge(0,1,0);
g.addEdge(0,2,0);
g.addEdge(1,2,0);

g.print();

//2.Implementing priority queue

class GraphNode{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,weight){
        var graphNode = new GraphNode(element, weight);
        var contain = false;
        var i = 0;

        while (i < this.items.length && !contain){
            if (this.items[i].weight > graphNode.weight){
                this.items.splice(i,0,graphNode);
                contain = true;
            }
            i++;
        }

        if (!contain){
            this.items.push(graphNode);
        }

    }

    dequeue(){
        if(this.items.length == 0){
            throw "StackUnderflow";
        }else{
            return this.items.shift()
        }
    }

    print(){
        console.log(this.items);
    }
}

class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node, new Set([{adj, weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
    }

    getEdges(node){
        return this.adjList.get(node);
    }

    getAllNodes(){
        return Array.from(this.adjList.keys());
    }

    print(){
        console.log(this.adjList);
    }
}

var pq = new PriorityQueue();
pq.enqueue(1,10);
pq.enqueue(2,5);
pq.enqueue(3,0);
pq.enqueue(4,20);
pq.print();

//Dijakstra Algorithm

class GraphNode{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,weight){
        var graphNode = new GraphNode(element, weight);
        var contain = false;
        var i = 0;

        while (i < this.items.length && !contain){
            if (this.items[i].weight > graphNode.weight){
                this.items.splice(i,0,graphNode);
                contain = true;
            }
            i++;
        }

        if (!contain){
            this.items.push(graphNode);
        }

    }

    dequeue(){
        if(this.items.length == 0){
            throw "StackUnderflow";
        }else{
            return this.items.shift()
        }
    }

    print(){
        console.log(this.items);
    }
}

class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node, new Set([{adj, weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
        if(adj != node){
            this.addEdgeHelper(adj,node,weight);
        }
    }

    getEdges(node){
        return this.adjList.get(node);
    }

    getAllNodes(){
        return Array.from(this.adjList.keys());
    }

    print(){
        console.log(this.adjList);
    }
}

function dijkstra(g,source){

    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    distances[source] = 0;
    pq.enqueue(source,0);

    var allNodes = g.getAllNodes();

    for (var i = 0; i < allNodes.length; i++){
        if (allNodes[i] != source){
            distances[allNodes[i]] = Infinity;
        }
        prev[allNodes[i]] = null;
    }

    while (!pq.isEmpty()){
        let minNode = pq.dequeue();
        let currNode = minNode.name;

        let adjList = g.getEdges(minNode.name);

        for (const [key,value] of adjList.entries()){
            let alt = distances[currNode] + key.weight;

            if (alt < distances[key.adj]){
                distances[key.adj] = alt;
                prev[key.adj] = currNode;

                pq.enqueue(key.adj,distances[key.adj]);
            }
        }
    }
    console.log(distances);   
}

var g = new Graph();
g.addEdge(0,1,13);
g.addEdge(0,2,15);
g.addEdge(0,3,30);
g.addEdge(3,4,10);

dijkstra(g,0);

//Recursion

class GraphNode{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,weight){
        var graphNode = new GraphNode(element, weight);
        var contain = false;
        var i = 0;

        while (i < this.items.length && !contain){
            if (this.items[i].weight > graphNode.weight){
                this.items.splice(i,0,graphNode);
                contain = true;
            }
            i++;
        }

        if (!contain){
            this.items.push(graphNode);
        }

    }

    dequeue(){
        if(this.items.length == 0){
            throw "StackUnderflow";
        }else{
            return this.items.shift()
        }
    }

    print(){
        console.log(this.items);
    }
}

class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node, new Set([{adj, weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
        if(adj != node){
            this.addEdgeHelper(adj,node,weight);
        }
    }

    getEdges(node){
        return this.adjList.get(node);
    }

    getAllNodes(){
        return Array.from(this.adjList.keys());
    }

    print(){
        console.log(this.adjList);
    }
}

function dijkstra(g,source){

    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    distances[source] = 0;
    pq.enqueue(source,0);

    var allNodes = g.getAllNodes();

    for (var i = 0; i < allNodes.length; i++){
        if (allNodes[i] != source){
            distances[allNodes[i]] = Infinity;
        }
        prev[allNodes[i]] = null;
    }

    while (!pq.isEmpty()){
        let minNode = pq.dequeue();
        let currNode = minNode.name;

        let adjList = g.getEdges(minNode.name);

        for (const [key,value] of adjList.entries()){
            let alt = distances[currNode] + key.weight;

            if (alt < distances[key.adj]){
                distances[key.adj] = alt;
                prev[key.adj] = currNode;

                pq.enqueue(key.adj,distances[key.adj]);
            }
        }
    }
    console.log(distances);   
}

function sumToNRec(n){
    if(n == 1){
        return 1;
    }else{
        return n + sumToNRec(n-1);
    }
}

console.log(sumToNRec(3));

//Degrees of a graph

class GraphNode{
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
}

class PriorityQueue{
    constructor(){
        this.items = [];
    }

    enqueue(element,weight){
        var graphNode = new GraphNode(element, weight);
        var contain = false;
        var i = 0;

        while (i < this.items.length && !contain){
            if (this.items[i].weight > graphNode.weight){
                this.items.splice(i,0,graphNode);
                contain = true;
            }
            i++;
        }

        if (!contain){
            this.items.push(graphNode);
        }

    }

    dequeue(){
        if(this.items.length == 0){
            throw "StackUnderflow";
        }else{
            return this.items.shift()
        }
    }

    print(){
        console.log(this.items);
    }
}

class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addEdgeHelper(node,adj,weight){
        if(this.adjList.has(node)){
            var currSet = this.adjList.get(node);
            currSet.add({adj,weight});
            this.adjList.set(node,currSet);
        }else{
            this.adjList.set(node, new Set([{adj, weight}]));
        }
    }

    addEdge(node,adj,weight){
        this.addEdgeHelper(node,adj,weight);
        if(adj != node){
            this.addEdgeHelper(adj,node,weight);
        }
    }

    getEdges(node){
        return this.adjList.get(node);
    }

    getAllNodes(){
        return Array.from(this.adjList.keys());
    }

    print(){
        console.log(this.adjList);
    }
}

function dijkstra(g,source){

    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    distances[source] = 0;
    pq.enqueue(source,0);

    var allNodes = g.getAllNodes();

    for (var i = 0; i < allNodes.length; i++){
        if (allNodes[i] != source){
            distances[allNodes[i]] = Infinity;
        }
        prev[allNodes[i]] = null;
    }

    while (!pq.isEmpty()){
        let minNode = pq.dequeue();
        let currNode = minNode.name;

        let adjList = g.getEdges(minNode.name);

        for (const [key,value] of adjList.entries()){
            let alt = distances[currNode] + key.weight;

            if (alt < distances[key.adj]){
                distances[key.adj] = alt;
                prev[key.adj] = currNode;

                pq.enqueue(key.adj,distances[key.adj]);
            }
        }
    }
    console.log(distances);   
}

function degree(g){
    var nodes = g.getAllNodes();
    var degrees = new Map();

    for(var i = 0; i < nodes.length; i++){
        var adj = g.adjList.get(nodes[i]);

        for(const [key,value] of adj.entries()){
            if(degrees.has(key.adj)){
                degrees.set(key.adj, degrees.get(key.adj) + 1);
            }else{
                degrees.set(key.adj,1);
            }
        }
    }
    console.log(degrees);
}

var g = new Graph();
g.addEdge(0,1,13);
g.addEdge(0,2,15);
g.addEdge(0,3,30);
g.addEdge(3,4,10);

degree(g);
*/
//
