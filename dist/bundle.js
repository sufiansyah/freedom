!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function s(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},i=[],r=0;r<e.length;r++){var o=e[r],u=n.base?o[0]+n.base:o[0],c=t[u]||0,l="".concat(u," ").concat(c);t[u]=c+1;var p=s(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:l,updater:g(d,n),references:1}),i.push(l)}return i}function c(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=t.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,p=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function m(e,n,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,h=0;function g(e,n){var t,i,r;if(n.singleton){var o=h++;t=f||(f=c(n)),i=d.bind(null,t,o,!1),r=d.bind(null,t,o,!0)}else t=c(n),i=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var r=s(t[i]);a[r].references--}for(var o=u(e,n),c=0;c<t.length;c++){var l=s(t[c]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=o}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(u," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[t].concat(o).concat([r]).join("\n")}var a,s,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);i&&r[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e){e.exports=JSON.parse('{"restaurants":[{"id":"6c7bqjgi84kcowlqdz","name":"Bring Your Phone Cafe","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/41","city":"Medan","rating":4.6},{"id":"ljx8i0qu2uckcowlqdz","name":"Run The Gun","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/07","city":"Bali","rating":4.6},{"id":"fe8bbxoazddkcowlqdz","name":"Pangsit Express","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/29","city":"Ternate","rating":4.8},{"id":"ik1zljmlf68kcowlqdz","name":"Ducky Duck","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/38","city":"Malang","rating":4.7},{"id":"9jpuzkm6n6jkcowlqdz","name":"Kafein","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/40","city":"Bali","rating":3.8},{"id":"cpl5jpsnuqkkcowlqdz","name":"Makan mudah","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/08","city":"Malang","rating":4.6},{"id":"iqtf9hmdzvbkcowlqdz","name":"Saya Suka","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/32","city":"Surabaya","rating":3.6},{"id":"8i06gqcc2dpkcowlqdz","name":"Gigitan Cepat","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/45","city":"Aceh","rating":4},{"id":"wf5o19xhxxkcowlqdz","name":"Fairy Cafe","description":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.","pictureId":"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/04","city":"Malang","rating":3.9}]}')},function(e,n,t){"use strict";t.r(n);t(4),t(6),t(10),t(2);var i=t(2);console.log(i);var r="";i.restaurants.forEach((function(e){r+='\n       <div>\n            <article class="post-item">\n                <h2 class="post-item__title"><a href="#">'.concat(e.city,'</a></h2>\n                <img class="post-item__thumbnail"\n                src="').concat(e.pictureId,'" \n                alt="').concat(e.name,'">\n                <figcaption class="post-item__figcaption"><a href="#">Rating: ').concat(e.rating,'</a></figcaption>\n                <div class="post-item__content">\n                    <h3 class="post-item__title"><a href="#">').concat(e.name,'</a></h1>\n                    <p class="post-item__description">').concat(e.description,"</p>\n                </div>\n            </article>\n        </div>\n        ")})),document.getElementById("rest").innerHTML=r;var o=document.querySelector("#menu"),a=document.querySelector(".hero"),s=document.querySelector("main"),u=document.querySelector("#drawer");o.addEventListener("click",(function(e){u.classList.toggle("open"),e.stopPropagation()})),a.addEventListener("click",(function(){u.classList.remove("open")})),s.addEventListener("click",(function(){u.classList.remove("open")}))},function(e,n,t){(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var t=function(e){"use strict";var t=Object.prototype,i=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function u(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{u({},"")}catch(e){u=function(e,n,t){return e[n]=t}}function c(e,n,t,i){var r=n&&n.prototype instanceof d?n:d,o=Object.create(r.prototype),a=new k(i||[]);return o._invoke=function(e,n,t){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return L()}for(t.method=r,t.arg=o;;){var a=t.delegate;if(a){var s=w(a,t);if(s){if(s===p)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===i)throw i="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);i="executing";var u=l(e,n,t);if("normal"===u.type){if(i=t.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(i="completed",t.method="throw",t.arg=u.arg)}}}(e,t,a),o}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var p={};function d(){}function m(){}function f(){}var h={};h[o]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==t&&i.call(v,o)&&(h=v);var y=f.prototype=d.prototype=Object.create(h);function x(e){["next","throw","return"].forEach((function(n){u(e,n,(function(e){return this._invoke(n,e)}))}))}function b(e,t){var r;this._invoke=function(o,a){function s(){return new t((function(r,s){!function r(o,a,s,u){var c=l(e[o],e,a);if("throw"!==c.type){var p=c.arg,d=p.value;return d&&"object"===n(d)&&i.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,s,u)}),(function(e){r("throw",e,s,u)})):t.resolve(d).then((function(e){p.value=e,s(p)}),(function(e){return r("throw",e,s,u)}))}u(c.arg)}(o,a,r,s)}))}return r=r?r.then(s,s):s()}}function w(e,n){var t=e.iterator[n.method];if(void 0===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=void 0,w(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=l(t,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var r=i.arg;return r?r.done?(n[e.resultName]=r.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function _(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function q(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function j(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,r=function n(){for(;++t<e.length;)if(i.call(e,t))return n.value=e[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=y.constructor=f,f.constructor=m,m.displayName=u(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,u(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},x(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(n,t,i,r,o){void 0===o&&(o=Promise);var a=new b(c(n,t,i,r),o);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(y),u(y,s,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,i){return a.type="throw",a.arg=e,n.next=t,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),p},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),q(t),p}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var i=t.completion;if("throw"===i.type){var r=i.arg;q(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:j(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},e}("object"===n(e)?e.exports:{});try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}).call(this,t(5)(e))},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,n,t){var i=t(0),r=t(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){var i=t(1),r=t(8),o=t(9);n=i(!1);var a=r(o);n.push([e.i,'* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    font-family: "Roboto", sans-serif;\n    font-size: 17px;\n    color: #424242;\n}\n\n/* skip content */\n\n.skip-link {\n    position: absolute;\n    top: -40px;\n    left: 0;\n    background-color: #530dd6;\n    color: white;\n    padding: 8px;\n    z-index: 100;\n }\n\n .skip-link:focus {\n    top: 0;\n }\n\n /* header */\n\n .container {\n     display: grid;\n     grid-template-columns: 1fr 1fr;\n     background-color: #222;\n     width: 100%;\n     height: 85px;\n }\n\n .header {\n     text-align: center;\n     color: cornflowerblue;\n     padding-top: 24px;\n     padding-left: 5px;\n }\n\n .nav {\n     display: flex;\n     justify-content: center;\n     padding-top: 35px;\n }\n\n .nav__ul {\n     text-decoration: none;\n }\n\n .nav__li {\n     display: inline;;\n     list-style: none;\n     padding: 15px;\n }\n\n .nav a {\n    display: inline-block;\n    padding: 0;\n    height: 50px;\n    color: whitesmoke;\n    text-decoration: none;\n}\n\n.nav a:hover {\n    color: #334443;\n}\n\n.ikon {\n    font-size: 34px;\n    text-align: center;\n    padding-top: 18px;\n    color: cornflowerblue;\n    text-decoration: none;\n    width: 60px;\n    min-height: 60px;\n}\n \n\n\n/* jumbotron */\n\n.hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background-image: url('+a+");\n    background-position: center;\n    background-color: green;\n}\n\n.hero__inner {\n    margin: 0 auto;\n    max-width: 300px;\n}\n\n.hero__title {\n    color: black;\n    font-weight: 500;\n    font-size: 36px;\n}\n\n.hero__tagline {\n    color: black;\n    margin-top: 16px;\n    font-size: 18px;\n    font-weight: 300;\n}\n\n/* main */\n\nmain {\n    width: 100%;\n    margin: 0 auto;\n}\n\n.content {\n    padding: 32px;\n}\n\n\n.posts {\n    margin: 32px auto auto;\n    text-align: left;\n}\n\n.post-item {\n    margin: 16px 0;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    width: 100%;\n    border-radius: 5px;\n    overflow: hidden;\n    text-align: justify;\n}\n\narticle.post-item h2 {\n    text-align: center;\n    padding: 10px;\n}\n\n.post-item__content {\n    padding: 16px 32px 32px 32px;\n}\n\n.post-item__thumbnail {\n    width: 100%;\n    height: 250px;\n}\n\n.post-item__date {\n    font-size: 10px;\n    text-transform: uppercase;\n    color: #999;\n}\n\n.post-item__date__author {\n    color: red;\n    text-decoration: none;\n}\n\n.post-item__title {\n    font-weight: 500;\n    font-size: 18px;\n    margin-top: 16px;\n    transition: 0.3s opacity;\n}\n\n.post-item__title:hover {\n    opacity: 0.5;\n}\n\n.post-item__title a {\n    display: inline-block;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: inherit;\n    height: 50px;\n    font-weight: bold;\n    min-width: 50px;\n}\n\n.post-item__description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 1.5em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 5; /* number of lines to show */\n    -webkit-box-orient: vertical;\n}\n\n.post-item__figcaption {\n    text-align: center;\n}\n\n.post-item__figcaption a {\n    display: inline-block;\n    height: 50px;\n}\n\n/* footer */\n\nfooter {\n    background-color: #334443;\n    padding: 2em;\n    width: 100%;\n    text-align: center;\n    color: white;\n}\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"bd6b63650298f334a08b66446d66c536.jpg"},function(e,n,t){var i=t(0),r=t(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,n,t){(n=t(1)(!1)).push([e.i,".posts {\r\n    display: grid;\r\n    grid-row-gap: 16px;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .nav {\r\n        z-index: 10;\r\n        background-color: brown;\r\n        width: 300px;\r\n        position: absolute;\r\n\r\n        /* This trasform moves the drawer off canvas. */\r\n        -webkit-transform: translate(-300px, 0);\r\n        transform: translate(-300px, 0);\r\n\r\n        /* Optionally, we animate the drawer. */\r\n        transition: transform 0.3s ease;\r\n        margin-top: 85px;\r\n    }\r\n\r\n    .open {\r\n        -webkit-transform: translate(0, 0);\r\n        transform: translate(0, 0);\r\n    }\r\n\r\n    .nav__li {\r\n        display: list-item;\r\n        border-bottom: 1px solid #E0E0E0;\r\n        width: 100%;\r\n        text-align: left;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 455px) {\r\n    .headline__content {\r\n        padding: 16px 16px;\r\n    }\r\n\r\n    .headline__title {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .headline__description {\r\n        font-size: 16px;\r\n    }\r\n\r\n    \r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    .header__menu {\r\n        display: none;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 650px) {\r\n    .headline__content {\r\n        margin: 0 auto;\r\n        max-width: 650px;\r\n    }\r\n\r\n    .post-item__content {\r\n        padding: 16px 32px 32px 32px;\r\n    }\r\n\r\n    .post-item__title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .post-item__description {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .hero__inner {\r\n        max-width: 600px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (min-width: 700px) {\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .nav__list {\r\n        max-width: 800px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (min-width: 900px) {\r\n    .headline {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .headline__content {\r\n        padding: 16px 32px;\r\n    }\r\n\r\n\r\n    .posts {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n}",""]),e.exports=n}]);