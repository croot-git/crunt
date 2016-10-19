/*
 * grunt-htmlhint-inline
 * https://github.com/kazu69/grunt-htmlhint-inline
 *
 * Copyright (c) 2015 kazu69
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  var lintinline = require('./lib/inlinehint'),
      HTMLHint = require("htmlhint").HTMLHint,
      path = require('path');

  grunt.registerMultiTask('htmlhint_inline', 'Validate inline html with htmlhint', function () {
    var done = this.async(),
        log = grunt.log,
        output = '';

    var options = this.options({
      force: false,
      reporterOutput: null,
      patterns: [],
      htmlhintrc: null
    });

    var force = options.force;
    delete options.force;

    var reporterOutput = options.reporterOutput;
    delete options.reporterOutput;

    var patterns = options.patterns;
    delete options.patterns;

    var htmlhintrc = options.htmlhintrc
    delete options.htmlhintrc

    var ignore = options.ignore;
    delete options.ignore;

    if (htmlhintrc) {
      var _htmlhintrc = grunt.file.readJSON(htmlhintrc);
      // set to the default options value
      grunt.util._.defaults(options, _htmlhintrc);
    }

    // output pre hook
    if (reporterOutput) {
      grunt.util.hooker.hook(process.stdout, 'write', {
        pre: function(stdout) {
          output += stdout;
          // https://github.com/cowboy/javascript-hooker#hookerpreempt
          return grunt.util.hooker.preempt();
        }
      });
    }

    var tempFiles = lintinline.lint(options, this.filesSrc, ignore, patterns),
        tempFilesLength = Object.keys(tempFiles).length,
        hintCount = 0, eachCount = 0;

    Object.keys(tempFiles).forEach(function( file ) {
        var realFilePath = tempFiles[file]['filepath'],
            file = grunt.file.read( file ),
            msg = "Linting " + realFilePath + "...",
            messages;

        if (file.length) {
          messages = HTMLHint.verify(file, options);

          log.write(msg);

          (messages.length > 0)? log.error() :  log.ok();

          messages.forEach(function( message ) {
            log.writeln(
              "[".red + ( "L" + message.line ).yellow +":".red +
              ( "C" + message.col ).yellow + "]".red + ' ' + message.message.yellow
            );

            var evidence = message.evidence,
                col = message.col;
            if (col === 0) {
                evidence = '?'.red + evidence;
            } else if(col > evidence.length) {
                evidence = evidence + ' '.red;
            } else {
                evidence = evidence.slice(0, col - 1) + evidence[col - 1].red + evidence.slice(col);
            }
            log.writeln(evidence);
            hintCount ++;
          });
        }
        else { log.writeln( "Skipping empty file " + file); }

        if (reporterOutput) {
          var destDir = path.dirname(reporterOutput);
          if (eachCount >= tempFilesLength) {
            grunt.util.hooker.unhook(process.stdout, 'write');
          }

          if (!grunt.file.exists(destDir)) {
            grunt.file.mkdir(destDir);
            grunt.file.write(options.filePath, '');
          }

          reporterOutput = grunt.template.process(reporterOutput);
          grunt.file.write(reporterOutput, output);
        }

        eachCount++;

        if ( hintCount > 0 ) return force;

        log.ok(
          tempFilesLength + ' file' +
          (tempFilesLength === 1 ? '' : 's') + ' lint free.'
        );
    });
  });
};
