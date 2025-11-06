import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import { useDialogControl } from "../../features/comon/useDialogControl.js";

const MODAL_ROOT_ID = "modal-root";

const Modal = ({ open, onClose, children, containerId }) => {
  const { dialogRef, handleCancel } = useDialogControl(open, onClose);
  const container = document.getElementById(containerId || MODAL_ROOT_ID) || document.body;

  if (!open || !container) return null;

  const content = (
    <Dialog ref={dialogRef} onClose={onClose} onCancel={handleCancel}>
      {children}
    </Dialog>
  );
  return createPortal(content, container);
};

Modal.Title = ({ title }) => {
  return (
    <DialogTitle>{title}</DialogTitle>
  );
};

Modal.Text = ({ text, color, font }) => {
  return (
    <ModalText color={color} font={font}>
      {text}
    </ModalText>
  );
};

export default Modal;

const Dialog = styled.dialog`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 12px;
  padding: 40px 60px;
  max-width: min(90vw, 600px);
  width: fit-content;
  text-align: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
  }

  &::backdrop {
    background: rgba(0, 0, 0, 0.45);
  }
`;

const DialogTitle = styled.h3`
  font: ${({ theme }) => theme.fonts.h3};
`;

const ModalText = styled.p`
  font: ${({ theme, font }) => font ? font : theme.fonts.body1};
  color: ${({ theme, color }) => color ? color : theme.colors.grayScale.gray600};
`;
