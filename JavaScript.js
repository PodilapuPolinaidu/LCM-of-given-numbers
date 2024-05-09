let num1 = prompt("Enter num1 value");
let num2 = prompt("Enter num2 value");
let lcm;
// let min = (num1 > num2) ? num1 : num2;
// while (true) {
//   if(min % num1 == 0 && min % num2 == 0){
//     document.write(`The lcm of ${num1} and ${num2} is: ${min}`);
//     break;
//   }
//   min++;
// }
let hcf;
for(let i = 1; i <= num1 && i <= num2; i++){
  if(num1 % i == 0 && num2 % i == 0){
    hcf = i;
  }
}
lcm = (num1 * num2)/hcf;
document.write(`The lcm of ${num1} and ${num2} is: ${lcm}`);