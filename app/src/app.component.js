"use strict";

function AppController($log, $scope, $window, focusService) {
  const ctrl = this;
  const localStorage = $window['localStorage'];
  const STARAGE_PCS = 'PCS';

  ctrl.$onInit = function() {
    $log.debug("AppController init");
    let pcs;
    try {
      pcs = JSON.parse(localStorage.getItem(STARAGE_PCS));
    } catch (err) {
      $log.error(err);
    }
    ctrl.pcs = (!pcs || !pcs.length) ? [] : pcs;
    $log.debug("AppController ctrl.pcs", ctrl.pcs, pcs);
    ctrl.initiativeCount = 1;
  }

  ctrl.endRound = function() {
    ctrl.pcs.forEach((pc) => {
      pc.actions = [false, false, false, false];
      pc.initiative = undefined;
    });
    ctrl.initiativeCount = 1;
  }

  ctrl.nextCount = function() {
    ctrl.initiativeCount++;
  }

  ctrl.clear = function() {
    ctrl.pcs = [];
  }

  $scope.$watch('$ctrl.pcs', function(newVal, oldVal) {
    console.log('AppController changed', newVal, oldVal);
    localStorage.setItem(STARAGE_PCS, JSON.stringify(newVal));
  }, true);
}

const AppComponent = {
  template: require('./app.html'),
  controller: [
    '$log',
    '$scope',
    '$window',
    'focusService',
    AppController
  ]
};

export default AppComponent;
