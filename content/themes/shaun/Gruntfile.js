module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'assets/js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    less: {
      build: {
        options: {
          yuicompress: true
        },
        files: {
          'assets/css/main.min.css': [ 'assets/less/main.less' ]
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      less: {
        options: {
          livereload: false
        },
        files: ['assets/less/*.less', 'assets/less/main.less', 'assets/less/**/*.less'],
        tasks: ['less']
      },
      css: {
          files: ['assets/css/main.min.css']
      },
      html: {
        files: ['*.hbs', '**/*.hbs'],
        tasks: ['less']
      }   
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['server']);
  grunt.registerTask('build', ['jshint', 'less:build' ]);
  grunt.registerTask('server', ['build', 'watch' ]);  
};