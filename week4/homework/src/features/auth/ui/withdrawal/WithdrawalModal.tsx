import { ConfirmModal } from '@shared/ui';
import type { ModalProps } from '@shared/types/common.ts';
import { useDeleteUser } from '@features/users/model/useDeleteUser.ts';

const WithdrawalModal = ({ open, onClose }: ModalProps) => {
  const { mutate, isPending } = useDeleteUser();
  const handleWithdrawal = () => {
    mutate('1');
    onClose();
  };
  const handleCancel = () => {
    onClose();
  };

  const confirmText = isPending ? '탈퇴중...' : '탈퇴'

  return (
    <ConfirmModal
      open={open}
      onClose={onClose}
      title='정말 탈퇴 하시겠어요?'
      description='탈퇴 후에는 모든 정보가 삭제돼요'
      confirmText={confirmText}
      cancelText='취소'
      onConfirm={handleWithdrawal}
      onCancel={handleCancel}
    />
  );
};

export default WithdrawalModal;
