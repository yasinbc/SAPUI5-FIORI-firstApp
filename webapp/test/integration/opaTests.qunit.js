/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"CEMOSA/ZYBC_probando/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});