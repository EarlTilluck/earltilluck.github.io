# earltilluck.github.io

## About
Welcome. This is my personal website. It is a static site hosted via github pages. [Click here](https://earltilluck.github.io/) to visit.

## Reminders For Me...

### Overview
Github pages is static only, meaning no server side scripting. To make up for the lack of a framework, I built this website using html-modules. Dependencies are listed at the bottom, they are used to compile and minify the HTML, Sass and Javascript files.

### Installation  

Clone repository, then install packages.
```
npm install
```

### Development

#### Coding
Grunt is used to automate tasks, a list of dependencies are located below. Run the grunt watch 
process to compile and minify files automatically while coding, or run the default grunt task 
to do so manually. See `gruntfile.js` for config.
```
#Automated:

npm run watch 
#Or 
grunt watch

#Manually:

grunt
```

#### Running
Use [live-server](https://www.npmjs.com/package/live-server) to as a hot-swapping development server for the site. Pages should reload automatically whenever a new build is created. live-server should be installed as a global package.
```
npm install -g live-server
```
Then run the start script. (configured in `package.json`)
```
npm run start
```
The home page should open automatically in the browser, if not go to http://127.0.0.1:3000/ . Alternatively, use any other means to host the site. Some features may not work if the pages a opened directly.


### Production
Make sure the site has been built and is working, then push to origin. The site is automatically hosted at https://earltilluck.github.io/


### List of dependencies
All dependencies are Dev-Dependencies.
* General
  * grunt - run tasks using a config. Tasks include analyzing JS/CSS, compiling and minifying.
  * browsersList (list of supported browsers,) this value is shared by packages as a standard config, see '.browserslistrc' file.
  * grunt-contrib-watch - automatically run grunt tasks whenever files are modified.

* HTML
  * posthtml - run html post processors. Processors specified below.
  * posthtml-modules - Allows the use of html modules.
  * htmlnano - minifies and cleans up the html.

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




# MyPortfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

https://www.npmjs.com/package/angular-cli-ghpages

ng add angular-cli-ghpages

ng deploy --base-href=/<repositoryname>/