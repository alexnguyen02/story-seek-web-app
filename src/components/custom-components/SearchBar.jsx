import React, { useState } from 'react'; 
import { Input } from '../ui/input';
import { useBook } from '../..//hooks/BookContext';

export default function SearchBar() {
  const [query, setQuery] = useState(''); 
  const { searchByQuery, bookItemsByQuery } = useBook();

  const handleUserInput = (e) => {
    console.log("Search Bar: Print user input", e.target.value); // Debug console
    setQuery(e.target.value); 
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Call to API
      searchByQuery({ query: e.target.value }); 
    }
  }

  return (
    <div className='w-full'>
      <Input 
        type='search' 
        placeholder='Search by book names, authors, genre, etc.'
        onChange={handleUserInput}
        onKeyDown={handleSearch}
      />
    </div>
  ); 
}