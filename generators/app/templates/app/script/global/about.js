'use strict';

(function(exports){
	var aboutView = {
		/** 
		 * 显示指定内容
		 * @method show
		 */
		init:function(){
		},
		show:function(){
			_czc.push(['_trackEvent', 'page', 'view', 'pageName','#/about']);
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
})(webapp);
