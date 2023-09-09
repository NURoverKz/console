import{t as Ve}from"./tslib-b2c16c9a.js";import{r as Ne}from"./hey-listen-52bbde7e.js";import{v as ze}from"./style-value-types-86c13b32.js";import{f as He}from"./framesync-409e5dda.js";var c={};Object.defineProperty(c,"__esModule",{value:!0});var pe=Ve,w=Ne,I=ze,V=He;function Le(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var qe=Le(V);const F=(e,t,n)=>Math.min(Math.max(n,e),t),q=.001,Ue=.01,se=10,$e=.05,Ke=1;function Ge({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;w.warning(e<=se*1e3,"Spring duration must be 10 seconds or less");let s=1-t;s=F($e,Ke,s),e=F(Ue,se,e/1e3),s<1?(o=f=>{const h=f*s,d=h*e,v=h-n,O=$(f,s),M=Math.exp(-d);return q-v/O*M},a=f=>{const d=f*s*e,v=d*n+n,O=Math.pow(s,2)*Math.pow(f,2)*e,M=Math.exp(-d),S=$(Math.pow(f,2),s);return(-o(f)+q>0?-1:1)*((v-O)*M)/S}):(o=f=>{const h=Math.exp(-f*e),d=(f-n)*e+1;return-q+h*d},a=f=>{const h=Math.exp(-f*e),d=(n-f)*(e*e);return h*d});const u=5/e,i=Qe(o,a,u);if(e=e*1e3,isNaN(i))return{stiffness:100,damping:10,duration:e};{const f=Math.pow(i,2)*r;return{stiffness:f,damping:s*2*Math.sqrt(r*f),duration:e}}}const Je=12;function Qe(e,t,n){let r=n;for(let o=1;o<Je;o++)r=r-e(r)/t(r);return r}function $(e,t){return e*Math.sqrt(1-t*t)}const We=["duration","bounce"],Ze=["stiffness","damping","mass"];function oe(e,t){return t.some(n=>e[n]!==void 0)}function Ye(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!oe(e,Ze)&&oe(e,We)){const n=Ge(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function N(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,a=pe.__rest(e,["from","to","restSpeed","restDelta"]);const s={done:!1,value:t};let{stiffness:u,damping:i,mass:f,velocity:h,duration:d,isResolvedFromDuration:v}=Ye(a),O=ae,M=ae;function S(){const g=h?-(h/1e3):0,b=n-t,y=i/(2*Math.sqrt(u*f)),l=Math.sqrt(u/f)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),y<1){const p=$(l,y);O=m=>{const x=Math.exp(-y*l*m);return n-x*((g+y*l*b)/p*Math.sin(p*m)+b*Math.cos(p*m))},M=m=>{const x=Math.exp(-y*l*m);return y*l*x*(Math.sin(p*m)*(g+y*l*b)/p+b*Math.cos(p*m))-x*(Math.cos(p*m)*(g+y*l*b)-p*b*Math.sin(p*m))}}else if(y===1)O=p=>n-Math.exp(-l*p)*(b+(g+l*b)*p);else{const p=l*Math.sqrt(y*y-1);O=m=>{const x=Math.exp(-y*l*m),D=Math.min(p*m,300);return n-x*((g+y*l*b)*Math.sinh(D)+p*b*Math.cosh(D))/p}}}return S(),{next:g=>{const b=O(g);if(v)s.done=g>=d;else{const y=M(g)*1e3,l=Math.abs(y)<=r,p=Math.abs(n-b)<=o;s.done=l&&p}return s.value=s.done?n:b,s},flipTarget:()=>{h=-h,[t,n]=[n,t],S()}}}N.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ae=e=>0,J=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},z=(e,t,n)=>-n*e+n*t+e;function U(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ce({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,s=0;if(!t)o=a=s=n;else{const u=n<.5?n*(1+t):n+t-n*t,i=2*n-u;o=U(i,u,e+1/3),a=U(i,u,e),s=U(i,u,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:r}}const Xe=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},et=[I.hex,I.rgba,I.hsla],ie=e=>et.find(t=>t.test(e)),le=e=>`'${e}' is not an animatable color. Use the equivalent color code instead.`,Q=(e,t)=>{let n=ie(e),r=ie(t);w.invariant(!!n,le(e)),w.invariant(!!r,le(t));let o=n.parse(e),a=r.parse(t);n===I.hsla&&(o=ce(o),n=I.rgba),r===I.hsla&&(a=ce(a),r=I.rgba);const s=Object.assign({},o);return u=>{for(const i in s)i!=="alpha"&&(s[i]=Xe(o[i],a[i],u));return s.alpha=z(o.alpha,a.alpha,u),n.transform(s)}},tt={x:0,y:0,z:0},K=e=>typeof e=="number",nt=(e,t)=>n=>t(e(n)),W=(...e)=>e.reduce(nt);function de(e,t){return K(e)?n=>z(e,t,n):I.color.test(e)?Q(e,t):Z(e,t)}const he=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,s)=>de(a,t[s]));return a=>{for(let s=0;s<r;s++)n[s]=o[s](a);return n}},rt=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=de(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function ue(e){const t=I.complex.parse(e),n=t.length;let r=0,o=0,a=0;for(let s=0;s<n;s++)r||typeof t[s]=="number"?r++:t[s].hue!==void 0?a++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:a}}const Z=(e,t)=>{const n=I.complex.createTransformer(t),r=ue(e),o=ue(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?W(he(r.parsed,o.parsed),n):(w.warning(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),s=>`${s>0?t:e}`)},st=(e,t)=>n=>z(e,t,n);function ot(e){if(typeof e=="number")return st;if(typeof e=="string")return I.color.test(e)?Q:Z;if(Array.isArray(e))return he;if(typeof e=="object")return rt}function at(e,t,n){const r=[],o=n||ot(e[0]),a=e.length-1;for(let s=0;s<a;s++){let u=o(e[s],e[s+1]);if(t){const i=Array.isArray(t)?t[s]:t;u=W(i,u)}r.push(u)}return r}function ct([e,t],[n]){return r=>n(J(e,t,r))}function it(e,t){const n=e.length,r=n-1;return o=>{let a=0,s=!1;if(o<=e[0]?s=!0:o>=e[r]&&(a=r-1,s=!0),!s){let i=1;for(;i<n&&!(e[i]>o||i===r);i++);a=i-1}const u=J(e[a],e[a+1],o);return t[a](u)}}function Y(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;w.invariant(a===t.length,"Both input and output ranges must be the same length"),w.invariant(!r||!Array.isArray(r)||r.length===a-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[a-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const s=at(t,r,o),u=a===2?ct(e,s):it(e,s);return n?i=>u(F(e[0],e[a-1],i)):u}const R=e=>t=>1-e(1-t),H=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,me=e=>t=>Math.pow(t,e),X=e=>t=>t*t*((e+1)*t-e),ye=e=>{const t=X(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},be=1.525,lt=4/11,ut=8/11,ft=9/10,Me=e=>e,ee=me(2),pt=R(ee),ge=H(ee),xe=e=>1-Math.sin(Math.acos(e)),ve=R(xe),dt=H(ve),te=X(be),ht=R(te),mt=H(te),yt=ye(be),bt=4356/361,Mt=35442/1805,gt=16061/1805,C=e=>{if(e===1||e===0)return e;const t=e*e;return e<lt?7.5625*t:e<ut?9.075*t-9.9*e+3.4:e<ft?bt*t-Mt*e+gt:10.8*e*e-20.52*e+10.72},xt=R(C),vt=e=>e<.5?.5*(1-C(1-e*2)):.5*C(e*2-1)+.5;function Ot(e,t){return e.map(()=>t||ge).splice(0,e.length-1)}function St(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function It(e,t){return e.map(n=>n*t)}function E({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},s=Array.isArray(t)?t:[e,t],u=It(r&&r.length===s.length?r:St(s),o);function i(){return Y(u,s,{ease:Array.isArray(n)?n:Ot(s,n)})}let f=i();return{next:h=>(a.value=f(h),a.done=h>=o,a),flipTarget:()=>{s.reverse(),f=i()}}}function Oe({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const s={done:!1,value:t};let u=n*e;const i=t+u,f=a===void 0?i:a(i);return f!==i&&(u=f-t),{next:h=>{const d=-u*Math.exp(-h/r);return s.done=!(d>o||d<-o),s.value=s.done?f:f+d,s},flipTarget:()=>{}}}const fe={keyframes:E,spring:N,decay:Oe};function Dt(e){if(Array.isArray(e.to))return E;if(fe[e.type])return fe[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?E:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?N:E}function Se(e,t,n=0){return e-t-n}function Tt(e,t,n=0,r=!0){return r?Se(t+-e,t,n):t-(e-t)+n}function wt(e,t,n,r){return r?e>=t+n:e<=-n}const Et=e=>{const t=({delta:n})=>e(n);return{start:()=>qe.default.update(t,!0),stop:()=>V.cancelSync.update(t)}};function Ie(e){var t,n,{from:r,autoplay:o=!0,driver:a=Et,elapsed:s=0,repeat:u=0,repeatType:i="loop",repeatDelay:f=0,onPlay:h,onStop:d,onComplete:v,onRepeat:O,onUpdate:M}=e,S=pe.__rest(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:g}=S,b,y=0,l=S.duration,p,m=!1,x=!0,D;const A=Dt(S);!((n=(t=A).needsInterpolation)===null||n===void 0)&&n.call(t,r,g)&&(D=Y([0,100],[r,g],{clamp:!1}),r=0,g=100);const T=A(Object.assign(Object.assign({},S),{from:r,to:g}));function je(){y++,i==="reverse"?(x=y%2===0,s=Tt(s,l,f,x)):(s=Se(s,l,f),i==="mirror"&&T.flipTarget()),m=!1,O&&O()}function Ce(){b.stop(),v&&v()}function Pe(L){if(x||(L=-L),s+=L,!m){const re=T.next(Math.max(0,s));p=re.value,D&&(p=D(p)),m=x?re.done:s<=0}M==null||M(p),m&&(y===0&&(l??(l=s)),y<u?wt(s,l,f,x)&&je():Ce())}function Be(){h==null||h(),b=a(Pe),b.start()}return o&&Be(),{stop:()=>{d==null||d(),b.stop()}}}function De(e,t){return t?e*(1e3/t):0}function Ft({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:s=500,bounceDamping:u=10,restDelta:i=1,modifyTarget:f,driver:h,onUpdate:d,onComplete:v,onStop:O}){let M;function S(l){return n!==void 0&&l<n||r!==void 0&&l>r}function g(l){return n===void 0?r:r===void 0||Math.abs(n-l)<Math.abs(r-l)?n:r}function b(l){M==null||M.stop(),M=Ie(Object.assign(Object.assign({},l),{driver:h,onUpdate:p=>{var m;d==null||d(p),(m=l.onUpdate)===null||m===void 0||m.call(l,p)},onComplete:v,onStop:O}))}function y(l){b(Object.assign({type:"spring",stiffness:s,damping:u,restDelta:i},l))}if(S(e))y({from:e,velocity:t,to:g(e)});else{let l=o*t+e;typeof f<"u"&&(l=f(l));const p=g(l),m=p===n?-1:1;let x,D;const A=T=>{x=D,D=T,t=De(T-x,V.getFrameData().delta),(m===1&&T>p||m===-1&&T<p)&&y({from:T,to:p,velocity:t})};b({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:i,modifyTarget:f,onUpdate:S(l)?A:void 0})}return{stop:()=>M==null?void 0:M.stop()}}const Te=e=>e*180/Math.PI,Rt=(e,t=tt)=>Te(Math.atan2(t.y-e.y,t.x-e.x)),At=(e,t)=>{let n=!0;return t===void 0&&(t=e,n=!1),r=>n?r-e+t:(e=r,n=!0,t)},_t=e=>e,ne=(e=_t)=>(t,n,r)=>{const o=n-r,a=-(0-t+1)*(0-e(Math.abs(o)));return o<=0?n+a:n-a},kt=ne(),jt=ne(Math.sqrt),we=e=>e*Math.PI/180,P=e=>e.hasOwnProperty("x")&&e.hasOwnProperty("y"),G=e=>P(e)&&e.hasOwnProperty("z"),_=(e,t)=>Math.abs(e-t);function Ct(e,t){if(K(e)&&K(t))return _(e,t);if(P(e)&&P(t)){const n=_(e.x,t.x),r=_(e.y,t.y),o=G(e)&&G(t)?_(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(o,2))}}const Pt=(e,t,n)=>(t=we(t),{x:n*Math.cos(t)+e.x,y:n*Math.sin(t)+e.y}),Ee=(e,t=2)=>(t=Math.pow(10,t),Math.round(e*t)/t),Fe=(e,t,n,r=0)=>Ee(e+n*(t-e)/Math.max(r,n)),Bt=(e=50)=>{let t=0,n=0;return r=>{const o=V.getFrameData().timestamp,a=o!==n?o-n:0,s=a?Fe(t,r,a,e):t;return n=o,t=s,s}},Vt=e=>{if(typeof e=="number")return t=>Math.round(t/e)*e;{let t=0;const n=e.length;return r=>{let o=Math.abs(e[0]-r);for(t=1;t<n;t++){const a=e[t],s=Math.abs(a-r);if(s===0)return a;if(s>o)return e[t-1];if(t===n-1)return a;o=s}}}};function Nt(e,t){return e/(1e3/t)}const zt=(e,t,n)=>{const r=t-e;return((n-e)%r+r)%r+e},Re=(e,t)=>1-3*t+3*e,Ae=(e,t)=>3*t-6*e,_e=e=>3*e,B=(e,t,n)=>((Re(t,n)*e+Ae(t,n))*e+_e(t))*e,ke=(e,t,n)=>3*Re(t,n)*e*e+2*Ae(t,n)*e+_e(t),Ht=1e-7,Lt=10;function qt(e,t,n,r,o){let a,s,u=0;do s=t+(n-t)/2,a=B(s,r,o)-e,a>0?n=s:t=s;while(Math.abs(a)>Ht&&++u<Lt);return s}const Ut=8,$t=.001;function Kt(e,t,n,r){for(let o=0;o<Ut;++o){const a=ke(t,n,r);if(a===0)return t;const s=B(t,n,r)-e;t-=s/a}return t}const j=11,k=1/(j-1);function Gt(e,t,n,r){if(e===t&&n===r)return Me;const o=new Float32Array(j);for(let s=0;s<j;++s)o[s]=B(s*k,e,n);function a(s){let u=0,i=1;const f=j-1;for(;i!==f&&o[i]<=s;++i)u+=k;--i;const h=(s-o[i])/(o[i+1]-o[i]),d=u+h*k,v=ke(d,e,n);return v>=$t?Kt(s,d,e,n):v===0?d:qt(s,u,u+k,e,n)}return s=>s===0||s===1?s:B(a(s),t,r)}const Jt=(e,t="end")=>n=>{n=t==="end"?Math.min(n,.999):Math.max(n,.001);const r=n*e,o=t==="end"?Math.floor(r):Math.ceil(r);return F(0,1,o/e)};c.angle=Rt;c.animate=Ie;c.anticipate=yt;c.applyOffset=At;c.attract=kt;c.attractExpo=jt;c.backIn=te;c.backInOut=mt;c.backOut=ht;c.bounceIn=xt;c.bounceInOut=vt;c.bounceOut=C;c.circIn=xe;c.circInOut=dt;c.circOut=ve;c.clamp=F;c.createAnticipate=ye;c.createAttractor=ne;c.createBackIn=X;c.createExpoIn=me;c.cubicBezier=Gt;c.decay=Oe;c.degreesToRadians=we;c.distance=Ct;c.easeIn=ee;c.easeInOut=ge;c.easeOut=pt;c.inertia=Ft;c.interpolate=Y;c.isPoint=P;c.isPoint3D=G;c.keyframes=E;c.linear=Me;c.mirrorEasing=H;c.mix=z;c.mixColor=Q;c.mixComplex=Z;c.pipe=W;c.pointFromVector=Pt;c.progress=J;c.radiansToDegrees=Te;c.reverseEasing=R;c.smooth=Bt;c.smoothFrame=Fe;c.snap=Vt;c.spring=N;c.steps=Jt;c.toDecimal=Ee;c.velocityPerFrame=Nt;c.velocityPerSecond=De;c.wrap=zt;export{c as p};
