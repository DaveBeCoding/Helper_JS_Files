/*
const graph = { 
f: ['g', 'i],
g: ['h]
h: [],
i: ['g', 'k;],
j: ['i'],
k: []
}

hashPath(graph, 'f', 'k');
*/

const dfs_hashPath = (graph, src, dst) => {
  if (src == dst) return true;

  for (let neighbor of graph[src]) {
    if (dfs_hashPath(graph, neighbor, dst) == true) {
      return true;
    }
  }
  return false;
};

const bfs_hashPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift(); //front
    if (current == dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor); // back
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  /*
                                                   |y|
  does not flip stack, runs what it see's [x y] != |x|
  */
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const r_value = dfs_hashPath(graph, "f", "k");

const r2_value = bfs_hashPath(graph, "f", "k");

// console.log("The result is r -> " + r_value);
// console.log("The result is r2 -> " + r2_value);
