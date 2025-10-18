import React, { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardDescription,
  CardContent,
  CardAction,
} from "../ui/card";
import { Button } from "../ui/button";
// Make sure no-image-available.jpg stays in src/assets while other dynamic images go in public/assets
import noImageCover from '../../assets/no-image-available.jpg';
import { getImageURL } from "../../utils/image-util";

export default function BookCard({ book }) {
  const [imageUrl, setImageUrl] = useState(''); 

  useEffect(() => {
    import(`../../assets/${book.imageName}`)
      .then(module => setImageUrl(module.default))
      .catch(err => console.error(err))
  }, [book.imageName])

  return (
    <Card className="w-full flex flex-row">
        <div className="w-1/6 pl-6">
          <img
            src={imageUrl || noImageCover}
            alt={`${book.title} book cover`}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription className='flex space-x-6'>
              <p>Author: {book.author}</p>
              <p>Published Year: {book.publishedDate}</p>
              <p>Publisher: {book.publisher}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            {book.description}
          </CardContent>
          <CardFooter className=' mt-auto justify-end'>
            <CardAction>
              <Button>View details</Button>
            </CardAction>
          </CardFooter>
        </div>
      </Card>
  ); 
}