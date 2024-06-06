import React from "react";

interface SalaryCalculatorProps {
  salary: string;
  totalSalaryAmount: number;
  totalEarnings: number;
  totalEarningsForEPF: number;
  totalDeductions: number;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({
  salary,
  totalEarnings,
  totalEarningsForEPF,
  totalDeductions,
}) => {
  return (
    <div className="salary-calculator">
      <h1>Salary Details</h1>
      <p>Basic Salary: {salary}</p>
      <p>Total Earnings: {totalEarnings}</p>
      <p>Total Earnings for EPF/ETF: {totalEarningsForEPF}</p>
      <p>Total Deductions: {totalDeductions}</p>
    </div>
  );
};

export default SalaryCalculator;
