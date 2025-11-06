import { useEffect, useRef } from "react";

export const useDialogControl = (open, onClose) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
    }
    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const handleCancel = (e) => {
    e.preventDefault();
    onClose();
  };

  return { dialogRef, handleCancel };
};
