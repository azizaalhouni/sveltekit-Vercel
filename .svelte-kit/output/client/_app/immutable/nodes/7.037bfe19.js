import{g as E}from"../chunks/api.24b2cd97.js";import{S as O,i as R,s as j,k as p,q as w,a as k,l as h,m as y,r as z,h as v,c as S,n as _,b as F,F as c,g as d,d as q,f as I,y as M,z as T,A,B,v as C}from"../chunks/index.f9f2799d.js";import{R as D}from"../chunks/ResultsPage.7cf08947.js";async function H({url:l,fetch:e}){const s=l.searchParams.get("query");if(!s)return{query:s,movies:[]};const t=await E(e,"search/movie",{query:s});return{query:s,movies:t.results}}const J=Object.freeze(Object.defineProperty({__proto__:null,load:H},Symbol.toStringTag,{value:"Module"}));function P(l){let e,s;return e=new D({props:{movies:l[0].movies,next:null}}),{c(){M(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,o){A(e,t,o),s=!0},p(t,o){const u={};o&1&&(u.movies=t[0].movies),e.$set(u)},i(t){s||(d(e.$$.fragment,t),s=!0)},o(t){q(e.$$.fragment,t),s=!1},d(t){B(e,t)}}}function N(l){let e,s,t,o,u,i,m,g,f,a=l[0].query&&P(l);return{c(){e=p("div"),s=p("h1"),t=w("Search"),o=k(),u=p("form"),i=p("input"),g=k(),a&&a.c(),this.h()},l(r){e=h(r,"DIV",{class:!0});var n=y(e);s=h(n,"H1",{});var $=y(s);t=z($,"Search"),$.forEach(v),o=S(n),u=h(n,"FORM",{});var b=y(u);i=h(b,"INPUT",{name:!0,autocomplete:!0,spellcheck:!0,class:!0}),b.forEach(v),g=S(n),a&&a.l(n),n.forEach(v),this.h()},h(){_(i,"name","query"),i.value=m=l[0].query,_(i,"autocomplete","off"),_(i,"spellcheck","false"),_(i,"class","svelte-96d4ab"),_(e,"class","column")},m(r,n){F(r,e,n),c(e,s),c(s,t),c(e,o),c(e,u),c(u,i),c(e,g),a&&a.m(e,null),f=!0},p(r,[n]){(!f||n&1&&m!==(m=r[0].query)&&i.value!==m)&&(i.value=m),r[0].query?a?(a.p(r,n),n&1&&d(a,1)):(a=P(r),a.c(),d(a,1),a.m(e,null)):a&&(C(),q(a,1,1,()=>{a=null}),I())},i(r){f||(d(a),f=!0)},o(r){q(a),f=!1},d(r){r&&v(e),a&&a.d()}}}function U(l,e,s){let{data:t}=e;return l.$$set=o=>{"data"in o&&s(0,t=o.data)},[t]}class K extends O{constructor(e){super(),R(this,e,U,N,j,{data:0})}}export{K as component,J as universal};
