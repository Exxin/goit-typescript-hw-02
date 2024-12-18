import axios from "axios";

// Базовий URL API
axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "u3qo2uYj0EO8tJoWMOsjjhYe2pOYywYu2TqnyChvGG8";

// Типи для відповіді Unsplash API
interface Photo {
  id: string;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
    portfolio_url: string | null;
  };
}

interface ApiResponse {
  results: Photo[];
}

// Функція для отримання фото
export const fetchPhotos = async (
  searchQuery: string,
  currentPage: number
): Promise<Photo[]> => {
  const response = await axios.get<ApiResponse>("/search/photos", {
    params: {
      client_id: ACCESS_KEY,
      query: searchQuery,
      per_page: 10,
      page: currentPage,
    },
  });

  return response.data.results;
};

