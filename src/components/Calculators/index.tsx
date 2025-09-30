import ExtraRepaymentCalculator from "./ExtraRepaymentCalculator";
import RepaymentCalculator from "./RepaymentCalculator";
import MortgageOffsetCalculator from "./MortgageOffsetCalculator";
import SplitLoanCalculator from "./SplitLoanCalculator";
import CarLoanCalculator from "./CarLoanCalculator";
import { CalculatorLists } from "./types";

interface CalculatorsProps {
  name: CalculatorLists;
  onClose?: () => void;
}

const Calculators = ({ name, onClose }: CalculatorsProps) => {
  return (
    <>
      <RepaymentCalculator
        isOpen={name === CalculatorLists.REPAYMENT}
        onClose={onClose}
      />
      <ExtraRepaymentCalculator
        isOpen={name === CalculatorLists.EXTRA_REPAYMENT}
        onClose={onClose}
      />
      <MortgageOffsetCalculator
        isOpen={name === CalculatorLists.MORTGAGE_OFFSET}
        onClose={onClose}
      />
      <SplitLoanCalculator
        isOpen={name === CalculatorLists.SPLIT_LOAN}
        onClose={onClose}
      />
      <CarLoanCalculator
        isOpen={name === CalculatorLists.CAR_LOAN}
        onClose={onClose}
      />
    </>
  );
};

export default Calculators;
