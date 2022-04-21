sap.ui.define([
	"sap/ui/core/UIComponent", //Step 9 Walkthrough
	"sap/ui/Device",
	"CEMOSA/ZYBC_probando/model/models",
	"sap/ui/model/json/JSONModel", //Step 9 Walkthrough
	"sap/ui/model/resource/ResourceModel" //Step 9 Walkthrough
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("CEMOSA.ZYBC_probando.Component", {

		metadata: {
			//Step 9 Walkthrough
			"interfaces": [sap.ui.core.IAsyncContentCreation],
			"rootView": "CEMOSA.ZYBC_probando.view.App",
			"type": "XML",
			/*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
			"id": "app",

			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments); //Step 9 Walkthrough
			//set data model
			var oData = {
				recipient: {
					name: "World"
				}
			};

			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			//set i18n model
			var i18nModel = new ResourceModel({
				bundleName: "CEMOSA.ZYBC_probando.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			//create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});