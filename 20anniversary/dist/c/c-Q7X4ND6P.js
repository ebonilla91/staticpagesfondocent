import"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var r={props:{value:{},options:{type:Function,default:()=>[]},inputClass:{type:String,default:"form-input"},isDesktop:{type:Boolean,default:!1},callback:{type:Function,default:()=>{}}},data(){return{isOpened:!1,selectOptions:this.options()}},computed:{caption:function(){let e=this.selectOptions.find(o=>o.value===this.value);return e?e.caption:void 0},inputClassObj:function(){return{[this.inputClass]:this.inputClass,selected:this.value!=="default"}}},methods:{onClick:function(){this.isDesktop&&(this.isOpened=!this.isOpened)},onChange:function(e){this.$emit("change",e.target.value),this.callback(e.target.value)},onItemClick:function(e){this.isOpened=!this.isOpened,this.$emit("change",e.value),this.callback(e.value)}}},c=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"rm-native-select-container",attrs:{role:"combobox","aria-expanded":e.isOpened}},[t("input",{staticClass:"rm-native-fake-select",class:e.inputClassObj,attrs:{type:"text",readonly:"readonly",tabindex:"-1"},domProps:{value:e.caption},on:{click:e.onClick}}),e._v(" "),t("div",{staticClass:"expand-arrow"},[t("svg",{attrs:{width:"10px",height:"7px",viewBox:"0 0 10 7",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[t("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{transform:"translate(-1110.000000, -138.000000)",fill:"#FFFFFF"}},[t("g",{attrs:{transform:"translate(904.000000, 101.000000)"}},[t("path",{attrs:{d:"M208.385799,39.7407434 L212.849209,35.914964 C213.268534,35.5555419 213.899834,35.6041034 214.259257,36.0234293 C214.414608,36.2046724 214.5,36.4355094 214.5,36.6742206 L214.5,44.3257794 C214.5,44.8780641 214.052285,45.3257794 213.5,45.3257794 C213.261289,45.3257794 213.030452,45.2403872 212.849209,45.085036 L208.385799,41.2592566 C207.966474,40.8998345 207.917912,40.2685345 208.277334,39.8492086 C208.310659,39.8103298 208.346921,39.7740681 208.385799,39.7407434 Z",transform:"translate(211.000000, 40.500000) scale(-1, -1) rotate(-270.000000) translate(-211.000000, -40.500000) "}})])])])])]),e._v(" "),e.isDesktop?e._e():t("select",{staticClass:"rm-native-select",on:{change:function(n){return e.onChange(n)}}},e._l(e.selectOptions,function(n){return t("option",{key:n.value,staticClass:"rm-native-select-item",domProps:{value:n.value}},[e._v(`
      `+e._s(n.caption)+`
    `)])}),0),e._v(" "),e.isDesktop?t("div",{staticClass:"rm-native-select-popup",class:{opened:e.isOpened},attrs:{role:"listbox"}},e._l(e.selectOptions,function(n){return t("div",{key:n.value,staticClass:"rm-native-select-popup-item",class:{current:n.value===e.value},on:{click:function(a){return e.onItemClick(n)}}},[e._v(`
      `+e._s(n.caption)+`
    `)])}),0):e._e()])},l=[],d=void 0,p="data-v-1091c8e2",u=void 0,v=!1;function _(e,o,t,n,a,h,m,x,g,b){let i=(typeof t=="function"?t.options:t)||{};return i.__file="rm-native-select.vue",i.render||(i.render=e.render,i.staticRenderFns=e.staticRenderFns,i._compiled=!0,a&&(i.functional=!0)),i._scopeId=n,i}var f=_({render:c,staticRenderFns:l},d,r,p,v,u,!1,void 0,void 0,void 0),I=f;export{I as default};
