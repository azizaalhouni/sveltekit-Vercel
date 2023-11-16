import{S as at,i as rt,s as ot,a as it,e as q,c as st,b as z,g as de,t as V,d as pe,f as B,h as F,j as lt,o as Pe,k as ct,l as ft,m as ut,n as be,p as C,q as dt,r as pt,u as ht,v as H,w as M,x as Ae,y as X,z as Y,A as ce}from"./chunks/index-bd3d1439.js";import{S as tt,I as x,g as We,f as Ge,a as Ee,b as fe,s as K,i as He,c as ue,P as Me,d as mt,e as _t,h as gt}from"./chunks/singletons-0c23d0cb.js";import{u as wt}from"./chunks/parse-f0c618df.js";function yt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function vt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const Et=["href","pathname","search","searchParams","toString","toJSON"];function kt(r,e){const n=new URL(r);for(const i of Et){let l=n[i];Object.defineProperty(n,i,{get(){return e(),l},enumerable:!0,configurable:!0})}return St(n),n}function St(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Rt="/__data.json";function Lt(r){return r.replace(/\/$/,"")+Rt}function Pt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete(Ie(r)),he(r,e));const te=new Map;function Ot(r,e){const n=Ie(r,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:l,...f}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:l,init:f,ttl:1e3*Number(t)}),Promise.resolve(new Response(l,f))}return he(r,e)}function $t(r,e,n){if(te.size>0){const i=Ie(r,n),l=te.get(i);if(l){if(performance.now()<l.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(l.body,l.init);te.delete(i)}}return he(e,n)}function Ie(r,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Pt(e.body)}"]`),i}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${Tt(r).map(i=>{const l=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(l)return e.push({name:l[1],matcher:l[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((w,m)=>{if(m%2){if(w.startsWith("x+"))return ke(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ke(String.fromCharCode(...w.slice(2).split("-").map(U=>parseInt(U,16))));const _=Ut.exec(w);if(!_)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,k,S,D,j]=_;return e.push({name:D,matcher:j,optional:!!k,rest:!!S,chained:S?m===1&&t[0]==="":!1}),S?"(.*?)":k?"([^/]*)?":"([^/]+?)"}return ke(w)}).join("")}).join("")}/?$`),params:e}}function It(r){return!/^\([^)]+\)$/.test(r)}function Tt(r){return r.slice(1).split("/").filter(It)}function Dt(r,e,n){const i={},l=r.slice(1);let f="";for(let t=0;t<e.length;t+=1){const u=e[t];let w=l[t];if(u.chained&&u.rest&&f&&(w=w?f+"/"+w:f),f="",w===void 0)u.rest&&(i[u.name]="");else{if(u.matcher&&!n[u.matcher](w)){if(u.optional&&u.chained){let m=l.indexOf(void 0,t);if(m===-1){const _=e[t+1];if(_!=null&&_.rest&&_.chained)f=w;else return}for(;m>=t;)l[m]=l[m-1],m-=1;continue}return}i[u.name]=w}}if(!f)return i}function ke(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,i){const l=new Set(e);return Object.entries(n).map(([u,[w,m,_]])=>{const{pattern:k,params:S}=At(u),D={id:u,exec:j=>{const U=k.exec(j);if(U)return Dt(U,S,i)},errors:[1,..._||[]].map(j=>r[j]),layouts:[0,...m||[]].map(t),leaf:f(w)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function f(u){const w=u<0;return w&&(u=~u),[w,r[u]]}function t(u){return u===void 0?u:[l.has(u),r[u]]}}function Nt(r){let e,n,i;var l=r[0][0];function f(t){return{props:{data:t[2],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,u){e&&X(e,t,u),z(t,n,u),i=!0},p(t,u){const w={};if(u&4&&(w.data=t[2]),u&2&&(w.form=t[1]),l!==(l=t[0][0])){if(e){de();const m=e;V(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&F(n),e&&Y(e,t)}}}function Ct(r){let e,n,i;var l=r[0][0];function f(t){return{props:{data:t[2],$$slots:{default:[xt]},$$scope:{ctx:t}}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,u){e&&X(e,t,u),z(t,n,u),i=!0},p(t,u){const w={};if(u&4&&(w.data=t[2]),u&523&&(w.$$scope={dirty:u,ctx:t}),l!==(l=t[0][0])){if(e){de();const m=e;V(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&F(n),e&&Y(e,t)}}}function xt(r){let e,n,i;var l=r[0][1];function f(t){return{props:{data:t[3],form:t[1]}}}return l&&(e=H(l,f(r))),{c(){e&&M(e.$$.fragment),n=q()},l(t){e&&Ae(e.$$.fragment,t),n=q()},m(t,u){e&&X(e,t,u),z(t,n,u),i=!0},p(t,u){const w={};if(u&8&&(w.data=t[3]),u&2&&(w.form=t[1]),l!==(l=t[0][1])){if(e){de();const m=e;V(m.$$.fragment,1,0,()=>{Y(m,1)}),pe()}l?(e=H(l,f(t)),M(e.$$.fragment),B(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else l&&e.$set(w)},i(t){i||(e&&B(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&F(n),e&&Y(e,t)}}}function Xe(r){let e,n=r[5]&&Ye(r);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var l=ut(e);n&&n.l(l),l.forEach(F),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,l){z(i,e,l),n&&n.m(e,null)},p(i,l){i[5]?n?n.p(i,l):(n=Ye(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&F(e),n&&n.d()}}}function Ye(r){let e;return{c(){e=dt(r[6])},l(n){e=pt(n,r[6])},m(n,i){z(n,e,i)},p(n,i){i&64&&ht(e,n[6])},d(n){n&&F(e)}}}function qt(r){let e,n,i,l,f;const t=[Ct,Nt],u=[];function w(_,k){return _[0][1]?0:1}e=w(r),n=u[e]=t[e](r);let m=r[4]&&Xe(r);return{c(){n.c(),i=it(),m&&m.c(),l=q()},l(_){n.l(_),i=st(_),m&&m.l(_),l=q()},m(_,k){u[e].m(_,k),z(_,i,k),m&&m.m(_,k),z(_,l,k),f=!0},p(_,[k]){let S=e;e=w(_),e===S?u[e].p(_,k):(de(),V(u[S],1,1,()=>{u[S]=null}),pe(),n=u[e],n?n.p(_,k):(n=u[e]=t[e](_),n.c()),B(n,1),n.m(i.parentNode,i)),_[4]?m?m.p(_,k):(m=Xe(_),m.c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null)},i(_){f||(B(n),f=!0)},o(_){V(n),f=!1},d(_){u[e].d(_),_&&F(i),m&&m.d(_),_&&F(l)}}}function Vt(r,e,n){let{stores:i}=e,{page:l}=e,{components:f}=e,{form:t}=e,{data_0:u=null}=e,{data_1:w=null}=e;lt(i.page.notify);let m=!1,_=!1,k=null;return Pe(()=>{const S=i.page.subscribe(()=>{m&&(n(5,_=!0),n(6,k=document.title||"untitled page"))});return n(4,m=!0),S}),r.$$set=S=>{"stores"in S&&n(7,i=S.stores),"page"in S&&n(8,l=S.page),"components"in S&&n(0,f=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,w=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(l)},[f,t,u,w,m,_,k,i,l]}class Bt extends at{constructor(e){super(),rt(this,e,Vt,qt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Jt=function(r,e){return new URL(r,e).href},Qe={},G=function(e,n,i){if(!n||n.length===0)return e();const l=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Jt(f,i),f in Qe)return;Qe[f]=!0;const t=f.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!i)for(let _=l.length-1;_>=0;_--){const k=l[_];if(k.href===f&&(!t||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${u}`))return;const m=document.createElement("link");if(m.rel=t?"stylesheet":Ft,t||(m.as="script",m.crossOrigin=""),m.href=f,document.head.appendChild(m),t)return new Promise((_,k)=>{m.addEventListener("load",_),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},Kt={},me=[()=>G(()=>import("./chunks/0-9ee56dc4.js"),["./chunks/0-9ee56dc4.js","./components/pages/_layout.svelte-9e881599.js","./chunks/index-bd3d1439.js","./chunks/stores-bd5be47a.js","./chunks/singletons-0c23d0cb.js","./chunks/index-c98cd7b6.js","./assets/_layout-8454f68e.css"],import.meta.url),()=>G(()=>import("./chunks/1-8f578ef4.js"),["./chunks/1-8f578ef4.js","./components/error.svelte-ca86ac19.js","./chunks/index-bd3d1439.js","./chunks/stores-bd5be47a.js","./chunks/singletons-0c23d0cb.js","./chunks/index-c98cd7b6.js"],import.meta.url),()=>G(()=>import("./chunks/2-ad525375.js"),["./chunks/2-ad525375.js","./chunks/_page-da46b06b.js","./components/pages/_page.svelte-8bc7c9b7.js","./chunks/index-bd3d1439.js","./chunks/index-c98cd7b6.js","./assets/_page-265a38f0.css"],import.meta.url),()=>G(()=>import("./chunks/3-945467e7.js"),["./chunks/3-945467e7.js","./chunks/_page-6a6e5f22.js","./chunks/environment-9aa685ef.js","./components/pages/about/_page.svelte-220b9150.js","./chunks/index-bd3d1439.js"],import.meta.url),()=>G(()=>import("./chunks/4-835ab245.js"),["./chunks/4-835ab245.js","./components/pages/sverdle/_page.svelte-f9a79951.js","./chunks/index-bd3d1439.js","./chunks/parse-f0c618df.js","./chunks/singletons-0c23d0cb.js","./chunks/index-c98cd7b6.js","./assets/_page-9d501049.css"],import.meta.url),()=>G(()=>import("./chunks/5-dde67a5f.js"),["./chunks/5-dde67a5f.js","./chunks/_page-9c76c2d7.js","./chunks/environment-9aa685ef.js","./components/pages/sverdle/how-to-play/_page.svelte-26b286c5.js","./chunks/index-bd3d1439.js","./assets/_page-89a9e780.css"],import.meta.url)],zt=[],Wt={"/":[2],"/about":[3],"/sverdle":[-5],"/sverdle/how-to-play":[5]},Gt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,n){this.status=e,this.location=n}}async function Ht(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,l])=>[i,await l])));return r}const Se=jt(me,zt,Wt,Kt),$e=me[0],Ue=me[1];$e();Ue();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Re(r){ne[r]=ue()}function Mt({target:r,base:e}){var Je;const n=document.documentElement,i=[];let l=null;const f={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,w=!1,m=!0,_=!1,k=!1,S=!1,D=!1,j,U=(Je=history.state)==null?void 0:Je[x];U||(U=Date.now(),history.replaceState({...history.state,[x]:U},"",location.href));const _e=ne[U];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let J,Te,ae;async function De(){ae=ae||Promise.resolve(),await ae,ae=null;const a=new URL(location.href),o=ie(a,!0);l=null,await Ne(o,a,[])}async function ge(a,{noScroll:o=!1,replaceState:c=!1,keepFocus:s=!1,state:d={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,We(document))),se({url:a,scroll:o?ue():null,keepfocus:s,redirect_chain:h,details:{state:d,replaceState:c},nav_token:v,accepted:()=>{p&&(D=!0)},blocked:()=>{},type:"goto"})}async function je(a){const o=ie(a,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return l={id:o.id,promise:qe(o).then(c=>(c.type==="loaded"&&c.state.error&&(l=null),c))},l.promise}async function re(...a){const c=Se.filter(s=>a.some(d=>s.exec(d))).map(s=>Promise.all([...s.layouts,s.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function Ne(a,o,c,s,d={},p){var v,y;Te=d;let h=a&&await qe(a);if(h||(h=await Fe(o,{id:null},await ee(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(a==null?void 0:a.url)||o,Te!==d)return!1;if(h.type==="redirect")if(c.length>10||c.includes(o.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(h.location,o).href,{},[...c,o.pathname],d),!1;else((y=(v=h.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await K.updated.check()&&await le(o);if(i.length=0,D=!1,_=!0,s&&s.details){const{details:g}=s,R=g.replaceState?0:1;g.state[x]=U+=R,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(l=null,w?(t=h.state,h.props.page&&(h.props.page.url=o),j.$set(h.props)):Ce(h),s){const{scroll:g,keepfocus:R}=s;if(R||Le(),await ce(),m){const L=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await ce();m=!0,h.props.page&&(J=h.props.page),p&&p(),_=!1}function Ce(a){var s;t=a.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),J=a.props.page,j=new Bt({target:r,props:{...a.props,stores:K},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(d=>d(c)),w=!0}async function Q({url:a,params:o,branch:c,status:s,error:d,route:p,form:h}){const v=c.filter(Boolean);let y="never";for(const P of c)(P==null?void 0:P.slash)!==void 0&&(y=P.slash);a.pathname=yt(a.pathname,y),a.search=a.search;const g={type:"loaded",state:{url:a,params:o,branch:c,error:d,route:p},props:{components:v.map(P=>P.node.component)}};h!==void 0&&(g.props.form=h);let R={},L=!J;for(let P=0;P<v.length;P+=1){const b=v[P];R={...R,...b.data},(L||!t.branch.some(I=>I===b))&&(g.props[`data_${P}`]=R,L=L||Object.keys(b.data??{}).length>0)}return L||(L=Object.keys(J.data).length!==Object.keys(R).length),(!t.url||a.href!==t.url.href||t.error!==d||h!==void 0||L)&&(g.props.page={error:d,params:o,route:p,status:s,url:new URL(a),form:h??null,data:L?R:J.data}),g}async function we({loader:a,parent:o,url:c,params:s,route:d,server_data_node:p}){var g,R,L;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await a();if((g=y.universal)!=null&&g.load){let N=function(...b){for(const I of b){const{href:T}=new URL(I,c);v.dependencies.add(T)}};const P={route:{get id(){return v.route=!0,d.id}},params:new Proxy(s,{get:(b,I)=>(v.params.add(I),b[I])}),data:(p==null?void 0:p.data)??null,url:kt(c,()=>{v.url=!0}),async fetch(b,I){let T;b instanceof Request?(T=b.url,I={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...I}):T=b;const E=new URL(T,c).href;return N(E),w?$t(T,E,I):Ot(T,I)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,o()}};h=await y.universal.load.call(null,P)??null,h=h?await Ht(h):null}return{node:y,loader:a,server:p,universal:(R=y.universal)!=null&&R.load?{type:"data",data:h,uses:v}:null,data:h??(p==null?void 0:p.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(p==null?void 0:p.slash)}}function xe(a,o,c,s,d){if(D)return!0;if(!s)return!1;if(s.parent&&a||s.route&&o||s.url&&c)return!0;for(const p of s.params)if(d[p]!==t.params[p])return!0;for(const p of s.dependencies)if(i.some(h=>h(new URL(p))))return!0;return!1}function ye(a,o){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?o??null:null}async function qe({id:a,invalidating:o,url:c,params:s,route:d}){if((l==null?void 0:l.id)===a)return l.promise;const{errors:p,layouts:h,leaf:v}=d,y=[...h,v];p.forEach(E=>E==null?void 0:E().catch(()=>{})),y.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const R=t.url?a!==t.url.pathname+t.url.search:!1,L=t.route?a!==t.route.id:!1,N=y.reduce((E,$,A)=>{var Z;const O=t.branch[A],W=!!($!=null&&$[0])&&((O==null?void 0:O.loader)!==$[1]||xe(E.some(Boolean),L,R,(Z=O.server)==null?void 0:Z.uses,s));return E.push(W),E},[]);if(N.some(Boolean)){try{g=await et(c,N)}catch(E){return oe({status:500,error:await ee(E,{url:c,params:s,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const P=g==null?void 0:g.nodes;let b=!1;const I=y.map(async(E,$)=>{var Z;if(!E)return;const A=t.branch[$],O=P==null?void 0:P[$];if((!O||O.type==="skip")&&E[1]===(A==null?void 0:A.loader)&&!xe(b,L,R,(Z=A.universal)==null?void 0:Z.uses,s))return A;if(b=!0,(O==null?void 0:O.type)==="error")throw O;return we({loader:E[1],url:c,params:s,route:d,parent:async()=>{var ze;const Ke={};for(let ve=0;ve<$;ve+=1)Object.assign(Ke,(ze=await I[ve])==null?void 0:ze.data);return Ke},server_data_node:ye(O===void 0&&E[0]?{type:"skip"}:O??null,A==null?void 0:A.server)})});for(const E of I)E.catch(()=>{});const T=[];for(let E=0;E<y.length;E+=1)if(y[E])try{T.push(await I[E])}catch($){if($ instanceof Ze)return{type:"redirect",location:$.location};let A=500,O;P!=null&&P.includes($)?(A=$.status??A,O=$.error):$ instanceof Oe?(A=$.status,O=$.body):O=await ee($,{params:s,url:c,route:{id:d.id}});const W=await Ve(E,T,p);return W?await Q({url:c,params:s,branch:T.slice(0,W.idx).concat(W.node),status:A,error:O,route:d}):await Fe(c,{id:d.id},O,A)}else T.push(void 0);return await Q({url:c,params:s,branch:T,status:200,error:null,route:d,form:o?void 0:null})}async function Ve(a,o,c){for(;a--;)if(c[a]){let s=a;for(;!o[s];)s-=1;try{return{idx:s+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:a,error:o,url:c,route:s}){const d={},p=await $e();let h=null;if(p.server)try{const g=await et(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;h=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||u)&&await le(c)}const v=await we({loader:$e,url:c,params:d,route:s,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),y={node:await Ue(),loader:Ue,universal:null,server:null,data:null};return await Q({url:c,params:d,branch:[v,y],status:a,error:o,route:null})}function ie(a,o){if(He(a,e))return;const c=vt(a.pathname.slice(e.length)||"/");for(const s of Se){const d=s.exec(c);if(d)return{id:a.pathname+a.search,invalidating:o,route:s,params:bt(d),url:a}}}function Be({url:a,type:o,intent:c,delta:s}){var v,y;let d=!1;const p={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:a},willUnload:!c,type:o};s!==void 0&&(p.delta=s);const h={...p,cancel:()=>{d=!0}};return k||f.before_navigate.forEach(g=>g(h)),d?null:p}async function se({url:a,scroll:o,keepfocus:c,redirect_chain:s,details:d,type:p,delta:h,nav_token:v,accepted:y,blocked:g}){const R=ie(a,!1),L=Be({url:a,type:p,delta:h,intent:R});if(!L){g();return}Re(U),y(),k=!0,w&&K.navigating.set(L),await Ne(R,a,s,{scroll:o,keepfocus:c,details:d},v,()=>{k=!1,f.after_navigate.forEach(N=>N(L)),K.navigating.set(null)})}async function Fe(a,o,c,s){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await oe({status:s,error:c,url:a,route:o}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}function nt(){let a;n.addEventListener("mousemove",p=>{const h=p.target;clearTimeout(a),a=setTimeout(()=>{s(h,2)},20)});function o(p){s(p.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(p=>{for(const h of p)h.isIntersecting&&(re(new URL(h.target.href).pathname),c.unobserve(h.target))},{threshold:0});function s(p,h){const v=Ge(p,n);if(!v)return;const{url:y,external:g}=Ee(v,e);if(g)return;const R=fe(v);R.reload||(h<=R.preload_data?je(y):h<=R.preload_code&&re(y.pathname))}function d(){c.disconnect();for(const p of n.querySelectorAll("a")){const{url:h,external:v}=Ee(p,e);if(v)continue;const y=fe(p);y.reload||(y.preload_code===Me.viewport&&c.observe(p),y.preload_code===Me.eager&&re(h.pathname))}}f.after_navigate.push(d),d()}return{after_navigate:a=>{Pe(()=>(f.after_navigate.push(a),()=>{const o=f.after_navigate.indexOf(a);f.after_navigate.splice(o,1)}))},before_navigate:a=>{Pe(()=>(f.before_navigate.push(a),()=>{const o=f.before_navigate.indexOf(a);f.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(_||!w)&&(m=!1)},goto:(a,o={})=>ge(a,o,[]),invalidate:a=>{if(typeof a=="function")i.push(a);else{const{href:o}=new URL(a,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(D=!0,De()),preload_data:async a=>{const o=new URL(a,We(document));await je(o)},preload_code:re,apply_action:async a=>{if(a.type==="error"){const o=new URL(location.href),{branch:c,route:s}=t;if(!s)return;const d=await Ve(t.branch.length,c,s.errors);if(d){const p=await Q({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:a.status??500,error:a.error,route:s});t=p.state,j.$set(p.props),ce().then(Le)}}else if(a.type==="redirect")ge(a.location,{invalidateAll:!0},[]);else{const o={form:a.data,page:{...J,form:a.data,status:a.status}};j.$set(o),a.type==="success"&&ce().then(Le)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var s;let c=!1;if(!k){const d={from:{params:t.params,route:{id:((s=t.route)==null?void 0:s.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};f.before_navigate.forEach(p=>p(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(U);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||nt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],n);if(!c)return;const{url:s,external:d,has:p}=Ee(c,e),h=fe(c);if(!s||!(c instanceof SVGAElement)&&s.protocol!==location.protocol&&!(s.protocol==="https:"||s.protocol==="http:")||p.download)return;if(d||h.reload){Be({url:s,type:"link"})||o.preventDefault(),k=!0;return}const[y,g]=s.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){S=!0,Re(U),t.url=s,K.page.set({...J,url:s}),K.page.notify();return}se({url:s,scroll:h.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:s.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),s=o.submitter;if(((s==null?void 0:s.formMethod)||c.method)!=="get")return;const p=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(s==null?void 0:s.formAction)||c.action);if(He(p,e))return;const{noscroll:h,reload:v}=fe(o.target);v||(o.preventDefault(),o.stopPropagation(),p.search=new URLSearchParams(new FormData(o.target)).toString(),se({url:p,scroll:h?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[x]){if(o.state[x]===U)return;const s=o.state[x]-U;se({url:new URL(location.href),scroll:ne[o.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=o.state[x]},blocked:()=>{history.go(-s)},type:"popstate",delta:s})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[x]:++U},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&K.navigating.set(null)})},_hydrate:async({status:a=200,error:o,node_ids:c,params:s,route:d,data:p,form:h})=>{u=!0;const v=new URL(location.href);({params:s={},route:d={id:null}}=ie(v,!1)||{});let y;try{const g=c.map(async(R,L)=>{const N=p[L];return we({loader:me[R],url:v,params:s,route:d,parent:async()=>{const P={};for(let b=0;b<L;b+=1)Object.assign(P,(await g[b]).data);return P},server_data_node:ye(N)})});y=await Q({url:v,params:s,branch:await Promise.all(g),status:a,error:o,form:h,route:Se.find(({id:R})=>R===d.id)??null})}catch(g){if(g instanceof Ze){await le(new URL(g.location,location.href));return}y=await oe({status:g instanceof Oe?g.status:500,error:await ee(g,{url:v,params:s,route:d}),url:v,route:d})}Ce(y)}}}async function et(r,e){var f;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await he(n.href),l=await i.json();if(!i.ok)throw new Error(l);return(f=l.nodes)==null||f.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=wt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),l}function ee(r,e){return r instanceof Oe?r.body:Gt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function Zt({env:r,hydrate:e,paths:n,target:i,version:l}){mt(n),gt(l);const f=Mt({target:i,base:n.base});_t({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{Zt as start};
