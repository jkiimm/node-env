'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jscs: {
      options: {
        config: '.jscsrc',
      },
      src: ['lib/**/*.js', 'examples/**/*.js', 'Gruntfile.js'],
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
        },
        src: ['test/**/*.js'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['jscs', 'mochaTest']);
};
