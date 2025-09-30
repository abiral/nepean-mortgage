export const CalculatorLists = {
  REPAYMENT: "REPAYMENT",
  CAR_LOAN: "CAR_LOAN",
  EXTRA_REPAYMENT: "EXTRA_REPAYMENT",
  MORTGAGE_OFFSET: "MORTGAGE_OFFSET",
  SPLIT_LOAN: "SPLIT_LOAN",
} as const;

export type CalculatorLists =
  (typeof CalculatorLists)[keyof typeof CalculatorLists];
