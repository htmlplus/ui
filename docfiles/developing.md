# Developing HTMLPLUS
This document describes how to develop HTMLPLUS components. see [HTMLPLUS roadmap](../roadmap.md) for a list of all components. Read our [agreement](./agreement.md) before contribute to code. You can also see [examples](./examples.md) to full undrestant how to develop a web component in html plus.

## Table of Contents
  - [Contribute to code](#contribute-to-code)
    - [Knowledge requirements](#knowledge-requirements)
    - [Setup system, up and running](#setup-system)
      - [Install NodeJs](#install-nodejs)
      - [Install Git](#install-git)
      - [Install Editor](#install-editor)
    - [Installation](#installation)
    - [Project structure](#project-structure)
    - [Pull Request Process](#pull-request-process)

## Contribute to code
> If you're interested in contribuing to the code, be sure to read the code contribution guidelines first.


This article explains the process and guidelines for contributing code to the HTMLPLUS project.

### Knowledge requirements
TODO: Before taking any action, we suggest that you have relative knowledge of the following.
- [TypeScript](https://www.typescriptlang.org)
- [StencilJs](https://stenciljs.com)
- [SASS](https://sass-lang.com)
- [GitHub](https://github.com)
- [NodeJs](https://nodejs.org)
- [Lerna](https://lerna.js.org)

### Setup system
This section is only for those who are using a project in GitHub for the first time, and if you have already used GitHub and JavaScript in your computer , you don't need to read this section.

#### Install NodeJs
Node JS is a server-side platform based on the Browser JavaScript engine and provides us with everything we need to run a program in JS using the JavaScript programming language instead of running in the browser. The server environment is running.
You can go [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and download the LTS according to your OS and install it.

#### Install Git
To receive(pull) and send(push) your codes in GitHub, you need to [Install Git](https://git-scm.com/download/win) on the system.

#### Install Editor
You can use the [Visual Studio Code](https://code.visualstudio.com/download) open source editor or any of your favorite editor or IDE to develop the project

### Installation
Follow the below steps to prepare `HTMLPLUS` project.

1- Clone the repository
```sh
git clone git@github.com:htmlplus/core.git
```

2- Go to directory
```sh
cd core
```

3- Install root packages
```sh
npm install
```

4- Install internal packages
```sh
npm run init
```

5- Run project
```sh
npm run start
```
Run project in the `https://localhost:3000`

6- Go to the `packages/core/src` path and change the `index.html` file and see the result in the browser.

### Project structure
You'll find the following directories and files, ssee something like this.

    .
    ├── ...
    ├── packages                     # Location of all packages
    │  ├── core                      # As the name implies, it is the location of all the HTMLPLUS components
    │  │  ├── ...
    │  │  ├── scripts                # All configures related to alias, style, docs, extera and externals
    │  │  ├── src                    # All sources related to HTMLPLUS
    │  │  │  ├── ...
    │  │  │  ├── components          # All component related to HTMLPLUS
    │  │  │  ├── configs             # TODO
    │  │  │  ├── styles              # Project config styles
    │  │  │  ├── utils               # All helper functions and shared functions such as animation, bind,...
    │  │  │  ├── index.html          # Here you can run the components in the development mode
    │  │  │  └── ...
    │  │  ├── package.json           # TODO
    │  │  ├── stencil.config.ts      # TODO
    │  │  ├── tsconfig.json          # TODO
    │  │  └── ...
    │  ├── playground                # TODO
    │  │  ├── angular                # TODO
    │  │  ├── react                  # TODO
    │  │  ├── svelte                 # TODO
    │  │  └── vue                    # TODO
    │  └── ports                     # All the converters from the web component to components with the desired language
    │     └── react                  # TODO
    │        ├── src
    │        ├── package.json
    │        ├── rollup.config.ts
    │        └── tsconfig.json
    ├── lerna.json                   # TODO
    ├── package.json                 # managing the project’s dependencies, scripts, version ...
    └── ...
