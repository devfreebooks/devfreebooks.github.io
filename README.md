# DevFreeBooks

This is the repository of the site https://devfreebooks.github.io to submit ebook links.

## How to add books?

**Before start it, all books you add must be freeware and for web developers**

First of all you need to [fork this repository](https://github.com/devfreebooks/devfreebooks.github.io/fork).

With this project in your hands, edit the `/public/[platform-folder]/_data.json` and add your books respecting these parameters:

``` javascript
"index": {
  "name": "platform_name", // lower case and underscored
  "subtitle": "Platform name",
  "about": "Platform description",
  "site": "url of the official platform site",
  "image": "platform-logo.jpg", // Platform image is required
  "books": [
    {
      "title": "Book title",
      "description": "Book description",
      "author": "Author name or Publisher name",
      "pages": 100, // Number of pages
      "year": 2014, // Publish year
      "image": "cover.jpg", // Book cover image (optional)
      "lang": "EN", // book language. Ex.: EN, PT-BR, ES
      "publish": true, // Publish to devfreebooks site
      "url": "book's url to download",
      "published_at": "20150202" // Current publish date in format YYYYMMDD
    }
  ]
},
```

Obs.: **All image must be an jpeg/jpg with 350x195 size**. If you don't add an `books.image` attribute the **default category image will replace it**.

Look this example (`public/nodejs/_data.json`):

``` javascript
{
  "index": {
    "name": "nodejs",
    "subtitle": "Node.js",
    "about": "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
    "site": "http://nodejs.org",
    "image": "nodejs.png",
    "books": [
      {
        "title": "Node.js Succinctly",
        "description": "Use Node.js to create faster network and server-side applications on any scale, improve your existing database applications, or create web apps with JSON data.",
        "author": "Agus Kurniawan",
        "pages": 201,
        "year": 2014,
        "image": "nodejs-succinctly.jpg",
        "lang": "EN",
        "publish": true,
        "url": "http://www.syncfusion.com/resources/techportal/ebooks/nodejs",
        "published_at": "20150202"
      }
    ]
  }
}
```

If you wanna add a new platform (programming language or framework), first you need to add it into `global.platforms` attribute in the file `harp.json`:

``` javascript
{
  "globals": {
    "title": "DevFreeBooks",
    "description": "A huge collection of free books for devs",
    "name": "Caio Ribeiro Pereira",
    "email": "caio.ribeiro.pereira@gmail.com",
    "platforms": ["nodejs", "meteor", "go", "ruby"] // Just add here a new platform
  }
}
```

## Development mode

To run this project in **development mode**, you need have [Node.js](http://nodejs.org) and [Grunt](http://gruntjs.com) installed.

To install Node.js, just [follow this wiki rules](http://nodejs.org/download)

To install Grunt, just run the command below:

``` bash
npm install grunt-cli -g
```

To get and run this project:

``` bash
git clone git@github.com:devfreebooks/devfreebooks.github.io.git
cd devfreebooks
grunt serve
```

And access in your browser the url: [http://localhost:3000](http://localhost:3000).

## Author

Caio Ribeiro Pereira - [@crp_underground](http://twitter.com/crp_underground)

## License

MIT - http://caio-ribeiro-pereira.mit-license.org
