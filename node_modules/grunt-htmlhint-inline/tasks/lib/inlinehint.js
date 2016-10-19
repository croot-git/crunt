/*
 * grunt-htmlhint-inline
 * https://github.com/kazu69/grunt-htmlhint-inline
 *
 * Copyright (c) 2015 kazu69
 * Licensed under the MIT license.
 */

'use strict';

var grunt = require('grunt'),
    fs = require('fs'),
    tempfile = require('tempfile');

var escape = function(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

function removeTags(src, ignores) {
  var lines = src.split('\n');

  for (var key in ignores) {
    if (ignores.hasOwnProperty(key)) {
      var tagSection = false;
      lines.forEach(function (line, i) {
        var startTag = escape(key),
            stopTag = escape(ignores[key]),
            starts = new RegExp(startTag, 'i').test(line),
            stops = new RegExp(stopTag, 'i').test(line),
            inline = new RegExp(startTag + '.+?' + stopTag, 'ig');

        if(starts && (starts && stops)) {
          lines[i] = line.replace(inline, '');
        }
        else if(starts && !stops) {
          tagSection = true;
          lines[i] = '';
        }
        else if(stops) {
          if(tagSection) { lines[i] = ''; }
          tagSection = false;
        }

        if(tagSection) {
          lines[i] = '';
        }
      });
    }
  }

  return lines.join('\n');
}

function removePatterns(src, patterns) {
  return patterns.reduce(function (content, pattern){
    return content.replace(pattern.match, pattern.replacement || '');
  }, src);
}

function createTemporaryFiles(files, ignores, patterns) {
  var temp = {};

  files.forEach(function (filepath, index) {
    var source = grunt.file.read(filepath),
        tempFile = tempfile();

    if(ignores) source = removeTags(source, ignores);
    if(patterns) source = removePatterns(source, patterns);
    if (/^\s*$/.test(source)) return;

    fs.writeFileSync(tempFile, source);
    temp[tempFile] = { filepath: filepath, file: { path: tempFile } }
  });
  return temp;
}

exports.lint = function lint(options, files, ignores, patterns) {
  return createTemporaryFiles(files, ignores, patterns || []);
};
