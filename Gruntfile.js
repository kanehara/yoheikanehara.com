module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-tasks')(grunt);

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks'
        },
        data: {
            foo: 'bar', // accessible with '<%= foo %>'
            paths: {
                dist: 'dist',
                app: 'src'
            }
        }
    });
};