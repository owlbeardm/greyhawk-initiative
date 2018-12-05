"use strict";

function AppController($log) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug("AppController init");
    ctrl.pcs = [];
    ctrl.initiativeCount = 1;
  }

  ctrl.add = function() {
    const pc = {
      name: ctrl.addName,
      hp: ctrl.addHp,
      initiative: undefined,
      actions: [false, false, false, false]
    }
    ctrl.pcs.push(pc);
    ctrl.addName = undefined;
    ctrl.addHp = undefined;
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
}

const AppComponent = {
  template: require('./app.html'),
  controller: [
    '$log',
    AppController
  ]
};

export default AppComponent;
