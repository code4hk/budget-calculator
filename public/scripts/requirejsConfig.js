console.log('init requirejs config');
var require = {
  "map": {},
  "paths": {
    "angular": "../bower_components/angular/angular",
    "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
    "angular-cookies": "../bower_components/angular-cookies/angular-cookies",
    "angular-mocks": "../bower_components/angular-mocks/angular-mocks",
    "angular-resource": "../bower_components/angular-resource/angular-resource",
    "angular-sanitize": "../bower_components/angular-sanitize/angular-sanitize",
    "angular-animate": "../bower_components/angular-animate/angular-animate",
    "angular-route": "../bower_components/angular-route/angular-route",
    "spin-js": "../bower_components/spin.js/spin",
    "hkTaxCal": "hkTaxCal",
    "ui-bootstrap": "../bower_components/angular-bootstrap/ui-bootstrap-tpls.min",
    "angular-translate": "../bower_components/angular-translate/angular-translate",
    "angular-busy": "../",
    "taxCalculator.translations.en": "en/translations",
    "taxCalculator.translations.zh-TW": "zh-TW/translations"
  },
  //not make sense to put locale in requirejs actually unless concat
  "shim": {
    "angular": {
      "exports": "angular"
    },
    "angular-route": {
      "deps": [
        "angular"
      ]
    },
    "angular-sanitize": {
      "deps": [
        "angular"
      ]
    },
    "angular-animate": {
      "deps": [
        "angular"
      ]
    },
    "hkTaxCal": {},
    "ui-bootstrap": {
      "deps": ["angular"]
    },
    "angular-busy": {
      "deps": [
        "angular"
      ]
    },
    "angular-translate": {
      "deps": [
        "angular"
      ]
    },
    "taxCalculator.translations.en": {
      "deps": [
        "angular"
      ]
    },
    "taxCalculator.translations.zh-TW": {
      "deps": [
        "angular"
      ]
    }
  },
  "baseUrl": "scripts"
};

if (typeof(module) != 'undefined') {
  module.exports = require;
}
