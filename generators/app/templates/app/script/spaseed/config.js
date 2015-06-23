'use strict';


define(function(require, exports, module) {
	var $ = require('$');
	var spaseedConfig = require('spm_modules/spaseed/1.1.15/config');
	//参数配置
	var config = $.extend(true,spaseedConfig,{
		//首页模块名
		'root': 'index',
		'basePath': 'app/script/module/',
		'debug': true,
		/**
		 * 页面主容器选择器
		 * @property container
		 * @type String
		 * @default '#container'
		 */
		'container': '#container',
		'defaultClass':'scroll-content',
		/**
		 * 页面底部容器选择器
		 * @property bottom
		 * @type String
		 * @default '#bottom'
		 */
		'bottom': '#bottom',
		/**
		 * 页面顶部容器选择器
		 * @property header
		 * @type String
		 * @default '#header'
		 */
		'top':'#top',
		/**
		 * 页面侧边容器选择器
		 * @property sider
		 * @type String
		 * @default '#sider'
		 */

		'sider':'#sider',
		
		//为兼容活动单页的样式，加入以下class样式的控制
		'dotContainer':'.container', 
		'boxInfor':'.box-infor',
		'loginWrapper':'.login-wrapper',
		'layoutContent':'.layout-cont',

		//分页容器选择器
		'paging':'.box-paging',

		//城市选择器容器
		'cityselector': '.area-dialog',
		'switchMode':null,
		'mask':'#mask',
		'dialog':'#dialog',
		'msgbox':'#msgbox',
		'loading':'#loading',
		/**
		 * 刷新的时候不replacehistory
		 * @property silentRefresh
		 * @type boolean
		 * @default false
		 */
		'silentRefresh':true
	});

	module.exports = config;
});
