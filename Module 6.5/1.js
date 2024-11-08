const num = 32;

if (num <= 0 || num <= 32) {
  console.log("You Fali");
} else if (num >= 33 && num < 40) {
  console.log("You get D");
} else if (num >= 40 && num < 50) {
  console.log("You get C");
} else if (num >= 50 && num < 60) {
  console.log("You get B");
} else if (num >= 60 && num < 70) {
  console.log("You get A-");
} else if (num >= 70 && num < 80) {
  console.log("You get A");
} else {
  console.log("You get A+");
}