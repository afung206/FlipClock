(this.webpackJsonpflipclock=this.webpackJsonpflipclock||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),a=n.n(s),r=(n(9),n(10),n(11),n(0)),j=function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"React Flip Clock"})})},u=n(2),o=(n(13),n(14),n(15),function(t){return Object(r.jsx)("div",{className:"StaticFlipCard ".concat(t.position),children:Object(r.jsx)("span",{children:t.digit})})}),d=(n(16),function(t){return Object(r.jsx)("div",{className:"AnimatedFlipCard ".concat(t.animation),children:Object(r.jsx)("span",{children:t.digit})})}),l=function(t){var e=t.digit.toString(),n=(t.digit-1).toString();n="hours"!==t.unit?"-1"===n?"59":n:"-1"===n?"12":n,parseInt(e)<10&&(e="0".concat(e)),parseInt(n)<10&&(n="0".concat(n));var c=t.shuffle?n:e,i=t.shuffle?e:n,s=t.shuffle?"unfold":"fold",a=t.shuffle?"fold":"unfold";return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"flipUnitContainer",children:[Object(r.jsx)(o,{position:"upperCard",digit:n}),Object(r.jsx)(o,{position:"lowerCard",digit:e}),Object(r.jsx)(d,{digit:c,animation:s}),Object(r.jsx)(d,{digit:i,animation:a})]})})},f=function(){var t,e=Object(c.useState)(0),n=Object(u.a)(e,2),i=n[0],s=n[1],a=Object(c.useState)(!0),j=Object(u.a)(a,2),o=j[0],d=j[1],f=Object(c.useState)(0),b=Object(u.a)(f,2),O=b[0],h=b[1],p=Object(c.useState)(!0),x=Object(u.a)(p,2),g=x[0],m=x[1],v=Object(c.useState)(0),S=Object(u.a)(v,2),C=S[0],k=S[1],F=Object(c.useState)(!0),I=Object(u.a)(F,2),N=I[0],w=I[1];Object(c.useEffect)((function(){return t=setInterval((function(){return A()}),100),function(){clearInterval(t)}}),[]);var A=function(){var t=new Date,e=t.getMinutes(),n=t.getSeconds(),c=t.getHours()%12;(c=c||12)!==i&&(s(c),d(!o)),e!==O&&(h(e),m(!g)),n!==C&&(k(n),w(!N))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"flipClock",children:[Object(r.jsx)(l,{unit:"hours",digit:i,shuffle:o}),Object(r.jsx)(l,{unit:"minutes",digit:O,shuffle:g}),Object(r.jsx)(l,{unit:"seconds",digit:C,shuffle:N})]})})},b=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(j,{}),Object(r.jsx)(f,{})]})};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.59cf78a1.chunk.js.map