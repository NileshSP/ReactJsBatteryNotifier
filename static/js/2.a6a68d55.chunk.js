(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{46:function(t,e,n){"use strict";function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return a})},47:function(t,e,n){"use strict";function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(t){return a(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":a(t)})(t)}function o(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",function(){return o})},48:function(t,e,n){"use strict";function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}n.d(e,"a",function(){return r})},59:function(t,e,n){"use strict";n.r(e);var a=n(15),r=n(11),o=n(7),s=n(3),i=n.n(s),c=n(5),u=n(18),l=n(19),f=n(47),p=n(46),y=n(48),d=n(1),g=n.n(d),m=n(16),h=n(24),b=n.n(h),v=n(17);function w(){var t=Object(a.a)(["\n.App {\n  text-align: center;  \n  background-color: #282c34;\n  min-height: 100vh;\n}\n\n.App-body {\n  display: grid;\n  place-items:center;\n}\n\n.circle {\n  width:45vmax;\n  height:45vmax;\n  border-radius:50%;\n  box-sizing: border-box;\n  position:relative;\n  background:rgb(240, 16, 102);\n  color: black;\n  font-family: Helvetica, Arial Black, sans;\n  border:solid 0px greenyellow;\n  transform: scale(1);\n  transition:transform ease-in-out 250;\n}\n\n.circle:hover {\n  transform:scale(1.010);\n}\n\n.innerCircleContents {\n  margin:auto;\n  padding:25% 0;\n  width:100%;\n  height:50%;\n  place-items:center;\n  display: grid;\n  grid-auto-flow:row;\n  grid-gap: 5px;\n}\n\n.contentHeader {\n  width:50%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 4vmin);\n}\n\n.contentBody {\n  width:100%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 20vmin);\n}\n\n.contentFooter {\n  border:0px solid greenyellow;\n  width:50%;\n  font-size: calc(8px + 2vmin);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n"]);return w=function(){return t},t}var S=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(f.a)(this,Object(p.a)(e).call(this,t))).timerInterval=0,n.userModel=null,n.userState=null,n.workerProcess=null,n.setBatteryState=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=n,t.t1=n.userModel,t.next=4,v.a.setBatteryState(e,n.userState);case 4:t.t2=n.userState=t.sent,t.t3=t.t1.setUserState.call(t.t1,t.t2),t.t4={userState:t.t3},t.t0.setState.call(t.t0,t.t4);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.getBatteryAPI=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.getBattery().then(function(t){return n.setBatteryState({batteryLevel:t.level,batteryState:t.charging,currBatteryTime:Date.now()})});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)})),n.registerNotificationwithAccess=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=console,t.next=3,navigator.serviceWorker.getRegistration();case 3:return t.t1=t.sent,t.t0.log.call(t.t0,"SW registration : ",t.t1),t.t2=console,t.next=8,navigator.serviceWorker.getRegistrations();case 8:return t.t3=t.sent,t.t2.log.call(t.t2,"SW registrations : ",t.t3),console.log("Notification access called"),t.next=13,navigator.serviceWorker.getRegistration(new URL("/ReactJsBatteryNotifier",window.location.href));case 13:if(t.t4=t.sent,null!==t.t4){t.next=18;break}return t.next=17,n.displayToastMessage({toastMessage:[g.a.createElement("span",null,"Local Notification capability currently not available on this platform - ",v.a.getBatteryTimeText(n.userState.currBatteryTime)," ")]},1e4);case 17:console.log("Notification API currently not available");case 18:"granted"!==Notification.permission?(n.displayToastMessage({toastMessage:[g.a.createElement("span",null,"Kindly grant notification access for this app to work")]}),Notification.requestPermission(function(t){Notification.permission!==t&&(Notification.permission=t)}).then(function(t){console.log("Notification Status : ",t),"granted"===t&&n.displayToastMessage({toastMessage:""})})):console.log("Notification access is already granted");case 19:case"end":return t.stop()}},t,this)})),n.callNotification=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.a.getBatteryStateText(n.userState.notifyBatteryState)+" with "+n.userState.notifyBatteryLevel.toString()+"% is now complete.",t.next=3,v.a.showNotification(n.props.AppTitle,b.a,e);case 3:return t.next=5,n.displayToastMessage({toastMessage:[g.a.createElement("span",null,"Notification posted @ ",v.a.getBatteryTimeText(n.userState.currBatteryTime)," ")]},1e4);case 5:case"end":return t.stop()}},t,this)})),n.displayToastMessage=function(){var t=Object(c.a)(i.a.mark(function t(e,a){var r,s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.setState(Object(o.a)({},n.state,e),function(){console.log("Notification toast called with message: ",n.state.toastMessage,v.a.getBatteryTimeText(new Date))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=Object(c.a)(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,setTimeout(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(e);case 2:console.log("close toast called!!");case 3:case"end":return t.stop()}},t,this)})),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),t.next=4,r(Object(o.a)({},e,{toastClassName:"animated fadeInUpBig"}));case 4:if(void 0===a){t.next=9;break}return t.next=7,s(Object(o.a)({},e,{toastClassName:"animated fadeOutDownBig"}),a);case 7:return t.next=9,s({toastMessage:"",toastClassName:""},a+1e3);case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),n.getChangesLocally=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.getItemsLocally(v.a.getDbContext());case 2:e=t.sent,Object(r.a)(e).forEach(function(t){var e={notifyBatteryLevel:t.notifyBatteryLevel,notifyBatteryState:t.notifyBatteryState};n.setBatteryState(e),console.log("local value is : ",e)});case 4:case"end":return t.stop()}},t,this)})),n.state={userState:n.props.Model.state,toastMessage:"",toastClassName:""},n.userModel=n.props.Model,console.log("Home - "+Object.getOwnPropertyNames(n.props.Model)),n.userState=n.props.Model.state,console.log("User state - "+n.userState),n}return Object(y.a)(e,t),Object(l.a)(e,[{key:"onWorkerMessage",value:function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!1}}),this.callNotification(),console.log(v.a.getBatteryTimeText(Date.now())+" : "+e.data);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"getBattery"in navigator?(console.log(v.a.getBatteryTimeText(this.userState.currBatteryTime)+" - The Battery Status API is supported on this platform."),this.getChangesLocally(),setTimeout(function(){return e.registerNotificationwithAccess()},3e3)):this.displayToastMessage({toastMessage:[g.a.createElement("span",null,"Battery API is not supported in current browser, please try the link in ",g.a.createElement("a",{target:"blank",href:"https://www.google.com/chrome/"},"Chrome")," browser")]}),this.timerInterval=setInterval(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBatteryAPI();case 2:!1===e.userState.notificationSent&&e.userState.batteryState===e.userState.notifyBatteryState&&100*e.userState.batteryLevel===e.userState.notifyBatteryLevel?(console.log("Display local notification called with current user model state : ",e.userState),e.callNotification(),e.setBatteryState({notificationSent:!0})):e.userState.batteryState===e.userState.notifyBatteryState&&(e.userState.batteryState&&100*e.userState.batteryLevel>=e.userState.notifyBatteryLevel||!e.userState.batteryState&&(e.userState.batteryLevel,e.userState.notifyBatteryLevel));case 3:case"end":return t.stop()}},t,this)})),1e3);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:clearInterval(this.timerInterval),console.log("did unmount process status:",this.userState.workerProcess.started),this.workerProcess=null,console.log("background worker process is still working although home component is unmounted");case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=100*this.userState.batteryLevel;return g.a.createElement(x,null,g.a.createElement("div",{className:"App App-body animated heartBeat"},g.a.createElement("div",{className:"circle animated shake delay-1s",style:{backgroundColor:v.a.bgColor(t),color:v.a.fontColor(t)}},g.a.createElement("div",{className:"innerCircleContents"},g.a.createElement("div",{className:"contentHeader",ref:"contentHeader"},v.a.getBatteryStateText(this.userState.batteryState)),g.a.createElement("div",{className:"contentBody animated flash",ref:"contentBody"},v.a.getBatteryLevelText(this.userState.batteryLevel)),g.a.createElement("div",{className:"contentFooter",ref:"contentFooter"},v.a.getBatteryTimeText(this.userState.currBatteryTime))))),v.a.showToastMessage(this.state.toastMessage,this.state.toastClassName))}}]),e}(g.a.Component),x=m.a.div(w());e.default=S}}]);
//# sourceMappingURL=2.a6a68d55.chunk.js.map