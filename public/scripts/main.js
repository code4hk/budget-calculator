require(['angular', 'app'], function(angular) {
  console.log('bootstrap site');
  angular.bootstrap(document, ["hkTaxCal"]);

  if (typeof(console) === 'undefined') {
    console = function() {};
  };
});
