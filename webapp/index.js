sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "CEMOSA.ZYBC_probando.walkthrough",
		settings: {
			id: "walkthrough"
		},
		async: true
	}).placeAt("content");
});