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

* Clone this repo and save it in a folder named as your project

```
git clone https://github.com/gabyvs/gulp-starter your-project-name && cd $_
```
    
* Remove all the history of the current project (this project will be used as starting point)
    
```
rm -rf .git
```

* Start a new repository for your project

```
git init
```
    
* Install all the dependencies
    
```
yarn
``` 

* Run the tasks defined in `gulpfile.js`

```
yarn gulp
```

**Note:** If you don't use yarn, you can also run `npm install` and `npm run gulp` instead

And now your setup is ready and you can start writing your application code in src folder.

Enjoy!