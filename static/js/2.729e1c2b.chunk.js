(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{44:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},45:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},46:function(t,e,n){"use strict";var r=n(44),o=n(15),a=n(8),i=n.n(a),s=n(14),c=n(47),u=n.n(c),f={bgColor:function(t){var e=t<50||0===t?255:Math.floor(255-255*(2*t-100)/100),n=t>50?255:Math.floor(2*t*255/100),r=isNaN(parseInt(e.toString()))?0:parseInt(e.toString()),o=isNaN(parseInt(n.toString()))?0:parseInt(n.toString());return"rgb("+r.toString()+","+o.toString()+",0)"},fontColor:function(t){return"black"},getBatteryStateText:function(t){return null!=t?!0===t?"Charging":!1===t?"Discharging":"Full":""},getBatteryLevelText:function(t){return Math.floor(100*t)+"%"},getBatteryTimeText:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},showNotification:function(){var t=Object(s.a)(i.a.mark(function t(e,n,r){var o,a,c,u,f,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e,a=r,c=function(){var t=Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,new Notification(o+":NoSW",{body:a,icon:n,tag:"soManyNotification"}),t.next=8;break;case 4:return t.prev=4,t.t0=t.catch(0),console.log("Error for new Notification : ".concat(t.t0)),t.abrupt("return",!1);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}},t,this,[[0,4]])}));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.ready.then(function(){var t=Object(s.a)(i.a.mark(function t(r){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.showNotification(o+":SWReady",{body:a,icon:n,vibrate:[200,100,200,100,200,100,200],tag:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(s.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Error for notifywithSWReadyRegister : ".concat(e)),t.next=3,c();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.getRegistration().then(function(){var t=Object(s.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("SW registration : ",e),void 0===e){t.next=5;break}e.showNotification(o+":SWGRegister",{body:a,icon:n,vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}}),t.next=8;break;case 5:return t.next=7,u();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(s.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Error for notifywithGetRegister : ".concat(e));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.getRegistration();case 2:if(t.t0=t.sent,t.t1=void 0,t.t0===t.t1){t.next=10;break}return t.next=7,u()||f();case 7:return t.abrupt("return",t.sent);case 10:return t.next=12,c();case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),!window.Notification||"granted"!==Notification.permission){t.next=12;break}return t.next=9,l();case 9:return t.abrupt("return",t.sent);case 12:window.Notification&&"denied"!==Notification.permission?Notification.requestermission(function(){var t=Object(s.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("granted"!==e){t.next=6;break}return t.next=3,l();case 3:return t.abrupt("return",t.sent);case 6:console.log("permission not granted - 2");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):console.log("permission not granted - 1");case 13:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),getDbContext:function(){var t=Object(s.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.open("BatteryNotifierDatabase",1,function(t){switch(t.oldVersion){case 1:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0});break;default:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0})}}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),storeItemsLocally:function(){var t=Object(s.a)(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.then(function(t){var e=t.transaction("BatteryNotifierList","readwrite");return e.objectStore("BatteryNotifierList").clear(),e.objectStore("BatteryNotifierList").put(Object(o.a)({},n)),e.complete}).catch(function(t){return console.log("Error: ".concat(t)),!1});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getItemsLocally:function(){var t=Object(s.a)(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Set,t.abrupt("return",e.then(function(t){return t.transaction("BatteryNotifierList").objectStore("BatteryNotifierList").getAll()}).then(function(t){return Object(r.a)(t).map(function(t){return n.add(Object(o.a)({},t))}),n}).catch(function(t){return console.log("Error: ".concat(t)),n}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};e.a=f},47:function(t,e,n){"use strict";!function(){function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var o,a=new Promise(function(a,i){e(o=t[n].apply(t,r)).then(a,i)});return a.request=o,a}function r(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return n(this[e],o,arguments)})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function i(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return function(t,e,r){var o=n(t,e,r);return o.then(function(t){if(t)return new c(t,o.request)})}(this[e],o,arguments)})})}function s(t){this._index=t}function c(t,e){this._cursor=t,this._request=e}function u(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function l(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}r(s,"_index",["name","keyPath","multiEntry","unique"]),o(s,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),i(s,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(c,"_cursor",["direction","key","primaryKey","value"]),o(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(c.prototype[t]=function(){var n=this,r=arguments;return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new c(t,n._request)})})})}),u.prototype.createIndex=function(){return new s(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new s(this._store.index.apply(this._store,arguments))},r(u,"_store",["name","keyPath","indexNames","autoIncrement"]),o(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),i(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(u,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},r(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),a(l,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[u,s].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),r=n[n.length-1],o=this._store||this._index,a=o[t].apply(o,n.slice(0,-1));a.onsuccess=function(){r(a.result)}})})}),[s,u].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise(function(o){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():o(r)):o(r)})})})});var d={open:function(t,e,r){var o=n(indexedDB,"open",[t,e]),a=o.request;return a&&(a.onupgradeneeded=function(t){r&&r(new l(a.result,t.oldVersion,a.transaction))}),o.then(function(t){return new p(t)})},delete:function(t){return n(indexedDB,"deleteDatabase",[t])}};t.exports=d,t.exports.default=t.exports}()},48:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",function(){return a})},49:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return o})},62:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n(44),a=n(8),i=n.n(a),s=n(15),c=n(14),u=n(16),f=n(17),l=n(48),p=n(45),d=n(49),h=n(1),y=n.n(h),b=n(6),g=n(23),m=n.n(g),v=n(46);function w(){var t=Object(r.a)(["\n \n  visibility: hidden; /* Hidden by default. Visible on click */\n  // min-width: 280px; /* Set a default minimum width */\n  // margin-left: -140px; /* Divide value of min-width by 2 */\n  width:50vw;\n  background-color: rgba(255, 255, 153, .8); /* background color */\n  color: black; /* text color */\n  text-align: center; /* Centered text */\n  border-radius: 5px; /* Rounded borders */\n  padding: 12px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 25%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n  font-size:.8em;\n\n"]);return w=function(){return t},t}var S=b.a.div(w()),x=function(t){return y.a.createElement(S,{className:t.classname,style:{visibility:t.show}},Object(o.a)(t.message).map(function(t,e){return y.a.createElement("div",{key:e},t)}))};function k(){var t=Object(r.a)(["\n.App {\n  text-align: center;  \n  background-color: #282c34;\n  min-height: 100vh;\n}\n\n.App-body {\n  display: grid;\n  place-items:center;\n}\n\n.circle {\n  width:45vmax;\n  height:45vmax;\n  border-radius:50%;\n  box-sizing: border-box;\n  position:relative;\n  background:rgb(240, 16, 102);\n  color: black;\n  font-family: Helvetica, Arial Black, sans;\n  border:solid 0px greenyellow;\n  transform: scale(1);\n  transition:transform ease-in-out 250;\n}\n\n.circle:hover {\n  transform:scale(1.010);\n}\n\n.innerCircleContents {\n  margin:auto;\n  padding:25% 0;\n  width:100%;\n  height:50%;\n  place-items:center;\n  display: grid;\n  grid-auto-flow:row;\n  grid-gap: 5px;\n}\n\n.contentHeader {\n  width:50%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 4vmin);\n}\n\n.contentBody {\n  width:100%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 20vmin);\n}\n\n.contentFooter {\n  border:0px solid greenyellow;\n  width:50%;\n  font-size: calc(8px + 2vmin);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n\n"]);return k=function(){return t},t}var j=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).timerInterval=0,n.userModel=null,n.userState=null,n.workerProcess=null,n.setBatteryState=function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({userState:n.userModel.setUserState(n.userState=Object(s.a)({},n.userState,e))});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n.getBatteryAPI=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.getBattery().then(function(t){return n.setBatteryState({batteryLevel:t.level,batteryState:t.charging,currBatteryTime:Date.now()})});case 2:case"end":return t.stop()}},t,this)})),n.registerNotificationwithAccess=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.Notification&&"granted"!==Notification.permission&&(n.setState({toastMessage:[y.a.createElement("span",null,"Kindly grant notification access for this app to work")]},function(){return console.log("toastmessage: ",n.state.toastMessage)}),Notification.requestPermission(function(t){Notification.permission!==t&&(Notification.permission=t)}).then(function(t){console.log("Notification Status : ",t),"granted"===t&&n.setState({toastMessage:""},function(){return console.log("toastmessage: ",n.state.toastMessage)})}));case 1:case"end":return t.stop()}},t,this)})),n.callNotification=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Notification called @ "+v.a.getBatteryTimeText(n.userState.currBatteryTime)),e=v.a.getBatteryStateText(n.userState.notifyBatteryState)+" with "+n.userState.notifyBatteryLevel.toString()+"% is now complete.",t.next=4,v.a.showNotification(n.props.AppTitle,m.a,e);case 4:console.log("Notification posted @ "+v.a.getBatteryTimeText(n.userState.currBatteryTime));case 5:case"end":return t.stop()}},t,this)})),n.getChangesLocally=Object(c.a)(i.a.mark(function t(){var e;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("checking for local values .."),t.next=3,v.a.getItemsLocally(v.a.getDbContext());case 3:e=t.sent,console.log("local values count : ",Object(o.a)(e).length),Object(o.a)(e).forEach(function(t){n.setBatteryState(t),console.log("local value is : ",t)});case 6:case"end":return t.stop()}},t,this)})),n.state={userState:n.props.Model.state,toastMessage:""},n.userModel=n.props.Model,console.log("Home - "+Object.getOwnPropertyNames(n.props.Model)),n.userState=n.props.Model.state,console.log("User state - "+n.userState),n}return Object(d.a)(e,t),Object(f.a)(e,[{key:"onWorkerMessage",value:function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!1}}),this.callNotification(),console.log(v.a.getBatteryTimeText(Date.now())+" : "+e.data);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(c.a)(i.a.mark(function t(){var e=this;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:"getBattery"in navigator?(console.log(v.a.getBatteryTimeText(this.userState.currBatteryTime)+" - The Battery Status API is supported on this platform."),this.getChangesLocally(),this.registerNotificationwithAccess()):(this.setState({toastMessage:[y.a.createElement("span",null,"Battery API is not supported in current browser, please try the link in ",y.a.createElement("a",{target:"blank",href:"https://www.google.com/chrome/"},"Chrome")," browser")]}),console.log("toastmessage: ",this.state.toastMessage)),this.timerInterval=setInterval(Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getBatteryAPI();case 2:!1===e.userState.notificationSent&&e.userState.batteryState===e.userState.notifyBatteryState&&100*e.userState.batteryLevel===e.userState.notifyBatteryLevel?(e.callNotification(),e.setBatteryState({notificationSent:!0})):e.userState.batteryState===e.userState.notifyBatteryState&&(e.userState.batteryState&&100*e.userState.batteryLevel>=e.userState.notifyBatteryLevel||!e.userState.batteryState&&(e.userState.batteryLevel,e.userState.notifyBatteryLevel));case 3:case"end":return t.stop()}},t,this)})),1e3);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.setBatteryState({workerProcess:{instance:this.workerProcess,started:!0}}),console.log("did unmount process status:",this.userState.workerProcess.started),this.workerProcess=null,console.log("background worker process is still working although home component is unmounted")}},{key:"render",value:function(){var t=100*this.userState.batteryLevel;return y.a.createElement(B,null,y.a.createElement("div",{className:"App App-body animated heartBeat"},y.a.createElement("div",{className:"circle animated shake delay-1s",style:{backgroundColor:v.a.bgColor(t),color:v.a.fontColor(t)}},y.a.createElement("div",{className:"innerCircleContents"},y.a.createElement("div",{className:"contentHeader",ref:"contentHeader"},v.a.getBatteryStateText(this.userState.batteryState)),y.a.createElement("div",{className:"contentBody animated flash",ref:"contentBody"},v.a.getBatteryLevelText(this.userState.batteryLevel)),y.a.createElement("div",{className:"contentFooter",ref:"contentFooter"},v.a.getBatteryTimeText(this.userState.currBatteryTime))))),y.a.createElement(x,{show:""===this.state.toastMessage?"hidden":"visible",classname:"animated fadeInUpBig delay-2s",message:this.state.toastMessage}))}}]),e}(y.a.Component),B=b.a.div(k());e.default=j}}]);
//# sourceMappingURL=2.729e1c2b.chunk.js.map