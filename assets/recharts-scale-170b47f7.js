import{D as f}from"./decimal.js-light-6fe16ef2.js";function $(r){return E(r)||R(r)||H(r)||C()}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(r,t){if(r){if(typeof r=="string")return g(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(r,t)}}function R(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function E(r){if(Array.isArray(r))return g(r)}function g(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var L=function(t){return t},T={"@@functional/placeholder":!0},N=function(t){return t===T},S=function(t){return function e(){return arguments.length===0||arguments.length===1&&N(arguments.length<=0?void 0:arguments[0])?e:t.apply(void 0,arguments)}},P=function r(t,e){return t===1?e:S(function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var u=a.filter(function(l){return l!==T}).length;return u>=t?e.apply(void 0,a):r(t-u,S(function(){for(var l=arguments.length,o=new Array(l),c=0;c<l;c++)o[c]=arguments[c];var s=a.map(function(v){return N(v)?o.shift():v});return e.apply(void 0,$(s).concat(o))}))})},p=function(t){return P(t.length,t)},b=function(t,e){for(var n=[],a=t;a<e;++a)n[a-t]=a;return n},W=p(function(r,t){return Array.isArray(t)?t.map(r):Object.keys(t).map(function(e){return t[e]}).map(r)}),z=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!e.length)return L;var a=e.reverse(),i=a[0],u=a.slice(1);return function(){return u.reduce(function(l,o){return o(l)},i.apply(void 0,arguments))}},h=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},j=function(t){var e=null,n=null;return function(){for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return e&&i.every(function(l,o){return l===e[o]})||(e=i,n=t.apply(void 0,i)),n}};function U(r){var t;return r===0?t=1:t=Math.floor(new f(r).abs().log(10).toNumber())+1,t}function B(r,t,e){for(var n=new f(r),a=0,i=[];n.lt(t)&&a<1e5;)i.push(n.toNumber()),n=n.add(e),a++;return i}var q=p(function(r,t,e){var n=+r,a=+t;return n+e*(a-n)}),G=p(function(r,t,e){var n=t-+r;return n=n||1/0,(e-r)/n}),J=p(function(r,t,e){var n=t-+r;return n=n||1/0,Math.max(0,Math.min(1,(e-r)/n))});const y={rangeStep:B,getDigitCount:U,interpolateNumber:q,uninterpolateNumber:G,uninterpolateTruncation:J};function w(r){return X(r)||Q(r)||x(r)||K()}function K(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function X(r){if(Array.isArray(r))return A(r)}function d(r,t){return k(r)||Z(r,t)||x(r,t)||Y()}function Y(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x(r,t){if(r){if(typeof r=="string")return A(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A(r,t)}}function A(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Z(r,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,a=!1,i=void 0;try{for(var u=r[Symbol.iterator](),l;!(n=(l=u.next()).done)&&(e.push(l.value),!(t&&e.length===t));n=!0);}catch(o){a=!0,i=o}finally{try{!n&&u.return!=null&&u.return()}finally{if(a)throw i}}return e}}function k(r){if(Array.isArray(r))return r}function O(r){var t=d(r,2),e=t[0],n=t[1],a=e,i=n;return e>n&&(a=n,i=e),[a,i]}function V(r,t,e){if(r.lte(0))return new f(0);var n=y.getDigitCount(r.toNumber()),a=new f(10).pow(n),i=r.div(a),u=n!==1?.05:.1,l=new f(Math.ceil(i.div(u).toNumber())).add(e).mul(u),o=l.mul(a);return t?o:new f(Math.ceil(o))}function rr(r,t,e){var n=1,a=new f(r);if(!a.isint()&&e){var i=Math.abs(r);i<1?(n=new f(10).pow(y.getDigitCount(r)-1),a=new f(Math.floor(a.div(n).toNumber())).mul(n)):i>1&&(a=new f(Math.floor(r)))}else r===0?a=new f(Math.floor((t-1)/2)):e||(a=new f(Math.floor(r)));var u=Math.floor((t-1)/2),l=z(W(function(o){return a.add(new f(o-u).mul(n)).toNumber()}),b);return l(0,t)}function _(r,t,e,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-r)/(e-1)))return{step:new f(0),tickMin:new f(0),tickMax:new f(0)};var i=V(new f(t).sub(r).div(e-1),n,a),u;r<=0&&t>=0?u=new f(0):(u=new f(r).add(t).div(2),u=u.sub(new f(u).mod(i)));var l=Math.ceil(u.sub(r).div(i).toNumber()),o=Math.ceil(new f(t).sub(u).div(i).toNumber()),c=l+o+1;return c>e?_(r,t,e,n,a+1):(c<e&&(o=t>0?o+(e-c):o,l=t>0?l:l+(e-c)),{step:i,tickMin:u.sub(new f(l).mul(i)),tickMax:u.add(new f(o).mul(i))})}function tr(r){var t=d(r,2),e=t[0],n=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=Math.max(a,2),l=O([e,n]),o=d(l,2),c=o[0],s=o[1];if(c===-1/0||s===1/0){var v=s===1/0?[c].concat(w(b(0,a-1).map(function(){return 1/0}))):[].concat(w(b(0,a-1).map(function(){return-1/0})),[s]);return e>n?h(v):v}if(c===s)return rr(c,a,i);var m=_(c,s,u,i),I=m.step,D=m.tickMin,F=m.tickMax,M=y.rangeStep(D,F.add(new f(.1).mul(I)),I);return e>n?h(M):M}function er(r,t){var e=d(r,2),n=e[0],a=e[1],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=O([n,a]),l=d(u,2),o=l[0],c=l[1];if(o===-1/0||c===1/0)return[n,a];if(o===c)return[o];var s=Math.max(t,2),v=V(new f(c).sub(o).div(s-1),i,0),m=[].concat(w(y.rangeStep(new f(o),new f(c).sub(new f(.99).mul(v)),v)),[c]);return n>a?h(m):m}var ar=j(tr),ir=j(er);export{ir as a,ar as g};