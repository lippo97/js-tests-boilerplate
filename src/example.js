function fibonacci(n) {
  const cache = [0, 1];
  for (let i = 2; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
}

module.exports = {
  fibonacci,
};