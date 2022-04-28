"use strict";

function ConditionController($log) {
  $log.debug('ConditionController create');
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('ConditionController init ');
    ctrl.showDelete = false;
  }

  ctrl.getConditionColor  = function() {
    if(ctrl.condition.count === 0 ) return 'btn-muted';
    // {'': $ctrl.condition.count == 0, 'btn-primary': $ctrl.condition.count !== 0}
    return "btn-primary";
  }

  ctrl.deleteThis = function() {
    $log.debug('ConditionController deleteThis ');
    ctrl.delete();
  }

  ctrl.changeShowDelete = function() {
    ctrl.showDelete = !ctrl.showDelete;
  }

  ctrl.changeCountUp = function(i) {
    ctrl.changeCount(1);
  }
  ctrl.changeCountDown = function(i) {
    ctrl.changeCount(-1);
  }

  ctrl.changeCount = function(i) {
    console.log('ctrl.changeCount')
    ctrl.condition.count = ctrl.condition.count+i;
  }

}

const ConditionComponent = {
  template: require('./condition.html'),
  controller: [
    '$log', ConditionController
  ],
  bindings: {
    condition: '<',
    delete: '&'
  }
}

export default ConditionComponent;
