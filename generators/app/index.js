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
		      var choices = [
		      		'seajs',
		      		'compass',
		      		'tmodjs',
		      		'bootstrap',
		      		'confui',
		      		'spaseed',
		      		'karma',
		      	];
		      if(options.useangular){
		      	choices = [
		      		'compass',
		      		'bootstrap',
		      		'confui'
		      	];
		      }
		      this.prompt({
		      	type:'checkbox',
		      	name:'pluginlist',
		      	message:'Other plugins you may need',
		      	choices:choices
		      },function(answers3){
		      	options.plugins = answers3;

		      	//如果选择的seajs
		      	if(options.plugins.pluginlist.indexOf('seajs') > -1){

		      		this.prompt({
				      type    : 'confirm',
				      name    : 'usecombo',
				      message : 'Use seajs combo?',
				      default : false // Default to current folder name
				    }, function (answers4) {
				    	options.usecombo = answers4.usecombo;
				    	done();
				    });
				    
		      	}else{
		      		done();
		      	}

		      }.bind(this));
		    }.bind(this));
	    }.bind(this));
	},

	configuring:function(){
		//配置目录
		this.mkdir('app');
		this.mkdir('app/font');
		this.mkdir('app/script');
		this.mkdir('app/style');
		this.mkdir('app/view');
		this.mkdir('app/image');
		this.mkdir('bower_components');
		this.mkdir('test');
		this.mkdir('dist');
	},

	writing:function(){
		console.log(options)
		this.template('package.json','package.json',options);
		this.template('bower.json','bower.json',options);
		this.template('Gruntfile.js','Gruntfile.js',options);
		this.src.copy('.jshintrc','.jshintrc',true);

		//复制首页文件
		this.template('app/index.html','app/index.html',options);
		this.src.copy('app/favicon.ico','app/favicon.ico',true);

		//css
		var pluginlist = options.plugins.pluginlist;
		if(pluginlist.indexOf('compass')>-1){
			this.src.copy('app/style/main.scss','app/style/main.scss',true);
		}
		else{
			this.src.copy('app/style/main.css','app/style/main.css',true);
		}

		//image
		this.src.copy('app/image/yeoman.png','app/image/yeoman.png',true);

		if(!options.useangular && pluginlist.indexOf('seajs')==-1){
			//javascript
			this.template('app/script/global/entry.js','app/script/entry.js',options);
			this.template('app/script/global/event.js','app/script/event.js',options);
			this.template('app/script/global/router.js','app/script/router.js',options);
			this.template('app/script/global/app.js','app/script/app.js',options);
			this.template('app/script/global/home.js','app/script/home.js',options);
			this.template('app/script/global/about.js','app/script/about.js',options);
			this.template('app/script/global/contact.js','app/script/contact.js',options);
		}
		else if(!options.useangular && pluginlist.indexOf('seajs')>-1){
			//javascript
			this.template('app/script/seajs/entry.js','app/script/entry.js',options);
			this.template('app/script/seajs/event.js','app/script/event.js',options);
			this.template('app/script/seajs/router.js','app/script/router.js',options);
			this.template('app/script/seajs/app.js','app/script/app.js',options);
			this.template('app/script/seajs/home.js','app/script/home.js',options);
			this.template('app/script/seajs/about.js','app/script/about.js',options);
			this.template('app/script/seajs/contact.js','app/script/contact.js',options);
		}
		else if(options.useangular){
			//javascript
			this.template('app/script/angular/app.js','app/script/app.js',options);
			this.template('app/script/angular/controller/contact.js','app/script/controller/contact.js',options);
			this.template('app/script/angular/controller/about.js','app/script/controller/about.js',options);
			this.template('app/script/angular/controller/main.js','app/script/controller/main.js',options);
		}

		if(pluginlist.indexOf('tmodjs')>-1 || options.useangular){
			this.src.copy('app/view/home.html','app/view/home.html',true);
			this.src.copy('app/view/contact.html','app/view/contact.html',true);
			this.src.copy('app/view/about.html','app/view/about.html',true);
		}

		//test
		this.src.copy('test/.jshintrc','test/.jshintrc',true);

		if(pluginlist.indexOf('karma')>-1){
			this.src.copy('test/karma.conf.js','test/karma.conf.js',true);
		}

		this.src.copy('README.MD','README.MD',true);
	},

	install:function(){
		var npmPackage = [
			"connect-livereload",
		    "grunt",
		    "grunt-autoprefixer",
		    "grunt-concurrent",
		    "grunt-connect-rewrite",
		    "grunt-connect-proxy",
		    "grunt-contrib-clean",
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
		    "grunt-ftpush",
		    "grunt-qc-cdnify",
		    "grunt-livereload",
		    "grunt-newer",
		    "grunt-svgmin",
		    "grunt-usemin",
		    "grunt-wiredep",
		    "jshint-stylish",
		    "load-grunt-tasks",
		    "time-grunt"
		];
		var bowerPackage = [];

		var pluginlist = options.plugins.pluginlist;
		if(pluginlist.indexOf('compass')>-1){
			//compass
			npmPackage.unshift('grunt-contrib-compass');
		}
		if(pluginlist.indexOf('tmodjs')>-1){
			//tmodjs
			npmPackage.unshift('grunt-alan-tmod');
		}
		if(pluginlist.indexOf('bootstrap')>-1){
			//bootstrap
			bowerPackage.push('bootstrap');
		}
		if(pluginlist.indexOf('confui')>-1){
			//confui
			bowerPackage.push('confui');
		}
		if(pluginlist.indexOf('seajs')>-1){
			//seajs
			npmPackage.push('grunt-seajs-combo');
			npmPackage.push('grunt-rewrite');
		}
		if(pluginlist.indexOf('karma')>-1){
			npmPackage.push('grunt-karma');
			npmPackage.push('karma-jasmine');
			npmPackage.push('karma-phantomjs-launcher');
		}
		if(options.useangular){
			bowerPackage.push('angular');
			bowerPackage.push('angular-animate');
			bowerPackage.push('angular-route');
			bowerPackage.push('angular-cookies');
		}
		

		this.log('you can run "npm install & bower install & spm install" to install dependencies.');

		this.npmInstall(npmPackage, { 'saveDev': true });
		this.bowerInstall(bowerPackage, { 'save': true });
		this.spawnCommand('spm', ['install']);
	},

	end:function(){
		
	}
});