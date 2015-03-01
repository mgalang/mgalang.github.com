module.exports = function(grunt){
  // config
  grunt.initConfig({
    cssmin: {
      target: {
        files: {
          'css/bundle.min.css': ['css/normalize.css', 'css/main.css']
        }
      },
      options: {
        roundingPrecision: -1,
        sourceMap: true
      }
    },
    watch: {
      css: {
        files: ['css/main.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      }
    }
  });

  // load contribs
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['watch']);
};
