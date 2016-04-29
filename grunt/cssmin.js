module.exports = {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1,
    debug:true
  },
  target: {
    files: [{
      expand: true,
      cwd: '<%= path.src %>/css',
      src: ['*.css', '!*.min.css'],
      dest: '<%= path.dist %>/css'
    }]
  }
};
