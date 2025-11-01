import type { Member } from "../types/member.ts";
import { useState } from "react";
import * as React from "react";

export const useSearch = (initialMembers: Member[]) => {
  const [search, setSearch] = useState<string>("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(initialMembers);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    setSearch("");
    const members = initialMembers.filter((member) =>
      member.name.includes(search) || member.englishName.includes(search) || member.github.includes(search));
    setFilteredMembers(members);
  };

  return { search, filteredMembers, handleSearchChange, handleSearch };
};
