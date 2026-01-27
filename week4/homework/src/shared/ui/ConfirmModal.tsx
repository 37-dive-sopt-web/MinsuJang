import Modal from '@shared/ui/Modal.tsx';
import Text from '@shared/ui/Text.tsx';
import Row from '@shared/ui/Row.tsx';
import { Button } from '@shared/ui/index.ts';
import type { ModalProps } from '@shared/types/common.ts';

type ConfirmModalProps = ModalProps & {
  title: string;
  description?: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
};

const ConfirmModal = ({
  open,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
  title,
  description,
  onClose,
}: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      {title && <Text font='heading'>{title}</Text>}
      {description && <Text font='body'>{description}</Text>}
      <Row>
        <Button
          label={cancelText}
          type='button'
          onClick={onCancel}
          tone={'secondary'}
          fullWidth={true}
        />
        <Button
          label={confirmText}
          type='button'
          onClick={onConfirm}
          tone={'red'}
          fullWidth={true}
        />
      </Row>
    </Modal>
  );
};

export default ConfirmModal;
