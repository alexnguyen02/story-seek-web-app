import React, { useState, createContext, useContext } from "react";
import { getBooksByQuery } from "../api.js";
import { toast } from "sonner";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [bookItemsByQuery, setBookItemsByQuery] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const searchByQuery = async ({ query }) => {
    setLoading(true);

    try {
      const response = await getBooksByQuery(query);
      console.log(response.data.items); // Debug log

      setBookItemsByQuery(response.data.items);
    } catch (err) {
      console.log(
        `Failed to load book items with ${query} query: ${
          err.response?.data?.error || err.message
        } `
      );
      toast("Error fetching data", {
        description: "Unable to fetch data at the moment. Try again later!",
        action: {
          label: "Okay",
          onClick: () => {},
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider
      value={{ bookItemsByQuery, searchByQuery, isLoading }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  return useContext(BookContext); 
}
