'use strict';

var aboutView = {
	/** 
	 * 显示指定内容
	 * @method show
	 */
	init:function(){
	},
	show:function(){
		_hmt.push(['_trackEvent', 'page', 'view', 'about','']);
		<%if(plugins.pluginlist.indexOf('tmodjs')>-1){%>
		return <%=name%>tmpl.template('about')();
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