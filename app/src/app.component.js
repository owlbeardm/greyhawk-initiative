"use strict";

function AppController($log) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug("AppController init");
    ctrl.pcs = [];
  }

  ctrl.add = function() {
    const pc = {
      name: '',
      hp: '0',
      initiative: undefined,
      actions: [false, false, false, false]
    }
    ctrl.pcs.push(pc);
  }

  ctrl.endRound = function() {
    ctrl.pcs.forEach((pc) => {
      pc.actions = [false, false, false, false];
      pc.initiative = undefined;
    })
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
