import React, { useEffect, useState } from "react";
import noImageCover from "../../assets/no-image-available.jpg";
import { Book, Star, ArrowDown, ArrowUp } from "lucide-react";
import { useParams } from "react-router";
import { useBook } from "../../hooks/BookContext";

export default function BookDetails() {
  // Access the dynamic parameter named "bookId" in the URL
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState(null);
  const { searchByIdFromQuery } = useBook();
  const [loading, setLoading] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = searchByIdFromQuery({ id: bookId });
    // TODO: Figure out a way to streamline all information into an united data structure.
    // Right now data is the entire parent dictionary but the information we're interested in is parent.volumeInfo.
    setBookInfo(data.volumeInfo);
    setLoading(false);
  }, [bookId, searchByIdFromQuery]);

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

  // TODO: Add loading state when bookInfo is not ready
  if (loading) {
    return <div className="p-8 text-center">Loading book details...</div>;
  }

  if (!bookInfo) {
    return <div className="p-8 text-center">Book not found</div>;
  }

  return (
    <div className="w-full h-full p-10 flex gap-6">
      {bookInfo && (
        <>
          <img
            src={bookInfo.imageLinks?.thumbnail ?? noImageCover}
            alt={`${bookInfo.title} book cover`}
            className="w-1/6 h-full object-cover round-xl"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-xl">{bookInfo.title}</h1>
              {bookInfo.authors.map((author, index) => (
                <em>
                  <h2 key={index}>{author}</h2>
                </em>
              ))}
            </div>
            <div>
              <div>
                {bookInfo.averageRating
                  ? Array.from({ length: bookInfo.averageRating }).map(
                      (_, index) => <Star key={index} className="inline" />
                    )
                  : "No rating"}
              </div>
              <h3>Number of ratings: {bookInfo.ratingsCount}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className={`${isShowMore ? "" : "line-clamp-6"}`}>
                {bookInfo.description}
              </p>
              {bookInfo.description && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsShowMore(!isShowMore)}
                    className="text-bold flex hover:underline hover:underline-offset-4"
                  >
                    {isShowMore ? "Show less" : "Show more"}
                  </button>
                  {isShowMore ? (
                    <ArrowUp className="size-4" />
                  ) : (
                    <ArrowDown className="size-4" />
                  )}
                </div>
              )}
            </div>
            <h4>
              Genres:{" "}
              {bookInfo.categories.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </h4>
            <h5>First published in {bookInfo.publishedDate}</h5>
          </div>
        </>
      )}
    </div>
  );
}
