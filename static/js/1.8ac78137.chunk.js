(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{61:function(n,e,t){"use strict";t.r(e);var a=t(5),r=t(1),o=t.n(r),i=t(6),l=t(18),c=t(52),s=t(22);function d(){var n=Object(a.a)(["\n \n  margin: 0;\n  padding:0px 0px 0px 0px;\n  height: 5%;\n  display: grid;\n  place-items: center;\n  background-color: transparent;\n  border:solid 0px yellow;\n\n  ul {\n    margin: 0;\n    padding:5px 3px 5px 3px;\n    border:solid 0px yellow;\n    border-radius:5px;\n    background-color:rgb(255,255,255,0.8);\n    transform: scale(1);\n    transition:transform ease-in-out 250;\n  }\n\n  li {\n    display: inline-block;\n    padding:2px;\n    transform:scale(1);\n    transition:transform ease-in-out 250;\n\n    a {\n      background-color: lightgreen;\n      padding:2px 3px 2px 3px;\n      text-decoration: none;\n      font-size: 1em;\n      color: black;\n      font-weight:bold;\n      border-radius:4px;\n    }\n  }\n\n  ul:hover, li:hover {\n    transform:scale(1.070);\n  }\n"]);return d=function(){return n},n}var u=i.a.div(d()),p=function(){return o.a.createElement(u,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/settings"},"Settings")),o.a.createElement("li",null,o.a.createElement(l.b,{to:"/about"},"About"))))};function m(){var n=Object(a.a)(["\n  .fade-enter {\n    opacity: 0.01;\n  }\n\n  .fade-enter.fade-enter-active {\n    opacity: 1;\n    transition: opacity 300ms ease-in;\n  }\n\n  .fade-exit {\n    opacity: 1;\n  }\n\n  .fade-exit.fade-exit-active {\n    opacity: 0.01;\n    transition: opacity 300ms ease-in;\n  }\n\n  div.transition-group {\n    position: relative;\n  }\n\n  section.route-section {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  .headerOverlay {\n    width:99.8vw;\n    margin:0;\n    padding:0;\n    top:4px;\n    z-index:1;\n    position:absolute;\n    display:grid;\n    place-items:stretch;\n    border:solid 0px red;\n  }\n\n"]);return m=function(){return n},n}var b=o.a.lazy(function(){return t.e(2).then(t.bind(null,62))}),f=o.a.lazy(function(){return t.e(3).then(t.bind(null,59))}),g=o.a.lazy(function(){return t.e(4).then(t.bind(null,60))});var x=i.a.div(m());e.default=Object(l.e)(function(n){var e=n.location,t=n.AppTitle,a=n.Model;return console.log("Container - "+a),console.log("location : ",e),console.log("version : ",1.6),console.log("screen orientation: ","orientation"in screen),o.a.createElement(x,null,o.a.createElement(c.TransitionGroup,{className:"transition-group"},o.a.createElement(c.CSSTransition,{key:e.key,timeout:{enter:300,exit:300},classNames:"fade"},o.a.createElement("section",{className:"route-section"},o.a.createElement("div",{className:"headerOverlay"},o.a.createElement(p,null)),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(s.a,null)},o.a.createElement(l.d,{location:e},o.a.createElement(l.c,{exact:!0,path:"/",render:function(n){return o.a.createElement(b,Object.assign({},n.match.params,{AppTitle:t,Model:a}))}}),o.a.createElement(l.c,{path:"/settings",render:function(n){return o.a.createElement(f,Object.assign({hidden:!0},n.match.params,{Model:a}))}}),o.a.createElement(l.c,{path:"/about",render:function(n){return o.a.createElement(g,Object.assign({hidden:!0},n.match.params,{Model:a}))}})))))))})}}]);
//# sourceMappingURL=1.8ac78137.chunk.js.map