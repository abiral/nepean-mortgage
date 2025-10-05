import { lazy, Suspense } from "react";
import { useModal, ModalType } from "../context/ModalContext";
import { CalculatorLists } from "./Calculators/types";

// Lazy load modal components
const Contact = lazy(() => import("./Contact"));
const Calculators = lazy(() => import("./Calculators"));

const ModalManager = () => {
  const { modalState, closeModal } = useModal();

  if (!modalState.isOpen || !modalState.type) {
    return null;
  }

  const renderModal = () => {
    switch (modalState.type) {
      case ModalType.CONTACT:
        return (
          <Contact
            isOpen={modalState.isOpen}
            onClose={closeModal}
            {...modalState.props}
          />
        );
      case ModalType.CALCULATOR:
        return (
          <Calculators
            name={modalState.props?.name as CalculatorLists}
            onClose={closeModal}
            {...modalState.props}
          />
        );
      default:
        return null;
    }
  };

  return <Suspense fallback={null}>{renderModal()}</Suspense>;
};

export default ModalManager;
