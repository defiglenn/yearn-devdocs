(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),i=(r(0),r(256)),c={},l={unversionedId:"smart-contracts/utils/ProxyFactoryInitializable",id:"smart-contracts/utils/ProxyFactoryInitializable",isDocsHomePage:!1,title:"ProxyFactoryInitializable",description:"Functions",source:"@site/docs/developers/v2/smart-contracts/utils/ProxyFactoryInitializable.md",sourceDirName:"smart-contracts/utils",slug:"/smart-contracts/utils/ProxyFactoryInitializable",permalink:"/v2/next/smart-contracts/utils/ProxyFactoryInitializable",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/developers/v2/smart-contracts/utils/ProxyFactoryInitializable.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"TokenNoReturn",permalink:"/v2/next/smart-contracts/test/TokenNoReturn"},next:{title:"Vault.vy",permalink:"/v2/next/smart-contracts/vault"}},o=[{value:"Functions",id:"functions",children:[{value:"deployMinimal",id:"deployminimal",children:[]},{value:"_getRevertMsg",id:"_getrevertmsg",children:[]},{value:"slice",id:"slice",children:[]}]},{value:"Events",id:"events",children:[{value:"ProxyCreated",id:"proxycreated",children:[]}]}],b={toc:o};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"deployminimal"},"deployMinimal"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function deployMinimal(\n  ) external returns (address proxy, bytes returnData)\n")),Object(i.b)("h3",{id:"_getrevertmsg"},"_getRevertMsg"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function _getRevertMsg(\n    bytes _res\n  ) internal returns (string)\n")),Object(i.b)("p",null,"This is needed in order to get the human-readable revert message from a call"),Object(i.b)("p",null,"Get the revert message from a call"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"_res")),Object(i.b)("td",{parentName:"tr",align:"left"},"bytes"),Object(i.b)("td",{parentName:"tr",align:"left"},"Response of the call")))),Object(i.b)("h4",{id:"return-values"},"Return Values:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"Revert")),Object(i.b)("td",{parentName:"tr",align:"left"},"bytes"),Object(i.b)("td",{parentName:"tr",align:"left"},"message string")))),Object(i.b)("h3",{id:"slice"},"slice"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function slice(\n  ) internal returns (bytes)\n")),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("h3",{id:"proxycreated"},"ProxyCreated"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  event ProxyCreated(\n  )\n")))}s.isMDXComponent=!0},256:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return r?a.a.createElement(m,l(l({ref:t},b),{},{components:r})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);