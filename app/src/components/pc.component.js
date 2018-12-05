"use strict";

function PCController($log) {
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('PCController init', ctrl);
  }

}

const PCComponent = {
  template: require('./pc.html'),
  controller: [
    '$log',
    PCController
  ],
  bindings: {
    pcname: '<'
  }
}

export default PCComponent;
