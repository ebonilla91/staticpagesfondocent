import{a as x}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-LV5FH5B7.js";import{b as R}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-HDRT62RD.js";import{d as C}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-LMXYD7AC.js";import{f as M}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-U3EQ6JVM.js";import{a as y}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-4FR22MFU.js";import{I as z,J as I}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BPJUKUAP.js";import{a as w}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-42FJTMOJ.js";import{b as s,e as P}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var O=s(u=>{"use strict";var B=y();Object.defineProperty(u,"__esModule",{value:!0});u.loadingIndicatorSizes=u.default=void 0;var h=B(x()),f=R(),_=C(),p=M(),g=(I(),P(z)),m,v,W=(0,_.keyframes)(m||(m=(0,h.default)([`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`]))),l={small:22,medium:48,big:56};u.loadingIndicatorSizes=l;function b(e){var r=e.size,t=e.bgColor,n=e.color,i=typeof r=="number"?"".concat(r,"px"):r&&l[r]?l[r]:l.big,a=r==="big"||r==="medium"?"50%":"100%",o=function(){return t||(r==="big"||r==="medium"?"tomato":"transparent")};return(0,g.jsx)(f.Box,{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:o(),height:i,width:i,borderRadius:"100%",children:(0,g.jsx)(f.Box,{height:a,width:a,border:"2px solid",borderRadius:"100%",css:(0,_.css)(v||(v=(0,h.default)([`
          animation: `,` 2s infinite linear;
        `])),W),borderColor:n?"".concat(n," ").concat(n," transparent transparent"):r==="big"||r==="medium"||typeof r=="number"?"white white transparent transparent":"".concat(p.colors.light.tomato," ").concat(p.colors.light.tomato," transparent transparent")})})}b.defaultProps={size:"big"};var j=b;u.default=j});var N=s(c=>{"use strict";var S=w();Object.defineProperty(c,"__esModule",{value:!0});var D={};Object.defineProperty(c,"default",{enumerable:!0,get:function(){return d.default}});var d=L(O());Object.keys(d).forEach(function(e){e==="default"||e==="__esModule"||Object.prototype.hasOwnProperty.call(D,e)||e in c&&c[e]===d[e]||Object.defineProperty(c,e,{enumerable:!0,get:function(){return d[e]}})});function q(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,t=new WeakMap;return(q=function(i){return i?t:r})(e)}function L(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||S(e)!=="object"&&typeof e!="function")return{default:e};var t=q(r);if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}});export{N as a};
