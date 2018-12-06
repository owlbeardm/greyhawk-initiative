"use strict";

function PCController($log) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('PCController init', ctrl);
  }

  ctrl.checkAction = function(number) {
    ctrl.pc.actions[number] = !ctrl.pc.actions[number];
  }

  ctrl.changeName = function() {
    ctrl.pc.name = ctrl.name;
    ctrl.editName();
  }

  ctrl.editName = function() {
    if(!ctrl.editNameMode){
      ctrl.name = ctrl.pc.name;
    }
    ctrl.editNameMode = !ctrl.editNameMode;
  }

  ctrl.changeHp = function() {
    ctrl.pc.hp = ctrl.hp;
    ctrl.editHp();
  }

  ctrl.editHp = function() {
    if(!ctrl.editHpMode){
      ctrl.hp = ctrl.pc.hp;
    }
    ctrl.editHpMode = !ctrl.editHpMode;
  }

  ctrl.minusHp = function() {
    ctrl.pc.hp = ctrl.pc.hp - ctrl.hp;
    ctrl.editMinusHp();
  }

  ctrl.editMinusHp = function() {
    if(!ctrl.minusHpMode){
      ctrl.hp = 0;
    }
    ctrl.minusHpMode = !ctrl.minusHpMode;
  }

}

const PCComponent = {
  template: require('./pc.html'),
  controller: [
    '$log',
    PCController
  ],
  bindings: {
    pc: '<',
    initiativeCount: '<'
  }
}

export default PCComponent;
