'use strict';

var $ = require('$');
var template = require('template');
var asyncRequest = require('asyncrequest');
var request = require('request');
var stats = require('stats');
var View = require('View');

var Home = View.extend({

    $elem:$('#body-container'),

    title: 'home',

    render: function () {
        var self = this;
        stats.trackEvent('page', 'view', 'home','');
        asyncRequest.all(this.$net,[{
            params:{code:0,data:{}},
            request:request.sample
        }],function(values){
            self.$elem.html(template('home',{
                data: values[0]
            }));
        });
    },

    events:{
        'click':{
            'tt_click':function(){
                window.alert('tt_click');
            }
        }
    },

    destroy: function () {
    }
});
    
module.exports = Home;