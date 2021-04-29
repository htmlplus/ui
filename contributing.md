 <p align="center">

<h2 align="center">HTML PLUS</h2>
   </p>

   <details open="open">
     <summary>Table of Contents</summary>
     <ol>
       <li>
         <a href="#setup-system">Setup system</a>
         <ul>
           <li><a href="#install-git">Install Git</a></li>
           <li><a href="#install-node-js">Install node js</a></li>
           <li><a href="#install-editor">Install editor</a></li>
         </ul>
       </li>
       <li><a href="#clone-project">Clone project</a></li>
       <li>
         <a href="#getting-started">Getting Started</a>
         <ul>
           <li><a href="#installation">Installation</a></li>
           <li><a href="#available-scripts">Available scripts</a></li>
         </ul>
       </li>
       <li><a href="#project-structure">Project structure</a></li>
     </ol>
   </details>

## About This Project

HTMLPLUS is framework-less and lightweight. It’s totally native and developed purely with javascript. All HTMLPLUS containers are customizable and configurable.

### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [Stencil](https://stenciljs.com/)

   <!-- GETTING STARTED -->
## Setup system

This section is only for those who are using a project in GitHub for the first time, and if you have already used GitHub and JavaScript in your computer , you don't need to read this section.
### Install Git
To receive(pull) and send(push) your codes in GitHub, you need to install Git on the system,

#### Installing on Linux
```sudo apt install git-all```

#### Installing on macOS
```brew install git```

#### Installing on Windows
You can download and install Git app from [https://git-scm.com/download/win](https://git-scm.com/download/win)

---
**NOTE**

You can visit [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for more information

---

### Install Node js
Node JS is a server-side platform based on the Browser JavaScript engine and provides us with everything we need to run a program in JS using the JavaScript programming language instead of running in the browser. The server environment is running.

You can go [https://nodejs.org/en/download/](https://nodejs.org/en/download/) and download the LTS according to your OS and install it.

###Editor
You can use the [VS code](https://code.visualstudio.com/download) open source editor or any of your favorite editor or IDE to develop the project

## Getting Started

### Installation

1. Sign in [https://github.com](https://github.com)
2. Clone the repo
   ```sh
   git clone git@github.com:htmlplus/core.git
   ```
3. Go to directory
   ```sh
   cd core
   ```
4. Install NPM packages
   ```sh
   npm run init
   ```
5. Run project
   ```sh
   npm run start
   ```

### Available Scripts

### `npm run clean`

Remove the `node_modules` directory from all packages using `lerna`.

### `npm run clean:hard`

Clean unused `dependenices` in package.json and remove the `node_modules` directory from all packages.

### `npm run init`

Bootstrap the packages in the current `Lerna` repo. Installs all of their dependencies and links any cross-dependencies.

### `npm run publish:latest`

### `npm run publish:next`

### `npm run publish:release`

### `npm run prepublishOnly`

### `npm run preversion`
Clean unused `dependenices` in package.json and the next step Installs all of their dependencies and links any cross-dependencies and the next , build project.
### `npm run start`
 Run project in the [https://localhost:3333](https://localhost:3333) .

## Usage
### Structure
       .
       ├── ...
       ├── package.json            # managing the project’s dependencies, scripts, version ...
       ├── packages                # Location of all packages
       │   ├── ports               # All the converters from the web component to components with the desired language
       │   └── core                # As the name implies, it is the location of all the HTMLPLUS components
       │      ├── ...
       │      ├── scripts          # All configures related to alias, style, docs, extera and externals
       │      └── src              # All sources related to HTMLPLUS
       │          ├── components   # All component related to HTMLPLUS
       │          ├── styles       # Project config styles
       │          ├── utils        # All helper functions and shared functions such as animation, bind,...
       │          ├── index.html   # Here you can run the components in the development mode
       │          └── ...
       └── ...


