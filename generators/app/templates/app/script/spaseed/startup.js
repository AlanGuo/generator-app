'use strict';

var App = require('App');
var config = require('config');
var stats = require('stats');
var $ = require('$');
//应用入口函数
var startup = function(container){
	container = container || $('#wrapper-all');
	var app = App.create($.extend(config,{
		root:'/home',
		<%if(plugins.pluginlist.indexOf('react')>-1){%>
		viewfolder:'tmp/app/script/module',
		<%}else{%>
		viewfolder:'app/script/module',
		<%}%>
		$elem:container,
		netback:function(options,ret){
			if(ret.code === 403){
				//跳转到登录
			}
		}
	}));
	stats.pv(0,0);
	app.launch();
	stats.trackEvent('page','speed','renderTime',new Date()-window.startTime);
};

module.exports = startup;
