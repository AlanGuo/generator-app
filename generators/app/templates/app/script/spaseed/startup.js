'use strict';

define(function(require, exports, module) {
	var App = require('App');
	var config = require('config');
	var $ = require('$');
	//应用入口函数
    var startup = function(container){
		container = container || $('#switchWrapper');
		var app = App.create($.extend(config,{
			root:'/page1',
			viewfolder:'tmp/app/script/module',
			$elem:container,
			netback:function(options,ret,info){
				if(ret.code === 403){
					//跳转到登录
				}
			}
		}));
		app.launch();
	};

    module.exports = startup;
});
