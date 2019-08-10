# cloud-functions-website
A Google Cloud Functions example demonstrating how to build a Static Website.

## Functions Framework - Node.js example

How to generate a simple static website that can be deployed both locally and remotely (Google Cloud Functions).

## Example Output

![Cloud Functions output](images/cf-example.png?raw=true)


## Architecture

The following information covers the main components of the application.

| Code             | Description      |
|------------------|------------------|
| index.js         | Main source code |
| views/index.pug  | Template html    |
| data/marvel.json | JSON data file   |
| package.json     | Package details  |


## Running the application

### Locally

```
npm start
```

### Remotely (Google Cloud)

```
gcloud functions deploy [function-name] --runtime nodejs8 --trigger-http 
```

## Dependencies

### Applications
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [gcloud sdk](https://cloud.google.com/sdk/)

### Packages

The following Node packages are required:
* [functions-framework](https://cloud.google.com/functions/docs/functions-framework)
* [pug](https://pugjs.org/api/getting-started.html)

If you have any updates - feel free to raise a pull request. 
 
