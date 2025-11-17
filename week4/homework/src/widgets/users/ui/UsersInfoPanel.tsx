import UserSearchBar from '@features/users/ui/UserSearchBar.tsx';
import UserInfo from '@entities/users/ui/UserInfo.tsx';
import { Column, Loading, Text, Top } from '@shared/ui';
import { useSearch } from '@features/users/model/useSearch.ts';
import AsyncBoundary from '@shared/ui/AsyncBoundary.tsx';

const UsersInfoPanel = () => {
  const { input, query, handleChange, handleSearch } = useSearch();

  return (
    <Column spacing='xl'>
      <Top children={<Top.TitleParagraph>회원 조회</Top.TitleParagraph>} />
      <UserSearchBar value={input} handleChange={handleChange} onSearch={handleSearch} />
      <AsyncBoundary
        resetKey={[query]}
        rejectedFallback={(error) => <Text font='heading'>{error?.message}</Text>}
        pendingFallback={<Loading />}
      >
        {query && <UserInfo searchQuery={query} />}
      </AsyncBoundary>
    </Column>
  );
};

export default UsersInfoPanel;
