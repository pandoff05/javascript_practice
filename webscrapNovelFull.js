const request = require('request');
const cheerio = require('cheerio');
URL = 'https://novelfull.com/tensei-shitara-slime-datta-ken-wn/chapter-195-chaos-and-counter-moves.html';

request({method: 'GET', url:URL}, (err, res, body) => {
  if (err) return console.error(err);

  const $ = cheerio.load(body);
  const novelList = $("body").find("#chapter-content > p").each(function(i, e) {
    console.log($(this).text());
  });
});