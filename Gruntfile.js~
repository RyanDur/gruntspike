module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    karma: {
		unit: {
		    configFile: 'karma.conf.js'
		},
		continuous: {
		    configFile: 'karma.conf.js',
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