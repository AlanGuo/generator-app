'use strict';

define(function(require, exports) {
	var webapp = require('script/app').webapp;
	
	var router = {
		route:function(hash){
			hash = hash || '';
			if(!hash){
				hash = 'home';
			}
			webapp.show(hash);
		}
	};
	exports.router = router;
});
