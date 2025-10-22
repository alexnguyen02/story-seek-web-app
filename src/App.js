import React from "react";
import SearchBar  from "./components/custom-components/SearchBar";
import BookCarousel from "./components/custom-components/BookCarousel";
import { BookProvider } from "./hooks/BookContext";

export default function App() {
  return (
    <BookProvider>
      <div className="flex flex-col space-y-4 p-8">
        <header className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[3rem] font-semibold">Story Seek</h1>
          <h3 className="">Search for your next read</h3>
        </header>
        <SearchBar />
        <BookCarousel />
      </div>
    </BookProvider>
  );
}
