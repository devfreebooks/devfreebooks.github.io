module.exports = function() {

  var harp = require("./harp.json")["globals"]
    , RSS = require("rss")
    , moment = require("moment")
    , fs = require("fs")
    , rootUrl = harp.root_url[process.env.NODE_ENV]
    , imageRootUrl = rootUrl + "assets/images/"
    , outputFeed = "public/rss.xml"
    , books = []
  ;

  var feed = new RSS({
    title: harp.title,
    description: harp.description,
    feed_url: rootUrl + "rss.xml",
    site_url: rootUrl,
    image_url: imageRootUrl + "devfreebooks-128.png",
    managingEditor: harp.author,
    pubDate: moment().format("LLLL"),
    ttl: 60
  });
  
  harp.platforms.forEach(function(platformName) {
    var platform = require("./public/"+ platformName +"/_data.json")["index"];

    platform.books.forEach(function(book) {
      var bookId = book.title.replace(/[^\w\s]/g, "").replace(/\s/g, "-").toLowerCase();
      var bookLink = rootUrl + platformName + "/#" + bookId;
      var bookPublishedAt = moment(book.published_at || moment().format("YYYYMMDD"), "YYYYMMDD");
      var bookImage = imageRootUrl + (book.image || platform.image);

      books.push({
        title: "Book: " + book.title,
        description: book.description,
        url: bookLink,
        author: harp.author,
        date: bookPublishedAt.format("ll"),
        enclosure: {
          url: bookImage
        }
      });
    });
  });

  var sortedBooks = books.sort(function(a, b) {
    var a = moment(a.date, "ll").toDate().getTime();
    var b = moment(b.date, "ll").toDate().getTime();
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  sortedBooks.forEach(function(book) { feed.item(book); });

  fs.writeFileSync(outputFeed, feed.xml());
  console.log("Generated RSS:", outputFeed);
};