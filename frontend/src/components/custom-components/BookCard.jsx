import React, {useState} from "react";
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
import { Link } from "react-router"; 

export default function BookCard({ bookInfo, bookId }) {
  /**
   * book object relevant info:
   *  {
   *    id: <string>
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
    <HoverCard className='w-full border-4'>
      <HoverCardTrigger asChild>
        <Link to={`/book/${bookId}`}>
          <Card
            className="w-full flex flex-col flex-1 py-0 border border-foreground">
            <img
              src={bookInfo.imageLinks?.thumbnail ?? noImageCover }
              alt={`${bookInfo.title} book cover`}
              className="w-full h-full object-cover rounded-xl"
            />
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent side='right' className='p-0 w-[450px] rounded-xl' sideOffset='1'>
        <Card className='full gap-0 px-3 py-3 border-4 border-ring'>
          <CardHeader>
            <CardTitle>{bookInfo.title}</CardTitle>
            <CardDescription>
              <p>By {bookInfo.authors}</p>
              <p>Published in {bookInfo.publishedDate}</p>
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col'>
            <p className="line-clamp-5">{bookInfo.description}</p>
            {/* TODO: Read more button leads to the book's individual page */}
            <button className="self-end">Read more</button>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <p>Rating: {bookInfo.averageRating ? Array.from ({ length: bookInfo.averageRating }).map((_, index) => (
              <Star key={index} className='inline'/>)) : "No rating"}</p>
            <p>Number of ratings: {
                bookInfo.ratingsCount || "N/A"}</p>
          </CardFooter>
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
}
