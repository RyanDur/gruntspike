module.exports = function(grunt) {
    // Project configuration.

    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    // CONFIG ===================================/
	    'gh-pages': {
		options: {
		    base: '.',
		    repo: 'https://github.com/RyanDur/gruntspike.git',
		    user: {
			name: 'RyanDur',
			email: 'ryan.p.durling@gmail.com'
		    }
		},
		src: ['**']
	    },
	    watch: {
		compass: {
		    files: ['**/*.{scss,sass}'],
		    tasks: ['compass:dev']
		},
		js: {
		    files: ['js/**/*.js'],
		    tasks: ['uglify']
		}
	    },
	    compass: {
		dev: {
		    options: {
			sassDir: ['styles/sass'],
			cssDir: ['styles/css'],
			environment: 'development'
		    }
		},
		prod: {
		    options: {
			sassDir: ['styles/sass'],
			cssDir: ['styles/css'],
			environment: 'production'
		    }
		}
	    },
	    uglify: {
		all: {
		    files: {
			'js/min/main.min.js': ['js/main.js']
		    }
		}
	    },
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

    // DEPENDENT PLUGINS =========================/
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-gh-pages');

    // TASKS =====================================/
    grunt.registerTask('travis',['karma:continuous', 'compass:prod', 'uglify']);
    grunt.registerTask('default', ['compass:dev' , 'uglify', 'watch']);
}