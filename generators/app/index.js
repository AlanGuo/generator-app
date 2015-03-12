var generators = require('yeoman-generator');
var options = {};

module.exports = generators.Base.extend({
	initializing:function(){
	},

	prompting:function(){
		//这里询问一些基础配置
		var done = this.async();
	    this.prompt({
	      type    : 'input',
	      name    : 'name',
	      message : 'Your project name',
	      default : this.appname // Default to current folder name
	    }, function (answers1) {
	      //是否使用angular
	      options.name = answers1.name;
		    this.prompt({
		      type    : 'confirm',
		      name    : 'useangular',
		      message : 'Use angular',
		      default : false // Default to current folder name
		    }, function (answers2) {
		      options.useangular = answers2.useangular;
		      //其他组件
		      this.prompt({
		      	type:'list',
		      	name:'pluginlist',
		      	message:'Other plugins you may need',
		      	choices:[
		      		'seajs',
		      		'scss',
		      		'tmodjs',
		      		'confui',
		      		'spaseed'
		      	]
		      },function(answers3){
		      	options.plugins = answers3;
		      	done();
		      });
		    }.bind(this));
	    }.bind(this));
	},

	configuring:function(){
		//配置目录
		this.mkdir('app');
		if(!options.useangular){
			//no angular
			this.mkdir('app/script');
			this.mkdir('app/style');
			this.mkdir('app/view');
			this.mkdir('app/image');
		}
		else{
			//angular
		}
		this.mkdir('test');
		this.mkdir('dist');
	},

	writing:function(){
		this.template('package.json','package.json',options);
		this.template('Gruntfile.js','Gruntfile.js',options);
		this.src.copy('.jshintrc','.jshintrc',true);

		//复制首页文件
		this.src.copy('app/index.html','app/index.html',true);
		this.src.copy('app/favicon.ico','app/favicon.ico',true);
	},

	install:function(){
		this.npmInstall([
			"connect-livereload",
		    "grunt",
		    "grunt-autoprefixer",
		    "grunt-concurrent",
		    "grunt-connect-rewrite",
		    "grunt-contrib-clean",
		    "grunt-contrib-compass",
		    "grunt-contrib-concat",
		    "grunt-contrib-connect",
		    "grunt-contrib-copy",
		    "grunt-contrib-cssmin",
		    "grunt-contrib-htmlmin",
		    "grunt-contrib-imagemin",
		    "grunt-contrib-jshint",
		    "grunt-contrib-uglify",
		    "grunt-contrib-watch",
		    "grunt-filerev",
		    "grunt-ftp-deploy",
		    "grunt-ftpush",
		    "grunt-google-cdn",
		    "grunt-karma",
		    "grunt-livereload",
		    "grunt-newer",
		    "grunt-sftp-deploy",
		    "grunt-svgmin",
		    "grunt-tmod",
		    "grunt-usemin",
		    "grunt-wiredep",
		    "jshint-stylish",
		    "karma-jasmine",
		    "karma-phantomjs-launcher",
		    "load-grunt-tasks",
		    "time-grunt"
		], { 'saveDev': true });
	},

	end:function(){
		
	}
});