depthBS = (graph, source) => {
    console.log(source);
    for (let neighbor of graph[source]) {
        depthBS(graph, neighbor)
    }
};

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

depthBS(graph, 'a')
