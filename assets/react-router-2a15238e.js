import{r as a}from"./react-0c77c144.js";import{i as d,A as j,p as D,s as T,g as O,r as I,j as R,m as z,a as _}from"./@remix-run-3c3b6866.js";/**
 * React Router v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}const M=a.createContext(null),S=a.createContext(null),y=a.createContext(null),b=a.createContext(null),m=a.createContext({outlet:null,matches:[],isDataRoute:!1}),J=a.createContext(null);function ie(e,t){let{relative:r}=t===void 0?{}:t;x()||d(!1);let{basename:n,navigator:l}=a.useContext(y),{hash:o,pathname:u,search:i}=K(e,{relative:r}),s=u;return n!=="/"&&(s=u==="/"?n:R([n,u])),l.createHref({pathname:s,search:i,hash:o})}function x(){return a.useContext(b)!=null}function N(){return x()||d(!1),a.useContext(b).location}function F(e){a.useContext(y).static||a.useLayoutEffect(e)}function V(){let{isDataRoute:e}=a.useContext(m);return e?ne():W()}function W(){x()||d(!1);let{basename:e,navigator:t}=a.useContext(y),{matches:r}=a.useContext(m),{pathname:n}=N(),l=JSON.stringify(O(r).map(i=>i.pathnameBase)),o=a.useRef(!1);return F(()=>{o.current=!0}),a.useCallback(function(i,s){if(s===void 0&&(s={}),!o.current)return;if(typeof i=="number"){t.go(i);return}let c=I(i,JSON.parse(l),n,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:R([e,c.pathname])),(s.replace?t.replace:t.push)(c,s.state,s)},[e,t,l,n])}const q=a.createContext(null);function G(e){let t=a.useContext(m).outlet;return t&&a.createElement(q.Provider,{value:e},t)}function K(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=a.useContext(m),{pathname:l}=N(),o=JSON.stringify(O(n).map(u=>u.pathnameBase));return a.useMemo(()=>I(e,JSON.parse(o),l,r==="path"),[e,o,l,r])}function Q(e,t){return X(e,t)}function X(e,t,r){x()||d(!1);let{navigator:n}=a.useContext(y),{matches:l}=a.useContext(m),o=l[l.length-1],u=o?o.params:{};o&&o.pathname;let i=o?o.pathnameBase:"/";o&&o.route;let s=N(),c;if(t){var h;let p=typeof t=="string"?D(t):t;i==="/"||(h=p.pathname)!=null&&h.startsWith(i)||d(!1),c=p}else c=s;let v=c.pathname||"/",C=i==="/"?v:v.slice(i.length)||"/",g=z(e,{pathname:C}),f=A(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:R([i,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?i:R([i,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,r);return t&&f?a.createElement(b.Provider,{value:{location:P({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:j.Pop}},f):f}function Y(){let e=re(),t=_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:l},r):null,o)}const Z=a.createElement(Y,null);class $ extends a.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?a.createElement(m.Provider,{value:this.props.routeContext},a.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w(e){let{routeContext:t,match:r,children:n}=e,l=a.useContext(M);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(m.Provider,{value:t},n)}function A(e,t,r){var n;if(t===void 0&&(t=[]),r===void 0&&(r=null),e==null){var l;if((l=r)!=null&&l.errors)e=r.matches;else return null}let o=e,u=(n=r)==null?void 0:n.errors;if(u!=null){let i=o.findIndex(s=>s.route.id&&(u==null?void 0:u[s.route.id]));i>=0||d(!1),o=o.slice(0,Math.min(o.length,i+1))}return o.reduceRight((i,s,c)=>{let h=s.route.id?u==null?void 0:u[s.route.id]:null,v=null;r&&(v=s.route.errorElement||Z);let C=t.concat(o.slice(0,c+1)),g=()=>{let f;return h?f=v:s.route.Component?f=a.createElement(s.route.Component,null):s.route.element?f=s.route.element:f=i,a.createElement(w,{match:s,routeContext:{outlet:i,matches:C,isDataRoute:r!=null},children:f})};return r&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?a.createElement($,{location:r.location,revalidation:r.revalidation,component:v,error:h,children:g(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):g()},null)}var B;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(B||(B={}));var E;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(E||(E={}));function H(e){let t=a.useContext(M);return t||d(!1),t}function ee(e){let t=a.useContext(S);return t||d(!1),t}function te(e){let t=a.useContext(m);return t||d(!1),t}function k(e){let t=te(),r=t.matches[t.matches.length-1];return r.route.id||d(!1),r.route.id}function re(){var e;let t=a.useContext(J),r=ee(E.UseRouteError),n=k(E.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ne(){let{router:e}=H(B.UseNavigateStable),t=k(E.UseNavigateStable),r=a.useRef(!1);return F(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,P({fromRouteId:t},o)))},[e,t])}function se(e){let{to:t,replace:r,state:n,relative:l}=e;x()||d(!1);let{matches:o}=a.useContext(m),{pathname:u}=N(),i=V(),s=I(t,O(o).map(h=>h.pathnameBase),u,l==="path"),c=JSON.stringify(s);return a.useEffect(()=>i(JSON.parse(c),{replace:r,state:n,relative:l}),[i,c,l,r,n]),null}function ue(e){return G(e.context)}function ae(e){d(!1)}function ce(e){let{basename:t="/",children:r=null,location:n,navigationType:l=j.Pop,navigator:o,static:u=!1}=e;x()&&d(!1);let i=t.replace(/^\/*/,"/"),s=a.useMemo(()=>({basename:i,navigator:o,static:u}),[i,o,u]);typeof n=="string"&&(n=D(n));let{pathname:c="/",search:h="",hash:v="",state:C=null,key:g="default"}=n,f=a.useMemo(()=>{let p=T(c,i);return p==null?null:{location:{pathname:p,search:h,hash:v,state:C,key:g},navigationType:l}},[i,c,h,v,C,g,l]);return f==null?null:a.createElement(y.Provider,{value:s},a.createElement(b.Provider,{children:r,value:f}))}function de(e){let{children:t,location:r}=e;return Q(U(t),r)}var L;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(L||(L={}));new Promise(()=>{});function U(e,t){t===void 0&&(t=[]);let r=[];return a.Children.forEach(e,(n,l)=>{if(!a.isValidElement(n))return;let o=[...t,l];if(n.type===a.Fragment){r.push.apply(r,U(n.props.children,o));return}n.type!==ae&&d(!1),!n.props.index||!n.props.children||d(!1);let u={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(u.children=U(n.props.children,o)),r.push(u)}),r}export{S as D,y as N,ue as O,ce as R,N as a,ie as b,V as c,se as d,de as e,ae as f,K as u};