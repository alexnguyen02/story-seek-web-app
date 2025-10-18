import axios from 'axios'; 
import { apiKey } from './src/google-apl-key';

const baseURL = "https://www.googleapis.com/books/v1/volumes?"

// Search by keywords 
export const getBooksByQuery = (query) => {
  return axios.get(baseURL, {
    params: {
      q: query, 
      key: apiKey
    }
  })
}