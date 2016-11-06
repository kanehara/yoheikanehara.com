module.exports = {
    development: {
        options: {
            compress: true,
            yuicompress: true,
            optimization: 2
        },
        files: {
            "dist/css/main.css": "<%= paths.app %>/styling/less/main.less" // destination file and source file
        }
    }
}