import { useModal, ModalType } from "../context/ModalContext";

export const useContactModal = () => {
  const { openModal, closeModal, modalState } = useModal();

  const openContactForm = (
    props?: Record<string, string | number | boolean | React.ReactNode>
  ) => {
    openModal(ModalType.CONTACT, props);
  };

  const closeContactForm = () => {
    closeModal();
  };

  const isContactFormOpen =
    modalState.type === ModalType.CONTACT && modalState.isOpen;

  return {
    openContactForm,
    closeContactForm,
    isContactFormOpen,
  };
};
