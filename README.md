# Contact Management

A simple web application to maintain employee contact information for several employers.

### Install all dependencies

Using [npm](https://www.npmjs.com/):

	$ npm install

### Run the application
First start mongo

	$ mongod

Create an admin username && password

		$ node api/create-user.js **username** **password**

Start express

	$ npm start

Open the browser at http://localhost:3000/

## Testing
Run unit tests

	$ npm test

Runs test on all *test.js* under app/tests directory.

## Linting

	$ npm run lint

Runs eslint on all js and jsx files under app/ directory.
