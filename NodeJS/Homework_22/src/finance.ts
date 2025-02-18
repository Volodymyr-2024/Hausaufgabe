export namespace Finance {
  export class LoanCalculator {
    static calculateMonthlyPayment(
      principal: number,
      annualRate: number,
      years: number
    ): number {
      const monthlyRate = annualRate / 100 / 12;
      const totalPayments = years * 12;

      if (monthlyRate === 0) {
        return principal / totalPayments;
      }

      return (
        (principal * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments))
      );
    }
  }
  export class TaxCalculator {
    static calculateIncomeTax(income: number, taxRate: number): number {
      return (income * taxRate) / 100;
    }
  }
}
