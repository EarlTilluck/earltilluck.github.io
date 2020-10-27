module.exports = function(grunt) {

    grunt.initConfig({
        // JS hint - analyze js code for issues.
        jshint: { 
          files: ["js-dev/*.js", "*.js"], 
          options: {
            esversion: 10, // use ecmascript v6 - latest
              globals: {
                  jQuery: true // compensate for jquery syntax
              }
          }
        },
        //sass - compile sass into css
        sass: {
            dist: {
                options: {                       
                    style: 'expanded' // output is not compacted and is readable.. cssnano does the compacting instead
                },
                files: {                         
                    'css/style.css': 'sass/style.scss'  // 'destination': 'source'
                }
            }
        },
        // run a bunch of css post processors
        postcss: {
            options: {
              map: true, // inline sourcemaps
              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')(), // add fallback prefixes like -moz- , -webkit-
                require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'css/style.css' // file to process, overwrites the same file.
            }
          },
          // load seperate js modules into a single js file
          browserify: {
            client: {
                src: ["js-dev/script.js"], // this file should have all the 'require' statements
                dest: "js/script.js" // output file
            }
          },
          // minify js
          uglify: {
            my_target: {
              files: {
                'js/script.min.js': ['js/script.js'] // output : input
              }
            }
          },
          // auto-run tasks when files are modified. tasks are specified below
          watch: {
              css: {
                files: ["sass/*.scss"],
                tasks: ["compile-css", "min-css"]
              },
              scripts: {
                files: ["js-dev/*.js", "*.js"],
                tasks: ["lint-js", "pack-js", "min-js"]
              },
              options: {
                spawn: false, // speeds up the time, and prevents issues
              }
          }        
    });

    // spedify and load packages for grunt to use
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // specify names for each task
    grunt.registerTask("pack-js", ["browserify"]);
    grunt.registerTask("lint-js", ["jshint"]);
    grunt.registerTask("min-js", ["uglify"]);
    grunt.registerTask("compile-css", ["sass"]);
    grunt.registerTask("min-css", ["postcss"]);

    // specify a task for everthing css related
    grunt.registerTask("css", [
        "compile-css",  
        "min-css"
    ]);

    // specify a task for everthing js related
    grunt.registerTask("js", [
        "pack-js",
        "min-js",
        "lint-js"  
  ]);

    // default task, if we run grunt without any parameters, it does everything.
    grunt.registerTask("default", [
        "lint-js", 
        "pack-js",
        "min-js",  
        "compile-css", 
        "min-css"
    ]);

};