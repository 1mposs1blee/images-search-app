import axios from 'axios';

const API_KEY = '37872358-2227a9d6e20f7552b1349a54b';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (searchQuery, page) => {
  const params = new URLSearchParams({
    q: searchQuery,
    page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`/?${params}`);

  return response.data;
};
