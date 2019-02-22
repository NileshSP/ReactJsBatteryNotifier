(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{47:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",function(){return n})},48:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",function(){return o})},49:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",function(){return a})},60:function(t,e,r){"use strict";r.r(e);var n=r(16),a=r(12),o=r(7),s=r(3),i=r.n(s),c=r(5),u=r(8),l=r(19),p=r(48),f=r(47),d=r(49),g=r(1),m=r.n(g),y=r(17),h=r(24),w=r.n(h),b=r(18);function v(){var t=Object(n.a)(["\n.App {\n  text-align: center;  \n  background-color: #282c34;\n  min-height: 100vh;\n}\n\n.App-body {\n  display: grid;\n  place-items:center;\n}\n\n.circle {\n  width:45vmax;\n  height:45vmax;\n  border-radius:50%;\n  box-sizing: border-box;\n  position:relative;\n  background:rgb(240, 16, 102);\n  color: black;\n  font-family: Helvetica, Arial Black, sans;\n  border:solid 0px greenyellow;\n  transform: scale(1);\n  transition:transform ease-in-out 250;\n}\n\n.circle:hover {\n  transform:scale(1.010);\n}\n\n.innerCircleContents {\n  margin:auto;\n  padding:25% 0;\n  width:100%;\n  height:50%;\n  place-items:center;\n  display: grid;\n  grid-auto-flow:row;\n  grid-gap: 5px;\n}\n\n.contentHeader {\n  width:50%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 4vmin);\n}\n\n.contentBody {\n  width:100%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 20vmin);\n}\n\n.contentFooter {\n  border:0px solid greenyellow;\n  width:50%;\n  font-size: calc(8px + 2vmin);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n"]);return v=function(){return t},t}var k=function(t){function e(t){var r;return Object(u.a)(this,e),(r=Object(p.a)(this,Object(f.a)(e).call(this,t))).timerInterval=0,r.userModel=null,r.userState=null,r.workerProcess=null,r.swRegistration=null,r.setBatteryState=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.t1=r.userModel,t.next=4,b.a.setBatteryState(e,r.userState);case 4:t.t2=r.userState=t.sent,t.t3=t.t1.setUserState.call(t.t1,t.t2),t.t4={userState:t.t3},t.t5=function(){r.workerProcess&&r.workerProcess.postMessage({cmd:"usermodelstate",msg:JSON.parse(JSON.stringify(r.userState))})},t.t0.setState.call(t.t0,t.t4,t.t5);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),r.getBatteryAPI=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.getBattery().then(function(t){return r.setBatteryState({batteryLevel:t.level,batteryState:t.charging,currBatteryTime:Date.now()})});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),r.getBatteryTimeText=function(t){return b.a.getBatteryTimeText(t)},r.registerNotificationwithAccess=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Notification access called"),t.t0=console,t.next=4,navigator.serviceWorker.getRegistrations();case 4:if(t.t1=t.sent,t.t0.log.call(t.t0,"SW registrations : ",t.t1),console.log("SW registration : ",r.swRegistration),t.t2=void 0===r.swRegistration,t.t2){t.next=13;break}return t.next=11,navigator.serviceWorker.getRegistrations();case 11:t.t3=t.sent.length,t.t2=0===t.t3;case 13:if(!t.t2){t.next=19;break}return t.next=16,r.displayToastMessage({toastMessage:[m.a.createElement("span",null,"Local Notification capability currently not available - ",r.getBatteryTimeText(r.userState.currBatteryTime)," ")]},1e4);case 16:console.log("Notification API currently not available"),t.next=20;break;case 19:"granted"!==Notification.permission?(r.displayToastMessage({toastMessage:[m.a.createElement("span",null,"Kindly grant notification access for this app to work")]}),Notification.requestPermission(function(t){Notification.permission!==t&&(Notification.permission=t)}).then(function(t){console.log("Notification Status : ",t),"granted"===t&&r.displayToastMessage({toastMessage:""})})):console.log("Notification access is already granted");case 20:case"end":return t.stop()}},t)})),r.callNotification=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=b.a.getBatteryStateText(r.userState.notifyBatteryState)+" with "+r.userState.notifyBatteryLevel.toString()+"% is now complete.",t.next=3,b.a.showNotification(r.props.AppTitle,w.a,e);case 3:if(!t.sent){t.next=8;break}return r.setBatteryState({notificationSent:!0}),t.next=8,r.displayToastMessage({toastMessage:[m.a.createElement("span",null,"Notification posted @ ",r.getBatteryTimeText(r.userState.currBatteryTime)," ")]},1e4);case 8:case"end":return t.stop()}},t)})),r.displayToastMessage=function(){var t=Object(c.a)(i.a.mark(function t(e,n){var a,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===r.state){t.next=3;break}return t.next=3,r.setState(Object(o.a)({},r.state,e),function(){return console.log("Notification toast called with message: ",r.state.toastMessage,r.getBatteryTimeText(new Date))});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(i.a.mark(function t(e,r){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,setTimeout(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e);case 2:console.log("close toast called!!");case 3:case"end":return t.stop()}},t)})),r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),t.next=4,a(Object(o.a)({},e,{toastClassName:"animated fadeInUpBig"}));case 4:if(void 0===n){t.next=9;break}return t.next=7,s(Object(o.a)({},e,{toastClassName:"animated fadeOutDownBig"}),n);case 7:return t.next=9,s({toastMessage:"",toastClassName:""},n+1e3);case 9:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),r.getChangesLocally=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("checking for local values .."),t.next=3,b.a.getItemsLocally(b.a.getDbContext());case 3:e=t.sent,console.log("local values count : ",Object(a.a)(e).length),Object(a.a)(e).forEach(function(t){var e={notifyBatteryLevel:t.notifyBatteryLevel,notifyBatteryState:t.notifyBatteryState};r.setBatteryState(e),console.log("local value is : ",e)});case 6:case"end":return t.stop()}},t)})),r.state={userState:r.props.Model.state,toastMessage:"",toastClassName:""},r.userModel=r.props.Model,console.log("Home - ",r.props.Model),r.userState=r.props.Model.state,console.log("User state - ",r.userState),r.swRegistration=navigator.serviceWorker.ready,r}return Object(d.a)(e,t),Object(l.a)(e,[{key:"onWorkerMessage",value:function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.data.cmd,t.next="log"===t.t0?3:"intervallog"===t.t0?5:"stop"===t.t0?7:11;break;case 3:return console.log(e.data.data),t.abrupt("break",12);case 5:return console.log("Worker Interval at:",b.a.getBatteryTimeText(e.data.data)),t.abrupt("break",12);case 7:return this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!1}}),this.callNotification(),console.log(e.data.data),t.abrupt("break",12);case 11:console.log("Unknown worker message received",e.data);case 12:case 13:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"getBattery"in navigator?(console.log(this.getBatteryTimeText(this.userState.currBatteryTime)+" - The Battery Status API is supported on this platform."),this.getChangesLocally(),setTimeout(function(){return e.registerNotificationwithAccess()},3e3)):this.displayToastMessage({toastMessage:[m.a.createElement("span",null,"Battery API is not supported in current browser, please try the link in ",m.a.createElement("a",{target:"blank",href:"https://www.google.com/chrome/"},"Chrome")," browser")]}),this.timerInterval=setInterval(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBatteryAPI();case 2:case"end":return t.stop()}},t)})),1e3),void 0!==this.userState.workerProcess&&null===this.workerProcess&&(this.workerProcess=this.userState.workerProcess.instance,console.log("did mount process status:",this.userState.workerProcess.started),this.userState.workerProcess.started||(this.workerProcess.postMessage({cmd:"usermodelstate",msg:JSON.parse(JSON.stringify(this.userState))}),this.workerProcess.postMessage({cmd:"start",msg:"from Home component"}),this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!0}}),console.log("background worker process started")),this.workerProcess.addEventListener("message",function(t){return e.onWorkerMessage(t)}),console.log("background worker onmessage attached"));case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(clearInterval(this.timerInterval),!this.workerProcess){t.next=8;break}return this.workerProcess.postMessage({cmd:"stop",msg:"from main thread"}),t.next=5,this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!0}});case 5:console.log("did unmount process status:",this.userState.workerProcess.started),this.workerProcess=null,console.log("background worker process is still working although home component is unmounted");case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=100*this.userState.batteryLevel;return m.a.createElement(x,null,m.a.createElement("div",{className:"App App-body animated heartBeat"},m.a.createElement("div",{className:"circle animated shake delay-1s",style:{backgroundColor:b.a.bgColor(t),color:b.a.fontColor(t)}},m.a.createElement("div",{className:"innerCircleContents"},m.a.createElement("div",{className:"contentHeader",ref:"contentHeader"},b.a.getBatteryStateText(this.userState.batteryState)),m.a.createElement("div",{className:"contentBody animated flash",ref:"contentBody"},b.a.getBatteryLevelText(this.userState.batteryLevel)),m.a.createElement("div",{className:"contentFooter",ref:"contentFooter"},this.getBatteryTimeText(this.userState.currBatteryTime))))),b.a.showToastMessage(this.state.toastMessage,this.state.toastClassName))}}]),e}(m.a.Component),x=y.a.div(v());e.default=k}}]);
//# sourceMappingURL=4.98e8e408.chunk.js.map