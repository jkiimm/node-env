'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jscs: {
      options: {
        config: '.jscsrc',
      },
      src: ['lib/**/*.js', 'examples/**/*.js', 'Gruntfile.js'],
    },
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.registerTask('default', ['jscs']);
};
