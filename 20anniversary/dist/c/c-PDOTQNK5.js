import{b as p}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var m=p(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.getEmbedType=d.EmbedType=void 0;var r;(function(s){s.instagram="instagram",s.pinterest="pinterest",s.facebookvideo="facebookvideo",s.readymag="readymag",s.ecommerce="ecommerce",s.gdpr="gdpr",s.video="video",s.iframe="iframe",s.codeinjection="codeinjection"})(r=d.EmbedType||(d.EmbedType={}));var n=r.codeinjection,u={[r.codeinjection]:[],[r.instagram]:[/^\s*<blockquote\s+class=.instagram-media.*<\/blockquote>\s*<script.*src=.*instagram.+>.*<\/script>\s*$/gi],[r.pinterest]:[/^\s*<a.*data-pin-do=.*<\/a>([\s\S]*<script.*src=.*pinterest.+>.*<\/script>)?\s*$/i],[r.facebookvideo]:[/^\s*<div\s+id=.fb-root.*<\/div>[\s\S]*<script>.*src.*facebook.*sdk.*<\/script>[\s\S]*<div\s+class=.fb-video.*<\/div>\s*$/i],[r.readymag]:[/^\s*<a\s+class=.rm-mag-embed.*<\/a>[\s\S]*<script.+id=.readymag-embed-init.+><\/script>\s*$/i],[r.ecommerce]:[/^\s*<form\s+action=.*method=.*POST.+>[\s\S]*<script.*src=.*stripe.+>.*<\/script>[\s\S]*<\/form>\s*$/gim,/^\s*(<!--.*-->)?[\s\S]*<script.*src=.*stripe.+>[\s\S]*<\/script>[\s\S]*(<!--.*-->)?[\s\S]*<button .*>.*<\/button>[\s\S]*<div .*>.*<\/div>[\s\S]*<script>.*stripe.*<\/script>\s*$/gim,/^\s*<div\s+id=.+>[\s\S]*<\/div>[\s\S]*<script[\s\S]*scriptUrl[\s\S]*shopifycdn[\s\S]*>*<\/script>.*$/gim,/^\s*<script\s+src=.*gumroad.+><\/script>[\s\S]*<div\s+class=.gumroad-product-embed.+>[\s\S]*<\/div>\s*$/gim,/^\s*<script\s+src=.*gumroad.+><\/script>[\s\S]*<a\s+class=.gumroad-button.+>[\s\S]*<\/a>\s*$/gim,/^\s*<div\s+class=.*ecwid.+><\/div>[\s\S]*<script.+ecwid.+>.*<\/script>[\s\S]*<script.*>.*xProduct.*<\/script>\s*$/gim,/^\s*<div\s+class=.*ecsp.+><\/div>[\s\S]*<script.+ecwid.+>.*<\/script>[\s\S]*<script.*>.*xProduct.*<\/script>\s*$/gim,/^\s*<div\s+class=.*ec-cart-widget.+><\/div>[\s\S]*<div>[\s\S]*<script.+ecwid.+>.*<\/script>[\s\S]*<script.*>.*Ecwid.*<\/script>[\s\S]*<\/div>\s*$/gim,/^\s*<div\s+id=.*.+><\/div>[\s\S]*<script.+ecwid.+>.*<\/script>[\s\S]*<script.*>.*xProduct.*<\/script>[\s\S]*<\/div>\s*$/gim],[r.gdpr]:[/^\s*<a\s+href="https:\/\/www\.iubenda\.com\/privacy-policy\/\d+"[\w\d\s/:;.,'"=-]*>[\w\d\s/:;.,'"=-]*<\/a>\s*<script[\w\d\s/:;.,'"=-]*>\(function\s*\(w,d\)\s*{[\s\S]*s\.src="https:\/\/cdn\.iubenda\.com\/iubenda\.js";[\s\S]*}\)\([\w\s,]*\);<\/script\s*>\s*$/gim,/^\s*<script[\w\d\s/:;.,'="-]*src="https:\/\/consent\.cookiebot\.com\/[\w\d-]+\/cd\.js"[\w\d\s/:;.,'="-]*><\/script\s*>\s*$/gim,/^\s*<script\s*(type="text\/javascript"){0,1}\s*>\s*var\s+cpm\s*=\s*{};\s*\(function\(h,u,b\){[\w\d\s()[\]{}/.,:;="'-]+e\.src='https:\/\/cookiehub\.net(\/dev){0,1}\/c2\/[\w\d-]+\.js';[\w\d\s()[\]{}/.,:;="'-]+}\)\([\w\d\s,]+\);\s*<\/script\s*>\s*$/gim],[r.video]:[/^\s*<video[\s\S]*>[\s\S]*<\/video>\s*$/gim],[r.iframe]:(s="")=>{let i=s.replace(/<!--[\s\S]*-->/gi,"");return/^\s*<iframe[\s\S]*>[\s\S]*<\/iframe>\s*$/i.test(i)}};function f(s=""){let i=s.trim();if(!i)return n;for(let t in u){let e=t,c=u[e];if(typeof c=="function")return c(i)?e:n;for(let a of c)if(new RegExp(a.source,a.flags).test(i.replace(/\n/g,"")))return e}return n}d.getEmbedType=f});var S=p(o=>{"use strict";var g=o&&o.__createBinding||(Object.create?function(s,i,t,e){e===void 0&&(e=t);var c=Object.getOwnPropertyDescriptor(i,t);(!c||("get"in c?!i.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return i[t]}}),Object.defineProperty(s,e,c)}:function(s,i,t,e){e===void 0&&(e=t),s[e]=i[t]}),v=o&&o.__exportStar||function(s,i){for(var t in s)t!=="default"&&!Object.prototype.hasOwnProperty.call(i,t)&&g(i,s,t)};Object.defineProperty(o,"__esModule",{value:!0});v(m(),o)});export{S as a};
