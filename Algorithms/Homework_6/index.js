function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((el) => el < pivot);
  const middle = arr.filter((el) => el === pivot);
  const right = arr.filter((el) => el > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 5, 2, 1]));



function quickSortIterative(arr) {
  if (arr.length <= 1) return arr;

  const stack = [[0, arr.length - 1]];

  while (stack.length) {
    const [start, end] = stack.pop();
    if (start >= end) continue;

    const pivotIndex = partition(arr, start, end);
    stack.push([start, pivotIndex - 1]);
    stack.push([pivotIndex + 1, end]);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

console.log(quickSortIterative([3, 6, 8, 10, 5, 2, 1]));
