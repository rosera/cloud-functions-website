# cloud-functions-website
A Google Cloud Functions example demonstrating how to build a Static Website.

## Functions Framework - Node.js example

How to generate a simple static website that can be deployed both locally and remotely (Google Cloud Functions).

## Example Output

![Cloud Functions output](images/cf-example.png?raw=true)

The following table provides the references to use in order to see the additional data items added to the json database.

| Film                                   | URL                           |
|----------------------------------------|-------------------------------|
| Iron Man                               | http://localhost:8080         |
| The Incredible Hulk                    | http://localhost:8080/?film=1 |
| Iron Man 2                             | http://localhost:8080/?film=2 |
| Thor                                   | http://localhost:8080/?film=3 |
| Captain America: The First Avenger     | http://localhost:8080/?film=4 |
| The Avengers                           | http://localhost:8080/?film=5 |

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

# Cloud Run Button

[Blog Post: Introducing Cloud Run Button](https://cloud.google.com/blog/products/serverless/introducing-cloud-run-button-click-to-deploy-your-git-repos-to-google-cloud)

Try the button below to deploy the website in your GCP project

[![Run on Google Cloud](https://storage.googleapis.com/cloudrun/button.svg)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&cloudshell_image=gcr.io/cloudrun/button&cloudshell_git_repo=https://github.com/rosera/cloud-functions-website.git) 
