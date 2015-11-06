module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean:{
      js: ['dist/**/*']
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      files: {
        expand: true,
        cwd: 'dist/js',
        ext: '-es5.js',
        src: ['concat-es6.js'],
        dest: 'dist/js/compiled'
      }
    },
    concat: {
      js: {
        src: 'src/publics/**/*.es6',
        dest: 'dist/js/concat-es6.js'
      },
      css: {
        src: 'dist/css/compiled/*.css',
        dest: 'dist/css/concat.css'
      }
    },
    uglify: {
      js: {
        src: 'dist/js/compiled/concat-es6-es5.js',
        dest: 'dist/js/compiled/concat-es6-es5.min.js'
      }
    },
    cssmin: {
      css:{
        src: 'dist/css/concat.css',
        dest: 'dist/css/concat.min.css'
      }
    },
    watch: {
      publics: {
        files: [ "src/publics/*.es6"],
        tasks: [ "build" ]
      }
    }
  });

  grunt.registerTask('build', ['clean', 'concat:js','babel','uglify', 'cssmin','watch']);
  grunt.registerTask('default', ['build','watch']);
}