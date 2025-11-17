import { createPortal } from 'react-dom';
import React from 'react';
import { modalStyle } from '@shared/ui/Modal.css.ts';

const MODAL_ROOT_ID = 'theme-root';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerId?: string;
};

const Modal = ({ open, onClose, children, containerId = 'theme-root' }: ModalProps) => {
  const container = document.getElementById(containerId || MODAL_ROOT_ID) || document.body;

  if (!open || !container) return null;

  const content = (
    <dialog onClose={onClose} className={modalStyle} open={open} closedby='any'>
      {children}
    </dialog>
  );
  return createPortal(content, container);
};

export default Modal;
