'use strict';


//程序入口
window.onhashchange = function(){
     var newHash = location.hash.substring(2) || location.pathname.substring(1);
     //路由
     router.route(newHash);
};

define(function(require, exports) {
	var router = require('script/router');
	var eventHandler = require('script/event');
	
	eventHandler.bindEvent('click');
	window.onhashchange();
});