"use strict";

const appComponents = angular.module('app.components', []);

import PCComponent from './pc.component.js';
import AddPCComponent from './addpc.component.js';
import ConditionComponent from './condition.component.js';

appComponents.component('pc', PCComponent);
appComponents.component('addpc', AddPCComponent);
appComponents.component('condition', ConditionComponent);

import PageFooterComponent from './page-footer/page-footer.component.js';
appComponents.component('pageFooter', PageFooterComponent);

import PageHeaderComponent from './page-header/page-header.component.js';
appComponents.component('pageHeader', PageHeaderComponent);
