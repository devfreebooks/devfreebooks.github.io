const harp = require('./harp.json').globals;
const RSS = require('rss');
const moment = require('moment');
const fs = require('fs');

const rootUrl = harp.root_url.production;
const imageRootUrl = `${rootUrl}assets/images/`;
const outputFeed = 'www/rss.xml';
const books = [];
const feed = new RSS({
  title: harp.title,
  description: harp.description,
  feed_url: `${rootUrl}rss.xml`,
  site_url: rootUrl,
  image_url: `${imageRootUrl}${harp.slug_title}-128.png`,
  managingEditor: harp.author,
  pubDate: moment().format('LLLL'),
  ttl: 60
});

harp.platforms.forEach((platformName) => {
  const platform = require(`./public/${platformName}/_data.json`).index;
  platform.books.forEach((book) => {
    const bookId = book.title.replace(/[^\w\s]/g, '').replace(/\s/g, '-').toLowerCase();
    const bookLink = `${rootUrl}${platformName}/#${bookId}`;
    const bookPublishedAt = moment(book.published_at || moment().format('YYYYMMDD'), 'YYYYMMDD');
    const bookImage = imageRootUrl + (book.image || platform.image);
    books.push({
      title: `Book: ${book.title}`,
      description: book.description,
      url: bookLink,
      author: harp.author,
      date: bookPublishedAt.format('ll'),
      enclosure: {
        url: bookImage
      }
    });
  });
});

const sortedBooks = books.sort(function(first, second) {
  const a = moment(first.date, 'll').toDate().getTime();
  const b = moment(second.date, 'll').toDate().getTime();
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

sortedBooks.forEach(book => feed.item(book));

fs.writeFileSync(outputFeed, feed.xml());
console.log(`Generated RSS: ${outputFeed}`);
