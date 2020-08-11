module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['babel'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: "src/scss/**/*.scss",
                tasks: ['sass']
            },
        },

        babel: {
            options: {
                sourceMap: false,
                presets: ['@babel/preset-env'],
                plugins: ["@babel/plugin-transform-runtime"],
                comments: false
            },
            dist: {
                files: {
                    "dist/app.js": "src/app.js"
                }
            }
        },

        sass: {
            dist: {
                files: {
                    // destination          // source file
                    "dist/css/styles.css": "src/scss/styles.scss"
                }
            },
            options: {
                sourcemap: "none",
                style: "expanded",
                noCache: true
            }
        },

    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'babel', 'watch']);

};