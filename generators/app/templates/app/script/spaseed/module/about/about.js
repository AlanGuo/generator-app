'use strict';

define(function (require, exports, module) {
    var pageManager = require('pagemanager');
    var stats = require('stats');
    var template = require('apptemplate');

    var about = {

        title: 'about',

        render: function () {

        	stats.trackEvent('page', 'view', 'pageName','#/about');

            pageManager.container.html(template('about',{
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
        
    module.exports = about;
});