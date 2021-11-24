"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2078],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4328:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={},s=void 0,l={unversionedId:"smart-contracts/test/TestStrategy",id:"version-0.4.2/smart-contracts/test/TestStrategy",isDocsHomePage:!1,title:"TestStrategy",description:"Functions",source:"@site/versioned_docs/version-0.4.2/smart-contracts/test/TestStrategy.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestStrategy",permalink:"/vaults/0.4.2/smart-contracts/test/TestStrategy",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/smart-contracts/test/TestStrategy.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"TestGuestList",permalink:"/vaults/0.4.2/smart-contracts/test/TestGuestList"},next:{title:"Token",permalink:"/vaults/0.4.2/smart-contracts/test/Token"}},u=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"name",id:"name",children:[]},{value:"_toggleDelegation",id:"_toggledelegation",children:[]},{value:"delegatedAssets",id:"delegatedassets",children:[]},{value:"_takeFunds",id:"_takefunds",children:[]},{value:"_toggleReentrancyExploit",id:"_togglereentrancyexploit",children:[]},{value:"_setWant",id:"_setwant",children:[]},{value:"ethToWant",id:"ethtowant",children:[]},{value:"estimatedTotalAssets",id:"estimatedtotalassets",children:[]},{value:"prepareReturn",id:"preparereturn",children:[]},{value:"adjustPosition",id:"adjustposition",children:[]},{value:"liquidatePosition",id:"liquidateposition",children:[]},{value:"prepareMigration",id:"preparemigration",children:[]},{value:"protectedTokens",id:"protectedtokens",children:[]},{value:"liquidateAllPositions",id:"liquidateallpositions",children:[]}]}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"_toggledelegation"},"_toggleDelegation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleDelegation(\n  ) public\n")),(0,i.kt)("h3",{id:"delegatedassets"},"delegatedAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"_takefunds"},"_takeFunds"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _takeFunds(\n  ) public\n")),(0,i.kt)("h3",{id:"_togglereentrancyexploit"},"_toggleReentrancyExploit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleReentrancyExploit(\n  ) public\n")),(0,i.kt)("h3",{id:"_setwant"},"_setWant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _setWant(\n  ) public\n")),(0,i.kt)("h3",{id:"ethtowant"},"ethToWant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function ethToWant(\n  ) public returns (uint256)\n")),(0,i.kt)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) public returns (uint256)\n")),(0,i.kt)("h3",{id:"preparereturn"},"prepareReturn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareReturn(\n  ) internal returns (uint256 _profit, uint256 _loss, uint256 _debtPayment)\n")),(0,i.kt)("h3",{id:"adjustposition"},"adjustPosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function adjustPosition(\n  ) internal\n")),(0,i.kt)("h3",{id:"liquidateposition"},"liquidatePosition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidatePosition(\n  ) internal returns (uint256 _liquidatedAmount, uint256 _loss)\n")),(0,i.kt)("h3",{id:"preparemigration"},"prepareMigration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareMigration(\n  ) internal\n")),(0,i.kt)("h3",{id:"protectedtokens"},"protectedTokens"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function protectedTokens(\n  ) internal returns (address[])\n")),(0,i.kt)("h3",{id:"liquidateallpositions"},"liquidateAllPositions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidateAllPositions(\n  ) internal returns (uint256 amountFreed)\n")))}d.isMDXComponent=!0}}]);