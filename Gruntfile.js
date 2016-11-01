module.exports = function(grunt) {

  var harp = require("./harp.json");

  var config = {

    // Clean folders =================================
    clean: {
      www: ["www"]
    },

    // Concat ========================================
    concat: {
      options: {
        separator: ";"
      },
      main: {
        src: [
          "public/assets/js/_main.js"
        ],
        dest: "public/assets/js/application.js"
      }
    },

    // Execute  ======================================
    execute: {
      target: {
        options: {
          module: true
        },
        src: ["feed.js"]
      }
    },

    // ENV vars ======================================
    env: {
      dev : {
        NODE_ENV : "development"
      },
      prod: {
        NODE_ENV : "production"
      }
    },

    // Harp Compile ==================================
    harp: {
      dev: {
        server: true,
        port: 3000
      },
      prod: {
        source: "./",
        dest: "www"
      }
    },

    // Stylus ========================================
    stylus: {
      main: {
        options: { compress: true },
        files: { 'public/assets/css/application.css': 'public/assets/css/_application.styl' }
      }
    },

    // JS Min ========================================
    uglify: {
      main: {
        files: {
          "www/assets/js/application.js": ["public/assets/js/application.js"]
        }
      }
    },

    // Compress ======================================
    compress: {
      main: {
        options: {
          mode: "gzip",
          level: 9,
          pretty: true
        },
        files: [
            {expand: true, flatten: true, src: ["www/assets/js/*.js"], dest: "www/assets/js", ext: ".gz.js"}
          , {expand: true, flatten: true, src: ["www/assets/css/*.css"], dest: "www/assets/css", ext: ".gz.css"}
        ]
      }
    },

    // Cache Manifest ================================
    appcache: {
      options: {
        basePath: "www",
        baseUrl: harp.globals.root_url.production
      },
      all: {
        dest: "www/manifest.appcache",
        cache: "www/**/*",
        network: "*"
      }
    },

    // Github Pages ==================================
    "gh-pages": {
      options: {
        base: "www",
        repo: "git@github.com:devfreebooks/devfreebooks.github.io.git",
        message: "Deploying DevFreeBooks",
        branch: "master"
      },
      src: "**/*"
    },

  };

  grunt.initConfig(config);
  grunt.loadNpmTasks("grunt-gh-pages");
  grunt.loadNpmTasks("grunt-harp");
  grunt.loadNpmTasks("grunt-env");
  grunt.loadNpmTasks("grunt-appcache");
  grunt.loadNpmTasks("grunt-execute");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-contrib-stylus");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");

  grunt.registerTask("default",["clean", "env:dev", "execute", "concat", "stylus", "harp:dev"]);
  grunt.registerTask("serve", ["default"]);
  grunt.registerTask("deploy", ["clean", "env:prod", "execute", "concat", "stylus", "harp:prod", "uglify", "compress", "appcache", "gh-pages"]);
};
