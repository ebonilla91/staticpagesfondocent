import{b as a,c as p}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-OAY73AJW.js";import{a as d}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";async function r(t,e){let n={...e,headers:{"Content-Type":"application/json",...e?.headers}};t.startsWith("/api")&&(n.headers={...n.headers,[a.RMVersionHeader]:a.RELEASE});let s=await fetch(t,n),o=s.headers.get("content-type")?.includes("application/json")?await s.json():await s.text();if(s.ok)return o;throw{message:!o||typeof o=="string"?o:o.message,statusCode:s.status}}var m,g=d(()=>{"use strict";p();m={get:(t,e={},n={})=>{let s=Object.keys(e).map(o=>{let i=e[o];return Array.isArray(i)?i.map(c=>`${encodeURIComponent(`${o}[]`)}=${encodeURIComponent(c)}`).join("&"):`${encodeURIComponent(o)}=${encodeURIComponent(i)}`}).join("&");return r(`${t}${s?`?${s}`:""}`,n)},post:(t,e={},n={})=>r(t,{method:"POST",body:JSON.stringify(e),...n}),patch:(t,e,n={})=>r(t,{method:"PATCH",body:JSON.stringify(e),...n}),put:(t,e,n={})=>r(t,{method:"PUT",body:JSON.stringify(e),...n}),delete:(t,e,n={})=>r(t,{method:"DELETE",body:e?JSON.stringify(e):void 0,...n}),sendBeacon:(t,e={})=>navigator.sendBeacon?navigator.sendBeacon(t,new Blob([JSON.stringify(e)],{type:"application/json; charset=UTF-8"})):r(t,{method:"POST",body:JSON.stringify(e)})}});export{m as a,g as b};
