module.exports = function(grunt) {

    

    grunt.initConfig({
        clean: {
            style: ['css', 'styleguide', 'styleguide-css']
        },
        copy: {
            styleguide: {
                files: [
                    { src: ['sass/styleguide.md'], dest: 'styleguide-css/styleguide.md'}
                ]
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            },
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'styleguide-css',
                    environment: 'development',
                    outputStyle: 'expanded'
                }
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass', 'shell']
            },
            css: {
                files: ['css/*.css', 'styleguide-css/*.css']
            },
            template: {
                files: ['styleguide-template/**/*'],
                tasks: ['shell']
            },
            livereload: {
                files: ['css/*.css', 'styleguide-css/*.css'],
                options: { livereload: true }
            }
        },
        shell: {
            styleguide: {
                command: 'kss-node styleguide-css styleguide --css styleguide-css/screen.css --template styleguide-template'
            }
        }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    
    grunt.registerTask('default', ['clean', 'compass', 'copy', 'shell']);

};