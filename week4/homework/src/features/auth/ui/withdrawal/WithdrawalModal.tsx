import { ConfirmModal } from '@shared/ui';
import type { ModalProps } from '@shared/types/common.ts';

const WithdrawalModal = ({ open, onClose }: ModalProps) => {
  const handleLogout = () => {
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };

  return (
    <ConfirmModal
      open={open}
      onClose={onClose}
      title='정말 탈퇴 하시겠어요?'
      description='탈퇴 후에는 모든 정보가 삭제돼요'
      confirmText='탈퇴'
      cancelText='취소'
      onConfirm={handleLogout}
      onCancel={handleCancel}
    />
  );
};

export default WithdrawalModal;
