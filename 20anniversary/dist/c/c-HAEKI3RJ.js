import{a as w}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-V2UNE6ZB.js";import{a as P}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-LV5FH5B7.js";import{b as q,d as B}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-LMXYD7AC.js";import{f as M}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-U3EQ6JVM.js";import{a as x}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-4FR22MFU.js";import{a as C}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-42FJTMOJ.js";import{b as m}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var y=m(n=>{"use strict";var h=x();Object.defineProperty(n,"__esModule",{value:!0});n.default=n.Button=n.BigButton=void 0;var b=h(P()),f=q(),p=B(),t=M(),R=h(w()),v,g,c=R.default.withComponent((0,p.styled)("button")(v||(v=(0,b.default)([`
  border: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background: transparent;
  transition: 0.1s color;
  cursor: pointer;
  color: inherit;

  font-family: `,`;

  &:active,
  &:focus {
    outline: none;
  }

  `,`;

  &:disabled {
    opacity: 0.4;
  }

  `,`
`])),function(e){var r=e.theme;return r.fonts.main},function(e){var r=e.disabled;return r?"pointer-events: none;":""},(0,p.variant)({primary:{color:t.mainColors.red,"&:hover, &:focus":{color:t.mainColors.black}},secondary:{color:t.mainColors.black,"&:hover, &:focus":{color:t.mainColors.red,"& path":{fill:t.mainColors.red}}},tertiary:{color:t.mainColors.gray,"&:hover, &:focus":{color:t.mainColors.red,"& path":{fill:t.mainColors.red}}},bordered:{color:t.mainColors.black,"&:hover, &:focus":{color:t.mainColors.red,"& svg":{color:t.mainColors.red},"& path":{fill:t.mainColors.red}},border:"1px solid ".concat((0,f.transparentize)(.92,t.mainColors.black)),borderRadius:"8px","&:disabled":{opacity:"1 !important",color:"".concat((0,f.transparentize)(.6,t.mainColors.black)),border:"1px solid ".concat((0,f.transparentize)(.92,t.mainColors.black))}},unstyled:{},clean:{"&:hover,&:focus":{opacity:.8}}})),{target:"et42ndt0"});n.Button=c;c.defaultProps={textStyle:"regular",variant:"secondary",margin:0,padding:0};var _=(0,p.styled)(c)(g||(g=(0,b.default)([`
  transition: color 0.1s, background 0.1s;

  margin-left: `,`;
  padding: `,`;
  background: `,`;
  @media (pointer: fine) {
    &:hover {
      color: `,`;
      background: `,`;
    }
  }
`])),function(e){return e.marginLeft!==void 0?e.marginLeft:"-34px"},function(e){return e.padding?e.padding:"8px 34px 18px"},function(e){var r=e.theme;return r.colors.lightGray},function(e){var r=e.theme;return r.colors.white},function(e){var r=e.theme;return r.colors.tomato});n.BigButton=_;_.defaultProps={textStyle:"heading",color:"tomato",borderRadius:40};var W=c;n.default=W});var z=m(l=>{"use strict";var D=C();Object.defineProperty(l,"__esModule",{value:!0});var k={};Object.defineProperty(l,"default",{enumerable:!0,get:function(){return d.default}});var d=N(y());Object.keys(d).forEach(function(e){e==="default"||e==="__esModule"||Object.prototype.hasOwnProperty.call(k,e)||e in l&&l[e]===d[e]||Object.defineProperty(l,e,{enumerable:!0,get:function(){return d[e]}})});function O(e){if(typeof WeakMap!="function")return null;var r=new WeakMap,o=new WeakMap;return(O=function(s){return s?o:r})(e)}function N(e,r){if(!r&&e&&e.__esModule)return e;if(e===null||D(e)!=="object"&&typeof e!="function")return{default:e};var o=O(r);if(o&&o.has(e))return o.get(e);var a={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var u=s?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(a,i,u):a[i]=e[i]}return a.default=e,o&&o.set(e,a),a}});export{z as a};
