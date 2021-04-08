# raycasting

Experiment to learn about rendering using Ray Casting, implemented in TypeScript.

## Prerequisites

* You have a Linux or OSX machine. Windows should be supported via WSL 2 but has not been tested.
* You have installed a recent version of [GNU Make](https://www.gnu.org/software/make/).
* You have installed a recent version of [Docker](https://www.docker.com/).

## Quick Start

You can get up and running quickly with...

```
make debug
```

Then open http://localhost:8080 in your browser.

You can also package the entire application in a docker container, ready to deploy.

```
make release
docker run -p 8080:80 raycasting:dev
```

Then open http://localhost:8080 in your browser.

## License

Licensed under [MIT](https://choosealicense.com/licenses/mit/).