module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    karma: {
		options: {
		    configFile: 'karma.conf.js'
		},
		continuous: {
		    singleRun: true,
		    browsers: ['PhantomJS']
		},
		dev: {
		    reporters: ['progress']
		}
	    }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('travis',['karma']);
}