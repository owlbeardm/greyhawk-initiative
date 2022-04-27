"use strict";

function PCController($log, focusService) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('PCController init', ctrl);
    ctrl.addConditionMode = false;
    ctrl.condition = {};
    ctrl.condition.descending = true;
  }

  ctrl.checkAction = function(number) {
    ctrl.pc.actions[number] = !ctrl.pc.actions[number];
  }

  ctrl.changeName = function() {
    ctrl.pc.name = ctrl.name;
    ctrl.editName();
  }

  ctrl.editName = function() {
    if (!ctrl.editNameMode) {
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
    if (!ctrl.editDexMode) {
      ctrl.dex = ctrl.pc.dex;
    }
    ctrl.editDexMode = !ctrl.editDexMode;
  }

  ctrl.changeHp = function() {
    ctrl.pc.hp = ctrl.hp;
    ctrl.editHp();
  }

  ctrl.editHp = function() {
    if (!ctrl.editHpMode) {
      ctrl.hp = ctrl.pc.hp;
    }
    ctrl.editHpMode = !ctrl.editHpMode;
  }

  ctrl.minusHp = function() {
    if (ctrl.hp) 
      ctrl.pc.hp = ctrl.pc.hp - ctrl.hp;
    ctrl.editMinusHp();
  }

  ctrl.editMinusHp = function() {
    if (!ctrl.minusHpMode) {
      focusService.setFocus('minusHpId');
      ctrl.hp = undefined;
    }
    ctrl.minusHpMode = !ctrl.minusHpMode;
  }

  ctrl.deleteThis = function() {
    ctrl.delete();
  }

  ctrl.addCondition = function() {
    if (!ctrl.pc.conditions) {
      ctrl.pc.conditions = [];
    }
    if(ctrl.condition.state){
      ctrl.condition.count = 0;
    }
    ctrl.pc.conditions.push(ctrl.condition);
    ctrl.addConditionMode = false;
    ctrl.condition = {};
    ctrl.condition.state = 0;
  }

  ctrl.changeAddConditionMode = function() {
    ctrl.addConditionMode = !ctrl.addConditionMode;
    ctrl.condition.state = 0;
    focusService.setFocus('addConditionName');
  }

  ctrl.deleteCondition = function(index) {
    console.log('PCController deleteCondition', index);
    ctrl.pc.conditions.splice(index, 1);
  }

}

const PCComponent = {
  template: require('./pc.html'),
  controller: [
    '$log', 'focusService', PCController
  ],
  bindings: {
    pc: '<',
    selected: '<',
    delete: '&'
  }
}

export default PCComponent;
