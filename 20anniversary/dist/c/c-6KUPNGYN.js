import{b as a,c as E}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-ZD3644EK.js";import{a as i,b}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-TRPHXH4T.js";import{a as l,e as p,g as u}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-XOCVWU26.js";import{a as x}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-OWKND2N3.js";import{G as s,J as m}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BPJUKUAP.js";import{n,o as k}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-PJF6UIFY.js";import{a as A}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-CHUQBVQY.js";import{a as W}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-WSIFDYHJ.js";import{a as d,d as t}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";function R(){let{model:o}=(0,c.useContext)(l);return o.url?s(a,{url:o.url,socials:o.socials,artwork:o.artwork,type:o.current_type,color:o.color,comments:o.comments}):null}var c,f,g=d(()=>{"use strict";c=t(W());u();E();m();f=R});var h,w,r,z,S=d(()=>{h=t(A()),w=t(x());b();u();g();k();r=class extends i{initialize(e,y,C){this.model=new h.default.Model(e),i.prototype.initialize.apply(this,[e,y,C])}render(){return this.makeBox("audio"),n.loadScript("https://w.soundcloud.com/player/api.js",{cache:!0}).catch(()=>{}).finally(()=>{if(p({component:f,domElement:this.$el[0],model:this.model,onDestroy:()=>{let e=this.$el[0];w.default.unmountComponentAtNode(e),e&&e.parentNode&&e.parentNode.removeChild(e)}}),typeof window.SC<"u"){let e=window.SC.Widget(this.$el.find("iframe")[0]);e.bind(window.SC.Widget.Events.READY,this.widgetIsLoaded),e.bind(window.SC.Widget.Events.ERROR,this.widgetIsLoaded)}else this.widgetIsLoaded()}),this.rendered=!0,this}isValid(){return!!this.model.get("url")}},z=r});export{z as a,S as b};
