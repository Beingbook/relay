(self.webpackChunk=self.webpackChunk||[]).push([[43329],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(r),y=o,d=f["".concat(c,".").concat(y)]||f[y]||u[y]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7892:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>f});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],p={},c=void 0,s={unversionedId:"api-reference/types/Disposable",id:"api-reference/types/Disposable",isDocsHomePage:!1,title:"Disposable",description:"Interface Disposable",source:"@site/docs/api-reference/types/Disposable.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/Disposable",permalink:"/docs/next/api-reference/types/Disposable",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/types/Disposable.md",version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1641616696,formattedLastUpdatedAt:"1/8/2022",frontMatter:{}},l=[],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"interface-disposable"},"Interface ",(0,a.kt)("inlineCode",{parentName:"h4"},"Disposable")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An object with the following key:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dispose"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"() => void"),". Disposes of the resource.")))))}f.isMDXComponent=!0}}]);