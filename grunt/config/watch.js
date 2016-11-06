module.exports = {
    styles: {
        files: ['<%= paths.app %>/styling/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
            nospawn: true
        }
    }
}