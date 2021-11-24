"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2894],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5480:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i={title:"Integration Methods"},l=void 0,s={unversionedId:"integration_guide",id:"integration_guide",isDocsHomePage:!1,title:"Integration Methods",description:"We propose two methods of integration, each used for different purposes. If you think of an integration method that is more ideal, we are open to accepting it.",source:"@site/docs/partners/integration_guide.md",sourceDirName:".",slug:"/integration_guide",permalink:"/partners/integration_guide",tags:[],version:"current",lastUpdatedBy:"DarkGhost",lastUpdatedAt:1631032741,formattedLastUpdatedAt:"9/7/2021",frontMatter:{title:"Integration Methods"},sidebar:"mySidebar",previous:{title:"Partnership Program",permalink:"/partners/introduction"},next:{title:"Submit a Pull Request",permalink:"/partners/submit_pr"}},p=[{value:"Wrapper",id:"wrapper",children:[]},{value:"Delegated Deposit",id:"delegated-deposit",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We propose two methods of integration, each used for different purposes. If you think of an integration method that is more ideal, we are open to accepting it."),(0,o.kt)("h2",{id:"wrapper"},"Wrapper"),(0,o.kt)("p",null,"Partners deploy the Wrapper contract for each vault utilized. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User deposits into partner Wrapper"),(0,o.kt)("li",{parentName:"ol"},"Wrapper deposits into Yearn Vault"),(0,o.kt)("li",{parentName:"ol"},"Vault issues vault tokens to Wrapper"),(0,o.kt)("li",{parentName:"ol"},"Wrapper issues wrapper tokens to User")),(0,o.kt)("p",null,"See the template available on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/yearn/brownie-wrapper-mix"},"Github")," with tests"),(0,o.kt)("p",null,"Implications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contributed TVLs are easily tracked with precision"),(0,o.kt)("li",{parentName:"ul"},"Vault tokens are not fungible with other partner tokens or with Yearn's vanilla vault tokens"),(0,o.kt)("li",{parentName:"ul"},"Each vault requires its own wrapper"),(0,o.kt)("li",{parentName:"ul"},"Solution and testing are comparatively complex")),(0,o.kt)("h2",{id:"delegated-deposit"},"Delegated Deposit"),(0,o.kt)("p",null,"Partners deploy a routing contract for each vault utilized."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User deposits to the routing contract"),(0,o.kt)("li",{parentName:"ol"},"Routing contract routes the deposit into the Yearn Vault"),(0,o.kt)("li",{parentName:"ol"},"Vault issues vault tokens to the User")),(0,o.kt)("p",null,"The v2 vault's deposit() function has a recipient parameter that defaults to msg.sender, but can also take any other address, effectively allowing a contract or EOA to delegate a deposit on behalf of another intended recipient. You can see the function #24 ",(0,o.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x19D3364A399d251E894aC732651be8B0E4e85001#writeContract"},"here"),"."),(0,o.kt)("p",null,"If funds are deposit using this delegated method from an address already known to Yearn, the TVL can be attributed to the address and profit will be shared based on that data. "),(0,o.kt)("p",null,"A single routing contract can handle multiple vaults, but can also be deployed on a per vault basis. The design is very flexible as long as a defined set of addresses are provided to keep track of the partner's contributed TVL."),(0,o.kt)("p",null,"Users will need to keep the issued vault token in the recipient address in order for TVL to be tracked. Tokens tend to stay in the end user's wallet, but this is an obvious tradeoff vs using the partner Wrapper. "),(0,o.kt)("p",null,"Implications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User gets credited regular vanilla yearn vault tokens for a better user experience"),(0,o.kt)("li",{parentName:"ul"},"Loss of TVL attributed if users transfer the vault tokens"),(0,o.kt)("li",{parentName:"ul"},"Simpler implementation and testing")))}d.isMDXComponent=!0}}]);