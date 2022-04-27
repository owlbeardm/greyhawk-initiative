"use strict";

function AppController($log, $scope, $window, focusService) {
  const ctrl = this;
  const localStorage = $window['localStorage'];
  const STORAGE_PCS = 'PCS';
  const STORAGE_COUNT = 'COUNT';

  ctrl.$onInit = function() {
    $log.debug("AppController init");
    let pcs;
    try {
      pcs = JSON.parse(localStorage.getItem(STORAGE_PCS));
    } catch (err) {
      $log.error(err);
    }
    ctrl.pcs = (!pcs || !pcs.length) ? [] : pcs;
    let count;
    try {
      count = JSON.parse(localStorage.getItem(STORAGE_COUNT));
    } catch (err) {
      $log.error(err);
    }
    ctrl.count = (!count || !angular.equals({}, {})) ? {initiative:1, round:1} : count;
  }

  ctrl.endRound = function() {
    ctrl.pcs.forEach((pc) => {
      pc.actions = [false, false, false, pc.actions[3]];
      // pc.initiative = undefined;
      if(pc.conditions && pc.conditions.length){
        pc.conditions.forEach((condition) => {
          if(condition.count){
            if(condition.descending){
              condition.count = Math.max(0, condition.count-1);
            } else {
              condition.count++;
            }
          }
        });
      }
    });
    ctrl.count.initiative = -1;
    ctrl.nextCount();
    ctrl.count.round++;
  }

  ctrl.nextCount = function() {
    if(ctrl.pcs.length>ctrl.count.initiative+1){
      ctrl.count.initiative++;
      ctrl.pcs[ctrl.count.initiative].actions[3] = false;
    } else {
      ctrl.endRound();
    }
  }

  ctrl.reset = function() {
    ctrl.pcs.forEach((pc) => {
      pc.actions = [false, false, false, pc.actions[3]];
    });
    ctrl.count.initiative = 0;
    ctrl.count.round = 1;
    ctrl.sortPC();
  }

  ctrl.clear = function() {
    ctrl.pcs = [];
    ctrl.count.initiative = 0;
    ctrl.count.round = 1;
  }

  ctrl.deletePC = function(index) {
    console.log('AppController deletePC', index);
    ctrl.pcs.splice(index, 1);
  }

  ctrl.sortPC =  function() {
    console.log('AppController sortPC');
    const pc = ctrl.pcs[ctrl.count.initiative];
    console.log('AppController sortPC', ctrl.count.initiative, pc);
    ctrl.pcs = ctrl.pcs.sort((p1,p2)=>p1.initiative===p2.initiative?p2.dex-p1.dex:p2.initiative-p1.initiative);
    ctrl.count.initiative = ctrl.pcs.findIndex(value=>Object.is(value,pc));
  }

  $scope.$watch('$ctrl.pcs', function(newVal, oldVal) {
    console.log('AppController changed', newVal, oldVal);
    ctrl.sortPC();
    localStorage.setItem(STORAGE_PCS, JSON.stringify(newVal));
  }, true);

  $scope.$watch('$ctrl.count', function(newVal, oldVal) {
    console.log('AppController changed', newVal, oldVal);
    localStorage.setItem(STORAGE_COUNT, JSON.stringify(newVal));
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
