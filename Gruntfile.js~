module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    karma: {
		unit: {
		    configFile: 'karma.conf.js',
		    autoWatch: true
		},
		options: {
		    configFile: 'karma.conf.js',
		    runnerport: 9999,
		    browsers: ['Chrome']
		},
		continuous: {
		    singleRun: true,
		    browsers: ['PhantomJS']
		},
		dev: {
		    reporters: ['progress', 'growl']
		}
	    }
    });

    grunt.loadNpmTasks('grunt-karma');
}