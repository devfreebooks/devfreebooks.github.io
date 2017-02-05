[![OpenCollective](https://opencollective.com/devfreebooks/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/devfreebooks/sponsors/badge.svg)](#sponsors)

# DevFreeBooks

This is the repository of the site https://devfreebooks.github.io to submit ebook links.

## How to add books?

**Before start it, all books you add must be freeware and for web developers**

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
      "image": "cover.jpg", // Book cover image (optional)
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
        "image": "nodejs-succinctly.jpg",
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
**12uZ7UpUvvTgDbP95ZSuBg38LyoEUJLaSd**

Donate via Ethereum:
**0x75b8eA6c67b3b21F420f974CD9495Ce6EF6fCdaa**

[Donate via paypal](https://www.paypal.com/us/cgi-bin/webscr?cmd=_flow&SESSION=IkN3-8GHArBWpwToacqHTCv2NG9bLncWSNiqWOm81EbJhuAZ9-p08wQDquu&dispatch=5885d80a13c0db1f8e263663d3faee8d333dc9aadeed3fe0b5b299d55fd35542)

## Backers
Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/devfreebooks#backer)]

<a href="https://opencollective.com/devfreebooks/backer/0/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/1/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/2/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/3/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/4/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/5/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/6/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/7/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/8/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/9/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/10/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/11/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/12/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/13/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/14/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/15/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/16/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/17/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/18/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/19/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/20/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/21/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/22/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/23/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/24/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/25/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/26/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/27/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/28/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/backer/29/website" target="_blank"><img src="https://opencollective.com/devfreebooks/backer/29/avatar.svg"></a>


## Sponsors
Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/devfreebooks#sponsor)]

<a href="https://opencollective.com/devfreebooks/sponsor/0/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/1/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/2/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/3/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/4/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/5/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/6/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/7/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/8/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/9/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/10/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/11/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/12/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/13/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/14/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/15/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/16/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/17/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/18/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/19/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/20/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/21/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/22/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/23/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/24/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/25/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/26/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/27/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/28/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/devfreebooks/sponsor/29/website" target="_blank"><img src="https://opencollective.com/devfreebooks/sponsor/29/avatar.svg"></a>

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

MIT - http://caio-ribeiro-pereira.mit-license.org
