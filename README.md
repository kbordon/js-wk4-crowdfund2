# Crowdfund

1. ng new project-name
2. bower init
3. add /bower_components to .gitignore file under #dependencies
  * bower install bootstrap --save if you want
  * angular-cli.json and add "../bower_components/bootstrap/dist/css/bootstrap.css" to "styles"
4. ng g component component-name
5. make app.routing.ts file
6. create dynamic route
7. create service
8. $ npm install angularfire2@4.0.0-rc.0 firebase@^3.6.6 --save
9. add "types": [ "firebase" ] to tsconfig.json
10. create api-keys.ts


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
