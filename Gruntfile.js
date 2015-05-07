module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [

                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"

                ],
                "dest": "server/public/vendor/"
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    //default tasks
    grunt.registerTask('default', ['copy']);
};
