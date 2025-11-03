import Header from "./components/Header.tsx";
import List from "./components/List.tsx";
import { members } from "./mocks/members.ts";
import Card from "./components/Card.tsx";
import Search from "./components/Search.tsx";
import { useSearch } from "./hooks/useSearch.ts";

function App() {
  const { handleSearchChange, handleSearch, filteredMembers } = useSearch(members);

  return (
    <>
      <Header />
      <Search handleChange={handleSearchChange} onSearch={handleSearch} />
      <List
        contents={
          filteredMembers.map((member) => <Card key={member.id} {...member} />)
        }
      />
    </>
  );
}

export default App;
