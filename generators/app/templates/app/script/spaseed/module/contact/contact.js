'use strict';

define(function (require, exports, module) {
    var pageManager = require('pagemanager');
    var stats = require('stats');
    var template = require('apptemplate');

    var contact = {

        title: 'contact',

        render: function () {

        	stats.trackEvent('page', 'view', 'pageName','#/contact');

            pageManager.container.html(template('contact',{
                data: values[0]
            }));
        },

        events:{
            'click':{
            }
        },

        destroy: function () {
        }
    };
        
    module.exports = contact;
});