function numbersOfFibonacci(n) {
  const arr = [0, 1];
  if (n === 0) {
    return console.log("0");
  } else if (n == 1) {
    return console.log("0,1");
  }

  for (let i = 2; i <= n; i++) {
    next = arr[i - 1] + arr[i - 2];
    arr.push(next);
  }
  console.log(arr.toString());
}
numbersOfFibonacci(10);





const arr = [0, 1];

function numbersOfFibonacciRecurse(n) {
  if (n === 0) {
    return console.log("0");
  } else if (n === 1) {
    return console.log("0,1");
  }
  const next = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(next);
  if (n > 2) {
    numbersOfFibonacciRecurse(n - 1);
  }
  if (n === 2) {
    return console.log(arr.toString());
  }
}
numbersOfFibonacciRecurse(10);
