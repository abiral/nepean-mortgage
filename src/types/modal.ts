export const ModalType = {
  CONTACT: "CONTACT",
  CALCULATOR: "CALCULATOR",
} as const;

export type ModalType = (typeof ModalType)[keyof typeof ModalType];
