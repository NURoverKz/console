import{r,j as e,R as q}from"./react-0c77c144.js";import{c as Q}from"./react-dom-964364ba.js";import{R as M,a as I,b as P,c as $}from"./recoil-30246499.js";import{r as t}from"./@material-tailwind-09403f25.js";import{r as ee}from"./randomcolor-38ee50fd.js";import{m as O}from"./mapbox-gl-8de1b415.js";import{d as te}from"./react-timer-hook-679e9270.js";import{P as se,a as re,A as ae,T as z,b as J,W as G,c as ne,d as oe,R as ce,C as ie,B as le,e as de,f as me,S as he}from"./@heroicons-3de99253.js";import{l as ue}from"./react-joystick-component-2aa7cd53.js";import{i as pe,g as xe,o as ge,s as ye,a as fe}from"./@firebase-78a613ce.js";import"./firebase-4eeb31d4.js";import{c as U,d as H,O as je,e as Ne,f as T}from"./react-router-2a15238e.js";import{R as ve,L as be,a as Ce,C as we,X as Se,Y as ke,T as Le}from"./recharts-624c24e9.js";import{B as Te,A as Ee}from"./react-icons-0a8c3f43.js";import{N as R,B as Ie}from"./react-router-dom-c3df4f81.js";import"./@babel-87174ba5.js";import"./scheduler-765c72db.js";import"./classnames-cd41178b.js";import"./tailwind-merge-de5f6af3.js";import"./prop-types-14c30b34.js";import"./deepmerge-89e33937.js";import"./framer-motion-3ab52292.js";import"./tslib-b2c16c9a.js";import"./hey-listen-52bbde7e.js";import"./style-value-types-86c13b32.js";import"./popmotion-413bcd9d.js";import"./framesync-409e5dda.js";import"./@motionone-95e9e256.js";import"./@emotion-cde29e94.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-6cb3404f.js";import"./idb-81bdbf9b.js";import"./@remix-run-3c3b6866.js";import"./react-resize-detector-b39efbfc.js";import"./lodash-1234520e.js";import"./react-smooth-c290c57b.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./react-is-e8e5dbb3.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-b30b9425.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-40d30422.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const A=M({key:"waypointState",default:[]});O.accessToken="pk.eyJ1IjoiYmF0eXJraCIsImEiOiJjbGljcHo3ZDAwcTNlM2V0ZTRtemk1ODRmIn0.t-G-2NoT-mvCYOpK-FTLjA";const Re=({longitude:a,latitude:i})=>{const o=r.useRef(null),c=r.useRef(null),[n,s]=r.useState(a),[d,j]=r.useState(i),[u,p]=r.useState(16),[l,N]=I(A),[m,g]=r.useState(),[v,k]=r.useState([]),x=()=>{v.length&&(v.forEach(C=>{C.remove()}),k([]))},f=C=>{N(w=>[...w,C])};r.useEffect(()=>{c.current||(c.current=new O.Map({container:o.current,style:"mapbox://styles/mapbox/light-v11",center:[n,d],zoom:u}),c.current.on("move",()=>{s(c.current.getCenter().lng.toFixed(4)),j(c.current.getCenter().lat.toFixed(4)),p(c.current.getZoom().toFixed(2))}),g(new O.Marker({color:"white"}).setLngLat([n,d]).addTo(c.current)),c.current.on("contextmenu",C=>f({latitude:C.lngLat.lat,longitude:C.lngLat.lng,color:ee()})))});const b=(C,w)=>{N(E=>{let L=[...E];return L[C]=w,L})};return r.useEffect(()=>{c.current&&(m==null||m.setLngLat([a,i]))},[a,i]),r.useEffect(()=>{if(!c.current)return;(()=>{x(),l.forEach((w,E)=>{let L=new O.Marker({color:w==null?void 0:w.color}).setDraggable(!0).setLngLat([w.longitude,w.latitude]).addTo(c.current);L.on("dragend",()=>{let h=L.getLngLat(),y={latitude:h.lat,longitude:h.lng,color:w==null?void 0:w.color};b(E,y)}),k(h=>[...h,L])})})()},[l]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-gray-800 text-xs text-white px-1.5 py-3 z-10 absolute m-3 rounded",children:["Latitude: ",d," | Longitude: ",n," | Zoom: ",u]}),e.jsx("div",{ref:o,className:"h-[500px]"})]})},Oe=()=>{const{seconds:a,minutes:i,hours:o,isRunning:c,start:n,pause:s,reset:d}=te.useStopwatch({autoStart:!1});return e.jsxs("div",{className:"text-center text-white",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs(t.Typography,{variant:"h1",children:[o.toString().padStart(2,"0"),":",i.toString().padStart(2,"0"),":",a.toString().padStart(2,"0")]}),e.jsx(t.Typography,{variant:"paragraph",children:"HH:MM:SS"})]}),e.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[c?e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:s,children:e.jsx(re,{strokeWidth:2,className:"h-5 w-5"})}):e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:n,children:e.jsx(se,{strokeWidth:2,className:"h-5 w-5"})}),e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:()=>d(null,!1),children:e.jsx(ae,{strokeWidth:2,className:"h-5 w-5"})})]})]})},Z=r.createContext(),Pe=({children:a})=>{const[i,o]=r.useState(WebSocket.CLOSED),[c,n]=r.useState(null),s=r.useRef(null),d=()=>{const l=new WebSocket("wss://mrbwjuh5n3.execute-api.eu-north-1.amazonaws.com/prod");l.onopen=()=>{o(l.OPEN)},l.onclose=()=>{o(l.CLOSED)},l.onmessage=N=>{let m=JSON.parse(N.data);console.log("got data obj: ",m),n(m)},s.current=l},j=()=>{(!s.current||s.current.readyState===WebSocket.CLOSED)&&d()},u=()=>{s.current&&s.current.readyState===WebSocket.OPEN&&s.current.close()},p=l=>{var m,g,v;let N={action:"send",message:JSON.stringify(l)};((m=s.current)==null?void 0:m.readyState)===((g=s.current)==null?void 0:g.OPEN)&&((v=s.current)==null||v.send(JSON.stringify(N)))};return e.jsx(Z.Provider,{value:{readyState:i,data:c,sendMessage:p,openConnection:j,closeConnection:u},children:a})},B=()=>r.useContext(Z),Me=()=>{const a={latitude:"51.090009",longitude:"71.398299"},{readyState:i,data:o}=B(),[c,n]=r.useState(a),[s,d]=r.useState({}),[j,u]=I(A),[p,l]=r.useState(""),[N,m]=r.useState(""),[g,v]=r.useState("#3FB1CE"),k=h=>{h.preventDefault(),p.length&&N.length&&u([...j,{latitude:p,longitude:N,color:g}]),l(""),m(""),h.target.reset()},x=h=>{let y=[...j];y.splice(h,1),u(y)},f=(h,y)=>{let S=[...j];S[h]=y,u(S)},b=r.useRef(),C=r.useRef(),w=(h,y)=>{b.current=y},E=(h,y)=>{C.current=y},L=h=>{const y=[...j],S=y[b.current];y.splice(b.current,1),y.splice(C.current,0,S),b.current=null,C.current=null,u(y)};return r.useEffect(()=>{var h,y;i===WebSocket.OPEN&&o&&o.gps&&((h=o.gps)==null?void 0:h.latitude)!=c.latitude&&((y=o.gps)==null?void 0:y.longitude)!=c.longitude&&n(o.gps)},[i,o]),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 grid-flow-row-dense",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 h-fit",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"IMU Data"}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Linear Acceleration: ",(s==null?void 0:s.linear_acceleration)??"0"]}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Angular Velocity: ",(s==null?void 0:s.angular_velocity)??"0"]}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Orientation: ",(s==null?void 0:s.orientation)??"NE"]})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"text-primary font-heading text-center",children:"Stopwatch"}),e.jsx(Oe,{})]})}),e.jsx(t.Card,{className:"bg-secondary col-span-2",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Waypoints"}),e.jsx(t.List,{className:"h-64 overflow-y-auto",children:j.length?j.map((h,y)=>e.jsxs(t.ListItem,{ripple:!1,className:"py-1 pr-1 pl-4 text-white bg-[#474b4f]",draggable:!0,onDragStart:S=>w(S,y),onDragEnter:S=>E(S,y),onDragEnd:L,children:[e.jsxs("span",{className:"text-martian mr-2",children:["[",y+1,"]"]}),"Latitude: ",Number(h.latitude).toFixed(4),", Longitude: ",Number(h.longitude).toFixed(4),e.jsxs(t.ListItemSuffix,{className:"flex justify-center space-x-4",children:[e.jsx("input",{type:"color",value:h.color,onChange:S=>{let X={latitude:h.latitude,longitude:h.longitude,color:S.target.value};f(y,X)}}),e.jsx(t.IconButton,{variant:"text",color:"blue-gray",onClick:()=>x(y),children:e.jsx(z,{className:"h-5 w-5"})})]})]},y)):e.jsx(t.Typography,{color:"white",className:"text-lg text-center",children:"No waypoints on the map"})}),e.jsxs("form",{className:"mt-3 flex gap-2 items-center",onSubmit:k,children:[e.jsx(t.Input,{label:"Latitude",color:"white",onChange:h=>l(h.target.value)}),e.jsx(t.Input,{label:"Longitude",color:"white",onChange:h=>m(h.target.value)}),e.jsx(t.Input,{label:"Color",color:"white",type:"color",value:g,onChange:h=>v(h.target.value),containerProps:{className:"max-w-[100px]"}}),e.jsx(t.Button,{className:"col-span-3",type:"submit",color:"green",children:e.jsx(J,{className:"h-4"})})]})]})})]}),e.jsx("div",{className:"grid grid-rows-1 gap-4",children:e.jsx(t.Card,{className:"bg-secondary ",children:e.jsxs(t.CardBody,{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Location"})}),e.jsx(Re,{latitude:c.latitude,longitude:c.longitude}),e.jsxs(t.Typography,{className:"mt-4 text-center",color:"white",children:["Rover's Location (",c.latitude,", ",c.longitude,")"]})]})})})]})},K=M({key:"receiveFootageState",default:!0}),Be=({mediaStream:a})=>{const i=r.useRef(null),o=P(K);return r.useEffect(()=>{i.current&&(a!==null?i.current.srcObject=a:i.current.srcObject&&a===null&&(i.current.srcObject.getTracks().forEach(c=>c.stop()),i.current.srcObject=null))},[a]),o&&a?e.jsx("video",{autoPlay:!0,controls:!0,ref:i}):e.jsx("div",{className:"h-[480px] w-full bg-black flex justify-center items-center",children:o?e.jsx(t.Typography,{variant:"h3",className:"text-primary",children:"No Footage From Cameras"}):e.jsx(t.Typography,{variant:"h3",className:"text-primary",children:"Footage Receival is turned off"})})},We=()=>{const{sendMessage:a}=B(),i=new Map([["W",87],["A",65],["S",83],["D",68]]),[o,c]=r.useState({x:0,y:0});let n={};const s=u=>{let p={x:u.x,y:u.y};n.x===p.x&&n.y===p.y||(n=p,a({control:p}))},d=u=>{let p=u.keyCode,l={x:0,y:0};switch(p){case i.get("W"):l.x=0,l.y=1;break;case i.get("A"):l.x=-1,l.y=0;break;case i.get("S"):l.x=0,l.y=-1;break;case i.get("D"):l.x=1,l.y=0;break}c(l),(l.x||l.y)&&s({x:l.x,y:l.y})},j=u=>{let p=u.keyCode;(p===87||p===65||p===83||p===68)&&(c({x:0,y:0}),s({x:0,y:0}))};return r.useEffect(()=>(document.addEventListener("keydown",d),document.addEventListener("keyup",j),()=>{document.removeEventListener("keydown",d),document.removeEventListener("keyup",j)}),[]),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-4 text-primary font-heading",children:"Manual Control"}),e.jsxs("div",{className:"flex flex-col gap-4 items-center my-2",children:[e.jsx(ue.Joystick,{pos:o,size:100,stickSize:50,baseColor:"black",stickColor:"#29EB18",move:s}),e.jsx(t.Typography,{color:"white",children:"Movement"}),e.jsxs(t.Typography,{color:"white",children:["Forward - [W], Backward - [S]",e.jsx("br",{}),"Left - [A], Right - [D]"]})]})]})})},Y=r.createContext(),De=({children:a})=>{const{readyState:i,data:o,sendMessage:c}=B(),[n,s]=r.useState(null),[d,j]=r.useState(null),[u,p]=r.useState(),l=r.useRef(null),N=m=>{s(m)};return r.useEffect(()=>{i===WebSocket.OPEN&&o&&o.remoteOffer!=n&&s(o.remoteOffer)},[i,o]),r.useEffect(()=>{const m=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]});return m.onicecandidate=function(g){let v=g.candidate;v?console.log(v.candidate):console.log(`iceGatheringState complete
`,l.current.localDescription.sdp)},m.oniceconnectionstatechange=function(){p(l.current.iceConnectionState)},m.ontrack=function(g){console.log("remote ontrack",g.streams),j(g.streams[0])},m.onconnection=function(g){console.log("onconnection ",g)},l.current=m,()=>{l.current.close()}},[]),r.useEffect(()=>{if(!l.current||!n)return;let m=new RTCSessionDescription(JSON.parse(n));console.log(`remoteOffer 
`,m),l.current.setRemoteDescription(m).then(function(){m.type=="offer"&&l.current.createAnswer().then(function(g){console.log(`createAnswer 200 ok 
`,g),c({webrtc_answer:g}),l.current.setLocalDescription(g).then(function(){}).catch(v=>console.log(v))}).catch(g=>console.log(g))}).catch(g=>console.log(g))},[n]),e.jsx(Y.Provider,{value:{changeRemoteOffer:N,remoteStream:d,iceState:u},children:a})},Ae=()=>r.useContext(Y),F=M({key:"controlModeState",default:!1}),Fe=()=>{const[a,i]=I(F),[o,c]=I(K),n=d=>{i(d.target.checked)},s=d=>{c(d.target.checked)};return e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{className:"flex flex-col gap-4",children:[e.jsx(t.Typography,{variant:"h4",className:"text-primary font-heading",children:"Configs"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t.Typography,{variant:"h5",color:"white",children:"Drive mode:"}),e.jsx(t.Typography,{color:"white",children:"Manual"}),e.jsx(t.Switch,{id:"control-mode-switch",checked:a,onChange:n,ripple:!1,className:"h-full w-full checked:bg-primary",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}}),e.jsx(t.Typography,{color:"white",children:"Autonomous"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t.Typography,{variant:"h5",color:"white",children:"Receive camera footage:"}),e.jsx(t.Switch,{id:"recieve-footage-switch",checked:o,onChange:s,ripple:!1,className:"h-full w-full checked:bg-primary",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}})]})]})})},_e=()=>{const[a,i]=I(A),[o,c]=r.useState(""),[n,s]=r.useState(""),[d,j]=r.useState("#3FB1CE"),u=x=>{x.preventDefault(),o.length&&n.length&&i([...a,{latitude:o,longitude:n,color:d}]),c(""),s(""),x.target.reset()},p=x=>{let f=[...a];f.splice(x,1),i(f)},l=(x,f)=>{let b=[...a];b[x]=f,i(b)},N=r.useRef(),m=r.useRef(),g=(x,f)=>{N.current=f},v=(x,f)=>{m.current=f},k=x=>{const f=[...a],b=f[N.current];f.splice(N.current,1),f.splice(m.current,0,b),N.current=null,m.current=null,i(f)};return e.jsx(t.Card,{className:"bg-secondary col-span-2",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Waypoints"}),e.jsx(t.List,{className:"h-64 overflow-y-auto",children:a.length?a.map((x,f)=>e.jsxs(t.ListItem,{ripple:!1,className:"py-1 pr-1 pl-4 text-white bg-[#474b4f]",draggable:!0,onDragStart:b=>g(b,f),onDragEnter:b=>v(b,f),onDragEnd:k,children:[e.jsxs("span",{className:"text-martian mr-2",children:["[",f+1,"]"]}),"Latitude: ",Number(x.latitude).toFixed(4),", Longitude: ",Number(x.longitude).toFixed(4),e.jsxs(t.ListItemSuffix,{className:"flex justify-center space-x-4",children:[e.jsx("input",{type:"color",value:x.color,onChange:b=>{let C={latitude:x.latitude,longitude:x.longitude,color:b.target.value};l(f,C)}}),e.jsx(t.IconButton,{variant:"text",color:"blue-gray",onClick:()=>p(f),children:e.jsx(z,{className:"h-5 w-5"})})]})]},f)):e.jsx(t.Typography,{color:"white",className:"text-lg text-center",children:"No waypoints on the map"})}),e.jsxs("form",{className:"mt-3 flex gap-2 items-center",onSubmit:u,children:[e.jsx(t.Input,{label:"Latitude",color:"white",onChange:x=>c(x.target.value)}),e.jsx(t.Input,{label:"Longitude",color:"white",onChange:x=>s(x.target.value)}),e.jsx(t.Input,{label:"Color",color:"white",type:"color",value:d,onChange:x=>j(x.target.value),containerProps:{className:"max-w-[100px]"}}),e.jsx(t.Button,{className:"col-span-3",type:"submit",color:"green",children:e.jsx(J,{className:"h-4"})})]})]})})},ze=()=>{const[a,i]=r.useState(""),{changeRemoteOffer:o,remoteStream:c,iceState:n}=Ae(),s=P(F);return r.useEffect(()=>{console.log("Ice state: "+n)},[n]),e.jsxs("div",{className:"mt-4 grid grid-cols-11 gap-4",children:[e.jsx("div",{className:"col-span-5",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(Fe,{}),s?e.jsx(_e,{}):e.jsx(We,{})]})}),e.jsx("div",{className:"col-span-6",children:e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Main Camera"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(Be,{mediaStream:c})}),e.jsx("textarea",{value:a,onChange:d=>i(d.target.value)}),e.jsx("button",{onClick:()=>o(a),children:"Answer"})]})})})]})},D=()=>e.jsx(t.Card,{color:"gray",className:"",children:e.jsx(t.CardBody,{className:"flex justify-center items-center",children:e.jsx(t.Typography,{variant:"h4",color:"white",className:"font-heading",children:"Feature not yet implemented!"})})}),Je={apiKey:"AIzaSyB6lJ4-btPJrun3egZ-OHVB2x_GHqON080",authDomain:"consolecsi-auth.firebaseapp.com",projectId:"consolecsi-auth",storageBucket:"consolecsi-auth.appspot.com",messagingSenderId:"1060020195005",appId:"1:1060020195005:web:16f958fcfde05c891bb1d4"},Ge=pe(Je),W=xe(Ge),V=r.createContext(),Ue=({children:a})=>{const[i,o]=r.useState({}),c=(s,d)=>ye(W,s,d),n=()=>fe(W);return r.useEffect(()=>{const s=ge(W,d=>{o(d)});return()=>{s()}},[]),e.jsx(V.Provider,{value:{user:i,signIn:c,logout:n},children:a})},_=()=>r.useContext(V),He=()=>{const{readyState:a,openConnection:i,closeConnection:o}=B(),{user:c,logout:n}=_(),s=async()=>{try{await n(),U("/login")}catch(x){console.error(x)}},d={1:"OPEN",3:"CLOSED"}[a],[j,u]=r.useState(0),[p,l]=r.useState(0),[N,m]=r.useState(0),[g,v]=r.useState();r.useEffect(()=>{a===WebSocket.OPEN&&v(setTimeout(()=>{u(Math.floor(Math.random()*300+120)),l(Math.floor(Math.random()*20)),m(Math.floor(Math.random()*40))},3e3))},[a,j,p,N]);const k=()=>{a===WebSocket.OPEN?(o(),clearTimeout(g)):a===WebSocket.CLOSED&&(i(),v(setTimeout(()=>{u(Math.floor(Math.random()*300+120)),l(Math.floor(Math.random()*20)),m(Math.floor(Math.random()*40))},3e3)))};return e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h3",className:"mb-4 text-primary font-heading",children:"Proxy Settings"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center mb-2 gap-2",children:[e.jsxs(t.Typography,{color:"white",variant:"h5",children:["Connection Status: ",d]}),e.jsx(t.Button,{onClick:k,color:"red",variant:"text",children:a===WebSocket.OPEN?"Close":"Open"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs(t.Typography,{color:"white",children:[e.jsx(G,{className:"h-8 w-8"}),"Ping: ",j," ms"]}),e.jsxs(t.Typography,{color:"white",children:[e.jsx(ne,{className:"h-8 w-8"}),"Sent data: ",p," kb"]}),e.jsxs(t.Typography,{color:"white",children:[e.jsx(oe,{className:"h-8 w-8"}),"Recieved data: ",N," kb"]})]})]}),e.jsx(t.Typography,{variant:"h3",className:"mt-6 mb-4 text-primary font-heading",children:"LoRa Settings"}),e.jsx(D,{})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h3",className:"mb-4 text-primary font-heading",children:"Account Settings"}),e.jsxs("div",{className:"flex items-center mb-2 gap-2",children:[e.jsxs(t.Typography,{color:"white",variant:"h5",children:["User Email: ",c&&c.email]}),e.jsx(t.Button,{onClick:s,color:"red",variant:"text",children:"Sign Out"})]}),e.jsx(D,{})]})})]})},Ze=""+new URL("dbelements/graphene.svg",import.meta.url).href,Ke=()=>{const[a,i]=r.useState(""),o=({target:s})=>i(s.value),c=[{shift:200,intensity:.0759},{shift:300,intensity:.1591},{shift:400,intensity:.4572},{shift:500,intensity:.8539},{shift:600,intensity:.9492}],n=[{imgPath:Ze,name:"Graphene",description:"Graphene is a building block of all graphitic carbon allotropes. It is a monatomic sheet formed by a network of sp2 carbons organized in a honeycomb structure."}];return e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 grid-flow-row-dense",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Data Graph"}),e.jsx("div",{className:"w-full h-96 my-6",children:e.jsx(ve,{children:e.jsxs(be,{data:c,children:[e.jsx(Ce,{type:"monotone",dataKey:"intensity",stroke:"#29EB18"}),e.jsx(we,{stroke:"#ccc",strokeDasharray:"5 5"}),e.jsx(Se,{dataKey:"shift"}),e.jsx(ke,{}),e.jsx(Le,{})]})})}),e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Result"}),e.jsx(D,{})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Elements Database"}),e.jsx("div",{className:"w-full my-6",children:e.jsxs("div",{className:"shadow-md rounded-lg px-3 py-2 mb-4",children:[e.jsxs("div",{className:"flex items-center rounded-md",children:[e.jsx(t.Input,{color:"white",label:"Name of elements",value:a,onChange:o,containerProps:{className:"min-w-0"}}),e.jsx(t.Button,{color:a?"gray":"white",disabled:!a,children:"Search"})]}),e.jsx(t.List,{className:"py-3 text-sm",children:n.length?n.map((s,d)=>e.jsxs(t.ListItem,{children:[e.jsx(t.ListItemPrefix,{children:e.jsx(t.Avatar,{alt:s.name,src:s.imgPath})}),e.jsxs("div",{className:"ml-4",children:[e.jsx(t.Typography,{variant:"h6",color:"white",children:s.name}),e.jsx(t.Typography,{variant:"small",color:"white",className:"font-normal",children:s.description})]})]},d)):e.jsx(t.Typography,{color:"white",className:"text-lg text-center",children:"No waypoints on the map"})})]})})]})})]})},Ye=()=>{const{user:a,signIn:i}=_(),o=U();if(a)return e.jsx(H,{to:"/"});const[c,n]=r.useState(""),[s,d]=r.useState(""),[j,u]=r.useState(""),p=async l=>{if(l.preventDefault(),u(""),c===""||s===""){u("Please fill out the form");return}try{await i(c,s),o("/")}catch(N){u(N.message)}};return e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs(t.Card,{className:"bg-secondary p-8",shadow:!1,children:[e.jsx(t.Typography,{variant:"h2",className:"text-primary text-center",children:"Sign In"}),e.jsxs("form",{onSubmit:p,className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-6",children:[e.jsx(t.Input,{color:"white",type:"email",size:"lg",label:"Email",onChange:l=>n(l.target.value)}),e.jsx(t.Input,{color:"white",type:"password",size:"lg",label:"Password",onChange:l=>d(l.target.value)})]}),e.jsx(t.Button,{type:"submit",className:"mt-6 bg-primary text-secondary",fullWidth:!0,children:"Login"})]}),j&&e.jsx(t.Typography,{variant:"small",color:"red",children:j})]})})},Ve=""+new URL("../logo.png",import.meta.url).href,Xe=M({key:"connectionTypeState",default:"proxy"}),qe=()=>{const a=P(F),i=P(Xe);return e.jsxs(t.Navbar,{className:"border-none bg-[#222629] h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 grid grid-cols-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"h-16",src:Ve,alt:"Logo"}),e.jsx("div",{className:"ml-4",children:e.jsxs("h4",{children:["Nazarbayev ",e.jsxs("span",{className:"text-primary",children:["University",e.jsx("br",{}),"Rover"]})," Team"]})})]}),e.jsx("div",{className:"h-16 flex items-center justify-center",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsx("div",{className:"mr-4",children:e.jsxs("ul",{className:"mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6",children:[e.jsx("li",{children:e.jsx(R,{to:"/",className:({isActive:o})=>o?"text-primary":"",children:e.jsx(ce,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(R,{to:"/command",className:({isActive:o})=>o?"text-primary":"",children:e.jsx(ie,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(R,{to:"/lab",className:({isActive:o})=>o?"text-primary":"",children:e.jsx(le,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(R,{to:"/settings",className:({isActive:o})=>o?"text-primary":"",children:e.jsx(de,{className:"h-8 w-8"})})})]})})})}),e.jsxs("div",{className:"flex items-center justify-end",children:[e.jsxs("div",{className:"mr-4 flex items-center",children:[e.jsx("p",{className:"mr-2",children:"100 %"}),e.jsx(me,{className:"h-8 w-8"})]}),e.jsx("div",{className:"mr-4 flex items-center",children:a?e.jsx("div",{className:"",children:e.jsx(Ee,{className:"h-8 w-8"})}):e.jsx("div",{className:"",children:e.jsx(Te,{className:"h-8 w-8"})})}),i==="proxy"?e.jsx("div",{className:"",children:e.jsx(he,{className:"h-8 w-8"})}):e.jsx("div",{className:"",children:e.jsx(G,{className:"h-8 w-8"})})]})]})},Qe=()=>{const{user:a}=_();return a?e.jsxs(e.Fragment,{children:[e.jsx(qe,{}),e.jsx(je,{})]}):e.jsx(H,{to:"/login"})};function $e(){return e.jsx(Ue,{children:e.jsx(Pe,{children:e.jsx(De,{children:e.jsx("main",{className:"p-6",children:e.jsxs(Ne,{children:[e.jsxs(T,{element:e.jsx(Qe,{}),children:[e.jsx(T,{path:"/",Component:()=>e.jsx(Me,{})}),e.jsx(T,{path:"/command",Component:()=>e.jsx(ze,{})}),e.jsx(T,{path:"/settings",Component:()=>e.jsx(He,{})}),e.jsx(T,{path:"/lab",Component:()=>e.jsx(Ke,{})})]}),e.jsx(T,{path:"/login",Component:()=>e.jsx(Ye,{})})]})})})})})}Q.createRoot(document.getElementById("root")).render(e.jsx(q.StrictMode,{children:e.jsx(t.ThemeProvider,{children:e.jsx(Ie,{basename:"/console",children:e.jsx($,{children:e.jsx($e,{})})})})}));