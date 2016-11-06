module.exports = {
    development: {
        options: {
            compress: true,
            yuicompress: true,
            optimization: 2
        },
        files: {
            "styling/css/main.css": "styling/less/main.less" // destination file and source file
        }
    }
}