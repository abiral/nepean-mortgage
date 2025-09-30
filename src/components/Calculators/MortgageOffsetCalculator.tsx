import Modal from "../Shared/Modal";

interface MortgageOffsetCalculatorProps {
  isOpen: boolean;
  onClose?: () => void;
}

const MortgageOffsetCalculator = ({
  isOpen,
  onClose,
}: MortgageOffsetCalculatorProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Mortgage Offset Calculator"
      width={"100%"}
      height={"100%"}
    >
      <iframe
        src="https://dev.client1st.com.au/offset/MzU2Mw==?access=external"
        title="Mortgage Offset Calculator"
        width="100%"
        height="900"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
};

export default MortgageOffsetCalculator;
