"use strict";

function PCController($log, focusService) {
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
      focusService.setFocus('changeNameInput');
    }
    ctrl.editNameMode = !ctrl.editNameMode;
  }

  ctrl.changeDex = function() {
    ctrl.pc.dex = ctrl.dex;
    ctrl.editDex();
  }

  ctrl.editDex = function() {
    if(!ctrl.editDexMode){
      ctrl.dex = ctrl.pc.dex;
    }
    ctrl.editDexMode = !ctrl.editDexMode;
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
    'focusService',
    PCController
  ],
  bindings: {
    pc: '<',
    initiativeCount: '<'
  }
}

export default PCComponent;
