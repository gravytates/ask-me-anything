# Ask Me Anything

Ask Me Anything! This programming specific website flips the script of a traditional ask me anything (as seen on Reddit), and allows budding junior developers or others with burning questions to ask peers and experts questions. Each question has its own unique page where experts, journeymen and other professionals can come together and provide multiple answers!

## Planning

1. Configuration/dependencies
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

2. Specs
| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|submit a question|user fills out form provided within 'new question' button|upon submission, new question is populated on homepage|
|view a question|user clicks on an individual homepage question|user is taken to a unique question page with more question details|
|answer a question|in individual question page, user can fill out form provided within 'new answer' button|upon submission, a new answer is provided in the question page|
|multiple answers per question|user can provide additional answers to a question|multiple answers can populate an individual question page|

Stretch Plans:
User Model
Full CRUD
User Authentication and Admin Panel (only admin can delete questions)
Upvote/Downvote for answers
Tags to Questions

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for About Section
  * Template/html page for Contact Section
  * Template/html page for Question
  * Integrate feature that allows for multiple answers per question

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ask-me-anything`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
