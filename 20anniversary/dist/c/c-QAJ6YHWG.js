import{b as l,c as T}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-XZAKTUPJ.js";import{a}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-3CIGULBN.js";import{a as m,d}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";function x(e){let n=e.getBoundingClientRect();return n.top<=0&&n.bottom>=0}function h(e){let n=e||window,{pageXOffset:t,pageYOffset:r,document:o}=n;if(typeof o<"u")return{left:t||o.documentElement.scrollLeft||o.body.scrollLeft||0,top:r||o.documentElement.scrollTop||o.body.scrollTop||0};{let{scrollLeft:i,scrollTop:s}=n;return{left:i,top:s}}}function y(e){function n(t){return Math.floor(t*100/20)*20}return e.sort((t,r)=>{let o=typeof t.y=="number"?n(t.y):0,i=typeof r.y=="number"?n(r.y):0;if(o>i)return 1;if(o<i)return-1;{let s=typeof t.x=="number"?n(t.x):0,f=typeof r.x=="number"?n(t.x):0;return s>f?1:s<f?-1:0}})}function c(e){let n=e.offsetParent,t=e.offsetTop;return n?t||c(n):t||0}function p(e){let n=e.offsetParent,t=e.offsetLeft;return n?t||p(n):t||0}function g(e){if(!e)return{left:0,top:0,width:0,height:0};let{top:n,left:t,width:r,height:o}=e.getBoundingClientRect();return{top:n,left:t,width:r,height:o}}function w(e){return e?{top:c(e),left:p(e)}:{left:0,top:0}}function L(e,n){let t=u.document.createElement(n);for(;e.firstChild;)t.appendChild(e.firstChild);let r=Array.from(e.attributes);for(let o of r)t.setAttribute(o.name,o.value||"");e.parentNode?.replaceChild(t,e)}function M(e){let n=e.height/e.width,t=window.innerHeight,r=window.innerWidth,o=t/n,i=o*n;return o>r&&(o=r,i=o*n),{width:o,height:i}}function H(e,n){if(e)for(let[t,r]of Object.entries(n))e.style.setProperty(l(t),r)}function P({element:e,events:n,callback:t,passive:r=!1}){if(!e)return()=>{};let o=[];for(let i of n)e.addEventListener(i,t,{passive:r}),o.push(()=>e?.removeEventListener(i,t));return()=>{for(let i of o)typeof i=="function"&&i()}}function v(e){return!e||!(e instanceof HTMLElement)?!1:["INPUT","TEXTAREA","SELECT"].includes(e.tagName)}function C(e){return!!(e instanceof HTMLElement&&e.closest("[data-scrollable]"))}var u,E=m(()=>{"use strict";T();u=d(a())});export{x as a,h as b,y as c,g as d,w as e,L as f,M as g,H as h,P as i,v as j,C as k,E as l};
