/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var env = EmberApp.env();
var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      enabled: isProductionLikeBuild,
    },
  });

  app.import('bower_components/perfect-scrollbar/css/perfect-scrollbar.css');
  // disabled until https://github.com/yesmeck/jquery-jsonview/issues/26 is fixed
  // app.import('bower_components/jquery-jsonview/dist/jquery.jsonview.css');
  app.import('bower_components/jquery-jsonview/dist/jquery.jsonview.js');
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js');

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
