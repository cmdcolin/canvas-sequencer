parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdE/":[function(require,module,exports) {
"use strict";var t;function e(t,e){return o(t)||n(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(n=(u=c.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(a){o=!0,i=a}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}function o(t){if(Array.isArray(t))return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t){return l(t)||f(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),t}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var w={METHOD:"method",PROPERTY:"property"},g=function t(e,r){m(this,t),this.inst=e,this.args=r},d=function(t){function e(t,r){var n;return m(this,e),(n=p(this,h(e).call(this,t,r))).type=w.METHOD,n}return v(e,g),y(e,[{key:"execute",value:function(t){t[this.inst].apply(t,c(this.args))}}]),e}(),j=function(t){function e(t,r){var n;return m(this,e),(n=p(this,h(e).call(this,t,r))).type=w.PROPERTY,n}return v(e,g),y(e,[{key:"execute",value:function(t){t[this.inst]=this.args[0]}}]),e}(),P=(i(t={},w.METHOD,d),i(t,w.PROPERTY,j),t),E=function t(e,r){m(this,t);for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];return new P[e](r,o)};Object.entries(w).forEach(function(t){var r=e(t,2),n=r[0],o=r[1];Object.defineProperty(E,n,{value:o,configurable:!1,enumerable:!0,writable:!1})}),module.exports=E;
},{}],"o5nZ":[function(require,module,exports) {
"use strict";function e(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function t(r,o,a){return(t=e()?Reflect.construct:function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a}).apply(null,arguments)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){return c(e)||a(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var f=require("./CanvasAtom.js"),s=Object.freeze({METHODS:["arc","arcTo","beginPath","bezierCurveTo","clearRect","clip","closePath","drawFocusIfNeeded","drawImage","ellipse","fill","fillRect","fillText","lineTo","moveTo","putImageData","quadraticCurveTo","rect","resetTransform","restore","rotate","save","scale","setLineDash","setTransform","stroke","strokeRect","strokeText","transform","translate"],PROPERTIES:["fillStyle","filter","font","globalAlpha","globalCompositeOperation","imageSmoothingEnabled","lineCap","lineDashOffset","lineJoin","lineWidth","miterLimit","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","strokeStyle","textAlign","textBaseline"]}),p=Object.freeze({sequence:Symbol.for("sequence"),push:Symbol.for("push"),fromJSON:Symbol.for("fromJSON")}),h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i(this,e),this[p.sequence]=[],t&&this[p.fromJSON](t)}return l(e,[{key:p.fromJSON,value:function(){var e=this;(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sequence:[]}).sequence.forEach(function(t){var n=t.type,o=t.inst,a=t.args;e[p.push].apply(e,[n,o].concat(r(a)))})}},{key:p.push,value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this[p.sequence].push(t(f,n))}},{key:"execute",value:function(e){e.save(),this[p.sequence].forEach(function(t){return t.execute(e)}),e.restore()}},{key:"toJSON",value:function(){return{sequence:this[p.sequence]}}}]),e}();s.METHODS.forEach(function(e){Object.defineProperty(h.prototype,e,{value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this[p.push].apply(this,[f.METHOD,e].concat(n))},writable:!1,enumerable:!0,configurable:!1})}),s.PROPERTIES.forEach(function(e){Object.defineProperty(h.prototype,e,{get:function(){throw"Invalid canvas sequencer interaction, cannot get ".concat(e,".")},set:function(t){this[p.push](f.PROPERTY,e,t)},enumerable:!0,configurable:!1})}),module.exports=h;
},{"./CanvasAtom.js":"QdE/"}],"kmo7":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return o(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function f(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?a(e):n}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=require("./CanvasSequence.js"),b=Object.freeze({sequence:Symbol.for("sequence"),push:Symbol.for("push")});function h(t,e){var n=t.replace(/^\{|\}$/g,"");return n!==t?e.hasOwnProperty(n)?e[n]:n:t}var m=function(t){function n(){return u(this,n),f(this,p(n).apply(this,arguments))}return l(n,s),c(n,[{key:"build",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new s;return this[b.sequence].forEach(function(r){var o=r.type,u=r.inst,i=r.args.map(function(e){return"string"==typeof e?h(e,t):e});n[b.push].apply(n,[o,u].concat(e(i)))}),n}},{key:"execute",value:function(){throw new TypeError("Cannot execute a blueprint.")}}]),n}();module.exports=m;
},{"./CanvasSequence.js":"o5nZ"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./src/CanvasSequence.js"),r=require("./src/CanvasBlueprint.js");module.exports={CanvasSequence:e,CanvasBlueprint:r};
},{"./src/CanvasSequence.js":"o5nZ","./src/CanvasBlueprint.js":"kmo7"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map