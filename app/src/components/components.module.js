"use strict";

const appComponents = angular.module('app.components', []);

import PCComponent from './pc.component.js';
import PageHeaderComponent from './pageheader.component.js';

appComponents.component('pc', PCComponent);
appComponents.component('pageheader', PageHeaderComponent);
