const cheerio = require('cheerio');
const request = require('request');
// initialURL = https://novelfull.com/tensei-shitara-slime-datta-ken-wn.html
// const initURL = "https://novelfull.com/";
// const URL = initURL + "tensei-shitara-slime-datta-ken-wn.html?page=2&per-page=50";

const getEachChapterLink = function (URLPage) {
  let chapterList = [];
  request({
    method: 'GET',
    url: URLPage
  }, (err, res, body) => {

    if (err) return console.error(err);

    const $ = cheerio.load(body);

    $("body").find(".list-chapter > li > a").each(function (i, e) {
      chapterList[i] = { title: $(this).text(), link: $(this).attr('href') };
    });

    // console.log(chapterList);

  });
  
  return chapterList;
}

// getEachChapterLink(URL);

//Full Novel
const novelPageLink = function (URLPage)  {
  request({
    method: 'GET',
    url: URLPage
  }, (err, res, body) => {

    if (err) return console.error(err);

    const $ = cheerio.load(body);
    
    let allPages = [];
    const pages = [];
    $("body").find("#list-chapter > .pagination > li > a").each(function (i, e) {
      allPages[i] = $(this).attr('href');
      pages[i] = allPages[i].substr(allPages[i].indexOf('='), allPages[i].length - allPages[i].indexOf('&') - 1);
      pages[i] = pages[i].replace(/[^0-9]/g, '');
    });
    // console.log(allPages);
    return allPages;
  });
}

module.exports.getEachLink = getEachChapterLink;
module.exports.getNovelPageLink = novelPageLink;