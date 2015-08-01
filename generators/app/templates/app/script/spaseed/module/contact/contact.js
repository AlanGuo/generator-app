'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var template = require('template');
    var asyncRequest = require('asyncrequest');
    var request = require('request');
    var stats = require('stats');
    var View = require('View');

    var contact = View.extend({
        $elem:$('#body-container'),
        title: 'contact',

        render: function () {

        	stats.trackEvent('page', 'view', 'pageName','#/contact');

            this.$elem.html(template('contact',{}));
        },

        destroy: function () {
        }
    });
        
    module.exports = contact;
});