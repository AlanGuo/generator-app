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
			this.mkdir('app/script');
			this.mkdir('app/style');
			this.mkdir('app/view');
			this.mkdir('app/image');
		}
		this.mkdir('test');
		this.mkdir('dist');
	},

	writing:function(){
		this.fs.copyTpl(
	      this.templatePath('package.json'),
	      this.destinationPath('package.json'),
	      options
	    );

		//复制Gruntfile.js
	    this.fs.copyTpl(
	      this.templatePath('Gruntfile.js'),
	      this.destinationPath('Gruntfile.js'),
	      options
	    );

	    this.fs.copyTpl(
	      this.templatePath('.jshintrc'),
	      this.destinationPath('.jshintrc'),
	      options
	    );

		//复制首页文件
	    this.fs.copyTpl(this.templatePath('app/index.html'), this.destinationPath('app/index.html'), options);
	},

	install:function(){

	},

	end:function(){
		
	}
});