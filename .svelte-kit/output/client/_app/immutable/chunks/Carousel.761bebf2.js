import{S as F,i as G,s as H,k as d,q as M,a as b,l as g,m as q,r as S,c as k,h as u,n as _,b as v,F as p,u as K,K as w,M as V,D as C}from"./index.f9f2799d.js";import{m as E}from"./api.24b2cd97.js";function A(f,e,s){const a=f.slice();return a[3]=e[s],a}function D(f){let e,s;return{c(){e=d("a"),s=M("see all"),this.h()},l(a){e=g(a,"A",{href:!0,class:!0});var i=q(e);s=S(i,"see all"),i.forEach(u),this.h()},h(){_(e,"href",f[2]),_(e,"class","svelte-1qihwod")},m(a,i){v(a,e,i),p(e,s)},p(a,i){i&4&&_(e,"href",a[2])},d(a){a&&u(e)}}}function I(f){let e,s,a,i,h;return{c(){e=d("a"),s=d("img"),this.h()},l(l){e=g(l,"A",{href:!0,class:!0});var c=q(e);s=g(c,"IMG",{alt:!0,src:!0,class:!0}),c.forEach(u),this.h()},h(){_(s,"alt",a=f[3].title),C(s.src,i=E(f[3].poster_path,500))||_(s,"src",i),_(s,"class","svelte-1qihwod"),_(e,"href",h="/movies/"+f[3].id),_(e,"class","svelte-1qihwod")},m(l,c){v(l,e,c),p(e,s)},p(l,c){c&2&&a!==(a=l[3].title)&&_(s,"alt",a),c&2&&!C(s.src,i=E(l[3].poster_path,500))&&_(s,"src",i),c&2&&h!==(h="/movies/"+l[3].id)&&_(e,"href",h)},d(l){l&&u(e)}}}function j(f){let e,s,a,i,h,l=f[2]&&D(f),c=f[1],n=[];for(let t=0;t<c.length;t+=1)n[t]=I(A(f,c,t));return{c(){e=d("h2"),s=M(f[0]),a=b(),l&&l.c(),i=b(),h=d("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=g(t,"H2",{class:!0});var o=q(e);s=S(o,f[0]),a=k(o),l&&l.l(o),o.forEach(u),i=k(t),h=g(t,"DIV",{class:!0});var r=q(h);for(let m=0;m<n.length;m+=1)n[m].l(r);r.forEach(u),this.h()},h(){_(e,"class","column"),_(h,"class","carousel svelte-1qihwod")},m(t,o){v(t,e,o),p(e,s),p(e,a),l&&l.m(e,null),v(t,i,o),v(t,h,o);for(let r=0;r<n.length;r+=1)n[r].m(h,null)},p(t,[o]){if(o&1&&K(s,t[0]),t[2]?l?l.p(t,o):(l=D(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null),o&2){c=t[1];let r;for(r=0;r<c.length;r+=1){const m=A(t,c,r);n[r]?n[r].p(m,o):(n[r]=I(m),n[r].c(),n[r].m(h,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=c.length}},i:w,o:w,d(t){t&&u(e),l&&l.d(),t&&u(i),t&&u(h),V(n,t)}}}function y(f,e,s){let{title:a}=e,{movies:i}=e,{href:h}=e;return f.$$set=l=>{"title"in l&&s(0,a=l.title),"movies"in l&&s(1,i=l.movies),"href"in l&&s(2,h=l.href)},[a,i,h]}class J extends F{constructor(e){super(),G(this,e,y,j,H,{title:0,movies:1,href:2})}}export{J as C};