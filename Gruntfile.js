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
                tasks: ['compass']
            },
            css: {
                files: ['css/*.css', 'styleguide-css/*.css']
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

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['clean', 'compass', 'copy', 'shell']);

};