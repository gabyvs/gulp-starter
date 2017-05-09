GULP STARTER PROJECT
====

This project uses gulp to automate some tasks that are useful for front end development

* Pre-process and minify CSS
* Bundle and minify JavaScript
* Optimize images for the web
* Move minified files to a specific directory
* Automatically reload the browser when files change 

Since you cannot always install gulp globally, this one uses local gulp to run all these tasks.
 
## To use it

* Clone this repo into a folder named as your project and cd into it

```
git clone https://github.com/gabyvs/gulp-starter my-project-name && cd $_
```

* Create your own repo from it by running `rm -rf .git` and then run `git init`
* Install its dependencies by running either `yarn` or `npm install`
* Run `yarn gulp` or `npm run gulp` to run the tasks defined in `gulpfile.js`
* Start writing your application code in index.html or src folder