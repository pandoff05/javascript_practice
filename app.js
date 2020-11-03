const request = require("request");
const cheerio = require("cheerio");
const novelPageLink = require("./novelFull.js").getNovelPageLink;
const getEachLink = require("./novelFull.js").getEachLink;

const init = () => {
  let initUrl = "https://novelfull.com/";
  let UrlMainPage = initUrl + "tensei-shitara-slime-datta-ken-wn.html";

  let pagesLink = novelPageLink(UrlMainPage);
  let chapterList = [];
  console.log(pagesLink.uri.href);
  
};

init();