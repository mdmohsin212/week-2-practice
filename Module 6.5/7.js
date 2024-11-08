var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let ans = [];
for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  flag = false;

  for (let j = 0; j < numbers.length; j++) {
    if (ans[j] == element) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    ans.push(element);
  }
}
console.log(ans);
