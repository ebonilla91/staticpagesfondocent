import{a as $,b as I}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-CBJ3GPOZ.js";import{a as S,b as D}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-DQLWRJ6O.js";import{c as k,d as U}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-G2CN6UBK.js";import{B as R,tb as O,ub as V,w as y}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-Z63DEK6E.js";import{n as w,o as F}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-PJF6UIFY.js";import{a as P}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-CHUQBVQY.js";import{a as p,b as j,c as _,d as B}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-QQSGI2X4.js";import{b as W}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BWC6YUQZ.js";import{a as H}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BHCSVH3M.js";import{a as M}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-L5GBYYT7.js";import{a as x,d as L}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var T,A=x(()=>{"use strict";D();T={"template-viewer-widget":S`
	<div class="rmwidget" data-id="<%-id%>"></div>
`}});var Z,z,E=x(()=>{"use strict";Z=i=>{let t;switch(i){case"Drag/WidgetRendered":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-JRIT6S2W.js");break;case"Drag/PointerDown":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-6TLCQXTG.js");break;case"Drag/PointerUp":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-F7JCUKJC.js");break;case"Drag/PointerMove":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-GTCYLV6E.js");break;case"Drag/DragStart":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-KRMZIX6F.js");break;case"Drag/TouchEnd":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-NG6NPZZT.js");break;case"Cursor/WidgetRendered":t=import("https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-EU664UBD.js");break;default:t=new Promise((e,s)=>s(new Error("try get unknown handler")))}return t},z=Z});var v,C,f,N,G,lt,X=x(()=>{"use strict";v=L(H()),C=L(P()),f=L(M());A();I();V();j();U();B();F();R();W();E();N=1,G=C.default.View.extend({template:T["template-viewer-widget"],initialize:function(i,t,e){return f.default.bindAll(this),f.default.extend(this,C.default.Events),this.updateWidgetData(i,t,e),this.initStaticModifiers(),t.getPageViewport()!=="default"&&this.sticked!=="bottom"&&(this.sticked=void 0),this.destroyed=!1,this.$document=(0,v.default)(document),this._id=this._id||N++,this.initModifiersWithEventHandlers(),this},render:function(){return this.makeBox("some-widget-class"),this.rendered=!0,this.checkLink(),this},redraw:function(){return this.checkLink(),this.redrawShadow(),this},redrawShadow:function({shadow:i=this.shadow,isShadowEnabled:t=this.isShadowEnabled,useTransition:e,transition:s="filter .1s",initialRender:r=!1}={}){t&&i&&window.requestAnimationFrame(()=>{let g=r&&i.fadeOnHover?"ffffff00":i.color,m=["video","iframe"].includes(this.type)?"auto":"filter, scroll-position, contents";this.$el.css({...y({...i,color:g}),willChange:m,transition:e?s:""})})},generateCursorStyle:function(){let i=this.cursor,t="";return i&&(this.cursorUrlIsLambda&&this.cursorImageDimension?t=`-webkit-image-set(url('${i}?w=${Math.round(this.cursorImageDimension/2)}') 1x, url('${i}') 2x), auto`:t=`url('${i}'), auto`),t},updatePage:function(i){let t=this.page;(!t||i&&t.num!==i.num)&&(this.page=i,this.redraw())},canRenderImmediately:function(){return!!this.DO_NOT_WAIT_FOR_PRELOAD},widgetIsLoaded:function(){this.loaded||this.destroyed||(this.loaded=!0,this.started&&this.start(),this.trigger("loaded"))},isValid:function(){return!0},hasFontsToLoad:function(){return!1},seamlessFontsShow:function(i,t){if($.isFastFontLoadCheckAvailable()&&!RM.screenshot&&!this.insideHotspot&&this.hasFontsToLoad()){t();let e=function(){window.requestAnimationFrame(i)},s=function(){i()};this.makeSureFontsLoaded().then(e).catch(s)}},makeSureFontsLoaded:function(){let i=this.page.getFontsVariations([this],!0),t=[];return f.default.each(i,function(e){try{let s=$.fastWaitForFontLoad(e.fontFamily,e.fontWeight,e.fontStyle);t.push(s)}catch(s){console.error("Font checking error",s)}}),window.Promise.all(t)},hasAnimation:function(){return!!this.getAnimations().find(i=>!k.isEmpty(i))},hasLoadAnimation:function(){return!!this.getAnimations().find(i=>i.type==="load")},initStaticModifiers(){this.modifiers?.length&&this.modifiers.forEach(i=>{if(i.static?.length&&i.static.forEach(t=>{t.modelField&&t.value!==void 0&&(this[t.modelField]=t.templateValue?t.templateValue.replace("#fieldValue",t.value):t.value)}),i.id==="cursor"){let t=this.generateCursorStyle();t&&(this.cursorStyle=t)}})},initModifiersWithEventHandlers(){if(this.modifiers?.length){let i={};if(this.modifiers.forEach(t=>{t.events?.length&&t.events.forEach(e=>{let s=z(e.eventHandler);i[e.eventName]||(i[e.eventName]={global:[],isGlobalLoaded:!1,element:[],isElementLoaded:!1}),i[e.eventName][e.isGlobal?"global":"element"].push(s)})}),!f.default.isEmpty(i)){this.modifiersHandlers={};for(let t in i)i[t]&&(this.modifiersHandlers[t]={global:[],element:[]},i[t].element.length?Promise.all(i[t].element).then(e=>{this.modifiersHandlers[t].element=e,i[t].isElementLoaded=!0,this.checkAllHandlersLoadStatus(i)}):(i[t].isElementLoaded=!0,this.checkAllHandlersLoadStatus(i)),i[t].global.length?Promise.all(i[t].global).then(e=>{this.modifiersHandlers[t].global=e,i[t].isGlobalLoaded=!0,this.checkAllHandlersLoadStatus(i)}):(i[t].isGlobalLoaded=!0,this.checkAllHandlersLoadStatus(i)))}}},checkAllHandlersLoadStatus(i){let t=Object.keys(i),e=0,s=0;t.forEach(r=>{s+=1,i[r]?.isElementLoaded&&i[r]?.isGlobalLoaded&&(e+=1)}),s&&e&&e===s&&(this.modifiersHandlersLoaded=!0,this.trigger("modifiers.handlers.loaded"))},addModifierEventListener(i){this[`on${i}`]||(this[`on${i}`]=(t,e)=>{this.modifiersHandlers?.[i]?.[t]?.length&&this.modifiersHandlers[i][t].forEach(s=>{s.default&&s.default({widget:this,e})})})},startModifiersEventListeners(){if(!(!this.modifiersHandlers||this.modifiersEventListenersAdded)){if(!this.rendered){this.once("rendered",()=>this.startModifiersEventListeners());return}this.modifiersEventListenersAdded=!0;for(let i in this.modifiersHandlers){let t=this.modifiersHandlers[i];if(!this[`on${i}`]&&(t?.element?.length||t?.global?.length)&&this.addModifierEventListener(i),t?.element?.length)switch(i){case"rendered":this[`on${i}`]("element");break;default:this.$el[0]?.addEventListener(i,this[`on${i}`].bind(this,"element"))}if(t?.global?.length)switch(i){case"pointermove":this.mag.globalEvents?.on({id:this._id,eventHandler:this[`on${i}`].bind(this,"global")});break;default:window.addEventListener(i,this[`on${i}`].bind(this,"global"))}}}},stopModifiersEventListeners(){if(!(!this.modifiersHandlers||!this.modifiersEventListenersAdded)){this.modifiersEventListenersAdded=!1;for(let i in this.modifiersHandlers){let t=this.modifiersHandlers[i];if(t?.element?.length&&this.$el[0]?.removeEventListener(i,this[`on${i}`]),t?.global?.length)switch(i){case"pointermove":this.mag.globalEvents?.off({id:this._id,eventHandler:this[`on${i}`]});break;default:window.removeEventListener(i,this[`on${i}`])}}}},start:function(){return this.started=!0,this.modifiersHandlersLoaded?this.startModifiersEventListeners():this.once("modifiers.handlers.loaded",()=>this.startModifiersEventListeners()),this},stop:function(){return this.started=!1,this.modifiersHandlersLoaded?this.stopModifiersEventListeners():this.once("modifiers.handlers.loaded",()=>this.stopModifiersEventListeners()),this},hide:function(){return this.stop(),this.$el.hide(),this.wasHidden=!0,this.trigger("hidden"),this},show:function(){return this.$el.show(),this.start(),this.wasHidden=!1,this.trigger("shown"),this},destroy:function(){return this.stop(),this.destroyed=!0,this.trigger("destroyed"),delete this.animationObj,this.$el.off(),this.remove()},softBringToTopZ(){let t=(this.is_above?this.mag.aboveGlobalWidgets:this.page.widgets)?.reduce((s,r)=>r.z&&r.z>s?r.z:s,this.z),e=this.z===t?this.z:t+1;return this.animationObj?this.animationObj.getAnimationContainer().css("z-index",e):this.$el.css("z-index",e),Number(e)},BringToTopZ:function(){if(this.animationObj){let i=this.animationObj.getAnimationContainer();this.animationObj.resetTimeout&&clearTimeout(this.animationObj.resetTimeout),this.animationObj.savedAnimationContainerZIndex||(this.animationObj.savedAnimationContainerZIndex=i.css("z-index")),i.css("z-index",99999+this.z)}this.$el.css("z-index",99999+this.z)},BackToNormalZ:function(){let i=function(){this.animationObj&&this.animationObj.savedAnimationContainerZIndex&&(this.animationObj.getAnimationContainer().css("z-index",this.animationObj.savedAnimationContainerZIndex||this.z),delete this.animationObj.savedAnimationContainerZIndex),delete this.animationObj.resetTimeout}.bind(this);this.animationObj&&this.animationObj.savedAnimationContainerZIndex&&(this.animationObj.resetTimeout&&clearTimeout(this.animationObj.resetTimeout),this.animationObj.resetTimeout=setTimeout(i,200)),this.$el.css("z-index",this.z)},makeBox:function(i){this.setElement(this.template({id:this._id}));let t=this.fixed_position?this.$fixedContainer:this.$pageContainer;this.animationObj&&(t=this.animationObj.getAnimationContainer()),this.$el.appendTo(t).addClass(i).toggleClass("full-width",!!this.is_full_width).toggleClass("full-height",!!this.is_full_height).toggleClass("inside-hotspot",!!this.insideHotspot).toggleClass("use-free-position",!!this.useFreePosition),this.applyBoxStyle({onFirstRender:!0}),this.redrawShadow({initialRender:!0}),(this.is_full_width||this.is_full_height||this.fixed_position||this.sticked)&&this.listenTo(this.page,"resize",this.onPageResize),this.trigger("rendered")},onPageResize:function(){this.applyBoxStyle()},calcBoxStyle:function(i){i=i||{};let t={left:this.x,top:this.y,width:this.w,height:this.h,right:"",bottom:"","margin-left":"","margin-top":"","z-index":this.z||1},e=this.page.mag.getContainerSizeCached(),s=parseInt(this.full_width_margin,10)||0,r=parseInt(this.full_height_margin,10)||0,g=parseInt(this.sticked_margin,10)||0,n=this.page.scale,m=e.width,d=m-e.windowClientWidth,a=this.fixed_position,c,l=this.page.getCachedSizes();if(this.angle&&(t.width=Math.round(this.w),t.height=Math.round(this.h),this.angle%90==0&&t.width%2!==t.height%2&&(t.width+=1)),this.is_full_height&&(t.top=-this.page.contentPosition.top+r,a?(t.top=r/n,t.height=e.windowClientHeight/n-r*2,["nw","w","sw"].indexOf(a)>-1&&(a="nw"),["n","c","s"].indexOf(a)>-1&&(a="n"),["ne","e","se"].indexOf(a)>-1&&(a="ne")):t.height=this.page.pageHeight/n-r*2),this.is_full_width){let h=this.page.mag.getViewportWidth(this.page.pageViewport);if(t.left=-this.page.contentPosition.left+s,t.width=e.width/n-s*2,c=-((t.width-this.page.$content[0].clientWidth)/2).toFixed(3),p.isOn(this.page.pageViewport,h,this.mag.viewOpts)&&e.width>this.mag.viewOpts.scalewidth&&(Modernizr.msie11?(c=-(m-this.page.$content[0].clientWidth)/2-d/2,t.left=c/n):Modernizr.firefox?(t.width=t.width+1,t.left=c-1):t.left=c),a){if(t.left=s,this.page.viewerType=="horizontal"){let b=l.scrollWrapperWidth-l.scrollWrapperClientWidth;t.width-=b/n}["nw","n","ne"].indexOf(a)>-1&&(a="nw"),["w","c","e"].indexOf(a)>-1&&(a="w"),["sw","s","se"].indexOf(a)>-1&&(a="sw")}}if(this.sticked){let h=0;this.page.viewerType=="horizontal"&&(h=l.scrollWrapperWidth-l.scrollWrapperClientWidth),this.sticked=="left"&&(t.left=-this.page.contentPosition.left/n+g),this.sticked=="right"&&(t.left=this.page.mag.getContainerSizeCached().width/n-g-this.w-this.page.contentPosition.left/n-h/n),this.sticked=="top"&&(t.top=-this.page.contentPosition.top/n+g),this.sticked=="bottom"&&(t.top=l.contentContainerHeight-g-this.h+this.page.contentPosition.top/n)}if(i.calcBBox){a&&(t.left*=n,t.top*=n,t.width*=n,t.height*=n),t.sinAngle=Math.sin(-(this.angle||0)*Math.PI/180),t.cosAngle=Math.cos(-(this.angle||0)*Math.PI/180);let h=_.calcBoundingBox(t,a);return t.width=h.bb_width,t.height=h.bb_height,t.left=h.bb_left,t.top=h.bb_top,a&&f.default.extend(t,w.getFixedPositionCSS(a,t,1)),{dimensions:t}}if(a){let h=this.page.mag.getViewportWidth(this.page.pageViewport);f.default.extend(t,w.getFixedPositionCSS(a,t,p.normalize(n,"transform",this.page.pageViewport,h,this.mag.viewOpts))),p.isOn(this.page.pageViewport,h,this.mag.viewOpts)&&p.isCSSZoom()&&(t.zoom=n)}let o={rotate:this.angle?this.angle+"deg":"",scaleX:this.flip_h?-1:1,scaleY:this.flip_v?-1:1};if(a){let h=this.page.mag.getViewportWidth(this.page.pageViewport),b=p.normalize(n,"transform",this.page.pageViewport,h,this.mag.viewOpts);o.scaleX*=b,o.scaleY*=b}if(Math.abs(o.scaleX-1)<1e-6&&(o.scaleX=""),Math.abs(o.scaleY-1)<1e-6&&(o.scaleY=""),this.isDraggable&&this.$el){let h=w.getElementTranslateByString(this.$el[0]);(h.x||h.y)&&(o.translate=`${h.x}px, ${h.y}px`)}let u={};return this.cursorStyle&&(u.cursor=this.cursorStyle),{dimensions:t,decorations:u,transform:o}},applyBoxStyle:function(i){if(this.isDragging)return;let t=this.calcBoxStyle();this.isDraggable&&!i?.onFirstRender&&delete t.dimensions["z-index"],this.animationObj&&(t=this.animationObj.modifyWidgetPosition(t)),this.$el.css(t.dimensions),f.default.isEmpty(t.decorations)||this.$el.css(t.decorations);let e=f.default.map(t.transform,function(s,r){return s?r+"("+s+")":""}).join(" ");w.applyTransform(this.$el,v.default.trim(e))},calcDistsToPageVisibleBounds:function(){let i,t=this.page.mag.getContainerSizeCached(),e=p.isOnForRatio(this.page.pageViewport,this.page.scale,this.mag.viewOpts)&&p.isCSSZoom()?p.getBox(this.$el[0],this.page.scale):this.$el[0].getBoundingClientRect(),s=this.page.mag.isPreview?this.page.mag.$mag_container[0].getBoundingClientRect():{top:0,left:0},r=(e.top+e.height/2-s.top)/this.page.scale,g=(t.height-(e.top+e.height/2-s.top))/this.page.scale,n=(e.left+e.width/2-s.left)/this.page.scale,m=(t.width-(e.left+e.width/2-s.left))/this.page.scale;if(this.fixed_position){let c=this.page.$el[0].getBoundingClientRect();var d=(e.top+e.height/2-c.top)/this.page.scale,a=(c.height-(e.top+e.height/2-c.top))/this.page.scale;i={left:Math.max(0,n),right:Math.max(0,m),top:Math.max(0,Math.min(r,d)),bottom:Math.max(0,Math.min(g,a))}}else{let c=this.page.contentPosition.left/this.page.scale,l=this.page.contentPosition.top/this.page.scale,o=this.x+this.w/2,u=this.y+this.h/2;var d=u+l,a=this.page.contentHeight-u+l;i={left:Math.max(0,o+c),right:Math.max(0,this.page.pageWidth-o+c),top:Math.max(0,Math.min(r,d)),bottom:Math.max(0,Math.min(g,a))}}return i},checkLink:function(){let i={};if(!this.clickLink)return;this.clickLink=this.page.mag.matchSameDomainLink(this.clickLink);let t=/^(.*):\/\/[^\s$.?#].[^\s]*$/i.test(this.clickLink)||/^mailto\:/i.test(this.clickLink)||/^tel\:/i.test(this.clickLink),e=/^__rm_goback$/i.test(this.clickLink),s=this.mailchimpMatcher.test(this.clickLink),r=this.anchorRegexp.test(this.clickLink),g=this.shareRegexp.test(this.clickLink);var n=this.clickLink,m=O.getClickTarget(this.clickTarget),d=t?"external-link":e?"goback-link":"maglink";if(s&&(d="mailchimp-link"),r&&(d="anchor-link"),g&&(d="share-link"),!t){let o=n;/^back\sto\stop$/i.test(n)&&(o=this.page._id);var a=this.page.mag.getPageNum(o),n=a&&this.page.mag.getPageUri?"/"+this.page.mag.getPageUri(o):"javascript:void(0)";a||(n=""),o==this.page._id&&(d+=" back-to-top",this.is_global&&(d+=" current"))}if(e&&(n="javascript:void(0)"),s){n="javascript:void(0)";let o=this.clickLink.match(this.mailchimpMatcher)[1];i["data-mailchimp"]=o}if(r){n="javascript:void(0)",i["data-anchor-link-pos"]=this.anchor_link_pos;let o=f.default.findWhere(this.mag.pages,{_id:this.clickPage})||this.page;i["data-page-uri"]=o.uri||o.num}if(g){n="javascript:void(0)";let o=this.clickLink.match(this.shareRegexp);i["data-share-provider"]=o[1],i["data-share-type"]=o[2]}if((n.indexOf("mailto")==0||n.indexOf("tel")==0)&&(m=""),!n)return;(this.insideHotspot?typeof this.closeTip=="boolean"?this.closeTip:!0:!1)&&(d+=" close-tip-on-click"),f.default.extend(i,{class:d,href:n,target:m});let l=this.$el.parent("a");l.length?l.attr(i):(l=(0,v.default)("<a>").attr(i),this.$el.wrap(l)),!t&&RM.screenshot&&(l=this.$el.parent("a"),l.removeAttr("href"))},updateWidgetData:function(i,t,e){f.default.extend(this,i,i.params),this.page=t,this.mag=this.page.mag,this.$pageContainer=e||this.page.$content,this.x=this.x||0,this.y=this.y||0},getAnimations(){return k.normalizeAnimations(this.animation)},getAnimationTriggers:function(i){let t=this.getAnimations().find(e=>e.UUID===i);return k.normalizeAnimationTriggers(t&&t.trigger)},isGlobal:function(){return!!this.is_global},isAbove:function(){return!!this.is_above}}),lt=G});export{lt as a,X as b};
