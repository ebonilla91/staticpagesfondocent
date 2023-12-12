import{a as O}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-I4FBAQQB.js";import{a as A}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-X4WAQTSE.js";import{f as M}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-U3EQ6JVM.js";import{a as G,e as p,f}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-4FR22MFU.js";import{I as g,J as _}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-BPJUKUAP.js";import{a as b}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-WSIFDYHJ.js";import{b as i,e as o}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";var P=i(l=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0});l.GlobalStyle=H;var D=A(),a=M(),E=(_(),o(g));function H(){return(0,E.jsx)("style",{dangerouslySetInnerHTML:{__html:(0,D.minifyCSSString)(`
          html, body {
            width: 100%;
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: `.concat(a.theme.fonts.main,`;
            color: `).concat(a.theme.colors.light.textPrimary,`;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            -webkit-font-smoothing: antialiased;
          }

          * ::selection {
            background-color: `).concat(a.theme.colors.light.gray,`;
          }

          a, button, label, div, span, input, *:hover {
            -webkit-tap-highlight-color: rgba(0,0,0,0);
          }

          h1, h2, h3, h4, h5 {
            margin: 0;
          }
        `))}})}});var c=i(t=>{"use strict";var I=G();Object.defineProperty(t,"__esModule",{value:!0});t.RMThemeProvider=B;t.ThemeContext=void 0;var L=I(O()),T=b(),$=(f(),o(p)),m=M(),z=P(),s=(_(),o(g)),q=(0,T.createContext)({themeType:"light",setThemeType:function(){}});t.ThemeContext=q;function B(e){var r=e.defaultTheme,x=e.children,u=e.overrideTheme,v=e.withGlobalStyles,j=v===void 0?!0:v,k=(0,T.useState)(r??"light"),y=(0,L.default)(k,2),h=y[0],w=y[1],C=(0,T.useMemo)(function(){return u??{colors:m.theme.colors[h],breakpoints:m.theme.breakpoints,fonts:m.theme.fonts}},[h]);return(0,s.jsx)(q.Provider,{value:{themeType:h,setThemeType:w},children:(0,s.jsxs)($.ThemeProvider,{theme:C,children:[j&&(0,s.jsx)(z.GlobalStyle,{}),x]})})}});var S=i(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.useRMTheme=N;var F=b(),J=(f(),o(p)),K=c();function N(){var e=(0,F.useContext)(K.ThemeContext),r=(0,J.useTheme)();if(!e)throw new Error("useTheme hook must be used inside the RMThemeProvider.");return{theme:r,themeType:e.themeType,setThemeType:e.setThemeType}}});var U=i(n=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});Object.defineProperty(n,"RMThemeProvider",{enumerable:!0,get:function(){return R.RMThemeProvider}});Object.defineProperty(n,"ThemeType",{enumerable:!0,get:function(){return R.ThemeType}});Object.defineProperty(n,"useRMTheme",{enumerable:!0,get:function(){return Q.useRMTheme}});var R=c(),Q=S()});export{U as a};
