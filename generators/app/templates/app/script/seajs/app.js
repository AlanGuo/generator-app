'use strict';


//app
define(function(require, exports) {
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
});