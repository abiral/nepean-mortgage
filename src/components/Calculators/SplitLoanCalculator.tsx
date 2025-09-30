import Modal from "../Shared/Modal";

interface SplitLoanCalculatorProps {
  isOpen: boolean;
  onClose?: () => void;
}

const SplitLoanCalculator = ({ isOpen, onClose }: SplitLoanCalculatorProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Split Loan Calculator"
      width={"100%"}
      height={"100%"}
    >
      <iframe
        src="https://dev.client1st.com.au/split/MzU2Mw==?access=external"
        title="Split Loan Calculator"
        width="100%"
        height="900"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
};

export default SplitLoanCalculator;
