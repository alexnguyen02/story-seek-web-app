import React from 'react'; 
import noImageCover from "../../assets/no-image-available.jpg"; 
import { Star } from 'lucide-react';

export default function SingleBookPage({ book }) {
  /**
   * book object relevant info:
   *  {
   *    title: <string>
   *    authors: <array<string>>
   *    categories: <array<string>>
   *    imageLinks: { "smallThumbnail": <string>, "thumbnail": <string>}
   *    ratingsCount: <int>
   *    averageRating: <int>
   *    description: <string>
   *    publishedDate: <string(yyyy-mm-dd)>
   *  }
   * 
   */
  return (
    <div>
      <img
        src={book.imageLinks.thumbnail || book.imageLinks.smallThumbnail || noImageCover}
        alt={`${book.title} book cover`}
        className='w-full h-full object-cover round-xl'
      />
      <div>
        <h1>{book.title}</h1>
        <div className='flex'>
          {book.authors.map((author, index) => (
            <h2 key={index}>{author}</h2>
          ))}
        </div>
        <div>
          <div>
            {book.averageRating ? Array.from({ length: book.averageRating }).map((_, index) => (
              <Star key={index} className='inline' />
            )) : "No rating"}
          </div>
          <h3>Number of ratings: {book.ratingsCount}</h3>
        </div>
        <div>
          <p>{book.description}</p>
          <span>show more</span>
        </div>
        <h4>Genres: {book.categories.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}</h4>
        <h5>First published in {book.publishedDate}</h5>
      </div>
    </div>
  );
}