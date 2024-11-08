const a = [
  14, 3, 19, 7, 10, 1, 15, 8, 12, 20, 5, 2, 17, 9, 6, 13, 4, 16, 11, 18,
];

for (let i = 0; i < a.length; i++) {
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
  }
}

console.log(a);