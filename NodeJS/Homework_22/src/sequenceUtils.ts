export function generateFibonacci(num: number): number[] {
  if (num < 1) return [];
  const start: number[] = [0, 1];
  while (true) {
    const nextValue = start[start.length - 1] + start[start.length - 2];
    if (nextValue > num) break;
    start.push(nextValue);
  }
  return start;
}
export function generatePrimeNumbers(limit: number): number[] {
  if (limit < 2) return [];
  const primes: number[] = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}
