"use strict";

function AppController($log, focusService) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug("AppController init");
    ctrl.pcs = [];
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
}

const AppComponent = {
  template: require('./app.html'),
  controller: [
    '$log',
    'focusService',
    AppController
  ]
};

export default AppComponent;
