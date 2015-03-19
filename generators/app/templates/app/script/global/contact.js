'use strict';

(function(exports){
	var contactView = {
		/** 
		 * 显示指定内容
		 * @method show
		 */
		init:function(){
		},
		show:function(){
			ga('send', 'event', 'page', 'view', {'pageName': '#/contact'});
			<%if(plugins.pluginlist.indexOf('tmodjs')>-1){%>
			return QQSwitcherTmpl.template('frame')({page:'contact',content:webapptmpl.template('contact')()});
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
})(webapp);
