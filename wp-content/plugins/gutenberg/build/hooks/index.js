window.wp=window.wp||{},window.wp.hooks=function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=428)}({428:function(n,t,e){"use strict";e.r(t),e.d(t,"defaultHooks",(function(){return p})),e.d(t,"createHooks",(function(){return h})),e.d(t,"addAction",(function(){return m})),e.d(t,"addFilter",(function(){return A})),e.d(t,"removeAction",(function(){return v})),e.d(t,"removeFilter",(function(){return _})),e.d(t,"hasAction",(function(){return b})),e.d(t,"hasFilter",(function(){return y})),e.d(t,"removeAllActions",(function(){return g})),e.d(t,"removeAllFilters",(function(){return F})),e.d(t,"doAction",(function(){return k})),e.d(t,"applyFilters",(function(){return x})),e.d(t,"currentAction",(function(){return w})),e.d(t,"currentFilter",(function(){return j})),e.d(t,"doingAction",(function(){return I})),e.d(t,"doingFilter",(function(){return O})),e.d(t,"didAction",(function(){return T})),e.d(t,"didFilter",(function(){return P})),e.d(t,"actions",(function(){return S})),e.d(t,"filters",(function(){return z}));var r=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)},o=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)},i=function(n,t){return function(e,i,c,u=10){const s=n[t];if(!o(e))return;if(!r(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof u)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:u,namespace:i};if(s[e]){const n=s[e].handlers;let t;for(t=n.length;t>0&&!(u>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),s.__current.forEach(n=>{n.name===e&&n.currentIndex>=t&&n.currentIndex++})}else s[e]={handlers:[l],runs:0};"hookAdded"!==e&&n.doAction("hookAdded",e,i,c,u)}},c=function(n,t,e=!1){return function(i,c){const u=n[t];if(!o(i))return;if(!e&&!r(c))return;if(!u[i])return 0;let s=0;if(e)s=u[i].handlers.length,u[i]={runs:u[i].runs,handlers:[]};else{const n=u[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),s++,u.__current.forEach(n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--}))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),s}},u=function(n,t){return function(e,r){const o=n[t];return void 0!==r?e in o&&o[e].handlers.some(n=>n.namespace===r):e in o}},s=function(n,t,e=!1){return function(r,...o){const i=n[t];i[r]||(i[r]={handlers:[],runs:0}),i[r].runs++;const c=i[r].handlers;if(!c||!c.length)return e?o[0]:void 0;const u={name:r,currentIndex:0};for(i.__current.push(u);u.currentIndex<c.length;){const n=c[u.currentIndex].callback.apply(null,o);e&&(o[0]=n),u.currentIndex++}return i.__current.pop(),e?o[0]:void 0}},l=function(n,t){return function(){var e,r;const o=n[t];return null!==(e=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==e?e:null}},d=function(n,t){return function(e){const r=n[t];return void 0===e?void 0!==r.__current[0]:!!r.__current[0]&&e===r.__current[0].name}},a=function(n,t){return function(e){const r=n[t];if(o(e))return r[e]&&r[e].runs?r[e].runs:0}};class f{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=c(this,"actions"),this.removeFilter=c(this,"filters"),this.hasAction=u(this,"actions"),this.hasFilter=u(this,"filters"),this.removeAllActions=c(this,"actions",!0),this.removeAllFilters=c(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=d(this,"actions"),this.doingFilter=d(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var h=function(){return new f};const p=h(),{addAction:m,addFilter:A,removeAction:v,removeFilter:_,hasAction:b,hasFilter:y,removeAllActions:g,removeAllFilters:F,doAction:k,applyFilters:x,currentAction:w,currentFilter:j,doingAction:I,doingFilter:O,didAction:T,didFilter:P,actions:S,filters:z}=p}});