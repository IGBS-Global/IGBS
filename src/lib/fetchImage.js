import axios from 'axios';

const fetchImage = async (query) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
            query: query,
            client_id: process.env.UNSPLASH_ACCESS_KEY, // Your Unsplash API key
        },
    });
    return response.data.results[0]?.urls?.regular || '/images/blog/post-03.jpg'; // Fallback image
};

export default fetchImage;