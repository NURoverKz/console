import{c as G}from"./@babel-87174ba5.js";import{r as _}from"./react-0c77c144.js";var j={exports:{}};(function(I,q){(function(M,h){I.exports=h(_)})(typeof self<"u"?self:G,M=>(()=>{var h={156:r=>{r.exports=M}},k={};function l(r){var u=k[r];if(u!==void 0)return u.exports;var o=k[r]={exports:{}};return h[r](o,o.exports,l),o.exports}l.d=(r,u)=>{for(var o in u)l.o(u,o)&&!l.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:u[o]})},l.o=(r,u)=>Object.prototype.hasOwnProperty.call(r,u),l.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var y={};return(()=>{l.r(y),l.d(y,{default:()=>R,useStopwatch:()=>D,useTime:()=>N,useTimer:()=>C});var r=l(156);class u{static expiryTimestamp(e){const t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}static onExpire(e){const t=e&&typeof e=="function";return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}class o{static getTimeFromSeconds(e){const t=Math.ceil(e),n=Math.floor(t/86400),a=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return{totalSeconds:t,seconds:Math.floor(t%60),minutes:i,hours:a,days:n}}static getSecondsFromExpiry(e,t){const n=e-new Date().getTime();if(n>0){const a=n/1e3;return t?Math.round(a):a}return 0}static getSecondsFromPrevTime(e,t){const n=new Date().getTime()-e;if(n>0){const a=n/1e3;return t?Math.round(a):a}return 0}static getSecondsFromTimeNow(){const e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}static getFormattedTimeFromSeconds(e,t){const{seconds:n,minutes:a,hours:i}=o.getTimeFromSeconds(e);let m="",d=i;return t==="12-hour"&&(m=i>=12?"pm":"am",d=i%12),{seconds:n,minutes:a,hours:d,ampm:m}}}function F(s,e){const t=(0,r.useRef)();(0,r.useEffect)(()=>{t.current=s}),(0,r.useEffect)(()=>{if(!e)return()=>{};const n=setInterval(()=>{t.current&&t.current()},e);return()=>clearInterval(n)},[e])}const b=1e3;function P(s){if(!u.expiryTimestamp(s))return null;const e=o.getSecondsFromExpiry(s),t=Math.floor(1e3*(e-Math.floor(e)));return t>0?t:b}function C(){let{expiryTimestamp:s,onExpire:e,autoStart:t=!0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[n,a]=(0,r.useState)(s),[i,m]=(0,r.useState)(o.getSecondsFromExpiry(n)),[d,g]=(0,r.useState)(t),[p,w]=(0,r.useState)(t),[v,x]=(0,r.useState)(P(n)),f=(0,r.useCallback)(()=>{u.onExpire(e)&&e(),g(!1),x(null)},[e]),E=(0,r.useCallback)(()=>{g(!1)},[]),S=(0,r.useCallback)(function(c){let O=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];x(P(c)),w(O),g(O),a(c),m(o.getSecondsFromExpiry(c))},[]),T=(0,r.useCallback)(()=>{const c=new Date;c.setMilliseconds(c.getMilliseconds()+1e3*i),S(c)},[i,S]),z=(0,r.useCallback)(()=>{p?(m(o.getSecondsFromExpiry(n)),g(!0)):T()},[n,p,T]);return F(()=>{v!==b&&x(b);const c=o.getSecondsFromExpiry(n);m(c),c<=0&&f()},d?v:null),{...o.getTimeFromSeconds(i),start:z,pause:E,resume:T,restart:S,isRunning:d}}function D(){let{autoStart:s,offsetTimestamp:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[t,n]=(0,r.useState)(o.getSecondsFromExpiry(e,!0)||0),[a,i]=(0,r.useState)(new Date),[m,d]=(0,r.useState)(t+o.getSecondsFromPrevTime(a||0,!0)),[g,p]=(0,r.useState)(s);F(()=>{d(t+o.getSecondsFromPrevTime(a,!0))},g?1e3:null);const w=(0,r.useCallback)(()=>{const f=new Date;i(f),p(!0),d(t+o.getSecondsFromPrevTime(f,!0))},[t]),v=(0,r.useCallback)(()=>{n(m),p(!1)},[m]),x=(0,r.useCallback)(function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,E=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const S=o.getSecondsFromExpiry(f,!0)||0,T=new Date;i(T),n(S),p(E),d(S+o.getSecondsFromPrevTime(T,!0))},[]);return{...o.getTimeFromSeconds(m),start:w,pause:v,reset:x,isRunning:g}}function N(){let{format:s}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,t]=(0,r.useState)(o.getSecondsFromTimeNow());return F(()=>{t(o.getSecondsFromTimeNow())},1e3),{...o.getFormattedTimeFromSeconds(e,s)}}function R(s){if((0,r.useEffect)(()=>{console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")},[]),s.expiryTimestamp){const t=C(s);return{...t,startTimer:t.start,stopTimer:t.pause,resetTimer:()=>{}}}const e=D(s);return{...e,startTimer:e.start,stopTimer:e.pause,resetTimer:e.reset}}})(),y})())})(j);var H=j.exports;export{H as d};
