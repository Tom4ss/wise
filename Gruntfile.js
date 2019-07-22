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

    postcss: {
      options: {
        map: true,
        preprocessors: [
          require('autoprefixer')(),
          require('pixrem')(),
          require('cssnano')()
        ]
      },
      default: {
        src: ['dist/css/style.css']
      }
    },

    browserSync: {
      bsFiles: {
        src: 'dist/css/*.css'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './'
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
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-postcss');

  // do the task
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('default', ['browserSync', 'watch']);
};
