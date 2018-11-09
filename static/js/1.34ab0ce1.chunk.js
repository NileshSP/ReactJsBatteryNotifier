(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{45:function(t,e,n){"use strict";var r=n(44),a=n(15),i=n(8),o=n.n(i),c=n(14),s=n(58),u=n.n(s),l=void 0,p={bgColor:function(t){var e=t<50||0===t?255:Math.floor(255-255*(2*t-100)/100),n=t>50?255:Math.floor(2*t*255/100),r=isNaN(parseInt(e.toString()))?0:parseInt(e.toString()),a=isNaN(parseInt(n.toString()))?0:parseInt(n.toString());return"rgb("+r.toString()+","+a.toString()+",0)"},fontColor:function(t){return"black"},getBatteryStateText:function(t){return null!=t?!0===t?"Charging":!1===t?"Discharging":"Full":""},getBatteryLevelText:function(t){return Math.floor(100*t)+"%"},getBatteryTimeText:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},showNotification:function(){var t=Object(c.a)(o.a.mark(function t(e,n,r){var a,i,s,u,p,f;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e,i=r,s=function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,new Notification(a+":NoSW",{body:i,icon:n,tag:"soManyNotification"}),t.next=8;break;case 4:return t.prev=4,t.t0=t.catch(0),l.Utils.logText("Error for new Notification : ".concat(t.t0)),t.abrupt("return",!1);case 8:return t.abrupt("return",!0);case 9:case"end":return t.stop()}},t,this,[[0,4]])}));return function(){return t.apply(this,arguments)}}(),u=function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.ready.then(function(){var t=Object(c.a)(o.a.mark(function t(r){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.showNotification(a+":SWReady",{body:i,icon:n,vibrate:[200,100,200,100,200,100,200],tag:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.Utils.logText("Error for notifywithSWReadyRegister : ".concat(e)),t.next=3,s();case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return navigator.serviceWorker.getRegistration().then(function(){var t=Object(c.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l.Utils.logText("SW registration : ",e),void 0===e){t.next=5;break}e.showNotification(a+":SWGRegister",{body:i,icon:n,vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}}),t.next=8;break;case 5:return t.next=7,u();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(c.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:l.Utils.logText("Error for notifywithGetRegister : ".concat(e));case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.getRegistration();case 2:if(t.t0=t.sent,t.t1=void 0,t.t0===t.t1){t.next=10;break}return t.next=7,u()||p();case 7:return t.abrupt("return",t.sent);case 10:return t.next=12,s();case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),!window.Notification||"granted"!==Notification.permission){t.next=12;break}return t.next=9,f();case 9:return t.abrupt("return",t.sent);case 12:window.Notification&&"denied"!==Notification.permission?Notification.requestermission(function(){var t=Object(c.a)(o.a.mark(function t(e){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("granted"!==e){t.next=6;break}return t.next=3,f();case 3:return t.abrupt("return",t.sent);case 6:l.Utils.logText("permission not granted - 2");case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()):l.Utils.logText("permission not granted - 1");case 13:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),getDbContext:function(){var t=Object(c.a)(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.a.open("BatteryNotifierDatabase",1,function(t){switch(t.oldVersion){case 1:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0});break;default:t.createObjectStore("BatteryNotifierList",{keyPath:"id",autoIncrement:!0})}}));case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),storeItemsLocally:function(){var t=Object(c.a)(o.a.mark(function t(e,n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.then(function(t){var e=t.transaction("BatteryNotifierList","readwrite");return e.objectStore("BatteryNotifierList").clear(),e.objectStore("BatteryNotifierList").put(Object(a.a)({},n)),e.complete}).catch(function(t){return l.Utils.logText("Error: ".concat(t)),!1});case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),getItemsLocally:function(){var t=Object(c.a)(o.a.mark(function t(e){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Set,t.abrupt("return",e.then(function(t){return t.transaction("BatteryNotifierList").objectStore("BatteryNotifierList").getAll()}).then(function(t){return Object(r.a)(t).map(function(t){return n.add(Object(a.a)({},t))}),n}).catch(function(t){return l.Utils.logText("Error: ".concat(t)),n}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),logText:function(t,e){return console.log(t,e||"")}};e.a=p},61:function(t,e,n){"use strict";n.r(e);var r=n(5),a=n(1),i=n.n(a),o=n(6),c=n(18),s=n(51),u=n(22);function l(){var t=Object(r.a)(["\n \n  margin: 0;\n  padding:0px 0px 0px 0px;\n  height: 5%;\n  display: grid;\n  place-items: center;\n  background-color: transparent;\n  border:solid 0px yellow;\n\n  ul {\n    margin: 0;\n    padding:5px 3px 5px 3px;\n    border:solid 0px yellow;\n    border-radius:5px;\n    background-color:rgb(255,255,255,0.8);\n    transform: scale(1);\n    transition:transform ease-in-out 250;\n  }\n\n  li {\n    display: inline-block;\n    padding:2px;\n    transform:scale(1);\n    transition:transform ease-in-out 250;\n\n    a {\n      background-color: lightgreen;\n      padding:2px 3px 2px 3px;\n      text-decoration: none;\n      font-size: 1em;\n      color: black;\n      font-weight:bold;\n      border-radius:4px;\n    }\n  }\n\n  ul:hover, li:hover {\n    transform:scale(1.070);\n  }\n"]);return l=function(){return t},t}var p=o.a.div(l()),f=function(){return i.a.createElement(p,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/settings"},"Settings")),i.a.createElement("li",null,i.a.createElement(c.b,{to:"/about"},"About"))))},d=n(45);function h(){var t=Object(r.a)(["\n  .fade-enter {\n    opacity: 0.01;\n  }\n\n  .fade-enter.fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-exit.fade-exit-active {\n    opacity: 0.01;\n    transition: opacity 300ms ease-in;\n  }\n\n  div.transition-group {\n    position: relative;\n  }\n\n  section.route-section {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  .headerOverlay {\n    width:99.8vw;\n    margin:0;\n    padding:0;\n    top:4px;\n    z-index:1;\n    position:absolute;\n    display:grid;\n    place-items:stretch;\n    border:solid 0px red;\n  }\n\n"]);return h=function(){return t},t}var b=i.a.lazy(function(){return n.e(2).then(n.bind(null,62))}),g=i.a.lazy(function(){return n.e(3).then(n.bind(null,59))}),m=i.a.lazy(function(){return n.e(4).then(n.bind(null,60))});var x=o.a.div(h());e.default=Object(c.e)(function(t){var e=t.location,n=t.AppTitle,r=t.Model;return d.a.logText("Container - ",r),d.a.logText("location : ",e),d.a.logText("version : ",1.8),d.a.logText("screen orientation: ","orientation"in screen),i.a.createElement(x,null,i.a.createElement(s.TransitionGroup,{className:"transition-group"},i.a.createElement(s.CSSTransition,{key:e.key,timeout:{enter:300,exit:300},classNames:"fade"},i.a.createElement("section",{className:"route-section"},i.a.createElement("div",{className:"headerOverlay"},i.a.createElement(f,null)),i.a.createElement(i.a.Suspense,{fallback:i.a.createElement(u.a,null)},i.a.createElement(c.d,{location:e},i.a.createElement(c.c,{exact:!0,path:"/",render:function(t){return i.a.createElement(b,Object.assign({},t.match.params,{AppTitle:n,Model:r}))}}),i.a.createElement(c.c,{path:"/settings",render:function(t){return i.a.createElement(g,Object.assign({hidden:!0},t.match.params,{Model:r}))}}),i.a.createElement(c.c,{path:"/about",render:function(t){return i.a.createElement(m,Object.assign({hidden:!0},t.match.params,{Model:r}))}})))))))})}}]);
//# sourceMappingURL=1.34ab0ce1.chunk.js.map