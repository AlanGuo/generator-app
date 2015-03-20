'use strict';

define(function(require, exports) {
	var aboutView = {
		/** 
		 * 显示指定内容
		 * @method show
		 */
		init:function(){
		},
		show:function(){
			ga('send', 'event', 'page', 'view', {'pageName': '#/about'});
			<%if(plugins.pluginlist.indexOf('tmodjs')>-1){%>
			return webapptmpl.template('frame')({page:'about',content:webapptmpl.template('about')()});
			<%}else{%>
				return 'about view';
			<%}%>
		},
		events:{
			'confirm':function(){
			}
		}
	};
	exports.aboutView = aboutView;
});