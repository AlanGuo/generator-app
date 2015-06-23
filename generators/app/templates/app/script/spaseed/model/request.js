'use strict';

define(function(require, exports, module) {
	var requestmanager = require('requestmanager');

	requestmanager.add('sample','/cgi/sample');

	module.exports = requestmanager;
});
