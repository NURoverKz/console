import{r as n,j as e,R as Z}from"./react-0c77c144.js";import{c as K}from"./react-dom-964364ba.js";import{R as E,a as I,b as R,c as V}from"./recoil-30246499.js";import{r as t}from"./@material-tailwind-acba9128.js";import{d as Y}from"./react-timer-hook-679e9270.js";import{r as X}from"./randomcolor-38ee50fd.js";import{m as L}from"./mapbox-gl-8de1b415.js";import{B as q,A as Q}from"./react-icons-0a8c3f43.js";import{N as T,B as $}from"./react-router-dom-c3df4f81.js";import{R as ee,C as te,B as se,a as ae,b as re,S as ne,W as A,T as oe,P as ce,c as ie,d as le,A as de,e as me,f as he}from"./@heroicons-d7517f66.js";import{M as xe}from"./react-twitch-embed-fcef508f.js";import{l as pe}from"./react-joystick-component-2aa7cd53.js";import{i as ue,g as ge,o as ye,s as je,a as fe}from"./@firebase-78a613ce.js";import"./firebase-4eeb31d4.js";import{c as D,d as W,O as Ne,e as ve,f as S}from"./react-router-2a15238e.js";import{R as be,L as Ce,a as we,C as Se,X as ke,Y as Te,T as Le}from"./recharts-624c24e9.js";import"./@babel-87174ba5.js";import"./scheduler-765c72db.js";import"./classnames-cd41178b.js";import"./tailwind-merge-de5f6af3.js";import"./prop-types-14c30b34.js";import"./deepmerge-89e33937.js";import"./framer-motion-3ab52292.js";import"./tslib-b2c16c9a.js";import"./hey-listen-52bbde7e.js";import"./style-value-types-86c13b32.js";import"./popmotion-413bcd9d.js";import"./framesync-409e5dda.js";import"./@motionone-95e9e256.js";import"./@emotion-cde29e94.js";import"./material-ripple-effects-ffa693ae.js";import"./@floating-ui-6cb3404f.js";import"./@remix-run-3c3b6866.js";import"./idb-81bdbf9b.js";import"./react-resize-detector-b39efbfc.js";import"./lodash-1234520e.js";import"./react-smooth-c290c57b.js";import"./fast-equals-a0711cdd.js";import"./victory-vendor-5e3e398c.js";import"./d3-scale-4cce9527.js";import"./internmap-7949acc8.js";import"./d3-array-7d9b19f9.js";import"./d3-time-format-aa787c71.js";import"./d3-time-9ce187c0.js";import"./d3-interpolate-8fa1f6ff.js";import"./d3-color-6502c434.js";import"./d3-format-ffdb8652.js";import"./recharts-scale-170b47f7.js";import"./decimal.js-light-6fe16ef2.js";import"./react-is-e8e5dbb3.js";import"./d3-shape-9e788a4f.js";import"./d3-path-41c4cb36.js";import"./reduce-css-calc-b30b9425.js";import"./css-unit-converter-9e08bb2c.js";import"./eventemitter3-40d30422.js";(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const F=E({key:"waypointState",default:[]});L.accessToken="pk.eyJ1IjoiYmF0eXJraCIsImEiOiJjbGljcHo3ZDAwcTNlM2V0ZTRtemk1ODRmIn0.t-G-2NoT-mvCYOpK-FTLjA";function Ie(o){const d=n.useRef(null),a=n.useRef(null),[i,r]=n.useState(o.longitude),[s,m]=n.useState(o.latitude),[y,u]=n.useState(16),[f,c]=I(F),[N,v]=n.useState([]),b=()=>{N.length&&(N.forEach(l=>{l.remove()}),v([]))},g=l=>{c(j=>[...j,l])};n.useEffect(()=>{a.current||(a.current=new L.Map({container:d.current,style:"mapbox://styles/mapbox/light-v11",center:[i,s],zoom:y}),a.current.on("move",()=>{r(a.current.getCenter().lng.toFixed(4)),m(a.current.getCenter().lat.toFixed(4)),u(a.current.getZoom().toFixed(2))}),new L.Marker({color:"white"}).setLngLat([i,s]).addTo(a.current),a.current.on("contextmenu",l=>g({latitude:l.lngLat.lat,longitude:l.lngLat.lng,color:X()})))});const p=(l,j)=>{c(k=>{let w=[...k];return w[l]=j,w})};return n.useEffect(()=>{if(!a.current)return;(()=>{b(),f.forEach((j,k)=>{let w=new L.Marker({color:j==null?void 0:j.color}).setDraggable(!0).setLngLat([j.longitude,j.latitude]).addTo(a.current);w.on("dragend",()=>{let h=w.getLngLat(),x={latitude:h.lat,longitude:h.lng,color:j==null?void 0:j.color};p(k,x)}),v(h=>[...h,w])})})()},[f]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"bg-gray-800 text-xs text-white px-1.5 py-3 z-10 absolute m-3 rounded",children:["Latitude: ",s," | Longitude: ",i," | Zoom: ",y]}),e.jsx("div",{ref:d,className:"h-[500px]"})]})}const Ee="https://nuroverkz.github.io/console/logo.png",z=E({key:"controlModeState",default:!1}),Pe=E({key:"connectionTypeState",default:"proxy"}),P=()=>{const o=R(z),d=R(Pe);return e.jsx(e.Fragment,{children:e.jsxs(t.Navbar,{className:"border-none bg-[#222629] h-max max-w-full py-2 px-4 lg:px-8 lg:py-4 grid grid-cols-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"h-16",src:Ee,alt:"Logo"}),e.jsx("div",{className:"ml-4",children:e.jsxs("h4",{children:["Nazarbayev ",e.jsxs("span",{className:"text-primary",children:["University",e.jsx("br",{}),"Rover"]})," Team"]})})]}),e.jsx("div",{className:"h-16 flex items-center justify-center",children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsx("div",{className:"mr-4",children:e.jsxs("ul",{className:"mb-4 mt-2 flex gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6",children:[e.jsx("li",{children:e.jsx(T,{to:"/",className:({isActive:a})=>a?"text-primary":"",children:e.jsx(ee,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(T,{to:"/command",className:({isActive:a})=>a?"text-primary":"",children:e.jsx(te,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(T,{to:"/lab",className:({isActive:a})=>a?"text-primary":"",children:e.jsx(se,{className:"h-8 w-8"})})}),e.jsx("li",{children:e.jsx(T,{to:"/settings",className:({isActive:a})=>a?"text-primary":"",children:e.jsx(ae,{className:"h-8 w-8"})})})]})})})}),e.jsxs("div",{className:"flex items-center justify-end",children:[e.jsxs("div",{className:"mr-4 flex items-center",children:[e.jsx("p",{className:"mr-2",children:"100 %"}),e.jsx(re,{className:"h-8 w-8"})]}),e.jsx("div",{className:"mr-4 flex items-center",children:o?e.jsx("div",{className:"",children:e.jsx(Q,{className:"h-8 w-8"})}):e.jsx("div",{className:"",children:e.jsx(q,{className:"h-8 w-8"})})}),d==="proxy"?e.jsx("div",{className:"",children:e.jsx(ne,{className:"h-8 w-8"})}):e.jsx("div",{className:"",children:e.jsx(A,{className:"h-8 w-8"})})]})]})})},Me=()=>{const{seconds:o,minutes:d,hours:a,isRunning:i,start:r,pause:s,reset:m}=Y.useStopwatch({autoStart:!1});return e.jsxs("div",{className:"text-center text-white",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs(t.Typography,{variant:"h1",children:[a.toString().padStart(2,"0"),":",d.toString().padStart(2,"0"),":",o.toString().padStart(2,"0")]}),e.jsx(t.Typography,{variant:"paragraph",children:"HH:MM:SS"})]}),e.jsxs("div",{className:"flex items-center gap-2 justify-center",children:[i?e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:s,children:e.jsx(le,{strokeWidth:2,className:"h-5 w-5"})}):e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:r,children:e.jsx(ie,{strokeWidth:2,className:"h-5 w-5"})}),e.jsx(t.Button,{variant:"outlined",color:"white",className:"flex items-center",onClick:()=>m(null,!1),children:e.jsx(de,{strokeWidth:2,className:"h-5 w-5"})})]})]})},Re=()=>{const[o,d]=n.useState({lat:"51.090009",long:"71.398299"}),[a,i]=I(F),[r,s]=n.useState(""),[m,y]=n.useState(""),[u,f]=n.useState("#3FB1CE"),[c,N]=n.useState({}),v=h=>{h.preventDefault(),r.length&&m.length&&i([...a,{latitude:r,longitude:m,color:u}]),s(""),y(""),h.target.reset()},b=h=>{let x=[...a];x.splice(h,1),i(x)},g=(h,x)=>{let C=[...a];C[h]=x,i(C)},p=n.useRef(),l=n.useRef(),j=(h,x)=>{p.current=x},k=(h,x)=>{l.current=x},w=h=>{const x=[...a],C=x[p.current];x.splice(p.current,1),x.splice(l.current,0,C),p.current=null,l.current=null,i(x)};return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 grid-flow-row-dense",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-4 h-fit",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"IMU Data"}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Linear Acceleration: ",(c==null?void 0:c.linear_acceleration)??"0"]}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Angular Velocity: ",(c==null?void 0:c.angular_velocity)??"0"]}),e.jsxs(t.Typography,{color:"white",className:"text-xl",children:["Orientation: ",(c==null?void 0:c.orientation)??"NE"]})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"text-primary font-heading text-center",children:"Stopwatch"}),e.jsx(Me,{})]})}),e.jsx(t.Card,{className:"bg-secondary col-span-2",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Waypoints"}),e.jsx(t.List,{className:"h-64 overflow-y-auto",children:a.length?a.map((h,x)=>e.jsxs(t.ListItem,{ripple:!1,className:"py-1 pr-1 pl-4 text-white bg-[#474b4f]",draggable:!0,onDragStart:C=>j(C,x),onDragEnter:C=>k(C,x),onDragEnd:w,children:[e.jsxs("span",{className:"text-martian mr-2",children:["[",x+1,"]"]}),"Latitude: ",Number(h.latitude).toFixed(4),", Longitude: ",Number(h.longitude).toFixed(4),e.jsxs(t.ListItemSuffix,{className:"flex justify-center space-x-4",children:[e.jsx("input",{type:"color",value:h.color,onChange:C=>{let U={latitude:h.latitude,longitude:h.longitude,color:C.target.value};g(x,U)}}),e.jsx(t.IconButton,{variant:"text",color:"blue-gray",onClick:()=>b(x),children:e.jsx(oe,{className:"h-5 w-5"})})]})]},x)):e.jsx(t.Typography,{color:"white",className:"text-lg text-center",children:"No waypoints on the map"})}),e.jsxs("form",{className:"mt-3 flex gap-2 items-center",onSubmit:v,children:[e.jsx(t.Input,{label:"Latitude",color:"white",onChange:h=>s(h.target.value)}),e.jsx(t.Input,{label:"Longitude",color:"white",onChange:h=>y(h.target.value)}),e.jsx(t.Input,{label:"Color",color:"white",type:"color",value:u,onChange:h=>f(h.target.value),containerProps:{className:"max-w-[100px]"}}),e.jsx(t.Button,{className:"col-span-3",type:"submit",variant:"outlined",color:"green",children:e.jsx(ce,{className:"h-4"})})]})]})})]}),e.jsx("div",{className:"grid grid-rows-1 gap-4",children:e.jsx(t.Card,{className:"bg-secondary ",children:e.jsxs(t.CardBody,{children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Location"})}),e.jsx(Ie,{latitude:o.lat,longitude:o.long}),e.jsxs(t.Typography,{className:"mt-4 text-center",color:"white",children:["Rover's Location (",o.lat,", ",o.long,")"]})]})})})]})]})},_=E({key:"receiveFootageState",default:!0}),Oe=o=>{const d=n.useRef(),[a,i]=n.useState(!0),r=R(_),s=u=>{d.current=u},m=()=>{i(!1)},y=()=>{i(!0)};return a&&r?e.jsx(xe,{width:"100%",channel:"nurover",onReady:s,onOffline:m,onOnline:y}):e.jsx("div",{className:"h-[480px] w-full bg-black flex justify-center items-center",children:r?e.jsx(t.Typography,{variant:"h3",className:"text-primary",children:"No Footage From Cameras"}):e.jsx(t.Typography,{variant:"h3",className:"text-primary",children:"Footage Receival is turned off"})})},J=n.createContext(),Be=({children:o})=>{const[d,a]=n.useState(WebSocket.CLOSED),[i,r]=n.useState(null),s=n.useRef(null),m=()=>{const c=new WebSocket("ws://5.181.254.231:8080");c.onopen=()=>{a(c.OPEN)},c.onclose=()=>{a(c.CLOSED)},c.onmessage=N=>{let v=JSON.parse(N.data);console.log("got data obj: ",v),r(v)},s.current=c},y=()=>{(!s.current||s.current.readyState===WebSocket.CLOSED)&&m()},u=()=>{s.current&&s.current.readyState===WebSocket.OPEN&&s.current.close()},f=c=>{var v,b,g;let N={action:"send",message:JSON.stringify(c)};((v=s.current)==null?void 0:v.readyState)===((b=s.current)==null?void 0:b.OPEN)&&((g=s.current)==null||g.send(JSON.stringify(N)))};return n.useEffect(()=>(y(),()=>{u()}),[]),e.jsx(J.Provider,{value:{readyState:d,data:i,sendMessage:f,openConnection:y,closeConnection:u},children:o})},G=()=>n.useContext(J),Ae=()=>{const{sendMessage:o}=G(),d=new Map([["W",87],["A",65],["S",83],["D",68]]),[a,i]=I(z),[r,s]=I(_),[m,y]=n.useState({x:0,y:0});let u={};const f=g=>{let p={x:g.x,y:g.y};u.x===p.x&&u.y===p.y||(u=p,o(p))},c=g=>{let p=g.keyCode,l={x:0,y:0};switch(p){case d.get("W"):l.x=0,l.y=1;break;case d.get("A"):l.x=-1,l.y=0;break;case d.get("S"):l.x=0,l.y=-1;break;case d.get("D"):l.x=1,l.y=0;break}y(l),(l.x||l.y)&&f({x:l.x,y:l.y})},N=g=>{let p=g.keyCode;(p===87||p===65||p===83||p===68)&&(y({x:0,y:0}),f({x:0,y:0}))};n.useEffect(()=>(document.addEventListener("keydown",c),document.addEventListener("keyup",N),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",N)}),[]);const v=g=>{i(g.target.checked)},b=g=>{s(g.target.checked)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{className:"flex flex-col gap-4",children:[e.jsx(t.Typography,{variant:"h4",className:"text-primary font-heading",children:"Configs"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t.Typography,{variant:"h5",color:"white",children:"Drive mode:"}),e.jsx(t.Typography,{color:"white",children:"Manual"}),e.jsx(t.Switch,{id:"control-mode-switch",checked:a,onChange:v,ripple:!1,className:"h-full w-full checked:bg-primary",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}}),e.jsx(t.Typography,{color:"white",children:"Autonomous"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t.Typography,{variant:"h5",color:"white",children:"Receive camera footage:"}),e.jsx(t.Switch,{id:"recieve-footage-switch",checked:r,onChange:b,ripple:!1,className:"h-full w-full checked:bg-primary",containerProps:{className:"w-11 h-6"},circleProps:{className:"before:hidden left-0.5 border-none"}})]})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-4 text-primary font-heading",children:"Manual Control"}),e.jsxs("div",{className:"flex flex-col gap-4 items-center my-2",children:[e.jsx(pe.Joystick,{pos:m,size:100,stickSize:50,baseColor:"black",stickColor:"#29EB18",move:f}),e.jsx(t.Typography,{color:"white",children:"Movement"})]}),e.jsxs(t.Typography,{color:"white",children:["Forward - [W], Backward - [S]",e.jsx("br",{}),"Left - [A], Right - [D]"]})]})})]})},De=()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs("div",{className:"mt-4 grid grid-cols-6 gap-4",children:[e.jsx("div",{className:"col-span-2",children:e.jsx(Ae,{})}),e.jsx(t.Card,{className:"bg-secondary col-span-4",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Camera View"}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(Oe,{})})]})})]})]}),O=()=>e.jsx(t.Card,{color:"gray",className:"",children:e.jsx(t.CardBody,{className:"flex justify-center items-center",children:e.jsx(t.Typography,{variant:"h4",color:"white",className:"font-heading",children:"Feature not yet implemented!"})})}),We={apiKey:"AIzaSyB6lJ4-btPJrun3egZ-OHVB2x_GHqON080",authDomain:"consolecsi-auth.firebaseapp.com",projectId:"consolecsi-auth",storageBucket:"consolecsi-auth.appspot.com",messagingSenderId:"1060020195005",appId:"1:1060020195005:web:16f958fcfde05c891bb1d4"},Fe=ue(We),M=ge(Fe),H=n.createContext(),ze=({children:o})=>{const[d,a]=n.useState({}),i=(s,m)=>je(M,s,m),r=()=>fe(M);return n.useEffect(()=>{const s=ye(M,m=>{a(m)});return()=>{s()}},[]),e.jsx(H.Provider,{value:{user:d,signIn:i,logout:r},children:o})},B=()=>n.useContext(H),_e=()=>{const{readyState:o,openConnection:d,closeConnection:a}=G(),{user:i,logout:r}=B(),s=D(),m=async()=>{try{await r(),s("/login")}catch(j){console.error(j)}},y={1:"OPEN",3:"CLOSED"}[o],[u,f]=n.useState(0),[c,N]=n.useState(0),[v,b]=n.useState(0),[g,p]=n.useState();n.useEffect(()=>{o===WebSocket.OPEN&&p(setTimeout(()=>{f(Math.floor(Math.random()*300+120)),N(Math.floor(Math.random()*20)),b(Math.floor(Math.random()*40))},3e3))},[o,u,c,v]);const l=()=>{o===WebSocket.OPEN?(a(),clearTimeout(g)):o===WebSocket.CLOSED&&(d(),p(setTimeout(()=>{f(Math.floor(Math.random()*300+120)),N(Math.floor(Math.random()*20)),b(Math.floor(Math.random()*40))},3e3)))};return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h3",className:"mb-4 text-primary font-heading",children:"Proxy Settings"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center mb-2 gap-2",children:[e.jsxs(t.Typography,{color:"white",variant:"h5",children:["Connection Status: ",y]}),e.jsx(t.Button,{onClick:l,color:"red",variant:"text",children:o===WebSocket.OPEN?"Close":"Open"})]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs(t.Typography,{color:"white",children:[e.jsx(A,{className:"h-8 w-8"}),"Ping: ",u," ms"]}),e.jsxs(t.Typography,{color:"white",children:[e.jsx(me,{className:"h-8 w-8"}),"Sent data: ",c," kb"]}),e.jsxs(t.Typography,{color:"white",children:[e.jsx(he,{className:"h-8 w-8"}),"Recieved data: ",v," kb"]})]})]}),e.jsx(t.Typography,{variant:"h3",className:"mt-6 mb-4 text-primary font-heading",children:"LoRa Settings"}),e.jsx(O,{})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h3",className:"mb-4 text-primary font-heading",children:"Account Settings"}),e.jsxs("div",{className:"flex items-center mb-2 gap-2",children:[e.jsxs(t.Typography,{color:"white",variant:"h5",children:["User Email: ",i&&i.email]}),e.jsx(t.Button,{onClick:m,color:"red",variant:"text",children:"Sign Out"})]}),e.jsx(O,{})]})})]})]})},Je="https://nuroverkz.github.io/console/assets/dbelements/graphene.svg",Ge=()=>{const[o,d]=n.useState(""),a=({target:s})=>d(s.value),i=[{shift:200,intensity:.0759},{shift:300,intensity:.1591},{shift:400,intensity:.4572},{shift:500,intensity:.8539},{shift:600,intensity:.9492}],r=[{imgPath:Je,name:"Graphene",description:"Graphene is a building block of all graphitic carbon allotropes. It is a monatomic sheet formed by a network of sp2 carbons organized in a honeycomb structure."}];return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-4 grid-flow-row-dense",children:[e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Data Graph"}),e.jsx("div",{className:"w-full h-96 my-6",children:e.jsx(be,{children:e.jsxs(Ce,{data:i,children:[e.jsx(we,{type:"monotone",dataKey:"intensity",stroke:"#29EB18"}),e.jsx(Se,{stroke:"#ccc",strokeDasharray:"5 5"}),e.jsx(ke,{dataKey:"shift"}),e.jsx(Te,{}),e.jsx(Le,{})]})})}),e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Result"}),e.jsx(O,{})]})}),e.jsx(t.Card,{className:"bg-secondary",children:e.jsxs(t.CardBody,{children:[e.jsx(t.Typography,{variant:"h4",className:"mb-2 text-primary font-heading",children:"Elements Database"}),e.jsx("div",{className:"w-full my-6",children:e.jsxs("div",{className:"shadow-md rounded-lg px-3 py-2 mb-4",children:[e.jsxs("div",{className:"flex items-center rounded-md",children:[e.jsx(t.Input,{color:"white",label:"Name of elements",value:o,onChange:a,containerProps:{className:"min-w-0"}}),e.jsx(t.Button,{color:o?"gray":"white",disabled:!o,children:"Search"})]}),e.jsx(t.List,{className:"py-3 text-sm",children:r.length?r.map((s,m)=>e.jsxs(t.ListItem,{children:[e.jsx(t.ListItemPrefix,{children:e.jsx(t.Avatar,{alt:s.name,src:s.imgPath})}),e.jsxs("div",{className:"ml-4",children:[e.jsx(t.Typography,{variant:"h6",color:"white",children:s.name}),e.jsx(t.Typography,{variant:"small",color:"white",className:"font-normal",children:s.description})]})]},m)):e.jsx(t.Typography,{color:"white",className:"text-lg text-center",children:"No waypoints on the map"})})]})})]})})]})]})},He=()=>{const{user:o,signIn:d}=B(),a=D();if(o)return e.jsx(W,{to:"/"});const[i,r]=n.useState(""),[s,m]=n.useState(""),[y,u]=n.useState(""),f=async c=>{if(c.preventDefault(),u(""),i===""||s===""){u("Please fill out the form");return}try{await d(i,s),a("/")}catch(N){u(N.message)}};return e.jsx("div",{className:"flex items-center justify-center h-screen",children:e.jsxs(t.Card,{className:"bg-secondary p-8",shadow:!1,children:[e.jsx(t.Typography,{variant:"h2",className:"text-primary text-center",children:"Sign In"}),e.jsxs("form",{onSubmit:f,className:"mt-8 mb-2 w-80 max-w-screen-lg sm:w-96",children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-6",children:[e.jsx(t.Input,{color:"white",type:"email",size:"lg",label:"Email",onChange:c=>r(c.target.value)}),e.jsx(t.Input,{color:"white",type:"password",size:"lg",label:"Password",onChange:c=>m(c.target.value)})]}),e.jsx(t.Button,{type:"submit",className:"mt-6 bg-primary text-secondary",fullWidth:!0,children:"Login"})]}),y&&e.jsx(t.Typography,{variant:"small",color:"red",children:y})]})})},Ue=()=>{const{user:o}=B();return o?e.jsx(Ne,{}):e.jsx(W,{to:"/login"})};function Ze(){return e.jsx(ze,{children:e.jsx(Be,{children:e.jsx("main",{className:"p-6",children:e.jsxs(ve,{children:[e.jsxs(S,{element:e.jsx(Ue,{}),children:[e.jsx(S,{path:"/",Component:()=>e.jsx(Re,{})}),e.jsx(S,{path:"/command",Component:()=>e.jsx(De,{})}),e.jsx(S,{path:"/settings",Component:()=>e.jsx(_e,{})}),e.jsx(S,{path:"/lab",Component:()=>e.jsx(Ge,{})})]}),e.jsx(S,{path:"/login",Component:()=>e.jsx(He,{})})]})})})})}K.createRoot(document.getElementById("root")).render(e.jsx(Z.StrictMode,{children:e.jsx(t.ThemeProvider,{children:e.jsx($,{children:e.jsx(V,{children:e.jsx(Ze,{})})})})}));