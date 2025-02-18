import { Finance } from "./finance";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";
import { capitalize, reverseString } from "./stringUtils";
import { userManagement } from "./userManagement";

console.log(capitalize("hello world"));
console.log(reverseString("dlrow olleH"));
const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(
  100000,
  5,
  15
);
console.log("Ежемесячный платеж:", monthlyPayment);

const incomeTax = Finance.TaxCalculator.calculateIncomeTax(50000, 20);
console.log("Налог на доход:", incomeTax);
const admin = new userManagement.Admin.AdminUser(
  "Иван",
  "ivan@example.com",
  true
);
console.log(admin);
admin.changeAdmin(false);
console.log(admin);
console.log(generateFibonacci(10));
console.log(generatePrimeNumbers(10));
