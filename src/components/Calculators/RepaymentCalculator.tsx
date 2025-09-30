import Modal from "../Shared/Modal";

interface RepaymentCalculatorProps {
  isOpen: boolean;
  onClose?: () => void;
}

const RepaymentCalculator = ({ isOpen, onClose }: RepaymentCalculatorProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Repayment Calculator"
      width={"100%"}
      height={"100%"}
    >
      <iframe
        src="https://dev.client1st.com.au/repay/MzU2Mw==?access=external"
        title="Repayment Calculator"
        width="100%"
        height="900"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
};

export default RepaymentCalculator;
