function monthlySaving(incomes, cost) {
  if (Array.isArray(incomes) == true || isNaN(cost) != true) {
    let total = 0;
    for (let i = 0; i < incomes.length; i++) {
      if (incomes[i] >= 3000) {
        total += incomes[i] - incomes[i] * 0.2;
      } else {
        total += incomes[i];
      }
    }
    const remain = total - cost;
    if (remain < 0) {
      console.log("earn more!");
    } else {
      console.log(remain);
    }
  } else {
    console.log("invalid input!");
  }
}

monthlySaving([1000, 2000, 3000], 5400);
monthlySaving([1000, 2000, 2500], 5000);
monthlySaving([900, 2700, 3500], 10000);
monthlySaving(100, [900, 2700, 3400]);
