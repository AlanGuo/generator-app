'use strict';


//app
define(function(require, exports) {
	var webapp = {
		_container:document.getElementById('body-container'),
		show:function(page){
			var self = this;
			require.async('script/'+page,function(result){
				var pageView = result[page];
				self._container.innerHTML = pageView.show();
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