(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{46:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},47:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function o(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",function(){return o})},48:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return a})},62:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(44),o=n(8),i=n.n(o),s=n(15),c=n(14),u=n(16),l=n(17),f=n(47),p=n(46),d=n(48),y=n(1),m=n.n(y),h=n(6),g=n(23),b=n.n(g),w=n(45);function v(){var t=Object(r.a)(["\n \n  visibility: hidden; /* Hidden by default. Visible on click */\n  // min-width: 280px; /* Set a default minimum width */\n  // margin-left: -140px; /* Divide value of min-width by 2 */\n  width:50vw;\n  background-color: rgba(255, 255, 153, .8); /* background color */\n  color: black; /* text color */\n  text-align: center; /* Centered text */\n  border-radius: 5px; /* Rounded borders */\n  padding: 12px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 25%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n  font-size:.8em;\n\n"]);return v=function(){return t},t}var S=h.a.div(v()),x=function(t){return m.a.createElement(S,{className:t.classname,style:{visibility:t.show}},Object(a.a)(t.message).map(function(t,e){return m.a.createElement("div",{key:e},t)}))};function k(){var t=Object(r.a)(["\n.App {\n  text-align: center;  \n  background-color: #282c34;\n  min-height: 100vh;\n}\n\n.App-body {\n  display: grid;\n  place-items:center;\n}\n\n.circle {\n  width:45vmax;\n  height:45vmax;\n  border-radius:50%;\n  box-sizing: border-box;\n  position:relative;\n  background:rgb(240, 16, 102);\n  color: black;\n  font-family: Helvetica, Arial Black, sans;\n  border:solid 0px greenyellow;\n  transform: scale(1);\n  transition:transform ease-in-out 250;\n}\n\n.circle:hover {\n  transform:scale(1.010);\n}\n\n.innerCircleContents {\n  margin:auto;\n  padding:25% 0;\n  width:100%;\n  height:50%;\n  place-items:center;\n  display: grid;\n  grid-auto-flow:row;\n  grid-gap: 5px;\n}\n\n.contentHeader {\n  width:50%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 4vmin);\n}\n\n.contentBody {\n  width:100%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 20vmin);\n}\n\n.contentFooter {\n  border:0px solid greenyellow;\n  width:50%;\n  font-size: calc(8px + 2vmin);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n"]);return k=function(){return t},t}var B=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(f.a)(this,Object(p.a)(e).call(this,t))).timerInterval=0,n.userModel=null,n.userState=null,n.workerProcess=null,n.setBatteryState=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({userState:n.userModel.setUserState(n.userState=Object(s.a)({},n.userState,e))});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.getBatteryAPI=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.getBattery().then(function(t){return n.setBatteryState({batteryLevel:t.level,batteryState:t.charging,currBatteryTime:Date.now()})});case 2:case"end":return t.stop()}},t,this)})),n.registerNotificationwithAccess=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.Notification&&"granted"!==Notification.permission&&(n.setState({toastMessage:[m.a.createElement("span",null,"Kindly grant notification access for this app to work")]},function(){return w.a.logText("toastmessage: ",n.state.toastMessage)}),Notification.requestPermission(function(t){Notification.permission!==t&&(Notification.permission=t)}).then(function(t){w.a.logText("Notification Status : ",t),"granted"===t&&n.setState({toastMessage:""},function(){return w.a.logText("toastmessage: ",n.state.toastMessage)})}));case 1:case"end":return t.stop()}},t,this)})),n.callNotification=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w.a.logText("Notification called @ "+w.a.getBatteryTimeText(n.userState.currBatteryTime)),e=w.a.getBatteryStateText(n.userState.notifyBatteryState)+" with "+n.userState.notifyBatteryLevel.toString()+"% is now complete.",t.next=4,w.a.showNotification(n.props.AppTitle,b.a,e);case 4:w.a.logText("Notification posted @ "+w.a.getBatteryTimeText(n.userState.currBatteryTime));case 5:case"end":return t.stop()}},t,this)})),n.getChangesLocally=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w.a.logText("checking for local values .."),t.next=3,w.a.getItemsLocally(w.a.getDbContext());case 3:e=t.sent,w.a.logText("local values count : ",Object(a.a)(e).length),Object(a.a)(e).forEach(function(t){n.setBatteryState(t),w.a.logText("local value is : ",t)});case 6:case"end":return t.stop()}},t,this)})),n.state={userState:n.props.Model.state,toastMessage:""},n.userModel=n.props.Model,w.a.logText("Home - "+Object.getOwnPropertyNames(n.props.Model)),n.userState=n.props.Model.state,w.a.logText("User state - "+n.userState),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"onWorkerMessage",value:function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!1}}),this.callNotification(),w.a.logText(w.a.getBatteryTimeText(Date.now())+" : "+e.data);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"getBattery"in navigator?(w.a.logText(w.a.getBatteryTimeText(this.userState.currBatteryTime)+" - The Battery Status API is supported on this platform."),this.getChangesLocally(),this.registerNotificationwithAccess()):(this.setState({toastMessage:[m.a.createElement("span",null,"Battery API is not supported in current browser, please try the link in ",m.a.createElement("a",{target:"blank",href:"https://www.google.com/chrome/"},"Chrome")," browser")]}),w.a.logText("toastmessage: ",this.state.toastMessage)),this.timerInterval=setInterval(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBatteryAPI();case 2:!1===e.userState.notificationSent&&e.userState.batteryState===e.userState.notifyBatteryState&&100*e.userState.batteryLevel===e.userState.notifyBatteryLevel?(e.callNotification(),e.setBatteryState({notificationSent:!0})):e.userState.batteryState===e.userState.notifyBatteryState&&(e.userState.batteryState&&100*e.userState.batteryLevel>=e.userState.notifyBatteryLevel||!e.userState.batteryState&&(e.userState.batteryLevel,e.userState.notifyBatteryLevel));case 3:case"end":return t.stop()}},t,this)})),1e3);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!0}}),w.a.logText("did unmount process status:",this.userState.workerProcess.started),this.workerProcess=null,w.a.logText("background worker process is still working although home component is unmounted")}},{key:"render",value:function(){var t=100*this.userState.batteryLevel;return m.a.createElement(T,null,m.a.createElement("div",{className:"App App-body animated heartBeat"},m.a.createElement("div",{className:"circle animated shake delay-1s",style:{backgroundColor:w.a.bgColor(t),color:w.a.fontColor(t)}},m.a.createElement("div",{className:"innerCircleContents"},m.a.createElement("div",{className:"contentHeader",ref:"contentHeader"},w.a.getBatteryStateText(this.userState.batteryState)),m.a.createElement("div",{className:"contentBody animated flash",ref:"contentBody"},w.a.getBatteryLevelText(this.userState.batteryLevel)),m.a.createElement("div",{className:"contentFooter",ref:"contentFooter"},w.a.getBatteryTimeText(this.userState.currBatteryTime))))),m.a.createElement(x,{show:""===this.state.toastMessage?"hidden":"visible",classname:"animated fadeInUpBig delay-2s",message:this.state.toastMessage}))}}]),e}(m.a.Component),T=h.a.div(k());e.default=B}}]);
//# sourceMappingURL=2.fe20fdaf.chunk.js.map