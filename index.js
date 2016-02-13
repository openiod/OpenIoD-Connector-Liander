
/**
 * OpenIoD module for connecting Liander data 
 *
 * @param  {String} ##todo 
 * @return {String}
 */
 
 "use strict";

 
var fs 		= require('fs');
var request = require('request');
var sys 	= require('sys');

var lianderLocalPath 			= systemFolderParent+'/liander/';


module.exports = {


/*
	getFeatureOfInterest: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_CsvHistory.getFeatureOfInterest(featureOfInterest, param, function() {
			console.log('End of getFeatureOfInterest');
 			callback();
		//} );
	},

	getObservationHistory: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_CsvHistory.reqCsvHistory(featureOfInterest, param, function() {
			console.log('End of getObservationHistory');
 			callback();
		} );
	},
	
*/
	getData: function (featureOfInterest, param, callback) {
		//openIodConnector_ILM_MongoAggregation.getData(featureOfInterest, param, callback);
		
		if (featureOfInterest == 'liander') {
			callback(findLocalLiander(param.productSoort));
			return;
		}
		
		callback('File not found');
		
	},

};


var findLocalLiander = function (productSoort) {
  	var _lianderFile;
	var _lianderVerbruikFileObject;
	var _lianderVerbruikFileOut;
	try {
  		_lianderFile = fs.readFileSync(lianderLocalPath + 'LianderGeoVerbruik-' + productSoort + '.json');
		var _lianderVerbruikFileObject = JSON.parse(_lianderFile);
		var _lianderVerbruikFileOut = JSON.stringify(_lianderVerbruikFileObject);
	} 
	catch (err) {
  		// If the type is not what you want, then just throw the error again.
  		//if (err.code !== 'ENOENT') throw e;		
		// Handle a file-not-found error
	}

  return _lianderFile;
}