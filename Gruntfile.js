module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Path to distrubtion directory and asset subdirectories
        dist: 'dist',
        css: '<%= dist %>/css',
        js: '<%= dist %>/js',
        img: '<%= dist %>/img',

        /*  
        *   The list of JS files that make jsHint sad and therefore
        *   make me sad. Add ! before the file. It represents your shame
        */
        shameJS: ['!js/**/*.min.js'],

        sass: {
            dist: {
              options: {
                style: 'compressed'
              },
              files: {
                '<%= css %>/style.css': 'css/style.sass'
              }
            },
            dev: {
              options: {
                style: 'expanded'
              },
              files: {
                'css/style.css': 'css/style.sass',
              }
            }
        },

        shell: {
          clear: {
            command: 'clear',
            options: {
              stdout: true
            }
          },
        },

        uglify: {
            my_target: {
                files: {
                    '<%= js %>/core.min.js': ['bower_components/unveil/jquery.unveil.min.js', 'js/core.js'],
                    '<%= js %>/nest.min.js': 'js/nest.js',
                },
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                }
            }
        },

        jshint: {
          files: ['Gruntfile.js','js/**/*.js', '!js/vendors/**/*.js', '<%= shameJS %>'],
          options: {
            globals: {
              window: true,
              document: true,
              jQuery: true
            }
          }
        },

        watch: {
          options: {
            nospawn: true
          },
          sass: {
            files: ['css/*.sass'],
            tasks: 'sass'
          },
          js: {
            files: ['<%= jshint.files %>'],
            tasks: 'jshint'
          }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('watchSass', ['watch:sass']);
    grunt.registerTask('watchJS', ['watch:js']);
    grunt.registerTask('default', ['sass', 'jshint', 'uglify']);

};