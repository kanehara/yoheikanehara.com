module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: false,
            cwd: '<%= paths.app %>',
            dest: '<%= paths.dist %>',
            src: ['images/*']
        }]
    }
}