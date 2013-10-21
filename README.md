# Starter point

This is based on SMACSS and BEM

### File Structure

	styles
	├── base
	│   ├── layout.scss
	│   ├── config.scss
	│   ├── typography.scss
	├── modules
	│   ├── buttons.scss
	│   ├── list.scss
	│	└── navigation.scss
	├── settings
	│   ├── extend.scss
	│   ├── mixins.scss
	│	└── variables.scss
	└── state
	    └── state.scss

### Requirements

You must have `npm` installed here -> http://nodejs.org/

- Grunt (http://gruntjs.com/)
- Sass (http://sass-lang.com/)
- Compass (http://compass-style.org/install/)
- Susy (http://susy.oddbird.net/)

### Installing

*This is assuming that you have **Compass**, **Sass**, **Susy**, and **npm** ready to go and installed on your system already*

1. `$ git clone git@github.com:dakotalightning/Module-Starter.git`
2. `$ cd Module-Starter`
3. `$ npm install`
4. `$ grunt --verbose` or `$ grunt`
	- You can now open `styleguide/index.html`
	- The file system will be created from your style sheets
5. `$  grunt watch`
	- This will watch the sass folder for outputs and generate your sass and styleguide as you work

**Requiremnts**

1. `npm install -g grunt-cli`
1. `$ gem update --system`
2. `$ gem install susy`

# Release History

- Oct 20, 2013		0.1.0 		Started created the full workflow