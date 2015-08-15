'use strict';

var request = {
	sample:{url:'/cgi-bin/sample',method:'get',fakecallback:function(data,cb){
		setTimeout(function(){
			cb(data);
		}, 200);
	}}
};

module.exports = request;
