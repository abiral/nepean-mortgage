import Modal from "../Shared/Modal";

interface CarLoanCalculatorProps {
  isOpen: boolean;
  onClose?: () => void;
}

const CarLoanCalculator = ({ isOpen, onClose }: CarLoanCalculatorProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Car Loan Calculator"
      width={"100%"}
      height={"100%"}
    >
      <iframe
        src="https://dev.client1st.com.au/carloan/MzU2Mw==?access=external"
        title="Car Loan Calculator"
        width="100%"
        height="900"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
};

export default CarLoanCalculator;
