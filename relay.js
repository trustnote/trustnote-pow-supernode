/*jslint node: true */
"use strict";
var conf = require('trustnote-pow-common/conf.js');
var myWitnesses = require('trustnote-pow-common/my_witnesses.js');

function replaceConsoleLog(){
	var clog = console.log;
	console.log = function(){
		Array.prototype.unshift.call(arguments, Date().toString()+':');
		clog.apply(null, arguments);
	}
}

function start(){
	console.log('starting');
	var network = require('trustnote-pow-common/network.js');
	if (conf.initial_peers)
		conf.initial_peers.forEach(function(url){
			network.findOutboundPeerOrConnect(url);
		});
}

replaceConsoleLog();