import React from "react";
import BookCard from "./BookCard";

export default function BookCarousel() {
  const tempData = {
    '01': {
      'title': "Harry Potter and the Philosopher Stone", 
      'author': "J.K.Rowling", 
      'publishedDate': '1990', 
      'publisher': "bob-house", 
      'description':"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nemo aliquam officia magni ipsa sunt ipsum est provident laboriosam minima, ea explicabo deserunt inventore praesentium consequuntue accusamus amet perferendis sint.",
      'imageName': "harry-potter-cover.jpg"
    }
  }

  return (
    <div>
      <BookCard book={tempData['01']}/>
    </div>
  );
}
