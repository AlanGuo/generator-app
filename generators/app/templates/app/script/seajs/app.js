'use strict';


//app
define(function(require, exports) {
	var eventHandler = require('app/script/event').eventHandler;
	var webapp = {
		_container:document.getElementById('body-container'),
		show:function(page){
			var self = this;
			require.async('app/script/'+page,function(result){
				var viewName = page+'View';
				var pageView = result[viewName];
				self._container.innerHTML = pageView.show();
				if(pageView.events && !pageView.events.binded){
				//绑定事件
				for(var p in pageView.events){
					eventHandler.on(p,pageView.events[p]);
				}
				pageView.events.binded = true;
			}
			pageView.init && pageView.init();
			});
		},
		/**
		 * 隐藏主界面
		 */
		hide:function(){
			this._container.innerHTML = '';
		}
	};

	exports.webapp = webapp;
});