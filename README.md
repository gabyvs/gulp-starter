GULP STARTER PROJECT
====

This project uses gulp to automate some tasks that are useful for front end development

* Minify images (with *gulp-imagemin*)
* Preprocess Less files, compile them into CSS (with *gulp-less*)
* Minify CSS and adding sourcemaps (with *gulp-minify-css* and *gulp-sourcemaps*)
* Build a single bundled javascript file while allowing us to write modular applications (with *browserify,* *vinyl-buffer* and *vinyl-source-stream*) 
* Uglify final javascript and adding sourcemaps (with *gulp-uglify* and *gulp-sourcemaps*)
* Observing changes in files and making them available immediately in the browser (with *browser-sync*)

Since you cannot always install gulp globally, this one uses the project local gulp to run all these tasks.
 
## To use it

* Clone this repo and save it in a folder named as your project


    git clone https://github.com/gabyvs/gulp-starter your-project-name && cd $_
    
* Remove all the history of the current project (this project will be used as starting point)
    

    rm -rf .git

* Start a new repository for your project


    git init
    
* Install all the dependencies
    
    
    npm install

* Run the tasks defined in `gulpfile.js`


    npm start

And now your setup is ready and you can start writing your application code in src folder.

Enjoy!