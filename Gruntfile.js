
module.exports = function(grunt){

    grunt.initConfig({

        //location of the package file
        pkg: grunt.file.readJSON('package.json'),

        //Sass task
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'file',
                },
                files: {
                    'style-human.css': 'sass/style.scss'
                }
            },
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'file',
                },
                files: {
                    'style.css': 'sass/style.scss'
                }
            }
        },
        //Autoprefixer
        autoprefixer: {
            options: {
                browsers: ['last 2 versions'],
                map: true
            },
            // prefix all files
            multiple_files: {
                expand: true,
                flatten: true,
                src: '*.css',
                dest: '',
            }
        },
        //Watch task
            watch: {
                css: {
                    files: '**/*.scss',
                    tasks: ['sass', 'autoprefixer']
                }
            }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch']);

}