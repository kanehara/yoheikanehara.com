module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: ['<%= paths.app %>/js/script.js', '<%= paths.app %>/js/script.js'],
        dest: 'dist/built.js',
    }
}