import { createContext, useContext, useState, type ReactNode } from "react";

export const ModalType = {
  CONTACT: "CONTACT",
  CALCULATOR: "CALCULATOR",
} as const;

export type ModalType = (typeof ModalType)[keyof typeof ModalType];

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
  props?: Record<string, string | number | boolean | React.ReactNode>;
}

interface ModalContextType {
  modalState: ModalState;
  openModal: (
    type: ModalType,
    props?: Record<string, string | number | boolean | React.ReactNode>
  ) => void;
  closeModal: () => void;
}

const defaultState: ModalState = {
  type: null,
  isOpen: false,
  props: {},
};

const ModalContext = createContext<ModalContextType>({
  modalState: defaultState,
  openModal: () => {},
  closeModal: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalState, setModalState] = useState<ModalState>(defaultState);

  const openModal = (
    type: ModalType,
    props: Record<string, string | number | boolean | React.ReactNode> = {}
  ) => {
    setModalState({
      type,
      isOpen: true,
      props,
    });
  };

  const closeModal = () => {
    setModalState(defaultState);
  };

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
