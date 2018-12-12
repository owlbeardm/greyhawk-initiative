!function(n){var t={};function e(i){if(t[i])return t[i].exports;var c=t[i]={i:i,l:!1,exports:{}};return n[i].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(i,c,function(t){return n[t]}.bind(null,c));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="Ha7V")}({"13op":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={template:e("lwo9"),controller:["$log","$scope","$window","focusService",function(n,t,e,i){var c=this,o=e.localStorage;c.$onInit=function(){n.debug("AppController init");var t=void 0;try{t=JSON.parse(o.getItem("PCS"))}catch(t){n.error(t)}c.pcs=t&&t.length?t:[];var e=void 0;try{e=JSON.parse(o.getItem("COUNT"))}catch(t){n.error(t)}c.count=e&&angular.equals({},{})?e:{initiative:1,round:1}},c.endRound=function(){c.pcs.forEach(function(n){n.actions=[!1,!1,!1,!1],n.initiative=void 0,n.conditions&&n.conditions.length&&n.conditions.forEach(function(n){n.count&&(n.descending?n.count=Math.max(0,n.count-1):n.count++)})}),c.count.initiative=1,c.count.round++},c.nextCount=function(){c.count.initiative++},c.reset=function(){c.pcs.forEach(function(n){n.actions=[!1,!1,!1,!1],n.initiative=void 0}),c.count.initiative=1,c.count.round=1},c.clear=function(){c.pcs=[],c.count.initiative=1,c.count.round=1},c.deletePC=function(n){console.log("AppController deletePC",n),c.pcs.splice(n,1)},t.$watch("$ctrl.pcs",function(n,t){console.log("AppController changed",n,t),o.setItem("PCS",JSON.stringify(n))},!0),t.$watch("$ctrl.count",function(n,t){console.log("AppController changed",n,t),o.setItem("COUNT",JSON.stringify(n))},!0)}]};t.default=i},"6n4l":function(n,t,e){"use strict";var i=l(e("kniZ")),c=l(e("I5JX")),o=l(e("Qh26")),s=l(e("Tocb"));function l(n){return n&&n.__esModule?n:{default:n}}var a=angular.module("app.components",[]);a.component("pc",i.default),a.component("addpc",c.default),a.component("pageheader",o.default),a.component("condition",s.default)},"87dM":function(n,t,e){"use strict";angular.module("app.services",[]),e("RNwA")},C96o:function(n,t){n.exports='<div class="row border rounded mt-1" ng-class="{\'border-primary\': $ctrl.initiativeCount == $ctrl.pc.initiative}">\n  <div class="col-2">\n    <div ng-if="!$ctrl.editNameMode" class="pt-1">\n      <span>{{$ctrl.pc.name}}</span>\n      <a href="#" ng-click="$ctrl.editName()" class="badge badge-light ml-auto" title="Edit"><span class="fas fa-pencil-alt ml-1 text-secondary"></span></a>\n    </div>\n    <form ng-submit="$ctrl.changeName()" ng-if="$ctrl.editNameMode">\n      <div class="input-group input-group-sm">\n        <input id="changeNameInput" type="text" class="form-control" ng-model="$ctrl.name">\n        <div class="input-group-append">\n          <button type="submit" class="btn btn-outline-success btn-sm">\n            <span class="fas fa-check"></span>\n          </button>\n          <button type="button" ng-click="$ctrl.editName()" class="btn btn-outline-danger btn-sm">\n            <span class="fas fa-times"></span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class="col-3">\n    <div class="row">\n      <div class="col-9">\n        <div class="row">\n          <div class="col-6">\n            <div ng-if="!$ctrl.editHpMode && !$ctrl.minusHpMode" class="pt-1">\n              <span>{{$ctrl.pc.hp}}</span>\n              <a href="#" ng-click="$ctrl.editMinusHp()" class="badge badge-light ml-auto" title="Decrease hit points"><span class="fas fa-minus ml-1 text-secondary"></span></a>\n              <a href="#" ng-click="$ctrl.editHp()" class="badge badge-light" title="Edit"><span class="fas fa-pencil-alt ml-1 text-secondary"></span></a>\n            </div>\n            <form name="changeHp" ng-submit="$ctrl.changeHp()" ng-if="$ctrl.editHpMode">\n              <div class="input-group input-group-sm">\n                <input type="number" class="form-control" ng-model="$ctrl.hp">\n                <div class="input-group-append">\n                  <button type="submit" class="btn btn-outline-success btn-sm">\n                    <span class="fas fa-check"></span>\n                  </button>\n                  <button type="button" ng-click="$ctrl.editHp()" class="btn btn-outline-danger btn-sm">\n                    <span class="fas fa-times"></span>\n                  </button>\n                </div>\n              </div>\n            </form>\n            <form name="minusHp" ng-submit="$ctrl.minusHp()" ng-if="$ctrl.minusHpMode">\n              <div class="input-group input-group-sm">\n                <input type="number" class="form-control" ng-model="$ctrl.hp">\n                <div class="input-group-append">\n                  <button type="submit" class="btn btn-outline-success btn-sm">\n                    <span class="fas fa-check"></span>\n                  </button>\n                  <button type="button" ng-click="$ctrl.editMinusHp()" class="btn btn-outline-danger btn-sm">\n                    <span class="fas fa-times"></span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class="col-6">\n            <div ng-if="!$ctrl.editDexMode" class="pt-1">\n              <span>{{$ctrl.pc.dex}}</span>\n              <a href="#" ng-click="$ctrl.editDex()" class="badge badge-light ml-auto" title="Edit"><span class="fas fa-pencil-alt ml-1 text-secondary"></span></a>\n            </div>\n            <form name="changeDex" ng-submit="$ctrl.changeDex()" ng-if="$ctrl.editDexMode">\n              <div class="input-group input-group-sm">\n                <input type="number" class="form-control" ng-model="$ctrl.dex">\n                <div class="input-group-append">\n                  <button type="submit" class="btn btn-outline-success btn-sm">\n                    <span class="fas fa-check"></span>\n                  </button>\n                  <button type="button" ng-click="$ctrl.editDex()" class="btn btn-outline-danger btn-sm">\n                    <span class="fas fa-times"></span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class="col-3">\n        <div class="input-group input-group-sm">\n          <input type="number" class="form-control" ng-class="{\'border-warning\': !$ctrl.pc.initiative}" ng-model="$ctrl.pc.initiative">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-2">\n    <div class="btn-group" role="group">\n      <button type="button" class="btn btn-outline-success btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[0]}" ng-disabled="$ctrl.pc.actions[2]" ng-click="$ctrl.checkAction(0)" title="Standard Action">s.a.</button>\n      <button type="button" class="btn btn-outline-warning btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[1]}" ng-disabled="$ctrl.pc.actions[2]" ng-click="$ctrl.checkAction(1)" title="Move Action">m.a.</button>\n      <button type="button" class="btn btn-outline-dark btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[2]}" ng-disabled="$ctrl.pc.actions[0] || $ctrl.pc.actions[1]" ng-click="$ctrl.checkAction(2)" title="Full-round Action">f-r.a.</button>\n      <button type="button" class="btn btn-outline-info btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[3]}" ng-click="$ctrl.checkAction(3)" title="Swift Action">sw.a</button>\n    </div>\n  </div>\n\n  <div class="col">\n    <div class="row">\n      <div class="col">\n        <condition ng-repeat="condition in $ctrl.pc.conditions track by $index" delete="$ctrl.deleteCondition($index)" condition="condition"></condition>\n        <form name="addCondition" ng-submit="$ctrl.addCondition()" ng-if="$ctrl.addConditionMode" class="mt-1">\n          <div class="form-row align-items-center">\n            <div class="col">\n              <input id="addConditionName" type="text" class="form-control form-control-sm mb-2" ng-model="$ctrl.condition.name" placeholder="name">\n            </div>\n          </div>\n          <div class="form-row align-items-center">\n            <div class="col-auto">\n              <input id="addConditionCount" type="number" class="form-control form-control-sm" ng-model="$ctrl.condition.count" placeholder="count">\n            </div>\n            <div class="col-auto">\n              <div class="form-check mb-2">\n                <input class="form-check-input" type="checkbox" ng-model="$ctrl.condition.descending" id="autoSizingCheck">\n                <label class="form-check-label" for="autoSizingCheck">\n                  descending\n                </label>\n              </div>\n            </div>\n            <div class="col">\n              <div class="btn-group float-right" role="group">\n                <button type="submit" class="btn btn-outline-success btn-sm">Add</button>\n                <button type="button" class="btn btn-outline-danger btn-sm" ng-click="$ctrl.changeAddConditionMode()">Cancel</button>\n              </div>\n            </div>\n          </div>\n        </form>\n        <a href="#" ng-click="$ctrl.changeAddConditionMode()" class="badge badge-pill badge-light ml-auto" title="Add condition" ng-if="!$ctrl.addConditionMode"><span class="fas fa-plus ml-1 text-secondary"></span></a>\n      </div>\n      <div class="col-1">\n        <button ng-click="$ctrl.deleteThis()" class="btn btn-outline-danger btn-sm float-right" title="Delete"><span class="fas fa-times"></span></button>\n      </div>\n    </div>\n  </div>\n</div>\n'},Ha7V:function(n,t,e){"use strict";e("6n4l"),e("87dM");var i,c=e("13op"),o=(i=c)&&i.__esModule?i:{default:i};angular.module("initiativeApp",["app.components","app.services"]).component("app",o.default)},I5JX:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={template:e("MIza"),controller:["$log","focusService",function(n,t){n.debug("PageHeaderController create");var e=this;e.add=function(){var n={name:e.name,hp:e.hp,dex:e.dex,initiative:void 0,actions:[!1,!1,!1,!1]};e.pcs.push(n),e.name=void 0,e.hp=void 0,e.dex=void 0,t.setFocus("pcName")},e.clearAll=function(){e.clear()}}],bindings:{pcs:"<",clear:"&"}};t.default=i},MIza:function(n,t){n.exports='<form name="addPcForm" ng-submit="$ctrl.add()">\n  <div class="row mt-4">\n    <div class="form-group col-2">\n      <label class="col-form-label" for="pcName">Name</label>\n      <input type="text" id="pcName" class="form-control" ng-model="$ctrl.name"></input>\n    </div>\n    <div class="form-group col-1">\n      <label class="col-form-label" for="pcHp">HP</label>\n      <input type="number" id="pcHp" class="form-control" ng-model="$ctrl.hp"></input>\n    </div>\n    <div class="form-group col-1">\n      <label class="col-form-label" for="pcDex">DEX</label>\n      <input type="number" id="pcDex" class="form-control" ng-model="$ctrl.dex"></input>\n    </div>\n  </div>\n  <div class="form-group">\n    <button type="submit" class="btn btn-primary" ng-disabled="addPcForm.$invalid">Add</button>\n    <button type="button" class="btn btn-danger" ng-click="$ctrl.clearAll()">Clear All</button>\n  </div>\n</form>\n'},OxTZ:function(n,t){n.exports='<a href="#" class="badge badge-pill ml-auto" ng-class="{\'badge-light\': $ctrl.condition.count == 0, \'badge-secondary\': $ctrl.condition.count !== 0}" ng-click="$ctrl.changeShowDelete()">\n  {{$ctrl.condition.name}}\n  <span class="badge badge-light" ng-if="$ctrl.condition.count != undefined">{{$ctrl.condition.count}}\n    <span class="fas fa-caret-down" ng-if="$ctrl.condition.descending"></span>\n    <span class="fas fa-caret-up" ng-if="!$ctrl.condition.descending"></span>\n  </span>\n  <span class="badge badge-pill badge-light" ng-click="$ctrl.deleteThis()" ng-if="$ctrl.showDelete || !$ctrl.condition.count">\n    <span class="fas fa-times"></span>\n  </span>\n</a>\n'},Qh26:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={template:e("SEDi"),controller:["$log",function(n){n.debug("PageHeaderController create");var t=this;t.$onInit=function(){n.debug("PageHeaderController init ",t.title,t.breadcrumbItems),t.titleValues=t.titleValues||{},t.subtitleValues=t.subtitleValues||{}}}],bindings:{title:"@",subtitle:"@?"}};t.default=i},RNwA:function(n,t,e){"use strict";angular.module("app.services").factory("focusService",["$log","$timeout","$window",function(n,t,e){var i={setFocus:function(n){t(function(){var t=e.document.getElementById(n);t&&t.focus()})}};return i}])},SEDi:function(n,t){n.exports='<div class="m-3">\n  <div class="dashhead">\n    <div class="dashhead-titles">\n      <h2 class="dashhead-title">\n        <span>{{$ctrl.title}}</span>\n      </h2>\n      <h3 class="dashhead-title" ng-if="$ctrl.subtitle">\n        <span>{{$ctrl.subtitle}}</span>\n      </h3>\n    </div>\n  </div>\n</div>\n'},Tocb:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={template:e("OxTZ"),controller:["$log",function(n){n.debug("ConditionController create");var t=this;t.$onInit=function(){n.debug("ConditionController init "),t.showDelete=!1},t.deleteThis=function(){n.debug("ConditionController deleteThis "),t.delete()},t.changeShowDelete=function(){t.showDelete=!t.showDelete}}],bindings:{condition:"<",delete:"&"}};t.default=i},kniZ:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={template:e("C96o"),controller:["$log","focusService",function(n,t){var e=this;e.$onInit=function(){n.debug("PCController init",e),e.addConditionMode=!1},e.checkAction=function(n){e.pc.actions[n]=!e.pc.actions[n]},e.changeName=function(){e.pc.name=e.name,e.editName()},e.editName=function(){e.editNameMode||(e.name=e.pc.name,t.setFocus("changeNameInput")),e.editNameMode=!e.editNameMode},e.changeDex=function(){e.pc.dex=e.dex,e.editDex()},e.editDex=function(){e.editDexMode||(e.dex=e.pc.dex),e.editDexMode=!e.editDexMode},e.changeHp=function(){e.pc.hp=e.hp,e.editHp()},e.editHp=function(){e.editHpMode||(e.hp=e.pc.hp),e.editHpMode=!e.editHpMode},e.minusHp=function(){e.pc.hp=e.pc.hp-e.hp,e.editMinusHp()},e.editMinusHp=function(){e.minusHpMode||(e.hp=0),e.minusHpMode=!e.minusHpMode},e.deleteThis=function(){e.delete()},e.addCondition=function(){e.pc.conditions||(e.pc.conditions=[]),e.pc.conditions.push(e.condition),e.addConditionMode=!1,e.condition={}},e.changeAddConditionMode=function(){e.addConditionMode=!e.addConditionMode,t.setFocus("addConditionName")},e.deleteCondition=function(n){console.log("PCController deleteCondition",n),e.pc.conditions.splice(n,1)}}],bindings:{pc:"<",initiativeCount:"<",delete:"&"}};t.default=i},lwo9:function(n,t){n.exports='<div class="container-fluid">\n  <div class="row">\n    <pageheader title="OwlbearDM Tracker" subtitle="For Every-Round Initiative"></pageheader>\n  </div>\n\n  <div class="row">\n    <div class="alert" role="alert">\n      Round <span class="badge badge-light"><strong>{{$ctrl.count.round}}</strong></span>\n      Initiative count <span class="badge badge-light">{{$ctrl.count.initiative}}</span>\n      <div class="btn-group ml-2" role="group">\n        <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$ctrl.nextCount()">\n          Next\n        </button>\n        <button type="button" class="btn btn-outline-danger btn-sm" ng-click="$ctrl.endRound()">\n          End Round\n        </button>\n        <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="$ctrl.reset()">\n          Reset\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n\n  <div class="row mt-4 text-muted">\n    <div class="col-2">\n      Name\n    </div>\n    <div class="col-3">\n      <div class="row">\n        <div class="col-9">\n          <div class="row">\n            <div class="col-6">\n              HP\n            </div>\n            <div class="col-6">\n              DEX\n            </div>\n          </div>\n        </div>\n        <div class="col-3">\n          Init\n        </div>\n      </div>\n    </div>\n    <div class="col-2">\n      Combat Actions\n    </div>\n    <div class="col">\n      Conditions and Effects\n    </div>\n  </div>\n\n  <pc ng-repeat="pc in $ctrl.pcs track by $index" pc="pc" delete="$ctrl.deletePC($index)" initiative-count="$ctrl.count.initiative"></pc>\n\n  <addpc pcs="$ctrl.pcs" clear="$ctrl.clear()"></addpc>\n\n</div>\n'}});