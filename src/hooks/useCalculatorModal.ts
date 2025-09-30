import { useModal, ModalType } from "../context/ModalContext";
import { CalculatorLists } from "../components/Calculators/types";

export const useCalculatorModal = () => {
  const { openModal, closeModal, modalState } = useModal();

  const openCalculator = (
    calculatorType: CalculatorLists,
    props?: Record<string, string | number | boolean | React.ReactNode>
  ) => {
    openModal(ModalType.CALCULATOR, { name: calculatorType, ...props });
  };

  const closeCalculator = () => {
    closeModal();
  };

  const isCalculatorOpen =
    modalState.type === ModalType.CALCULATOR && modalState.isOpen;

  return {
    openCalculator,
    closeCalculator,
    isCalculatorOpen,
  };
};
