import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import { useBook } from "../../hooks/BookContext";

export default function BookCarousel() {
  const [bookArr, setBookArr] = useState(null); 
  const { bookItemsByQuery } = useBook(); 

  useEffect(() => {
    setBookArr(bookItemsByQuery); 
  }, [bookItemsByQuery])

  return (
    <div className='w-full flex gap-2'>
      {bookArr && bookArr.map((book, index) => {
        console.log(book); 
        return (
          <BookCard book={book.volumeInfo} key={index}/>
        ); 
      })}
    </div>
  );
}
