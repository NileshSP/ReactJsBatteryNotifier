(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{46:function(e,t,n){"use strict";function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return a})},47:function(e,t,n){"use strict";function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return(o="function"===typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)})(e)}function r(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",function(){return r})},48:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}n.d(t,"a",function(){return o})},60:function(e,t,n){"use strict";n.r(t);var a=n(15),o=n(11),r=n(7),c=n(3),i=n.n(c),l=n(5),s=n(18),u=n(19),p=n(47),f=n(46),d=n(48),m=n(1),g=n.n(m),y=n(16),b=n(17);function h(){var e=Object(a.a)(["\n  margin:auto;\n  min-height:100vh;\n  background-color: #00bfff;\n\n  .containerDiv {\n    height:100%;\n    margin:auto;\n    text-align:center;\n    padding:50px 15px 15px 15px;\n    border: solid 0px red;\n  }\n\n  h1 {\n    color: #fff;\n    font-size: 30px;\n    padding-top:30px;\n    margin:0px;\n  }\n\n  section {\n    color: #fff;\n    padding-top:50px;\n  }\n\n  .containerContent {\n    margin:auto;\n    padding:0px;\n    display: flex;\n    flex-direction:columns;\n    flex-wrap:wrap;\n    align-items: center;\n    justify-content: center;\n    border: solid 0px red;\n  }\n\n  .containerContent > div {\n    margin:8px;\n    padding:12px;\n    width:240px;\n    border: solid 0px yellow;\n    text-align:center;\n    font-size: calc(8px + 4vmin);\n  }\n\n  .labelTxt {\n    color: lightgreen;\n  }\n\n  .selectOptions {\n    width:100%;\n    font-size: calc(8px + 3vmin);\n    background-color:transparent;\n    border:0px;\n    text-align:center;\n    text-align-last: center;\n  }\n\n  .optionItem {\n    background-color:transparent;\n    text-align:center;    \n  }\n"]);return h=function(){return e},e}var x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).userModel=null,n.userState=null,n.storeChangesLocally=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.storeItemsLocally(b.a.getDbContext(),n.userState);case 2:console.log("changes persisted locally");case 3:case"end":return e.stop()}},e,this)})),n.state={userState:n.props.Model.state},n.userModel=n.props.Model,n.userState=n.props.Model.state,console.log("Settings - "+Object.getOwnPropertyNames(n.props.Model)),console.log("User state - "+n.userState),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return g.a.createElement(S,null,g.a.createElement("div",{className:"containerDiv"},g.a.createElement("h1",{className:" animated fadeInUpBig"},"Settings"),g.a.createElement("section",{className:" animated fadeInUpBig"},g.a.createElement("div",{className:"containerContent"},g.a.createElement("div",{className:"labelTxt"},"Notify @"),g.a.createElement("div",{className:""},g.a.createElement("select",{defaultValue:b.a.getBatteryStateText(this.userState.notifyBatteryState),className:"selectOptions",onChange:function(t){e.setState({userState:e.props.Model.setUserState(e.userState=Object(r.a)({},e.userState,{notifyBatteryState:"Charging"===t.target.value,notificationSent:!1}))}),e.storeChangesLocally(),console.log(t.target.value)}},g.a.createElement("option",{value:"Charging"},"Charging"),g.a.createElement("option",{value:"Discharging"},"Discharging"))),g.a.createElement("div",{className:"labelTxt"},"with"),g.a.createElement("div",{className:""},g.a.createElement("select",{defaultValue:this.userState.notifyBatteryLevel,className:"selectOptions",onChange:function(t){e.setState({userState:e.props.Model.setUserState(e.userState=Object(r.a)({},e.userState,{notifyBatteryLevel:t.target.value,notificationSent:!1}))}),e.storeChangesLocally(),console.log(t.target.value)}},Object(o.a)(Array(100).keys()).map(function(e){return e++,g.a.createElement("option",{className:"optionItem",key:e,value:e},e)}))),g.a.createElement("div",{className:"labelTxt"},"%")))))}}]),t}(g.a.Component),S=y.a.div(h());t.default=x}}]);
//# sourceMappingURL=3.94cc2151.chunk.js.map