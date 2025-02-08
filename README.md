# FreeSG

The 100% free, open source, ESG metric data collection and reporting platform.

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported via WSL 2 but has not been tested.
* You have installed a recent version of [GNU Make](https://www.gnu.org/software/make/).
* You have installed a recent version of [Docker](https://www.docker.com/).
* You have installed a supported version of [Node.js](https://nodejs.org/).

## Quick Start

```
docker compose up
cd ./packages/api && npm i && npm run dev
cd ./packages/client && npm i && npm run dev
```

Navigate to 'http://localhost:8080/' in your browser of choice.