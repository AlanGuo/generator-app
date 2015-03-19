'use strict';

//程序入口
window.onhashchange = function(){
     var newHash = location.hash.substring(2) || location.pathname.substring(1);
     //路由
     webapp.router.route(newHash);
};

window.onhashchange();
webapp.eventHandler.bindEvent('click');



//app
(function(exports){
	var webapp = {
		_container:document.getElementById('body-container'),
		show:function(page){
			var viewName = page+'View';
			this._container.innerHTML = this[viewName].show();
		},
		/**
		 * 隐藏主界面
		 */
		hide:function(){
			this._container.innerHTML = '';
		}
	};

	exports.webapp = webapp;
})(window);
