# Starter point

This is based on SMACSS and BEM

This will create your sass compiled, and generate a kss-node style guide. You can use `$ grunt watch` to monitor your sass folder for changes and it will compile everything for you.

### File Structure

    styles
    ├── base
    │   ├── layout.scss
    │   ├── config.scss
    │   ├── typography.scss
    ├── modules
    │   ├── buttons.scss
    │   ├── list.scss
    │   └── navigation.scss
    ├── settings
    │   ├── extend.scss
    │   ├── mixins.scss
    │   └── variables.scss
    └── state
        └── state.scss

### Requirements

You must have `node` to use `npm` installed here -> http://nodejs.org/

- Git is a recommendation with your workflow (http://git-scm.com/)

#### npm packages

Grunt (http://gruntjs.com/)
    
    $ npm install -g grunt-cli

KSS-Node (http://hughsk.github.io/kss-node/)

    $ npm install -g kss

#### gems

Compass (http://compass-style.org/install/)

    $ gem update --system
    $ gem install compass

Sass (http://sass-lang.com/)

    $ gem install sass

Susy (http://susy.oddbird.net/)

    $ gem install susy
    

### Installing

*This is assuming that you have **Requirements** installed on your system already*

1. `$ git clone git@github.com:dakotalightning/Module-Starter.git`
2. `$ cd Module-Starter`
3. `$ npm install`
4. `$ grunt --verbose` or `$ grunt`
    - The file system will be created from your style sheets
    - You can now open `styleguide/index.html`
5. `$  grunt watch`
    - This will watch the sass folder for outputs and generate your sass and styleguide as you work

### Grunt Packages used

- grunt-contrib-clean
- grunt-contrib-watch
- grunt-contrib-compass
- grunt-contrib-copy
- grunt-shell

## Release History

- Oct 20, 2013      0.1.0       Started created the full workflow