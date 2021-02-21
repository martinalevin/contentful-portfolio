import _ from 'lodash'
import * as Config from './config';
const Contentful = require('contentful');

export const Client = Contentful.createClient({
    space: Config.SPACE_ID,
    accessToken: Config.CDAPI_ACCESS_TOKEN,
});
