if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const Yelp = require('yelp');

// Example Urls
// https://api.yelp.com/v2/search/?location=San Francisco, CA&category_filter=bars
// https://api.yelp.com/v2/business/horsefeather-san-francisco-2

// const rootUrl = 'https://api.yelp.com/v2';
// const category = 'category_filter=bars';
const consumerKey = process.env.YELP_CONSUMER_KEY;
const consumerSecret = process.env.YELP_CONSUMER_SECRET;
const token = process.env.YELP_TOKEN;
const tokenSecret = process.env.YELP_TOKEN_SECRET;

const api = new Yelp({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: token,
  token_secret: tokenSecret
});

// const yelpConfig = {
  // rootUrl,
  // category,
  // consumerKey,
  // consumerSecret,
  // token,
  // tokenSecret
// };

module.exports.yelp = api;
