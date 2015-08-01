'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var template = require('template');
    var stats = require('stats');
    var View = require('View');

    var Contact = View.extend({
        $elem:$('#body-container'),
        title: 'contact',

        render: function () {

        	stats.trackEvent('page', 'view', 'pageName','#/contact');

            this.$elem.html(template('contact',{}));
        },

        destroy: function () {
        }
    });
        
    module.exports = Contact;
});