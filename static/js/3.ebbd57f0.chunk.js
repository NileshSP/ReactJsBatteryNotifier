(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{44:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},45:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},46:function(t,e,n){"use strict";!function(){function e(t){return new Promise(function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function n(t,n,r){var o,a=new Promise(function(a,i){e(o=t[n].apply(t,r)).then(a,i)});return a.request=o,a}function r(t,e,n){n.forEach(function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})})}function o(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return n(this[e],o,arguments)})})}function a(t,e,n,r){r.forEach(function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})})}function i(t,e,r,o){o.forEach(function(o){o in r.prototype&&(t.prototype[o]=function(){return function(t,e,r){var o=n(t,e,r);return o.then(function(t){if(t)return new s(t,o.request)})}(this[e],o,arguments)})})}function c(t){this._index=t}function s(t,e){this._cursor=t,this._request=e}function u(t){this._store=t}function f(t){this._tx=t,this.complete=new Promise(function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}})}function l(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new f(n)}function p(t){this._db=t}r(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),i(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(s,"_cursor",["direction","key","primaryKey","value"]),o(s,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(t){t in IDBCursor.prototype&&(s.prototype[t]=function(){var n=this,r=arguments;return Promise.resolve().then(function(){return n._cursor[t].apply(n._cursor,r),e(n._request).then(function(t){if(t)return new s(t,n._request)})})})}),u.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},r(u,"_store",["name","keyPath","indexNames","autoIncrement"]),o(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),i(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(u,"_store",IDBObjectStore,["deleteIndex"]),f.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},r(f,"_tx",["objectStoreNames","mode"]),a(f,"_tx",IDBTransaction,["abort"]),l.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},r(l,"_db",["name","version","objectStoreNames"]),a(l,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new f(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(t){[u,c].forEach(function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e,n=(e=arguments,Array.prototype.slice.call(e)),r=n[n.length-1],o=this._store||this._index,a=o[t].apply(o,n.slice(0,-1));a.onsuccess=function(){r(a.result)}})})}),[c,u].forEach(function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise(function(o){n.iterateCursor(t,function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():o(r)):o(r)})})})});var d={open:function(t,e,r){var o=n(indexedDB,"open",[t,e]),a=o.request;return a&&(a.onupgradeneeded=function(t){r&&r(new l(a.result,t.oldVersion,a.transaction))}),o.then(function(t){return new p(t)})},delete:function(t){return n(indexedDB,"deleteDatabase",[t])}};t.exports=d,t.exports.default=t.exports}()},47:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function a(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",function(){return a})},48:function(t,e,n){"use strict";var r=n(44),o=n(15),a=n(8),i=n.n(a),c=n(14),s=n(1),u=n.n(s),f=n(46),l=n.n(f),p=n(5);function d(){var t=Object(p.a)(["\n \n  visibility: hidden; /* Hidden by default. Visible on click */\n  // min-width: 280px; /* Set a default minimum width */\n  // margin-left: -140px; /* Divide value of min-width by 2 */\n  width:50vw;\n  background-color: rgba(255, 255, 153, .8); /* background color */\n  color: black; /* text color */\n  text-align: center; /* Centered text */\n  border-radius: 5px; /* Rounded borders */\n  padding: 12px; /* Padding */\n  position: fixed; /* Sit on top of the screen */\n  z-index: 1; /* Add a z-index if needed */\n  left: 25%; /* Center the snackbar */\n  bottom: 30px; /* 30px from the bottom */\n  font-size:.8em;\n\n"]);return d=function(){return t},t}var h=n(6).a.div(d()),y=function(t){return u.a.createElement(h,{className:t.classname,style:{visibility:t.show}},Object(r.a)(t.message).map(function(t,e){return u.a.createElement("div",{key:e},t)}))},b={showToastMessage:function(t){return u.a.createElement(y,{show:""===t?"hidden":"visible",classname:"animated fadeInUpBig delay-2s",message:t})},logText:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.log(e)},bgColor:function(t){var e=t<50||0===t?255:Math.floor(255-255*(2*t-100)/100),n=t>50?255:Math.floor(2*t*255/100),r=isNaN(parseInt(e.toString()))?0:parseInt(e.toString()),o=isNaN(parseInt(n.toString()))?0:parseInt(n.toString());return"rgb("+r.toString()+","+o.toString()+",0)"},fontColor:function(t){return"black"},getBatteryStateText:function(t){return null!=t?!0===t?"Charging":!1===t?"Discharging":"Full":""},getBatteryLevelText:function(t){return Math.floor(100*t)+"%"},getBatteryTimeText:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},showNotification:function(){var t=Object(c.a)(i.a.mark(function t(e,n,r){var o,a,s,u,f,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e,a=r,s=function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,new Notification(o+":NoSW",{body:a,icon:n,tag:"soManyNotification"}),t.next=8;break;case 4:return t.prev=4,t.t0=t.catch(0),console.log("Error for new Notification : ".concat(t.t0)),t.abrupt("return",!1);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}},t,this,[[0,4]])}));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.ready.then(function(){var t=Object(c.a)(i.a.mark(function t(r){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.showNotification(o+":SWReady",{body:a,icon:n,vibrate:[200,100,200,100,200,100,200],tag:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Error for notifywithSWReadyRegister : ".concat(e)),t.next=3,s();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.getRegistration().then(function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("SW registration : ",e),void 0===e){t.next=5;break}e.showNotification(o+":SWGRegister",{body:a,icon:n,vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}}),t.next=8;break;case 5:return t.next=7,u();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Error for notifywithGetRegister : ".concat(e));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.getRegistration();case 2:if(t.t0=t.sent,t.t1=void 0,t.t0===t.t1){t.next=10;break}return t.next=7,u()||f();case 7:return t.abrupt("return",t.sent);case 10:return t.next=12,s();case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),!window.Notification||"granted"!==Notification.permission){t.next=12;break}return t.next=9,l();case 9:return t.abrupt("return",t.sent);case 12:window.Notification&&"denied"!==Notification.permission?Notification.requestermission(function(){var t=Object(c.a)(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("granted"!==e){t.next=6;break}return t.next=3,l();case 3:return t.abrupt("return",t.sent);case 6:console.log("permission not granted - 2");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):console.log("permission not granted - 1");case 13:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),getDbContext:function(){var t=Object(c.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",l.a.open("BatteryNotifierDatabase",1,function(t){switch(t.oldVersion){case 1:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0});break;default:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0})}}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),storeItemsLocally:function(){var t=Object(c.a)(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.then(function(t){var e=t.transaction("BatteryNotifierList","readwrite");return e.objectStore("BatteryNotifierList").clear(),e.objectStore("BatteryNotifierList").put(Object(o.a)({},n)),e.complete}).catch(function(t){return console.log("Error: ".concat(t)),!1});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getItemsLocally:function(){var t=Object(c.a)(i.a.mark(function t(e){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Set,t.abrupt("return",e.then(function(t){return t.transaction("BatteryNotifierList").objectStore("BatteryNotifierList").getAll()}).then(function(t){return Object(r.a)(t).map(function(t){return n.add(Object(o.a)({},t))}),n}).catch(function(t){return console.log("Error: ".concat(t)),n}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};e.a=b},49:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return o})},61:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n(44),a=n(15),i=n(8),c=n.n(i),s=n(14),u=n(16),f=n(17),l=n(47),p=n(45),d=n(49),h=n(1),y=n.n(h),b=n(6),g=n(48);function m(){var t=Object(r.a)(["\n  margin:auto;\n  min-height:100vh;\n  background-color: #00bfff;\n\n  .containerDiv {\n    height:100%;\n    margin:auto;\n    text-align:center;\n    padding:50px 15px 15px 15px;\n    border: solid 0px red;\n  }\n\n  h1 {\n    color: #fff;\n    font-size: 30px;\n    padding-top:30px;\n    margin:0px;\n  }\n\n  section {\n    color: #fff;\n    padding-top:50px;\n  }\n\n  .containerContent {\n    margin:auto;\n    padding:0px;\n    display: flex;\n    flex-direction:columns;\n    flex-wrap:wrap;\n    align-items: center;\n    justify-content: center;\n    border: solid 0px red;\n  }\n\n  .containerContent > div {\n    margin:8px;\n    padding:12px;\n    width:240px;\n    border: solid 0px yellow;\n    text-align:center;\n    font-size: calc(8px + 4vmin);\n  }\n\n  .labelTxt {\n    color: lightgreen;\n  }\n\n  .selectOptions {\n    width:100%;\n    font-size: calc(8px + 3vmin);\n    background-color:transparent;\n    border:0px;\n    text-align:center;\n    text-align-last: center;\n  }\n\n  .optionItem {\n    background-color:transparent;\n    text-align:center;    \n  }\n"]);return m=function(){return t},t}var v=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(l.a)(this,Object(p.a)(e).call(this,t))).userModel=null,n.userState=null,n.storeChangesLocally=Object(s.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.storeItemsLocally(g.a.getDbContext(),n.userState);case 2:console.log("changes persisted locally");case 3:case"end":return t.stop()}},t,this)})),n.state={userState:n.props.Model.state},n.userModel=n.props.Model,n.userState=n.props.Model.state,console.log("Settings - "+Object.getOwnPropertyNames(n.props.Model)),console.log("User state - "+n.userState),n}return Object(d.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){var t=this;return y.a.createElement(x,null,y.a.createElement("div",{className:"containerDiv"},y.a.createElement("h1",{className:" animated fadeInUpBig"},"Settings"),y.a.createElement("section",{className:" animated fadeInUpBig"},y.a.createElement("div",{className:"containerContent"},y.a.createElement("div",{className:"labelTxt"},"Notify @"),y.a.createElement("div",{className:""},y.a.createElement("select",{defaultValue:g.a.getBatteryStateText(this.userState.notifyBatteryState),className:"selectOptions",onChange:function(e){t.setState({userState:t.props.Model.setUserState(t.userState=Object(a.a)({},t.userState,{notifyBatteryState:"Charging"===e.target.value,notificationSent:!1}))}),t.storeChangesLocally(),console.log(e.target.value)}},y.a.createElement("option",{value:"Charging"},"Charging"),y.a.createElement("option",{value:"Discharging"},"Discharging"))),y.a.createElement("div",{className:"labelTxt"},"with"),y.a.createElement("div",{className:""},y.a.createElement("select",{defaultValue:this.userState.notifyBatteryLevel,className:"selectOptions",onChange:function(e){t.setState({userState:t.props.Model.setUserState(t.userState=Object(a.a)({},t.userState,{notifyBatteryLevel:e.target.value,notificationSent:!1}))}),t.storeChangesLocally(),console.log(e.target.value)}},Object(o.a)(Array(100).keys()).map(function(t){return t++,y.a.createElement("option",{className:"optionItem",key:t,value:t},t)}))),y.a.createElement("div",{className:"labelTxt"},"%")))))}}]),e}(y.a.Component),x=b.a.div(m());e.default=v}}]);
//# sourceMappingURL=3.ebbd57f0.chunk.js.map