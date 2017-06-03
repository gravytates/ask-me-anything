# Ask Ember
by Grady Shelton
![homepage screenshot](/public/assets/images/homescreen.png)

:fire: :fire: :fire: Ask Ember! :fire: :fire: :fire: This programming specific website flips the script of a traditional ask me anything (as seen on Reddit), and allows budding junior developers or others with burning questions to ask peers and experts questions. This site is specific to the ember framework for javascript, but programmers of all talents are welcome. Each question has its own unique page where experts, journeymen and other professionals can come together and provide multiple answers!

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


## Installation

* `git clone https://github.com/gravytates/ask-me-anything.git` this repository
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

### Screenshots
Questions
![questions screenshot](/public/assets/images/questions.png)

Answers
![answers screenshot](/public/assets/images/answers.png)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

  ## Authors

  * Grady Shelton

  ## License

  MIT License

  Copyright (c) Grady Shelton

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.  
