'use strict';

define(
  ["angular",
    "taxCalculator.translations.en",
    "taxCalculator.translations.zh-TW",
    "controllers",
    "services",
    "angular-route",
    "ui-bootstrap",
    "angular-translate"
  ],
  function(angular) {
    angular.module('hkTaxCal', [
        'ngRoute',
        'hkTaxCal.controllers',
        'ui.bootstrap',
        'ui.bootstrap.tooltip',
        'pascalprecht.translate',
        'taxCalculator.translations.zh-TW',
        'taxCalculator.translations.en',
      ])
      .filter('range', function() {
        return function(input, total) {
          total = parseInt(total);
          for (var i = 0; i < total; i++)
            input.push(i);
          return input;
        };
      })
      .config(['$translateProvider', 'taxCalculator.translations.zh-TW',
        'taxCalculator.translations.en',
        function(
          $translateProvider, chiTranslations, engTranslations) {
          // add translation table
          $translateProvider
            .translations('en', engTranslations)
            .translations('zh-TW', chiTranslations)
            .preferredLanguage('en');
        }
      ])
      .filter('t', ['$filter', function($filter) {
        return $filter('translate');
      }])
      // .config(['$routeProvider',
      //   function($routeProvider) {
      //     $routeProvider.when('/', {
      //       templateUrl: 'templates/calculator1.html',
      //       controller: 'calculatorCtrl'
      //     });
      //     $routeProvider.otherwise({
      //       redirectTo: '/'
      //     });
      //   }
      // ])
      .config(['$tooltipProvider', function(tooltipProvider) {
        tooltipProvider.options({
          placement: 'right'
        });
      }])
      .directive('parentRecord', [function() {
        return {
          restrict: 'EA',
          scope: {
            parentInfo: '=',
            id: '@'
          },
          controller: ['$scope', function($scope) {
            $scope.parentInfo.together = true;
            // $scope.
          }],
          templateUrl: 'templates/parents.html'
        }
      }])
      .directive('taxDiff', function() {
        return {
          restrict: 'EA',
          scope: {
            propKey: '@'
          },
          controller: ['$scope', function($scope) {
            // $scope.diff =$parent.diff;

            $scope.abs = Math.abs;
            $scope.diff = $scope.$parent.diff;
            $scope.y2014 = $scope.$parent.$y2014;
            $scope.y2013 = $scope.$parent.$y2013;

          }],
          template: '<span class="payMore" ng-show="diff(propKey)>0"><span translate="PAY_MORE" translate-value-amount="{{abs(diff(propKey))}}"></span></span><span  class="payLess" ng-show="diff(propKey)<=0"><span translate="PAY_LESS"  translate-value-amount="{{abs(diff(propKey))}}" ></span></span>  '
        };
      })
      .directive('diff', function() {
        return {
          restrict: 'EA',
          scope: {
            propKey: '@',
            negative: '@'
          },
          controller: ['$scope', function($scope) {
            // $scope.diff = $scope.$parent.diff;

            $scope.abs = Math.abs;
            $scope.diff = function(propKey) {
              return $scope.$parent.diff(propKey);
            };
            $scope.payClass = function(isMore) {
              var clazz = 'payMore';
              if (!!$scope.negative) {
                if (isMore) {
                  clazz = 'payLess';
                } else if (!isMore) {
                  clazz = 'payMore';
                }
              } else {
                if (isMore) {
                  clazz = 'payMore';
                } else if (!isMore) {
                  clazz = 'payLess';
                }
              }
              return clazz;

            };
            $scope.y2014 = $scope.$parent.$y2014;
            $scope.y2013 = $scope.$parent.$y2013;
          }],
          template: '<span ng-class="payClass(true)" ng-show="diff(propKey)>0"><span translate="PAY_MORE" translate-value-amount="{{abs(diff(propKey))}}"></span></span><span  ng-class="payClass(false)" ng-show="diff(propKey)<0"><span translate="PAY_MORE" translate-value-amount="{{abs(diff(propKey))}}"></span> </span><span  ng-class="\'payLess\'" ng-show="diff(propKey)==0">{{::\'SAME\'|t}} </span>'
        };
      })
      .controller('parentInfoCtrl', ['$scope', function($scope) {
        $scope.parentInfoScope = {};
        $scope.parentInputs = [];
        $scope.parentInfoScope.parentCalculation = [];

        function _addParent() {
          $scope.parentInputs.push({
            together: true,
            ageGroup: 1
          })

        };

        for (var i = 0; i <= 10; i++) {
          _addParent();
        }

        $scope.parentCount = 2; //default
        $scope.$watch('parentCount', function(newVal) {
          //keep reference to each

          $scope.parentInfoScope.parentCalculation = $scope.parentInputs
            .slice(0, $scope.parentCount);
        })


      }])
      .run(['$translate', '$location', function($translate, $location) {
        var locale = $location.search()['lng'];
        if (locale === "en" || locale == "zh-TW") {
          $translate.use(locale);
        }
      }]);

  });
