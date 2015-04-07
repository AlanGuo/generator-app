'use strict';


//app
define(function(require, exports) {
	var webapp = {
		_container:document.getElementById('body-container'),
		show:function(page){
			var self = this;
			require.async('app/script/'+page,function(result){
				var pageView = result[page+'View'];
				self._container.innerHTML = pageView.show();
				if(self[viewName].events && !self[viewName].events.binded){
				//绑定事件
				for(var p in self[viewName].events){
					self.eventHandler.on(p,self[viewName].events[p]);
				}
				self[viewName].events.binded = true;
			}
			this[viewName].init && this[viewName].init();
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