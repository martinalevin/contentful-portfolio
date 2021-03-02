const Contentful = require('contentful');

export const Client = Contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CDAPI_ACCESS_TOKEN,
});

const getArticles = () => Client.getEntries({content_type: 'article'}).then(response => response.items)
const getArticle = slug => 
    Client.getEntries({
        'fields.slug': slug,
        content_type: 'article'
    })
    .then(response => response.items);

export { getArticles, getArticle }