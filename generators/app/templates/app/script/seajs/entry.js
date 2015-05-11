'use strict';

define(function(require) {
	var router = require('app/script/router').router;
	var eventHandler = require('app/script/event').eventHandler;
	
	eventHandler.bindEvent('click');

	//程序入口
	window.onhashchange = function(){
	     var newHash = location.hash.substring(2);
	     //路由
	     router.route(newHash);
	};
	window.onhashchange();
});