module.exports = function(grunt) {
  const sass = require('node-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      default: {
        files: {
          'dist/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    watch: {
      default: {
        files: ['src/sass/**/*.scss'],
        tasks: ['css']
      }
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // do the task
  grunt.registerTask('css', ['sass']);
  grunt.registerTask('default', ['watch']);
};
