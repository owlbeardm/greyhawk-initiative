"use strict";

function PCController($log) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('PCController init', ctrl);
  }

  ctrl.checkAction = function(number) {
    ctrl.pc.actions[number] = !ctrl.pc.actions[number];
  }

}

const PCComponent = {
  template: require('./pc.html'),
  controller: [
    '$log',
    PCController
  ],
  bindings: {
    pc: '<'
  }
}

export default PCComponent;
