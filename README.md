# HTTP storage

This repository contains the HTTP storage.

## Requirements

- npm
- node
- docker
- docker-compose

## Build

To build the project:

```bash
npm i
npm run build
```

## Start

Before starting put all SCDs you want to make available into the `public` directory.

To start the HTTP storage run:

```bash
npm start
```

To start it with docker run:

```bash
docker-compose up
```
