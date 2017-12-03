# Install

```
npm i @angular/cli -g
npm i
```

# Run

`ng serve -aot -pc proxy.conf.json -o`

## Result You Should See

![Result](https://raw.githubusercontent.com/A-STAR/frontend_interview_test/master/assets/result.png)

# My Notes

## Part A: HTML + CSS

I used SCSS and make use of `$spacer` variable. It was helpful to be able to make computations based on one value that changes everywhere.

Usually I use heavily Sass extends and mixins. This way I can change style of app globally with ease.

## PART B: Javascript

My choice was Angular 5 & Angular Material.

I'm proficient in Angular and seems you asked Material. Google created Material for Android. They created Angular and Material for Angular. So I chose that.

I tried to keep the code as clean as possible using componential approach and best reactive programming practice.

Logic of getting data is in separate service. Components have only what they should have for their templates.

There're presentational component for a single card and it's repeated in smart advertisement cards component.

All's written using TSLint.

### About CORS Issue

Back-end doesn't have `Allow-Control-Allow-Origin: *` so I created `proxy.conf.json` to access API running project locally.

However to run this in production on server you have to ask back-end developers to add CORS header from above. I think you already know this.

# Front-End Interview Test

This is a simple front-end code challenge created to serve two purposes:

1. Show off your skills,
1. Give us a better understanding of your skills.

## The Task

The programming challenge exists in 2 parts:
* Part A: HTML + CSS
* Part B: Javascript

### PART A: HTML + CSS

![Screen](https://raw.githubusercontent.com/A-STAR/frontend_interview_test/master/assets/fe_test_example_screen.png)

* Create a layout based on the given screen (fe_test_example_screen.png).
* Style the layout consistently and beautifully, adhering as closely to the design as possible.
* **NOTE:** You are free to use any preprocessor you wish, or write raw CSS. *Bonus points for an explanation of your choice.*

### PART B: Javascript

* Consume our public API @ https://api.mcmakler.de/v1/advertisements to retrieve a list of advertisements of vacant apartments.
* Display the first 10 advertisements in the HTML + CSS layout created in step A, sticking to the layout, placing data where it fits.
* **NOTE:** You are free to use any framework you wish, or do it VanillaJS style. *Brief explanation of your choice.*

## Additional Instructions

* Fork this repository
* After you're done, provide us the link to your repository.
* Leave comments where you were not sure how to properly proceed.
* Implementations without a README will be automatically rejected.
* No pull requests
* ES6 and above

## Bonus Points

* Tests
* Clean code!
* Knowledge of application flow.
* Knowledge of modern best practices/coding patterns.
* Demonstration of good state management.
* Usage of frameworks/supersets.
* Pixel perfection.
* Componential thinking.
* Usage of linters.
* Git hooks.
* Usage of Material Design concepts
