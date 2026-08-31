let n = 7;
let primes = new Array(n + 1).fill(true);

for (let i = 2; i <= Math.sqrt(n); i++) {
  for (let j = i * i; j <= n; j += i) {
    primes[j] = false;
  }
}

for (let i = 2; i <= primes.length; i++) {
  if (primes[i]) {
    process.stdout.write(i + " ");
  }
}
