const sumThreeNumbers = () => {
  let sum = 0;
  for (let i = 1; i <= 3; i++) {
    let input;
    do {
      input = prompt(`Введите число ${i}:`);
      if (input.trim() === "" || isNaN(Number(input))) {
        alert(`Введите корректное число ${i}:`);
      }
    } while (input.trim() === "" || isNaN(Number(input)));
    sum += Number(input);
  }
  alert(`Сумма введенных чисел равна: ${sum}`);
};
sumThreeNumbers();
