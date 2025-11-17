import { ConfirmModal } from '@shared/ui';
import type { ModalProps } from '@shared/types/common.ts';

const LogoutModal = ({ open, onClose }: ModalProps) => {
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
      title='정말 로그아웃 하시겠어요?'
      description='로그아웃 하시면 로그인 페이지로 이동해요'
      confirmText='로그아웃'
      cancelText='취소'
      onConfirm={handleLogout}
      onCancel={handleCancel}
    />
  );
};

export default LogoutModal;
