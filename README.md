# Test framework for web using Cypress.io

Example of a better structured framework for web testing using Cypress.io organized with page objects. The web has evolved a lot. Today we need to have faster, easier and more reliable tests for anything that runs in a browser or services.

To know more about Cypress.io, [here](https://github.com/cypress-io/cypress) is the GitHub repository.

### About this project

I used the following web address as a reference for creating scenarios and running the tests
```console
https://www.estrategiaconcursos.com.br
```

In the project inside the ***testcases*** folder there are .txt files that have the descriptions of the automated scenarios in common language and portuguese.
The ***tickets*** folder contains subfolders for bugs and improvements for this platform under test.

 ### Installation

> Clone the project

- You can clone this rep using _ssh_ or _https_.

> example:

```js
$ git clone https://github.com/chewbarcco/web_automation_cypress.git
```

- Install all package.json dependencies:

> example:

```js
$ cd /web_automation_cypress && npm ci
```

### How to test

> To run tests in cypress interactive mode:

```js
$ npm run cy:open
```

> To run tests in cypress headless mode:

```js
$ npm run cy:run
```

##
- Note 1: Some scenarios described are not yet automated. I still need to finish mapping some components and creating some assertions.
- Note 2: The test script **porConcursos.spec.js** is ready and can be run without problems.
- Note 3: I still need to implement "environment variables" that are accessible by Cypress.env, and also screenshots for evidence.


### And that's it!
