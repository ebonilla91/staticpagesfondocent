import{a as B}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-WSIFDYHJ.js";import{a as F,d as z}from"https://d1id5eheivyv24.cloudfront.net/98c7974b/dist/c/c-IDSWT3EJ.js";function L(A,n,i){var R=this,a=(0,r.useRef)(null),o=(0,r.useRef)(0),u=(0,r.useRef)(null),v=(0,r.useRef)([]),m=(0,r.useRef)(),s=(0,r.useRef)(),C=(0,r.useRef)(A),k=(0,r.useRef)(!0);C.current=A;var d=!n&&n!==0&&typeof window<"u";if(typeof A!="function")throw new TypeError("Expected a function");n=+n||0,i=i||{};var D=!!i.leading,I="trailing"in i?!!i.trailing:!0,l="maxWait"in i,b=l?Math.max(+i.maxWait||0,n):null,g=(0,r.useCallback)(function(e){var t=v.current,c=m.current;return v.current=m.current=null,o.current=e,s.current=C.current.apply(c,t)},[]),f=(0,r.useCallback)(function(e,t){d&&cancelAnimationFrame(u.current),u.current=d?requestAnimationFrame(e):setTimeout(e,t)},[d]),x=(0,r.useCallback)(function(e){if(!k.current)return!1;var t=e-a.current,c=e-o.current;return!a.current||t>=n||t<0||l&&c>=b},[b,l,n]),p=(0,r.useCallback)(function(e){return u.current=null,I&&v.current?g(e):(v.current=m.current=null,s.current)},[g,I]),h=(0,r.useCallback)(function(){var e=Date.now();if(x(e))return p(e);var t=e-a.current,c=e-o.current,T=n-t,j=l?Math.min(T,b-c):T;f(h,j)},[b,l,x,f,p,n]),E=(0,r.useCallback)(function(){u.current&&(d?cancelAnimationFrame(u.current):clearTimeout(u.current)),o.current=0,v.current=a.current=m.current=u.current=null},[d]),S=(0,r.useCallback)(function(){return u.current?p(Date.now()):s.current},[p]);(0,r.useEffect)(function(){return k.current=!0,function(){k.current=!1}},[]);var W=(0,r.useCallback)(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var c=Date.now(),T=x(c);if(v.current=e,m.current=R,a.current=c,T){if(!u.current&&k.current)return o.current=a.current,f(h,n),D?g(a.current):s.current;if(l)return f(h,n),g(a.current)}return u.current||f(h,n),s.current},[g,D,l,x,f,h,n]),y=(0,r.useCallback)(function(){return!!u.current},[]),q=(0,r.useMemo)(function(){return{callback:W,cancel:E,flush:S,pending:y}},[W,E,S,y]);return q}var r,M=F(()=>{"use strict";r=z(B())});var G=F(()=>{"use strict";M()});export{L as a,G as b};
