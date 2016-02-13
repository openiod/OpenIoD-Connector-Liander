/**
 * OpenIoD module for connecting energieLev data 
 *
 * @param  {String} ##todo 
 * @return {String}
 */
 
 "use strict";

 
var fs 		= require('fs');
var request = require('request');
var sys 	= require('sys');

var energieLevLocalPath ;

var energieLeverancier = 'liander';
var energieLevFilename = 'LianderGeoVerbruik'


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
		console.log('Feature of interest: ' + featureOfInterest);
		console.log('Product: ' + param.product);
		console.log('Year: ' + param.year);
		console.log('systemFolderParent: ' + param.systemFolderParent);
		
		lianderLocalPath	= param.systemFolderParent + '/../data/' + energieLeverancier +'/';
		
		if (featureOfInterest == energieLeverancier) {
			callback(findLocalLiander(param.product));
			return;
		}
		
		console.log('ERROR: File not found!');
		callback('File not found');
		
	},

};


var findLocalLiander = function (productSoort) {
  	var _energieLevFile;
	var _energieLevVerbruikFileObject;
	var _energieLevVerbruikFileOut;
	try {
  		_energieLevFile = fs.readFileSync(energieLevLocalPath + energieLevFilename + '-' + productSoort + '-pc9-2016.json');
		var _energieLevVerbruikFileObject = JSON.parse(_energieLevFile);
		var _energieLevVerbruikFileOut = JSON.stringify(_energieLevVerbruikFileObject);
	} 
	catch (err) {
		_lianderFile = err;
  		// If the type is not what you want, then just throw the error again.
  		//if (err.code !== 'ENOENT') throw e;		
		// Handle a file-not-found error
	}

  return _lianderFile;
}
