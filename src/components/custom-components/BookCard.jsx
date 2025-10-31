import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import noImageCover from "../../assets/no-image-available.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Star } from "lucide-react";

export default function BookCard({ book }) {

  return (
    <HoverCard className='w-full border-4'>
      <HoverCardTrigger asChild>
        <Card className="w-1/6 flex flex-col flex-1 py-0">
          <img
            src={book.imageLinks.thumbnail || book.imageLinks.smallThumbnail|| noImageCover}
            alt={`${book.title} book cover`}
            className="w-full h-full object-cover rounded-xl"
          />
        </Card>
      </HoverCardTrigger>
      <HoverCardContent side='right' className='p-0 w-[36rem] rounded-xl' sideOffset='1'>
        <Card className='full gap-0 px-3 py-3 border-4 border-ring'>
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>
              <p>By {book.authors}</p>
              <p>Published in {book.publishedDate}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>{book.description}</CardContent>
          <CardFooter className='flex justify-between'>
            <p>Rating: {Array.from ({ length: book.averageRating }).map((_, index) => (
              <Star key={index} className='inline'/>
            )) || "No rating found"}</p>
            <p>Number of ratings: {
                book.ratingCount || "No number of ratings found"}</p>
          </CardFooter>
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
}
