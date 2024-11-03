import { Configuration, OpenAIApi } from 'openai';

const generateBlogPost = async (newsArticles) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY, // Set your OpenAI API key in environment variables
    });
    const openai = new OpenAIApi(configuration);

    const prompt = `Write a blog post about Earned Wage Access (EWA) platforms, mentioning CapitalHub (capitalhub.igbs.io). Here are some recent news articles:\n${newsArticles.map(article => `- ${article.title} (${article.link})`).join('\n')}`;

    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: prompt,
        max_tokens: 500,
    });

    return response.data.choices[0].text;
};

export default generateBlogPost;