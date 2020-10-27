# earltilluck.github.io

## About
Welcome. This is my personal website. It is a static site hosted via github pages. [Click here](https://earltilluck.github.io/) to visit.

## Reminders For Me...

### Overview
Github pages is a static only hosting option, meaning no server side scripting. ~~Modularity is done with ajax instead.
The menu at the top of the page issues ajax calls to html files in the pages folder. With this setup, each page will not be able to recieve its own url and therefore cannot be bookmarked. This is good enough for my personal site, but I can't do anything fancy here.~~ To solve the lack of modularity issue, I use a nodejs script to read modules in the modules folder and compile them into the static html pages. Grunt, together with packages specified below are used to compile and minify Sass and Javascript files.

### Installation  

Clone repository, then install packages
```
npm install
```

### Development

#### Coding
Grunt is used to automate tasks, a list of dependencies are located below. Run the grunt watch 
process to compile and minify files automatically while coding, or run the default grunt task 
to do so manually. See `gruntfile.js` for config.
```
grunt watch

#Or

grunt
```


#### Building
Update the configuration in `compile.js` then run it to build the static pages. 
```
node compile
```

#### Running
Use [live-server](https://www.npmjs.com/package/live-server) to as a hot-swapping local host for the site. Pages should reload automatically whenever a new build is created. live-server should be installed as a global package.
```
npm install -g live-server
```
Then run the host script. (configured in `package.json`)
```
npm run host
```
The home page should open automatically in the browser, if not go to http://127.0.0.1:3000/ . Alternatively, use any other means to host the site, ~~but it must run of a server for the ajax to work.~~


### Production
Make sure the site has been built is is running locally, then push to origin. The site is automatically hosted at https://earltilluck.github.io/


### List of dependencies
All dependencies are Dev-Dependencies.
* General
  * grunt - run tasks using a config. Tasks include analyzing JS/CSS, compiling and minifying.
  * browsersList (list of supported browsers,) this value is shared by packages as a standard config, see '.browserslistrc' file.
  * grunt-contrib-watch - automatically run grunt tasks whenever files are modified.

* CSS
  * grunt-contrib-sass - compile sass code.
  * grunt-postcss - run serveral post processors. Processors specified below.
  * autoprefixer - automatically adds prefixes to css rules for fallbacks e.g -moz- , -webkit-, -o- .
  * pixrem - given a root pixel value, provides fallbacks for rem units.
  * cssnano - minify css.

* JS
  * jshint - analyze code for errors and bad practice. 
  * grunt-browserify - allow the use of 'require' to create modules in Javascript. 
  * grunt-contrib-uglify - minify js code.
