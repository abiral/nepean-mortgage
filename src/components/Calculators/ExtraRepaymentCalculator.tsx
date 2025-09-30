import Modal from "../Shared/Modal";

interface ExtraRepaymentCalculatorProps {
  isOpen: boolean;
  onClose?: () => void;
}

const ExtraRepaymentCalculator = ({
  isOpen,
  onClose,
}: ExtraRepaymentCalculatorProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Extra Repayment Calculator"
      width={"100%"}
      height={"100%"}
    >
      <iframe
        src="https://dev.client1st.com.au/extrarepay/MzU2Mw==?access=external"
        title="Extra Repayment Calculator"
        width="100%"
        height="500"
        style={{ border: "none" }}
      ></iframe>
    </Modal>
  );
};

export default ExtraRepaymentCalculator;
