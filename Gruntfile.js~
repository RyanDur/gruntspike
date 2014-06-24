module.exports = function(grunt) {
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    karma: {
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
		    reporters: ['progress']
		}
	    }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('travis',['karma']);
}