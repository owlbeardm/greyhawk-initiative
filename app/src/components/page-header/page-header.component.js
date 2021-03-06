"use strict";

import './page-header.css';

function PageHeaderController($log) {
  $log.debug('PageHeaderController create');
  const ctrl = this;

  ctrl.$onInit = function() {
    $log.debug('PageHeaderController init ', ctrl.title, ctrl.breadcrumbItems);
    ctrl.titleValues = ctrl.titleValues || {};
    ctrl.subtitleValues = ctrl.subtitleValues || {};
  }

}

const PageHeaderComponent = {
  template: require('./page-header.html'),
  controller: [
    '$log', PageHeaderController
  ],
  bindings: {
    title: '@',
    subtitle: '@?',
  }
}

export default PageHeaderComponent;
