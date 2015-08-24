'use strict';


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
_hmt.push(['_trackEvent','page','speed','renderTime',new Date()-window.startTime]);