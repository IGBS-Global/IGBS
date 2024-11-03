import axios from 'axios';
import cheerio from 'cheerio';

const fetchEwaNews = async () => {
    const url = 'https://www.bing.com/news/search?q=Earned+Wage+Access&qpvt=Earned+Wage+Access+news&FORM=EWRE'; // Replace with a real news source
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const articles = [];

    $('article').each((index, element) => {
        const title = $(element).find('h2').text();
        const link = $(element).find('a').attr('href');
        articles.push({ title, link });
    });

    return articles;
};

export default fetchEwaNews;