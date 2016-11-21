# Run single Spec file 

The Node script is a helper tool to work on a single Spec file.

## Configuration

Expects to have Karma basepath set to 'src' and .js files to live inside src/app.

## Usage

Add to your project's root dir next to *karma.config.js* and run

> node testSingleSpec.js src/app/[name]Spec.js

## Frameworks environment

Intended to work in bash environment.  
Not tested in MS CMD.  
Works well with Angular Specs.  

## Additional info

Uses *es6* syntax.  
Got the kickoff idea from [http://stackoverflow.com/questions/24276239/detecting-environment-when-running-karma](http://stackoverflow.com/questions/24276239/detecting-environment-when-running-karma)
