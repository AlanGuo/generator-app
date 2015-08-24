'use strict';

var React = require('react');
var $ = require('$');
var stats = require('stats');
var View = require('View');

var About = View.extend({
    $elem:$('#body-container'),
    title: 'contact',

    render: function () {
    	stats.trackEvent('page', 'view', 'about','');
    	React.render(
    		<div>about</div>,
    		this.$elem[0]
    	);
    },

    destroy: function () {
    }
});
    
module.exports = About;