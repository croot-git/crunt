/*
 * grunt-htmlhint-inline
 * https://github.com/kazu69/grunt-htmlhint-inline
 *
 * Copyright (c) 2015 kazu69
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    htmlhint_inline: {
      options: {
        htmlhintrc: '.htmlhintrc',
        ignore: {
            '<?php': '?>'
        },
        patterns: [
          {
            match: /hoge/g,
            replacement: 'fuga'
          }
        ],
        reporterOutput: './log/grunt.log',
      },
      dest: {
        src: ['./test/*.phtml']
      }
    }

  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['htmlhint_inline']);
  grunt.registerTask('default', ['jshint', 'test']);
};
