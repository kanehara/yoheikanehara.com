module.exports = function(grunt) {
    grunt.registerTask('default', ['clean:dist', 'less', 'concat', 'uglify', 'copy', 'wiredep', 'watch']);
}