import * as Config from './config';
const Contentful = require('contentful');

export const Client = Contentful.createClient({
    space: Config.SPACE_ID,
    accessToken: Config.CDAPI_ACCESS_TOKEN,
});

const getArticles = () => Client.getEntries().then(response => response.items)

const getArticle = slug => 
    Client.getEntries({
        'fields.slug': slug,
        content_type: 'article'
    })
    .then(response => response.items);

export { getArticles, getArticle }