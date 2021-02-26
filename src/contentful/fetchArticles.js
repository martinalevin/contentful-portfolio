import _ from 'lodash'
import * as Config from './config';

const Contentful = require('contentful');
const Client = Contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CDAPI_ACCESS_TOKEN,
})

export default (async function getArticles () {
    const entries = await Client.getEntries({
        content_type: process.env.POST_CONTENT_TYPE_ID,
    })

    const articles = _.map(entries.items, item => item.fields);
    console.log(articles);
    return (
        <div>articles.item.fields.title</div>);
})
