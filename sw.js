/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["404.html","15061cc0525eee6732711529cd839479"],["assets/css/application.css","8b76f53b66f2d8c5c833227162959753"],["assets/font/fontello.eot","a03c40c8e6f933d0846f6c288b512e94"],["assets/font/fontello.svg","4ccdc605c38e19e0e00f87dc6b4a26ce"],["assets/font/fontello.ttf","c17711a105293f89933bbf7fd06f17f3"],["assets/font/fontello.woff","03a9b8583c65016801a28de51c1f0916"],["assets/font/opensans.eot","c4d82460ef260eb1589e73528cbfb257"],["assets/font/opensans.svg","8185eb3059c46e4169ce107dfcf85950"],["assets/font/opensans.ttf","488d5cc145299ba07b75495100419ee6"],["assets/font/opensans.woff","79515ad0788973c533405f7012dfeccd"],["assets/images/ads-banner.png","a4600b5d50b914de32763c3ae62d49e8"],["assets/images/agile-android.jpg","be6a39d7da37789e7b8d461821d87a8c"],["assets/images/an-introduction-to-gcc.jpg","316c12694962d89c5996aface6894c7d"],["assets/images/an-introduction-to-programming-in-go.jpg","604779a7f70772c35bc7927fb1324584"],["assets/images/android-programming-succinctly.jpg","148dee846e6e2106440f94c6ab9423fe"],["assets/images/android.jpg","c501ffbefbc7cb285578e37c7e5576dd"],["assets/images/angular-basics.jpg","c8d22f02c6bf4cbbbed91270e05b9511"],["assets/images/angularjs-in-60-minutes.jpg","15e15fcad274e37386585377950d606e"],["assets/images/angularjs-succinctly.jpg","d19df79332d480e59ae64d7fdd3ac2f2"],["assets/images/angularjs.jpg","ccfd44a0dc1b514af225d9c29f05313e"],["assets/images/automate-the-boring-stuff-with-python.jpg","0febc341d5d357eef92c1c420d1eb876"],["assets/images/backbone-tutorials.jpg","9b09857f20249ed79c301c732ffe0d19"],["assets/images/backbone.jpg","70e46a1cbb6d09646916d8caf9b91d60"],["assets/images/bitcoin.jpg","69086f6ca71b834f1a7fde62f79351cc"],["assets/images/build-pacman.jpg","234d776caa596c2ca78459cccbb4a4e5"],["assets/images/build-web-application-with-golang.jpg","a8219ffb817130788c0a02f30b5ea462"],["assets/images/building-apis-with-nodejs.png","d803e35c79ea45ce1d36f16692055a79"],["assets/images/building-web-apps-with-go.jpg","5dff6a0379ca70079d91a40fce6f7957"],["assets/images/c_cpp.jpg","e3c6d1d8c46b8549efbf2254aa2f7a73"],["assets/images/clojure-for-the-brave-and-true.jpg","5583be00d59d09422551c8d3b46c22b8"],["assets/images/clojure.jpg","3f6317c355835163968d29e9b76ca818"],["assets/images/coffeescript-ristretto.jpg","69381c0374eacce79fc9f22e9bce5348"],["assets/images/core-java-dzone-refcard.jpg","f73aa8e0ffc3aa3f5fe2ab5827f9bcb4"],["assets/images/creative-scala.jpg","8d71a9372f9cccf44342f00267f55af8"],["assets/images/csharp-code-contracts-succinctly.jpg","4b50669871821b2b2929fec750f31f14"],["assets/images/csharp-succinctly.jpg","31d4b1076558d51280d41f26ba24fbed"],["assets/images/csharp.jpg","55bc484c004c4cb897df7443544f237c"],["assets/images/d.jpg","355c2ade2979da4327234b3104f4370f"],["assets/images/d3-tips-and-tricks.jpg","7e7f8a930162bc672249f39dc6a02cab"],["assets/images/developing-backbonejs-applications.jpg","f492de2c8e14a9327476105acc981e7b"],["assets/images/developing-games-with-ruby.jpg","c94acaa674cc6f3e994d00321d0f1dfa"],["assets/images/devfreebooks-128.png","875787d0c6aae3504c5519cacee02f5d"],["assets/images/devfreebooks-facebook.jpg","48bb5d1fc04345ca75dea35b162d7702"],["assets/images/devfreebooks-facebook.png","b87a8b47f705aa91b554b6ed34bb03c9"],["assets/images/devfreebooks-splash.png","9b465c0dcb9bde7e2a259870b030597d"],["assets/images/devfreebooks-thumb.png","8b0cc7da94c68cdcbfa9077690a409a5"],["assets/images/devfreebooks.png","217c943677b4fe9a5482054c018b9998"],["assets/images/django-girls.jpg","0c57b7a00c5bae52544e647b9c984f32"],["assets/images/django.jpg","1f5fbf86a9e08c6e842e8d46d59b1ae5"],["assets/images/dotnet.jpg","47cfcd7fbb326313ceb3c998fea4b8f3"],["assets/images/ecmascript-6-succinctly.jpg","de1dbabac4ac97ec99846088634986a4"],["assets/images/ecmascript-language-specification.jpg","0446ec97ea61ae392b461ca8b5668d09"],["assets/images/elixir-school.jpg","5dcee4ab2cb35fdfa1dbde1822336b5b"],["assets/images/elixir.jpg","33a2f4f61d4afed250b256b618ed4e69"],["assets/images/eloquent-javascript.jpg","c84c68d677d5f94b3a67de9b8610d11c"],["assets/images/emberjs.jpg","c04fced4d43fce1e26f1440c211c8b33"],["assets/images/erlang-in-anger.jpg","20589ecba9bd0173842d367b9e0199a2"],["assets/images/erlang.jpg","de8567eeed95fee19ef0398045ca5706"],["assets/images/explore-flask.jpg","21df31fcaa0481f0fecae81a48e33fa6"],["assets/images/exploring-es6.jpg","ade26a1ec7e87d39212bd2a70ab59d6a"],["assets/images/getting-started-git-dzone-refcard.jpg","7b8382b208354a3de9ad17f39d7cbaca"],["assets/images/getting-started-with-django.jpg","eebca52917b8054bcdb32a10fa4aba23"],["assets/images/getting-started-with-meteor-deployment.jpg","72666897d2693a956d56aa10d04da86f"],["assets/images/getting-started-with-scala-dzone-refcard.jpg","417154fbd0840ac19878b51c041bf4ce"],["assets/images/git-for-everyone.jpg","dbeaf77cc04fdf3cb912ecc3b6bda24b"],["assets/images/git-internals.jpg","28b8efc4c2dc747430536876ce2ee939"],["assets/images/git-succinctly.jpg","98ec87d384a32f8101e7438b4d43056c"],["assets/images/git.jpg","2463932bf40644ce9c3e2999ea23d05f"],["assets/images/go.jpg","3281e21a8e1927c2a35f1b12488f9480"],["assets/images/gradle-goodness-notebook.jpg","d9f01b15d9c4e9743de184753dca95d6"],["assets/images/groovy.jpg","4eaf976d22801ce7528432b985026335"],["assets/images/haskell.jpg","0de8013fc8c5f3cb0aed15abce504e1f"],["assets/images/heroku-nodejs.jpg","942505d266e808cbdf74ad082b818d29"],["assets/images/high-performance-browser-networking.jpg","2b103b2a1bcd4cbbfe6fe70fe883f938"],["assets/images/higher-order-perl.jpg","ff655e5e8da162aeb6bc5dfbf5a73eeb"],["assets/images/html.jpg","1bd2f1b4e119202e25d154eceafd1daa"],["assets/images/html5-for-web-designers.jpg","3447c1fe6b85f26922284777b7992864"],["assets/images/html5-shoot-em-up-in-an-afternoon.jpg","4233621050579c4c7945649a371e0d23"],["assets/images/http-succinctly.jpg","047e82bae3002422c527489a37e8700f"],["assets/images/http.jpg","bc2dce44fbc84ec130d86dda916b7898"],["assets/images/http2-explained.jpg","4ae7ab9eb4201b95078ab88b9a8c3d9f"],["assets/images/human-javascript.jpg","5d81c1736b56d0d2e5741b3da1a0924f"],["assets/images/ios-succinctly.jpg","c6812b647cc3dc68ab9cf3573eff9d89"],["assets/images/ios.jpg","bfe051b1a1d0d1b70e2abaa101526e95"],["assets/images/ios8-day-by-day.jpg","2c78df8b40d868b84c7a41e3d1b8d035"],["assets/images/java-estrutura-dados.jpg","c43cdb027bc528a0a08722a7b84a345d"],["assets/images/java-language-specification-8.jpg","cd0ae8cef22379e6d04b2ee1bf0e08ee"],["assets/images/java-orientacao-objetos.jpg","ad22a376bfc200bcbe99c3d4b13d4d36"],["assets/images/java-testes-jsf-web-services-design-patterns.jpg","b961c9fe0c8a4d12885276f84247e0ed"],["assets/images/java-virtual-machine-specification-8.jpg","79b7d5c335dfb7ec70cce819c2d8b0a8"],["assets/images/java-web.jpg","d5246063b2bc91aae5df258dff0f1e1f"],["assets/images/java.jpg","42b0348ad898fd20a2b4e4da12028555"],["assets/images/javascript-allonge.jpg","f29a688f82d9d84b7f7b414b344b7539"],["assets/images/javascript-inspirate.jpg","7f6eaf6bf57a62fe29a8688ef29492db"],["assets/images/javascript-spessore.jpg","9c0124baa7374f63c5f4d5c9061c9d9d"],["assets/images/javascript-succinctly.jpg","a3b3064768bbacb79b8ee2574ba37879"],["assets/images/javascript.jpg","f877c9fae6559f4f61e146f3dab9b292"],["assets/images/jquery-succinctly.jpg","afb73c7047c68b8a2b766dca501d4d06"],["assets/images/kestrels-quirky-birds-and-hopeless-egocentricity.jpg","492c35e7f201f4213e454868b2cd9fcb"],["assets/images/knockout-succinctly.jpg","38192f09073ec231c428c130b3b47807"],["assets/images/laravel-4-official-documentation.jpg","e9cf88dec3775990693e323fec7ba552"],["assets/images/laravel-for-beginners.png","c0cb894e76ae49df08e82a14e0e1f251"],["assets/images/learn-javascript.jpg","9613cf0ab6d1f4a02ab1ee24b98158df"],["assets/images/learn-python-the-hard-way.jpg","49403791c2091b776be5d1c327143240"],["assets/images/learn-ruby-the-hard-way.jpg","77835ecbda4b6d6796ec9571d6e18f62"],["assets/images/learn-to-code-html-and-css.jpg","6da3ed078e23297f39cbb5b83c0d8198"],["assets/images/learn-you-a-haskell-for-great-good.jpg","9fc5dd0c66ad6ffef0e08e9bda3d7530"],["assets/images/learn-you-some-erlang-for-great-good.jpg","d7aa653abc52686ec824d80c108e9aa7"],["assets/images/learning-javascript-design-patterns.jpg","581ca110ee360ce20d3305968b09a05b"],["assets/images/lets-create-a-realtime-blackboard-with-meteor-streams.jpg","f86d31bcfeced28d71478f32da1f2a7c"],["assets/images/mastering-bitcoin.jpg","1a829e9f3398d9b701294b2438d3f59a"],["assets/images/mastering-nodejs.jpg","4a98e94625999d7b1844da56cb2d9561"],["assets/images/meteor-tutorial.jpg","6cfb988d4198c4db7c81eacecd2b94ff"],["assets/images/meteor.jpg","55354ea83af0f636688cc41160420360"],["assets/images/modern-perl.jpg","b56a0a6fc983d495820717da61bf45e1"],["assets/images/module-patterns.jpg","766cef13697a45108d4e1279ff42cf21"],["assets/images/node-express-and-libsass-project-from-scratch-workshop.jpg","9efb249413683e37db20199c9d590a92"],["assets/images/nodejs-succinctly.jpg","0f0fac1993f4a7533f74bc1311fdc7ab"],["assets/images/nodejs.jpg","460f2c3a1ee0fbb5c54614fde53987cc"],["assets/images/npm-recipes.jpg","eca561d5280e7a69a98ba1fb2f0eab60"],["assets/images/object-oriented-programming-in-csharp-succinctly.jpg","918cfdca576c4b7d6643501d1c15b489"],["assets/images/objective-c-succinctly.jpg","5392f9ab2a9afc781bb809e07fe55572"],["assets/images/ocalm.jpg","c1044734775c4431bf2523f736301f33"],["assets/images/perl.jpg","4d96bafc6fbb026f5dc3454c20993e95"],["assets/images/perl6-introduction.jpg","78115327e22c21f1d064e8248ff16c6e"],["assets/images/perl6.jpg","c80dc35848f0f526712b7ad88b85d57a"],["assets/images/php-the-right-way.jpg","6dc25cf060104cf8830b86bf16780255"],["assets/images/php.jpg","6b83180a7e9bc9449858a9d00e8e5c57"],["assets/images/playframework.jpg","05acc467d08ca2c8bef2263164d64d55"],["assets/images/pocket-guide-writing-svg.jpg","a44154e0c2c78e6eb2d748c283c34645"],["assets/images/practical-angularjs.jpg","002ef8eac572a7bcd9a7309fd81724a4"],["assets/images/pro-git.jpg","bcc8246819421031456defd527a763b2"],["assets/images/pro-meteor-meteor-internals-scaling-and-more.jpg","f68c9e5ba6eafed4e2c42163fa316430"],["assets/images/programming-javascript-applications.jpg","40ac41d9b1dcedd51e0c505a6534ad5d"],["assets/images/python-dive-into-python.jpg","d4eaf24ed42b9b0e00a3c747bc9dfe79"],["assets/images/python-hitchhikers-guide-to-python.jpg","2b0a4c96550dab632830caccc46df599"],["assets/images/python-practice-book.jpg","e07521a8573d04d9f7e8267db8b9a0a2"],["assets/images/python.jpg","f132f47c8e3f90b5ce3634149faeb3c9"],["assets/images/rails.jpg","7ce05c20912f0d779ce4b480433ca16e"],["assets/images/react.jpg","2b1f47e8e58b3bc0240139c0caa495ff"],["assets/images/reactjs-succinctly.jpg","21c0dcc9c54d7e2f17e584036e3094e2"],["assets/images/real-world-haskell.jpg","c63e1ef3c388c08da5fa63953afe8c89"],["assets/images/real-world-ocaml.jpg","2561447bdb7ffa463cb3688366d0f00a"],["assets/images/recipes-with-angularjs.jpg","926d2fd0ad73576150bb9d631ffb5598"],["assets/images/ruby-on-rails-tutorial-3rd-edition.jpg","75d08bddacb2483d61927f4246fef6ef"],["assets/images/ruby-web-dev-the-other-way.jpg","62f715a1a6393ddd6916553cfc857e30"],["assets/images/ruby.jpg","d77c19140c01e3e9476ac11bb6b5e9dc"],["assets/images/rubykin.jpg","dc8509688bcd5821fcd374859e4ae647"],["assets/images/scala-by-example.jpg","00bc9239c90df0c340d3c6d6c0213c38"],["assets/images/scala.jpg","06a32fc32e05ca35e114d2990214d503"],["assets/images/scalable.jpg","f711ed1e552132d5b2029963d2927c82"],["assets/images/speaking-javascript-an-in-depth-guide-for-programmers.jpg","055a0c09a442ce8f543fe7146ef28cbf"],["assets/images/spocklight-notebook.jpg","2beb177bea4fa2e3bd29095fe843d885"],["assets/images/survivejs-react.jpg","d72b48179524085f5adf1348b647779b"],["assets/images/survivejs-webpack.jpg","73a6e9cdccf5159c02af3c5b247d38fd"],["assets/images/svg.jpg","fc233fbba4bc368370e617cf9633cb40"],["assets/images/swift-cheat-sheet.jpg","487bf5217c3a82edcf6b89f43dab1862"],["assets/images/swift-essentials-dzone-refcard.jpg","1e864f1cfea3e92811f437d4e27f6ce3"],["assets/images/the-little-go-book.jpg","ebc51a62ff920ecde1809f3637b3f47c"],["assets/images/the-majesty-of-vuejs-2.png","b1942037496e79dd4ca6bd5abd758364"],["assets/images/the-road-to-learn-react.jpg","ba858e9650718008ddae64865ac1fa48"],["assets/images/the-type-astronauts-guide-to-shapeless.jpg","5e5cf471941dcc506cba7f8b75e2a2d1"],["assets/images/think-dsp.jpg","65ee4869d93d7a6d699d2c1177d15eb9"],["assets/images/think-java.jpg","86d691723540579cbb3f09e3df047ce7"],["assets/images/think-ocaml.jpg","124c7bbaac6e9b7de1354c6bf6eb6f5c"],["assets/images/think-python.jpg","2469d7a8c6dcdc3deb66cb9af564ec78"],["assets/images/typescript-deep-dive.jpg","c0f56aeb2933a5dc322fe3734c9d7185"],["assets/images/typescript-succinctly.jpg","3888fa5ab9546ed00f7199e7a57e9740"],["assets/images/typescript.jpg","eabbe4e9813acdf08a79897f2ed9ea16"],["assets/images/understanding-ecmascript-6.jpg","f25aa3d02a336dc2827eafa48d3678ee"],["assets/images/vim.jpg","70cf75ccb2d91115d31d5ecc0492792e"],["assets/images/web-development-using-elixir.jpg","48de7e64b0de8fbdb0065bb71e1e8784"],["assets/images/whats-new-in-java8.jpg","797f98156dfc7ac3551582a299062a50"],["assets/images/your-first-meteor-application.jpg","be7e63fe6cc992b1943d82bf030f908c"],["assets/images/your-second-meteor-application.jpg","19120126ee64e31e28254831ed3b3888"],["assets/js/aightjs.min.js","ea5c26855859fe4151816cd578c47772"],["assets/js/application.js","bcc0c41bc78d700bb0188c71b13c5e0d"],["assets/js/html5shiv.min.js","53601738769ad38926a7dd48f3c4dfba"],["favicon.ico","85c9294cdac010d24b78bb69cc068826"],["manifest.json","7388e954ae4fa4e31a1ed1efa089962c"],["robots.txt","65c4fe3234fe95fc951e15cbd2bb9050"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-devfreebooks-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Thu, 04 May 2017 17:29:24 GMT */