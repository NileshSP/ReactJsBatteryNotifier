(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{49:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",function(){return n})},50:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?function(t){return n(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)})(t)}function i(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",function(){return i})},51:function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",function(){return o})},52:function(t,e,r){t.exports=r(53)},53:function(t,e,r){var n=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(54),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(a){n.regeneratorRuntime=void 0}},54:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var f="suspendedStart",p="suspendedYield",h="executing",y="completed",d={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(I([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=N.prototype=x.prototype=Object.create(v);L.prototype=w.constructor=N,N.constructor=L,N[s]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,N):(t.__proto__=N,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=I,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=S(t,e,r);if("normal"===s.type){if(n=r.done?y:p,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=y,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function S(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function L(){}function N(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function j(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=S(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=S(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},57:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(52),i=r.n(o),a=r(19);function c(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)})}}var u=r(16),l=r(18),f=r(50),p=r(49),h=r(51),y=r(1),d=r.n(y),v=r(7),m=r(24),g=r.n(m),w=function(t){function e(){return Object(u.a)(this,e),Object(f.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,t),e}(y.Component);w.bgColor=function(t){var e=t<50||0===t?255:Math.floor(255-255*(2*t-100)/100),r=t>50?255:Math.floor(2*t*255/100),n=isNaN(parseInt(e.toString()))?0:parseInt(e.toString()),o=isNaN(parseInt(r.toString()))?0:parseInt(r.toString());return"rgb("+n.toString()+","+o.toString()+",0)"},w.fontColor=function(t){return t>=45&&t<=60?"black":"white"};var b=w,S=r(17);function x(){var t=Object(n.a)(["\n.App {\n  text-align: center;\n}\n\n.App-body {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.circle {\n  width:45vmax;\n  height:45vmax;\n  border-radius:50%;\n  box-sizing: border-box;\n  position:relative;\n  background:rgb(240, 16, 102);\n  color: white;\n  font-family: Helvetica, Arial Black, sans;\n  border:solid 0px greenyellow;\n  transform: scale(1);\n  transition:transform ease-in-out 250;\n}\n\n.circle:hover {\n  transform:scale(1.010);\n}\n\n.innerCircleContents {\n  margin:auto;\n  padding:25% 0;\n  width:100%;\n  height:50%;\n  place-items:center;\n  display: grid;\n  grid-auto-flow:row;\n  grid-gap: 5px;\n}\n\n.contentHeader {\n  width:50%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 4vmin);\n}\n\n.contentBody {\n  width:100%;\n  border:0px solid greenyellow;\n  font-size: calc(8px + 20vmin);\n}\n\n.contentFooter {\n  border:0px solid greenyellow;\n  width:50%;\n  font-size: calc(8px + 2vmin);\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n}\n"]);return x=function(){return t},t}var L=function(t){function e(t){var r;return Object(u.a)(this,e),(r=Object(f.a)(this,Object(p.a)(e).call(this,t))).timerInterval=0,r.userModel=null,r.userState=null,r.setBatteryState=function(){var t=s(i.a.mark(function t(e){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.setState({userState:r.userModel.setUserState(r.userState=Object(a.a)({},r.userState,e))});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),r.getBatteryAPI=s(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!("getBattery"in navigator)){t.next=7;break}return console.log(S.a.getBatteryTimeText(r.userState.currBatteryTime)+" - The Battery Status API is supported on this platform."),console.log(r.userState),t.next=5,navigator.getBattery().then(function(t){return r.setBatteryState({batteryLevel:t.level,batteryState:t.charging,currBatteryTime:Date.now()})});case 5:t.next=8;break;case 7:console.log("The Battery API is not supported on this platform");case 8:case"end":return t.stop()}},t,this)})),r.registerNotificationwithAccess=s(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:window.Notification&&"granted"!==Notification.permission&&Notification.requestPermission(function(t){Notification.permission!==t&&(Notification.permission=t)});case 1:case"end":return t.stop()}},t,this)})),r.showNotification=s(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=r.props.AppTitle,n=S.a.getBatteryStateText(r.userState.notifyBatteryState)+" with "+r.userState.notifyBatteryLevel.toString()+"% is now complete.",window.Notification&&"granted"===Notification.permission?new Notification(e,{body:n,icon:g.a,tag:"soManyNotification"}):window.Notification&&"denied"!==Notification.permission?Notification.requestermission(function(t){"granted"===t?new Notification(e,{body:n,icon:g.a,tag:"soManyNotification"}):console.log("permission not granted - 2")}):console.log("permission not granted - 1");case 3:case"end":return t.stop()}},t,this)})),r.state={userState:r.props.Model.state},r.userModel=r.props.Model,r.userState=r.props.Model.state,console.log("Home - "+Object.getOwnPropertyNames(r.props.Model)),console.log("User state - "+r.userState),r}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerInterval=setInterval(s(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getBatteryAPI();case 2:!1===t.userState.notificationSent&&t.userState.batteryState===t.userState.notifyBatteryState&&100*t.userState.batteryLevel===t.userState.notifyBatteryLevel?(t.showNotification(),t.setBatteryState({notificationSent:!0}),clearInterval(t.timerInterval)):t.userState.batteryState===t.userState.notifyBatteryState&&(t.userState.batteryState&&100*t.userState.batteryLevel>=t.userState.notifyBatteryLevel||!t.userState.batteryState&&100*t.userState.batteryLevel<=t.userState.notifyBatteryLevel)&&clearInterval(t.timerInterval);case 3:case"end":return e.stop()}},e,this)})),1e3),this.registerNotificationwithAccess()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval)}},{key:"render",value:function(){var t=100*this.userState.batteryLevel;return d.a.createElement(N,null,d.a.createElement("div",{className:"App App-body"},d.a.createElement("div",{className:"circle",style:{backgroundColor:b.bgColor(t),color:b.fontColor(t)}},d.a.createElement("div",{className:"innerCircleContents"},d.a.createElement("div",{className:"contentHeader",ref:"contentHeader"},S.a.getBatteryStateText(this.userState.batteryState)),d.a.createElement("div",{className:"contentBody",ref:"contentBody"},S.a.getBatteryLevelText(this.userState.batteryLevel)),d.a.createElement("div",{className:"contentFooter",ref:"contentFooter"},S.a.getBatteryTimeText(this.userState.currBatteryTime))))))}}]),e}(y.Component),N=v.a.div(x());e.default=L}}]);
//# sourceMappingURL=1.de8aa02d.chunk.js.map