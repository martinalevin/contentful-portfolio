const Contentful = require('contentful');

export const Client = Contentful.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CDAPI_ACCESS_TOKEN,
});
