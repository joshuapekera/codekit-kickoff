// Custom JS Application Code

// If using JSLint for syntax debugging, include the following two lines for looser management
/*jslint browser: true, sloppy: true, white: true*/
/*global $, console, alert, app*/

$(function() { 
	app.init();
});

var app = { 

	init: function() { 
		// this.listeners();
		console.log(this.settings.name + "(v" + this.settings.version + ") Started");
	},
	
	listeners: function() { 
		// Application Listeners can be loaded here for easy configuration
	},
	
	settings: { 	
		name: "My Application",	
		version: "1.0.0",
		ga_analytics: "UA-XXXXXXXX"
	}
	
};