# DevFreeBooks

This is the repository of the site [devfreebooks.github.io](https://devfreebooks.github.io) to submit ebook links.

## How to add books

Before start it: **all books you add must be freeware and for web developers**

### Via Google docs

You can submit a book via [Google Docs Form](https://docs.google.com/forms/d/e/1FAIpQLSeXsmlLo3S7lJF82LGTOMoMpA4vg_T38Ez47gQoU6P6KaFwQg/viewform).

### Via Pull Request

First of all you need to [fork this repository](https://github.com/devfreebooks/devfreebooks.github.io/fork).

With this project in your hands, edit the `/public/_categories/[category-name].json` and add your books respecting these parameters:

``` javascript
"index": {
  "name": "category-name",
  "subtitle": "Category's name",
  "tags": ["category's tags"], // "used in the filters: 'framework', 'language', 'conceptual', 'frontend', 'mobile'"
  "about": "Category's description",
  "site": "url of the official category site",
  "image": "category-image.jpg", // Category image is required
  "books": [
    {
      "title": "Book title",
      "description": "Book description",
      "author": "Author name or Publisher name",
      "pages": 100, // Number of pages
      "year": 2014, // Publish year
      "lang": "EN", // book language. Ex.: EN, PT-BR, ES
      "url": "book's url to download",
      "added_at": "20161112" // Current date you added this book in format YYYYMMDD
    }
  ]
},
```

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `books.image` attribute the **default category image will replace it**.

Look this example (`public/_categories/nodejs.json`):

``` javascript
{
  "index": {
    "name": "nodejs",
    "subtitle": "Node.js",
    "tags": ["language", "framework"],
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    "site": "http://nodejs.org",
    "image": "nodejs.png",
    "books": [
      {
        "title": "Node.js Succinctly",
        "description": "Learn the basics of Node.js: non-blocking I/O, the event loop, modules, and the Node.js runtime environment. From there, dive into building practical solutions that interact with filesystems and streams, access databases, handle web server message queuing, and more.",
        "author": "Emanuele DelBono",
        "pages": 76,
        "year": 2016,
        "lang": "EN",
        "added_at": "20161112",
        "url": "https://www.syncfusion.com/resources/techportal/details/ebooks/nodejs"
      }
    ]
  }
}
```

## Donation

Help us to keep this project up and running free for everybody, we will appreciate any kind of donation's value and below you can choose how to donate:

Donate via Bitcoins:
**1GJ5sAXnHxCX4zpNG2op6VfMbbzhd9L8RE**

[Donate via paypal](https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=IkN3-8GHArBWpwToacqHTCv2NG9bLncWSNiqWOm81EbJhuAZ9-p08wQDquu&dispatch=5885d80a13c0db1f8e263663d3faee8d333dc9aadeed3fe0b5b299d55fd35542)

## Development mode

To run this project in **development mode**, you must have installed the latest version of [Node.js](http://nodejs.org).

To install Node.js, just [follow this wiki rules](http://nodejs.org/download)

To get and run this project:

``` bash
git clone git@github.com:devfreebooks/devfreebooks.github.io.git
cd devfreebooks.github.io
npm install # or using yarn: yarn install
npm start
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - [caio-ribeiro-pereira.mit-license.org](http://caio-ribeiro-pereira.mit-license.org)
