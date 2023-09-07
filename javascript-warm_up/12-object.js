let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 89, 13, 14, 15];

numbers = numbers.map((number) => (number === 12 ? 89 : number));

console.log(numbers);
