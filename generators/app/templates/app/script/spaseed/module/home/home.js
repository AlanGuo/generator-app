'use strict';

define(function (require, exports, module) {
    var pageManager = require('pagemanager');
    var stats = require('stats');
    var template = require('apptemplate');
    var request = require('request');
    var asyncRequest = require('asyncrequest');

    var home = {

        title: 'home',

        render: function () {

            stats.trackEvent('page', 'view', 'pageName','#/home');
            asyncRequest.all([{
                params:null,
                request:request.sample
            }],function(values){
                pageManager.container.html(template('home',{
                    data: values[0]
                }));
            });
        },

        events:{
            'click':{
                'tt_click':function(){
                    alert('tt_click');
                }
            }
        },

        destroy: function () {
        }
    };
        
    module.exports = home;
});