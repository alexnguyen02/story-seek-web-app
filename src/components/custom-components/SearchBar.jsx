import React, { useState } from 'react'; 
import { Input } from '../ui/input';

export default function SearchBar() {
  const [text, setText] = useState(''); 

  const handleUserInput = (e) => {
    console.log("Search Bar: Print user input", e.target.value); // Debug console
    setText(e.target.value); 
  }

  return (
    <div className='w-full'>
      <Input 
        type='search' 
        placeholder='Search by book names, authors, genre, etc.'
        onChange={handleUserInput}
      />
    </div>
  ); 
}