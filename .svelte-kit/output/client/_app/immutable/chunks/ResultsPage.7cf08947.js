import{S as W,i as B,s as J,k,q as P,a as z,l as E,m as I,r as q,h as m,c as A,n as u,p as H,b as R,F as v,N as C,u as S,K as V,M as L,O as Q,P as U,o as X,D as y,w as F}from"./index.f9f2799d.js";import{m as G}from"./api.24b2cd97.js";function K(a,e,s){const o=a.slice();return o[16]=e[s],o}function N(a){let e,s,o,_,d,r;return{c(){e=k("a"),s=k("img"),d=z(),this.h()},l(i){e=E(i,"A",{href:!0,class:!0});var n=I(e);s=E(n,"IMG",{alt:!0,src:!0,class:!0}),d=A(n),n.forEach(m),this.h()},h(){u(s,"alt",o=a[16].title),y(s.src,_=G(a[16].poster_path,500))||u(s,"src",_),u(s,"class","svelte-hjd0hs"),u(e,"href",r="/movies/"+a[16].id),u(e,"class","svelte-hjd0hs")},m(i,n){R(i,e,n),v(e,s),v(e,d)},p(i,n){n&1&&o!==(o=i[16].title)&&u(s,"alt",o),n&1&&!y(s.src,_=G(i[16].poster_path,500))&&u(s,"src",_),n&1&&r!==(r="/movies/"+i[16].id)&&u(e,"href",r)},d(i){i&&m(e)}}}function O(a){let e,s;return{c(){e=k("a"),s=P("next page"),this.h()},l(o){e=E(o,"A",{href:!0,class:!0});var _=I(e);s=q(_,"next page"),_.forEach(m),this.h()},h(){u(e,"href",a[1]),u(e,"class","svelte-hjd0hs")},m(o,_){R(o,e,_),v(e,s)},p(o,_){_&2&&u(e,"href",o[1])},d(o){o&&m(e)}}}function Y(a){let e,s,o,_,d,r,i,n,p=`${a[6]}px`,b=`${a[7]}px`,w,M,j,g=a[0],f=[];for(let l=0;l<g.length;l+=1)f[l]=N(K(a,g,l));let c=a[1]&&O(a);return{c(){e=k("p"),s=P("showing item "),o=P(a[4]),_=P(" - "),d=P(a[5]),r=z(),i=k("div"),n=k("div");for(let l=0;l<f.length;l+=1)f[l].c();w=z(),c&&c.c(),this.h()},l(l){e=E(l,"P",{});var t=I(e);s=q(t,"showing item "),o=q(t,a[4]),_=q(t," - "),d=q(t,a[5]),t.forEach(m),r=A(l),i=E(l,"DIV",{class:!0,style:!0});var h=I(i);n=E(h,"DIV",{class:!0});var D=I(n);for(let T=0;T<f.length;T+=1)f[T].l(D);D.forEach(m),w=A(h),c&&c.l(h),h.forEach(m),this.h()},h(){u(n,"class","results svelte-hjd0hs"),H(n,"padding-top",p),H(n,"padding-bottom",b),u(i,"class","viewport svelte-hjd0hs"),H(i,"height","500px")},m(l,t){R(l,e,t),v(e,s),v(e,o),v(e,_),v(e,d),R(l,r,t),R(l,i,t),v(i,n);for(let h=0;h<f.length;h+=1)f[h].m(n,null);a[10](n),v(i,w),c&&c.m(i,null),a[11](i),M||(j=[C(window,"resize",a[8]),C(i,"scroll",a[9])],M=!0)},p(l,[t]){if(t&16&&S(o,l[4]),t&32&&S(d,l[5]),t&1){g=l[0];let h;for(h=0;h<g.length;h+=1){const D=K(l,g,h);f[h]?f[h].p(D,t):(f[h]=N(D),f[h].c(),f[h].m(n,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=g.length}t&64&&p!==(p=`${l[6]}px`)&&H(n,"padding-top",p),t&128&&b!==(b=`${l[7]}px`)&&H(n,"padding-bottom",b),l[1]?c?c.p(l,t):(c=O(l),c.c(),c.m(i,null)):c&&(c.d(1),c=null)},i:V,o:V,d(l){l&&m(e),l&&m(r),l&&m(i),L(f,l),a[10](null),c&&c.d(),a[11](null),M=!1,Q(j)}}}function Z(a,e,s){let{movies:o}=e,{next:_}=e;const d=U();let r,i,n,p=4;function b(){const t=i.firstChild;t.offsetWidth,n=t.offsetHeight,p=4,f()}let w=0,M=o.length,j=0,g=0;function f(){const t=r.scrollHeight-r.scrollTop*r.clientHeight;console.log(t),t<400&&d("end"),s(4,w=Math.floor(r.scrollTop/n)*p),s(5,M=Math.ceil((r.scrollTop+r.clientHeight)/n)*p),s(6,j=Math.floor(w/p)*n),s(7,g=Math.floor((o.length-M)/p)*n)}X(b);function c(t){F[t?"unshift":"push"](()=>{i=t,s(3,i)})}function l(t){F[t?"unshift":"push"](()=>{r=t,s(2,r)})}return a.$$set=t=>{"movies"in t&&s(0,o=t.movies),"next"in t&&s(1,_=t.next)},[o,_,r,i,w,M,j,g,b,f,c,l]}class ee extends W{constructor(e){super(),B(this,e,Z,Y,J,{movies:0,next:1})}}export{ee as R};