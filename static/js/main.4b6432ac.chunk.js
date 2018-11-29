(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){"use strict";var r=n(12),a=n(3),o=n.n(a),i=n(7),c=n(5),s=n(1),u=n.n(s),l=n(32),f=n.n(l),d=n(24),g=n.n(d),p={setBatteryState:function(){var t=Object(c.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(i.a)({},n,e));case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),loadingMessage:function(t){return u.a.createElement("div",{style:{margin:"auto",height:"100vh",backgroundColor:"lightgrey",textAlign:"center",alignItems:"center"}},u.a.createElement("div",{style:{paddingTop:"90px",display:"grid",gridAutoFlow:"row",gridGap:"5px",placeItems:"center"}},u.a.createElement("img",{src:g.a,alt:""}),u.a.createElement("span",{style:{color:"black",fontSize:"25px"}},"loading...")))},toastMessage:function(t){var e={visibility:0===t.message.length?"hidden":"visible",width:"45vw",backgroundColor:"rgba(255, 255, 153, .8)",color:"black",textAlign:"center",borderRadius:"5px",padding:"12px",position:"fixed",zIndex:"1",left:"25%",bottom:"30px",fontSize:".8em"};return u.a.createElement("div",{className:t.className,style:e},Object(r.a)(t.message).map(function(t,e){return u.a.createElement("div",{key:e},t)}))},showToastMessage:function(t,e){return u.a.createElement(p.toastMessage,{className:e,message:t})},logText:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.log(e)},bgColor:function(t){var e=t<50||0===t?255:Math.floor(255-255*(2*t-100)/100),n=t>50?255:Math.floor(2*t*255/100),r=isNaN(parseInt(e.toString()))?0:parseInt(e.toString()),a=isNaN(parseInt(n.toString()))?0:parseInt(n.toString());return"rgb("+r.toString()+","+a.toString()+",0)"},fontColor:function(t){return"black"},getBatteryStateText:function(t){return null!=t?!0===t?"Charging":!1===t?"Discharging":"Full":""},getBatteryLevelText:function(t){return Math.floor(100*t)+"%"},getBatteryTimeText:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},showNotification:function(){var t=Object(c.a)(o.a.mark(function t(e,n,r){var a,i,s,u,l;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=e,i=r,t.next=4,navigator.serviceWorker.ready;case 4:if(s=t.sent,console.log("swRegistration : ",s),u=function(){var t=Object(c.a)(o.a.mark(function t(r){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.showNotification(a,{body:i,icon:n,tag:e,data:{dateOfArrival:Date.now(),primaryKey:1}}),t.abrupt("return",!0);case 5:return t.prev=5,t.t0=t.catch(0),console.log("Error for notifywithSWReadyRegister : ".concat(t.t0)),t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,this,[[0,5]])}));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===s){t.next=6;break}return t.next=3,u(s);case 3:return t.abrupt("return",t.sent);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),!window.Notification||"granted"!==Notification.permission){t.next=14;break}return t.next=11,l();case 11:return t.abrupt("return",t.sent);case 14:window.Notification&&"denied"!==Notification.permission?Notification.requestermission(function(){var t=Object(c.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("granted"!==e){t.next=6;break}return t.next=3,l();case 3:return t.abrupt("return",t.sent);case 6:console.log("permission not granted - 2");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):console.log("permission not granted - 1");case 15:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),getDbContext:function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.a.open("BatteryNotifierDatabase",1,function(t){switch(t.oldVersion){case 1:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0});break;default:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0})}}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),storeItemsLocally:function(){var t=Object(c.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=JSON.parse(JSON.stringify(n)),console.log("data is being peristed to indexedDB as: ",n),e.then(function(t){var e=t.transaction("BatteryNotifierList","readwrite");return e.objectStore("BatteryNotifierList").clear(),e.objectStore("BatteryNotifierList").put(Object(i.a)({},n)),e.complete}).catch(function(t){return console.log("Error: ".concat(t)),!1});case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getItemsLocally:function(){var t=Object(c.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Set,t.abrupt("return",e.then(function(t){return t.transaction("BatteryNotifierList").objectStore("BatteryNotifierList").getAll()}).then(function(t){return Object(r.a)(t).map(function(t){return n.add(Object(i.a)({},t))}),n}).catch(function(t){return console.log("Error: ".concat(t)),n}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};e.a=p},24:function(t,e){t.exports="data:image/png;base64,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"},33:function(t,e,n){t.exports=n(45)},45:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),o=n(7),i=n(5),c=n(1),s=n.n(c),u=n(22),l=n.n(u),f=n(20),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var p=n(16),h=n(17);function b(){var t=Object(p.a)(['\n@import url(\'https://fonts.googleapis.com/css?family=Noto+Sans\');\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: "Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  \n  .rootDiv {\n    text-align:center;\n  }\n']);return b=function(){return t},t}Object(h.b)(b());var m=n(8),v=n(19),y=function(){function t(){Object(m.a)(this,t),this.state={},this.state={batteryLevel:0,batteryState:null,currBatteryTime:Date.now(),notifyBatteryLevel:100,notifyBatteryState:!0,notificationSent:!1,workerProcess:{instance:null,started:!1}}}return Object(v.a)(t,[{key:"setUserState",value:function(){var t=Object(i.a)(a.a.mark(function t(e){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.state=Object(o.a)({},e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),k=n(18),S=function t(e){Object(m.a)(this,t);var n=e.toString(),r=new Blob(["("+n+")()"]);return new Worker(URL.createObjectURL(r))},A=function(){var t,e;if("function"===typeof importScripts){onmessage=function(t){var o=t.data;switch(console.log("Msg data passed to worker as : ",o),o.cmd){case"start":n(o),a({cmd:"log",data:"WORKER STARTED: "+o.msg});break;case"stop":r(o);break;case"usermodelstate":e=o.msg;break;default:a({cmd:"log",data:"Unknown command: "+o.msg})}};var n=function(n){t=setInterval(function(){!1===e.notificationSent&&e.batteryState===e.notifyBatteryState&&100*e.batteryLevel===e.notifyBatteryLevel&&r({cmd:"stop",msg:"from Background worker"}),a({cmd:"intervallog",data:Date.now()})},1e3)},r=function(e){clearInterval(t),this.close(),a({cmd:"stop",data:"WORKER STOPPED: "+e.msg})},a=function(t){this.postMessage(t)}}},O=s.a.lazy(function(){return Promise.all([n.e(6),n.e(1)]).then(n.bind(null,62))});l.a.render(s.a.createElement(function(){var t=new y;return Object(i.a)(a.a.mark(function e(){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"==typeof w?(n=new S(A),t.setUserState(t.state=Object(o.a)({},t.state,{workerProcess:{instance:n,started:!1}})),console.log("Webworker is supported!!")):console.log("Webworker is not supported!!");case 1:case"end":return e.stop()}},e,this)}))(),s.a.createElement(f.a,null,s.a.createElement(s.a.Suspense,{fallback:k.a.loadingMessage()},s.a.createElement(O,{AppTitle:"Battery Notifier",Model:t})))},null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/ReactJsBatteryNotifier",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ReactJsBatteryNotifier","/service-worker.js");d?(function(t,e){fetch(t).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):g(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(e,t)})}}()}},[[33,7,5]]]);
//# sourceMappingURL=main.4b6432ac.chunk.js.map