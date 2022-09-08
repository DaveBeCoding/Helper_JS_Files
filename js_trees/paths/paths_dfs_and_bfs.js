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

const hashPath = (graph, src, dst) => {
  if (src == dst) return true;

  for (let neighbor of graph[src]) {
    if (hashPath(graph, neighbor, dst) == true) {
      return true;
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

const r_value = hashPath(graph, "f", "k");

console.log("The result is -> " + r_value);
