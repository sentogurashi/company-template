!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),s=function(){function e(t){var n=t.element,r=t.threshold,i=void 0===r?0:r;o()(this,e),this.element=n,this.fixedClassName="is-show",this.setThreshold(i),this.watch(),this.update()}return u()(e,[{key:"watch",value:function(){window.addEventListener("scroll",this.update.bind(this))}},{key:"setThreshold",value:function(e){this.threshold=e,this.update()}},{key:"update",value:function(){var e=window.scrollY,t=this.threshold;e>=t||0===t?this.element.classList.add(this.fixedClassName):this.element.classList.remove(this.fixedClassName)}}]),e}();window.addEventListener("DOMContentLoaded",function(){!function(){var e=document.querySelector(".js-headerShowLine"),t=function(){return window.scrollY+e.getBoundingClientRect().top},n=new s({element:document.querySelector(".js-Header"),threshold:t()});window.addEventListener("resize",function(){n.setThreshold(t())})}()})}]);