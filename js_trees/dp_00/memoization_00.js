const f = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n == 0) return 0;
  if (n == 1 || n == 2) return 1;
  memo[n] = f(n - 1, memo) + f(n - 2, memo);
  return memo[n];
};

// cgl hotkey
console.log(f(6));
console.log(f(7));
console.log(f(8));
console.log(f(50));
