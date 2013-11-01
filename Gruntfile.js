module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            style: ['css', 'styleguide', 'build/css', 'build/js']
        },
        copy: {
            styleguide: {
                files: [
                    { src: ['sass/styleguide.md'], dest: 'build/css/styleguide/styleguide.md'}
                ]
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            },
            style: {
                options: {
                    sassDir: 'sass',
                    specify: 'sass/screen.scss',
                    cssDir: 'build/css/styleguide',
                    environment: 'development',
                    outputStyle: 'compact',
                    noLineComments: true,
                    debugInfo: false,
                    quiet: false
                }
            }
        },
        cssc: {
            build: {
                options: {
                    sortSelectors: true,
                    consolidateViaDeclarations: true,
                    consolidateViaSelectors:    true,
                    consolidateMediaQueries:    true
                },
                files: {
                    'css/screen.css': 'css/screen.css'
                }
            }
        },
        cssmin: {
            build: {
                src: 'css/screen.css',
                dest: 'css/screen.min.css'
            }
        },
        watch: {
            options: {
              livereload: true,
            },
            coffee: {
                files: ['coffee/*'],
                tasks: ['buildjs']
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass', 'cssc', 'cssmin', 'buildstyle']
            },
            css: {
                files: ['css/*.css', 'build/**/*.css']
            },
            template: {
                files: ['lib/styleguide-template/**/*'],
                tasks: ['shell']
            },
            html: {
                files: ['index.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['assets/js/base.js'],
                tasks: ['coffee', 'uglify']
            }
        },
        shell: {
            styleguide: {
                command: 'kss-node build/css/styleguide styleguide --css build/css/styleguide/screen.css --template lib/styleguide-template'
            }
        },
        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,                      
// Force tags to have a closing pair
                    'tagname-lowercase': true,             
// Force tags to be lowercase
                    'attr-lowercase': true,                
// Force attribute names to be lowercase e.g. <div id="header"> is invalid
                    'attr-value-double-quotes': true,      
// Force attributes to have double quotes rather than single
                    'doctype-first': true,                 
// Force the DOCTYPE declaration to come first in the document
                    'spec-char-escape': true,              
// Force special characters to be escaped
                    'id-unique': true,                     
// Prevent using the same ID multiple times in a document
                    'head-script-disabled': true,          
// Prevent script tags being loaded in the  for performance reasons
                    'style-disabled': true                 
// Prevent style tags. CSS should be loaded through 
                },
                src: ['index.html']
            }
        },
        coffee: {
            compile: {
                files: {
                    'build/js/base.js': 'coffee/*.coffee'
                }
            },
        },
        uglify: {
            build: {
                files: {
                    'js/base.min.js': ['build/js/base.js']
                }
            }
        }
    });

    grunt.registerTask('default',   []);

    grunt.registerTask('build', ['buildcss', 'buildstyle', 'buildjs']);

    grunt.registerTask('buildjs', ['coffee', 'uglify']);

    grunt.registerTask('buildcss', ['clean', 'compass', 'cssc', 'cssmin']);
    grunt.registerTask('buildstyle', ['copy', 'shell']);

};