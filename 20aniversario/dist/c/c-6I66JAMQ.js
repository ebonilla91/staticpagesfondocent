import{a as i,f as p}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var e,o,c=i(()=>{"use strict";e=class e{static loadImage(a){return new Promise(s=>{let A=new Image;A.onload=()=>{s(A.width>0&&A.height>0)},A.onerror=()=>s(!1),A.src=a})}static async checkFormatSupport(a){if(!a)return!1;let s={webpLossy:"data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",webpLossless:"data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",webpAlpha:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",webpAnimation:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",jp2:"data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="};switch(a.toLowerCase()){case"webp":{let A=[];A.push(e.loadImage(s.webpLossy)),A.push(e.loadImage(s.webpLossless)),A.push(e.loadImage(s.webpAlpha)),A.push(e.loadImage(s.webpAnimation));let t=await Promise.all(A).catch(r=>!1);return!!(t&&Array.isArray(t)&&t.length&&t.every(r=>r===!0))}case"jp2":case"jpeg2000":return await e.loadImage(s.jp2).catch(A=>!1)}return!1}static async setSupportedFormats(){let a=typeof Modernizr<"u"&&Modernizr.safari?["jp2"]:["webp"],s=[];a.forEach(t=>{s.push(e.checkFormatSupport(t))}),(await Promise.all(s).catch(t=>{})||[]).forEach((t,r)=>{t===!0&&a[r]&&e.supportedImageFormats.push(a[r])})}static isSupported(a){return!a||!e.supportedImageFormats.length?!1:e.supportedImageFormats.includes(a.toLowerCase())}};p(e,"supportedImageFormats",[]);o=e});export{o as a,c as b};
