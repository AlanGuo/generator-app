'use strict';

define(function(require, exports) {
	var contactView = {
		/** 
		 * 显示指定内容
		 * @method show
		 */
		init:function(){
		},
		show:function(){
			_hmt.push(['_trackEvent', 'page', 'view', 'pageName','#/contact']);
			<%if(plugins.pluginlist.indexOf('tmodjs')>-1){%>
			return <%=name%>tmpl.template('contact')();
			<%}else{%>
				return 'contact view';
			<%}%>
		},
		events:{
			'confirm':function(){
			}
		}
	};

	exports.contactView = contactView;
});
