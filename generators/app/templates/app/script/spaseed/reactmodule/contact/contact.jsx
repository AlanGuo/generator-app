'use strict';


var React = require('react');
var $ = require('$');
var stats = require('stats');
var View = require('View');

var Contact = View.extend({
    $elem:$('#body-container'),
    title: 'contact',

    render: function () {
    	stats.trackEvent('page', 'view', 'pageName','#/contact');
    	React.render(
    		<div>contact</div>,
    		this.$elem[0]
    	);
    },

    destroy: function () {
    }
});
    
module.exports = Contact;