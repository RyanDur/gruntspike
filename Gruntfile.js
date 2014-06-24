module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    karma: {
		unit: {
		    configFile: 'karma.conf.js'
		},
		continuous: {
		    configFile: 'karma.conf.js',
		    reporters: ['progress'],
		    singleRun: true,
		    browsers: ['PhantomJS']
		}
	    }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('travis',['karma:continuous']);
}