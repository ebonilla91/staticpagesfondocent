import{a as m,b as x}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-H5WAD6OX.js";import{l as s,s as y}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-53LSWZTP.js";import{n as d,o as b}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-PJF6UIFY.js";import{a as p,b as W}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-QQSGI2X4.js";import{b as a}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BWC6YUQZ.js";import{a as f}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";function v({widget:t,width:i,height:o}){let c=m.getLambdaUrl(t.picture,{width:i,height:o,cropH:t.cropH,cropW:t.cropW,cropX:t.cropX,cropY:t.cropY}),e=t.element.querySelector("img");return{previewImgSrc:e&&(e.currentSrc||e.src)||c,imgSrc:c}}function M(t){let i=[];for(let e of t)if(P(e))if(e.lightbox)i.push({...e,element:e.$el.get(0)});else{let g=S(e.preview_enabled,e.preview_overlay_color);i.push({...e,...g,element:e.$el.get(0)})}if(!i.length)return[];let o=[],c=d.sortRects(i);for(let e of c){let g=e.h/e.w,r=window.innerHeight,l=window.innerWidth,n=r/g,h=n*g;n>l&&(n=l,h=n*g);let{imgSrc:u,previewImgSrc:w}=v({widget:e,width:n,height:h});o.push({_id:e._id,color:e.lightbox?.color||"",gallery:e.lightbox?.gallery||!1,height:h,width:n,imgSrc:u,previewImgSrc:w})}return o}function U(t){let i=p.isOn(t.viewport,t.viewportWidth,t.viewerOptions)&&p.isCSSZoom()?p.getRatio(t.viewportWidth):1,{top:o,left:c,height:e,width:g}=t.widgetElement.getBoundingClientRect(),r={top:o,left:c,height:e,width:g};if(Modernizr.safari){let n=window.scrollY;r.top=r.top+(n-n/i)}return{top:Number(r.top+r.height*.5)*i,left:Number(r.left+r.width*.5)*i,height:r.height*i,width:r.width*i}}function S(t,i){if(typeof t<"u"||typeof i<"u"){let o=i?(d.rgba2hex(i)||"").slice(1):"000000",c=o&&d.rgba2alpha(i)||.6;return{preview_enabled:void 0,preview_overlay_color:void 0,lightbox:{enabled:t,color:s(o,c*100)}}}}var P,L=f(()=>{"use strict";a();W();x();y();b();P=t=>t.type==="picture"});export{M as a,U as b,S as c,L as d};
