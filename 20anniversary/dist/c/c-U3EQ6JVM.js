import{a as L,b as z}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-4FR22MFU.js";import{a as K}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-WSIFDYHJ.js";import{b as a}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var O=a(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.setRef=H;function H(e,r){typeof e=="function"?e(r):e&&(e.current=r)}});var q=a(f=>{"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.mergeRefs=void 0;var J=O(),N=function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];return function(s){n.forEach(function(y){(0,J.setRef)(y,s)})}};f.mergeRefs=N});var x=a(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.px=void 0;var Q=function(r){return r+"px"};d.px=Q});var M=a(p=>{"use strict";Object.defineProperty(p,"__esModule",{value:!0});p.readFile=void 0;var V=function(r){return new Promise(function(n,t){var s=new FileReader;s.onloadend=function(){return n(s.result)},s.onerror=function(y){return t(y)},s.readAsDataURL(r)})};p.readFile=V});var D=a(b=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.useForkRef=void 0;var W=K(),A=O(),X=function(r,n){return(0,W.useMemo)(function(){return r==null&&n==null?null:function(t){(0,A.setRef)(r,t),(0,A.setRef)(n,t)}},[r,n])};b.useForkRef=X});var S=a(c=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});Object.defineProperty(c,"mergeRefs",{enumerable:!0,get:function(){return Y.mergeRefs}});Object.defineProperty(c,"px",{enumerable:!0,get:function(){return Z.px}});Object.defineProperty(c,"readFile",{enumerable:!0,get:function(){return $.readFile}});Object.defineProperty(c,"useForkRef",{enumerable:!0,get:function(){return ee.useForkRef}});var Y=q(),Z=x(),$=M(),ee=D()});var R=a(o=>{"use strict";var re=L();Object.defineProperty(o,"__esModule",{value:!0});o.transparentColors=o.mainColors=o.lightColors=o.legacyColors=o.darkColors=o.colors=o.additionalColors=void 0;var te=re(z());function w(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?w(Object(n),!0).forEach(function(t){(0,te.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C={extraBlack:"#1C1C1C",black:"#282828",darkGray:"#808080",gray:"#A2A2A2",lightGray:"#F4F4F4",white:"#FFFFFF",red:"#EC520B",blue:"#0080FF",orange:"#F8A32C"};o.mainColors=C;var P={purple:"#8E0D99",green:"#429128"};o.additionalColors=P;var j={green:"#005240",tomato:"#EC520B",orange:"#F8A32C",transparent:"transparent"};o.legacyColors=j;var _={transparentBlack:"#28282896",transparentDarkGrey:"#80808096",transparentGrey:"#A2A2A232",transparentRed:"#EC520B20",transparentBlue:"#0080FF20",transparentOrange:"#F8A32C20"};o.transparentColors=_;var E={textPrimary:"#282828",textSecondary:"#808080",textDisabled:"#A2A2A2",textReversed:"#FFFFFF",bgPrimary:"#FFFFFF",bgSecondary:"#F4F4F4",bgDisabled:"#808080",bgInverted:"#282828"};o.lightColors=E;var B={textPrimary:"#F4F4F4",textSecondary:"#A2A2A2",textDisabled:"#808080",textReversed:"#282828",bgPrimary:"#1C1C1C",bgSecondary:"#282828",bgDisabled:"#4E4E4E",bgInverted:"#F4F4F4"};o.darkColors=B;var ne={light:i(i(i(i(i({},C),P),_),E),j),dark:i(i(i(i(i({},C),P),_),B),j)};o.colors=ne});var k=a(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.breakpoints=void 0;var oe=S(),ue=[768,960].map(oe.px);g.breakpoints=ue});var h=a(m=>{"use strict";Object.defineProperty(m,"__esModule",{value:!0});m.fonts=void 0;var ae={main:'-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, Arial, sans-serif',mono:"'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace"};m.fonts=ae});var G=a(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.theme=void 0;var ie=R(),se=k(),le=h(),ce={colors:ie.colors,breakpoints:se.breakpoints,fonts:le.fonts};v.theme=ce});var fe=a(u=>{"use strict";Object.defineProperty(u,"__esModule",{value:!0});Object.defineProperty(u,"Breakpoints",{enumerable:!0,get:function(){return I.Breakpoints}});Object.defineProperty(u,"Fonts",{enumerable:!0,get:function(){return U.Fonts}});Object.defineProperty(u,"Theme",{enumerable:!0,get:function(){return T.Theme}});Object.defineProperty(u,"ThemeColors",{enumerable:!0,get:function(){return l.ThemeColors}});Object.defineProperty(u,"additionalColors",{enumerable:!0,get:function(){return l.additionalColors}});Object.defineProperty(u,"breakpoints",{enumerable:!0,get:function(){return I.breakpoints}});Object.defineProperty(u,"colors",{enumerable:!0,get:function(){return l.colors}});Object.defineProperty(u,"darkColors",{enumerable:!0,get:function(){return l.darkColors}});Object.defineProperty(u,"fonts",{enumerable:!0,get:function(){return U.fonts}});Object.defineProperty(u,"legacyColors",{enumerable:!0,get:function(){return l.legacyColors}});Object.defineProperty(u,"lightColors",{enumerable:!0,get:function(){return l.lightColors}});Object.defineProperty(u,"mainColors",{enumerable:!0,get:function(){return l.mainColors}});Object.defineProperty(u,"theme",{enumerable:!0,get:function(){return T.theme}});Object.defineProperty(u,"transparentColors",{enumerable:!0,get:function(){return l.transparentColors}});var l=R(),T=G(),I=k(),U=h()});export{O as a,q as b,M as c,D as d,S as e,fe as f};
