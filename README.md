[![NPath](https://i.imgur.com/nKE9ENN.png)](https://npath.io)

# cloudrun-demo &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/npathhq/cloudrun-demo/pulls)

`cloudrun-demo` is a showcase usage of deploying a production-level Node application container to Google Cloud Run.

[Google Cloud Run](https://cloud.google.com/run) is the latest in cloud technolgy as it combines serverless and containerized architecture. Developers can have the low upkeep of serverless while building programs that are containerized in Docker.


## 📖 Table of Contents

* [💡 Goals](#-goals)
* [🚀 Getting Started](#-getting-started)
  * [Cloning the project](#cloning-the-project)
  * [Running with Node](#running-with-node)
  * [Running with Docker](#running-with-docker)
* [📄 License](#-license)
* [🎩 Acknowledgement](#-acknowledgement)


## 💡 Goals

1. Create a Node/Express application
    1. Have Node installed on your machine
    2. Successfully able to run Node application locally with `npm start`
    3. Check the endpoints using HTTP client (E.g. Postman, Insomnia, Postwoman)
2. Dockerize
    1. Install Docker
    2. Create a `Dockerfile` and insert code for Node
        1. Tutorial: https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
        2. Tutorial: https://www.youtube.com/watch?v=0N3n56KsC28
    3. Successfully able to run the containerize Node application
    4. Check the endpoints using HTTP client (E.g. Postman, Insomnia, Postwoman)
3. Google Cloud Run
    1. Tutorial: https://www.youtube.com/watch?v=3OP-q55hOUI
    2. Deploy containerize Node application to Google Cloud Run
    3. Check the production endpoints using HTTP client (E.g. Postman, Insomnia, Postwoman)
    4. Test sample environment variables

This project helps NPath's core backend team.


## 🚀 Getting Started

### Cloning the project

```bash
# clone project
git clone https://github.com/npathhq/cloudrun-demo.git

# navigate to project
cd cloudrun-demo
```

### Running with Node

```bash
# installing the project
npm install

# running the project
npm start
```


### Running with Docker

~ **Work In Progress** ~

```bash
# installing the project
npm install

# Tutorial link: https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/
docker build -t <your username>/node-web-app .
```


## 📄 License

All parts of this project are free to use and abuse under the open-source MIT license.


## 🎩 Acknowledgement

Project Owner: [Kevin Pham](https://github.com/phamkevinT)

Stakeholder: [Nhat Nguyen](https://github.com/nguyen-nattwasm)
