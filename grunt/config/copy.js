module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: false,
            cwd: '<%= paths.app %>',
            dest: '<%= paths.dist %>',
            src: ['*.{ico,png,txt}', '.htaccess', 'images/{,*/}*.webp', '{,*/}*.html', 'styles/fonts/{,*/}*.*']
        }]
    },
    styles: {
        expand: true,
        dot: false,
        cwd: '<%= paths.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
    }
}