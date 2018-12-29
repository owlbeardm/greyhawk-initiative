!function(n){var t={};function e(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(o,i,function(t){return n[t]}.bind(null,i));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s="Ha7V")}({"102d":function(n,t,e){},"13op":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={template:e("lwo9"),controller:["$log","$scope","$window","focusService",function(n,t,e,o){var i=this,c=e.localStorage;i.$onInit=function(){n.debug("AppController init");var t=void 0;try{t=JSON.parse(c.getItem("PCS"))}catch(t){n.error(t)}i.pcs=t&&t.length?t:[];var e=void 0;try{e=JSON.parse(c.getItem("COUNT"))}catch(t){n.error(t)}i.count=e&&angular.equals({},{})?e:{initiative:1,round:1}},i.endRound=function(){i.pcs.forEach(function(n){n.actions=[!1,!1,!1,!1],n.initiative=void 0,n.conditions&&n.conditions.length&&n.conditions.forEach(function(n){n.count&&(n.descending?n.count=Math.max(0,n.count-1):n.count++)})}),i.count.initiative=1,i.count.round++},i.nextCount=function(){i.count.initiative++},i.reset=function(){i.pcs.forEach(function(n){n.actions=[!1,!1,!1,!1],n.initiative=void 0}),i.count.initiative=1,i.count.round=1},i.clear=function(){i.pcs=[],i.count.initiative=1,i.count.round=1},i.deletePC=function(n){console.log("AppController deletePC",n),i.pcs.splice(n,1)},t.$watch("$ctrl.pcs",function(n,t){console.log("AppController changed",n,t),c.setItem("PCS",JSON.stringify(n))},!0),t.$watch("$ctrl.count",function(n,t){console.log("AppController changed",n,t),c.setItem("COUNT",JSON.stringify(n))},!0)}]};t.default=o},"6n4l":function(n,t,e){"use strict";var o=a(e("kniZ")),i=a(e("I5JX")),c=a(e("Qh26")),l=a(e("Tocb"));function a(n){return n&&n.__esModule?n:{default:n}}var s=angular.module("app.components",[]);s.component("pc",o.default),s.component("addpc",i.default),s.component("pageheader",c.default),s.component("condition",l.default)},"87dM":function(n,t,e){"use strict";angular.module("app.services",[]),e("RNwA")},AZcf:function(n,t,e){n.exports=e.p+"44e5ae5c0dff6e7d8d9ee2e9a5e54edf.png"},C96o:function(n,t){n.exports='<div class="row border rounded mt-1" ng-class="{\'border-primary\': $ctrl.initiativeCount == $ctrl.pc.initiative}">\n  <div class="col-xl-auto">\n    <div class="row">\n      <div class="col-auto">\n        <div ng-if="!$ctrl.editNameMode" class="form-group" style="width: 170px;">\n          <input id="changeNameInput" type="text" class="form-control" ng-model="$ctrl.pc.name" placeholder="Name">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-xl-auto">\n    <div class="row">\n      <div class="col-auto">\n        <div ng-if="!$ctrl.editHpMode && !$ctrl.minusHpMode" style="width: 145px;">\n          <div class="form-group has-success">\n            <div class="input-group">\n              <input type="number" class="form-control" ng-model="$ctrl.pc.hp">\n              <div class="input-group-append">\n                <button ng-click="$ctrl.editMinusHp()" class="btn btn-outline-warning btn-sm btn-round ml-auto" title="Decrease hit points" ng-if="!$ctrl.addConditionMode">hp <span class="fas fa-minus ml-1 text"></span></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <form name="minusHp" ng-submit="$ctrl.minusHp()" ng-if="$ctrl.minusHpMode" style="width: 145px;">\n          <div class="form-group">\n            <div class="input-group">\n              <input id="minusHpId" type="number" class="form-control" ng-model="$ctrl.hp">\n              <div class="input-group-append">\n                <button type="submit" class="btn btn-outline-success btn-sm">\n                  <span class="fas fa-check"></span>\n                </button>\n                <button type="button" ng-click="$ctrl.editMinusHp()" class="btn btn-outline-danger btn-sm">\n                  <span class="fas fa-times"></span>\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class="col-auto" style="width: 75px;">\n        <div class="form-group has-success">\n          <input type="number" class="form-control" ng-model="$ctrl.pc.dex">\n          <span class="form-control-feedback text-muted"><small>dex</small></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-auto">\n    <div class="form-group" style="width: 80px;">\n      <input type="number" class="form-control text-center" placeholder="INITIATIVE" ng-model="$ctrl.pc.initiative">\n    </div>\n  </div>\n  <div class="col-auto">\n    <div class="btn-group" role="group" style="width: 292px;">\n      <button type="button" class="btn btn-outline-success btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[0]}" ng-disabled="$ctrl.pc.actions[2]" ng-click="$ctrl.checkAction(0)" title="Standard Action">s.a.</button>\n      <button type="button" class="btn btn-outline-warning btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[1]}" ng-disabled="$ctrl.pc.actions[2]" ng-click="$ctrl.checkAction(1)" title="Move Action">m.a.</button>\n      <button type="button" class="btn btn-outline-dark btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[2]}" ng-disabled="$ctrl.pc.actions[0] || $ctrl.pc.actions[1]" ng-click="$ctrl.checkAction(2)" title="Full-round Action">f-r.a.</button>\n      <button type="button" class="btn btn-outline-info btn-sm" ng-class="{\'active\': !$ctrl.pc.actions[3]}" ng-click="$ctrl.checkAction(3)" title="Swift Action">sw.a</button>\n    </div>\n  </div>\n  <div class="col">\n    <condition ng-repeat="condition in $ctrl.pc.conditions track by $index" delete="$ctrl.deleteCondition($index)" condition="condition"></condition>\n    <form name="addCondition" ng-submit="$ctrl.addCondition()" ng-if="$ctrl.addConditionMode" class="mt-1">\n      <div class="form-row align-items-center">\n        <div class="col">\n          <input id="addConditionName" type="text" class="form-control form-control-sm mb-2" ng-model="$ctrl.condition.name" placeholder="name">\n        </div>\n      </div>\n      <div class="form-row align-items-center">\n        <div class="col-auto">\n          <input id="addConditionCount" type="number" class="form-control form-control-sm" ng-model="$ctrl.condition.count" placeholder="count">\n        </div>\n        <div class="col-auto">\n          <div class="form-check">\n            <label class="form-check-label">\n              <input class="form-check-input" type="checkbox" ng-model="$ctrl.condition.descending">\n              <span class="form-check-sign">\n                <span class="check"></span>\n              </span>\n              descending\n            </label>\n          </div>\n        </div>\n        <div class="col">\n          <div class="btn-group float-right" role="group">\n            <button type="submit" class="btn btn-outline-success btn-sm">Add</button>\n            <button type="button" class="btn btn-outline-danger btn-sm" ng-click="$ctrl.changeAddConditionMode()">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class="btn-group ">\n      <button ng-click="$ctrl.changeAddConditionMode()" class="btn btn-outline-primary btn-sm btn-round ml-auto" title="Add condition" ng-if="!$ctrl.addConditionMode"><span class="fas fa-plus"></span></button>\n    </div>\n  </div>\n  <div class="col-auto">\n    <button ng-click="$ctrl.deleteThis()" class="btn btn-outline-danger btn-sm float-right" title="Delete"><span class="fas fa-times"></span></button>\n  </div>\n</div>\n'},Ha7V:function(n,t,e){"use strict";e("102d"),e("zOca"),e("6n4l"),e("87dM");var o,i=e("13op"),c=(o=i)&&o.__esModule?o:{default:o};angular.module("initiativeApp",["app.components","app.services"]).component("app",c.default)},I5JX:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={template:e("MIza"),controller:["$log","focusService",function(n,t){n.debug("PageHeaderController create");var e=this;e.add=function(){var n={name:e.name,hp:e.hp,dex:e.dex,initiative:void 0,actions:[!1,!1,!1,!1]};e.pcs.push(n),e.name=void 0,e.hp=void 0,e.dex=void 0,t.setFocus("pcName")},e.clearAll=function(){e.clear()}}],bindings:{pcs:"<",clear:"&"}};t.default=o},MIza:function(n,t){n.exports='<form name="addPcForm" ng-submit="$ctrl.add()">\n  <div class="row mt-4">\n    <div class="form-group col-md-4">\n      <input type="text" id="pcName" class="form-control" ng-model="$ctrl.name" placeholder="Name"></input>\n    </div>\n    <div class="form-group col-md-2">\n      <input type="number" id="pcHp" class="form-control" ng-model="$ctrl.hp" placeholder="HP"></input>\n    </div>\n    <div class="form-group col-md-2">\n      <input type="number" id="pcDex" class="form-control" ng-model="$ctrl.dex" placeholder="DEX"></input>\n    </div>\n  </div>\n  <div class="form-group">\n    <button type="submit" class="btn btn-primary" ng-disabled="addPcForm.$invalid">Add</button>\n    <button type="button" class="btn btn-danger" ng-click="$ctrl.clearAll()">Clear All</button>\n  </div>\n</form>\n'},OxTZ:function(n,t){n.exports='<a href="#" class="btn btn-sm btn-round ml-auto" ng-class="{\'\': $ctrl.condition.count == 0, \'btn-primary\': $ctrl.condition.count !== 0}" ng-click="$ctrl.changeShowDelete()">\n  {{$ctrl.condition.name}}\n  <span class="badge badge-light" ng-if="$ctrl.condition.count != undefined">{{$ctrl.condition.count}}\n    <span class="fas fa-caret-down" ng-if="$ctrl.condition.descending"></span>\n    <span class="fas fa-caret-up" ng-if="!$ctrl.condition.descending"></span>\n  </span>\n  <span class="badge badge-pill badge-light" ng-click="$ctrl.deleteThis()" ng-if="$ctrl.showDelete || !$ctrl.condition.count">\n    <span class="fas fa-times"></span>\n  </span>\n</a>\n'},Qh26:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={template:e("SEDi"),controller:["$log",function(n){n.debug("PageHeaderController create");var t=this;t.$onInit=function(){n.debug("PageHeaderController init ",t.title,t.breadcrumbItems),t.titleValues=t.titleValues||{},t.subtitleValues=t.subtitleValues||{}}}],bindings:{title:"@",subtitle:"@?"}};t.default=o},RNwA:function(n,t,e){"use strict";angular.module("app.services").factory("focusService",["$log","$timeout","$window",function(n,t,e){var o={setFocus:function(n){t(function(){var t=e.document.getElementById(n);t&&t.focus()})}};return o}])},SEDi:function(n,t,e){n.exports='<nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">\n  <div class="container-fluid">\n    <div class="navbar-wrapper">\n      <img src="'+e("AZcf")+'" class="img-fluid float-left" alt="Responsive image">\n      <h2 class="text-light ml-3 align-top">\n        <span>{{$ctrl.title}}</span>\n      </h2>\n      <h6 class="text-primary ml-3 align-top" ng-if="$ctrl.subtitle">\n        <span>{{$ctrl.subtitle}}</span>\n      </h6>\n    </div>\n  </div>\n</nav>\n'},Tocb:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={template:e("OxTZ"),controller:["$log",function(n){n.debug("ConditionController create");var t=this;t.$onInit=function(){n.debug("ConditionController init "),t.showDelete=!1},t.deleteThis=function(){n.debug("ConditionController deleteThis "),t.delete()},t.changeShowDelete=function(){t.showDelete=!t.showDelete}}],bindings:{condition:"<",delete:"&"}};t.default=o},kniZ:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={template:e("C96o"),controller:["$log","focusService",function(n,t){var e=this;e.$onInit=function(){n.debug("PCController init",e),e.addConditionMode=!1,e.condition={},e.condition.descending=!0},e.checkAction=function(n){e.pc.actions[n]=!e.pc.actions[n]},e.changeName=function(){e.pc.name=e.name,e.editName()},e.editName=function(){e.editNameMode||(e.name=e.pc.name,t.setFocus("changeNameInput")),e.editNameMode=!e.editNameMode},e.changeDex=function(){e.pc.dex=e.dex,e.editDex()},e.editDex=function(){e.editDexMode||(e.dex=e.pc.dex),e.editDexMode=!e.editDexMode},e.changeHp=function(){e.pc.hp=e.hp,e.editHp()},e.editHp=function(){e.editHpMode||(e.hp=e.pc.hp),e.editHpMode=!e.editHpMode},e.minusHp=function(){e.hp&&(e.pc.hp=e.pc.hp-e.hp),e.editMinusHp()},e.editMinusHp=function(){e.minusHpMode||(t.setFocus("minusHpId"),e.hp=void 0),e.minusHpMode=!e.minusHpMode},e.deleteThis=function(){e.delete()},e.addCondition=function(){e.pc.conditions||(e.pc.conditions=[]),e.pc.conditions.push(e.condition),e.addConditionMode=!1,e.condition={},e.condition.descending=!0},e.changeAddConditionMode=function(){e.addConditionMode=!e.addConditionMode,t.setFocus("addConditionName")},e.deleteCondition=function(n){console.log("PCController deleteCondition",n),e.pc.conditions.splice(n,1)}}],bindings:{pc:"<",initiativeCount:"<",delete:"&"}};t.default=o},lwo9:function(n,t){n.exports='<div class="wrapper">\n  <div class="main-panel">\n    <pageheader title="OwlbearDM Tracker" subtitle="Every-Round Initiative"></pageheader>\n\n    <div class="content">\n      \x3c!-- <div class="container-fluid"> --\x3e\n        <div class="card">\n          <div class="card-header">\n            <h4 class="card-title">Round <small class="text-info">{{$ctrl.count.round}}</small></h4>\n            <h4 class="card-title">Initiative count <small class="text-info">{{$ctrl.count.initiative}}</small></h4>\n            <div class="btn-group" role="group">\n              <button type="button" class="btn btn-outline-primary btn-sm" ng-click="$ctrl.nextCount()">\n                Next\n              </button>\n              <button type="button" class="btn btn-outline-danger btn-sm" ng-click="$ctrl.endRound()">\n                End Round\n              </button>\n              <button type="button" class="btn btn-outline-secondary btn-sm" ng-click="$ctrl.reset()">\n                Reset\n              </button>\n            </div>\n          </div>\n          <div class="card-body">\n            <pc ng-repeat="pc in $ctrl.pcs track by $index" pc="pc" delete="$ctrl.deletePC($index)" initiative-count="$ctrl.count.initiative"></pc>\n          </div>\n          <div class="card-footer">\n            <addpc pcs="$ctrl.pcs" clear="$ctrl.clear()"></addpc>\n          </div>\n        </div>\n      \x3c!-- </div> --\x3e\n    </div>\n\n    <footer class="footer">\n      <div class="container-fluid">\n        <nav class="float-left">\n          <ul>\n            <li>\n              <a href="https://github.com/owlbeardm">\n                GitHub\n              </a>\n            </li>\n            <li>\n              <a href="">\n                About\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class="copyright float-right">\n          2018 by <a href="https://owlbeardm.com/" target="_blank">OwlbearDM</a>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n<span class="notification">5</span>\n'},zOca:function(n,t,e){}});