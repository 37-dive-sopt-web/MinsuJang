import React, { useState } from 'react';

export const useSearch = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    if (!input) return;
    setQuery(input);
  };

  return { input, query, handleChange, handleSearch };
};
