"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[1375],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,N=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3440:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i={},d="Yearn API",o={unversionedId:"yearn-api",id:"version-0.4.3/yearn-api",isDocsHomePage:!1,title:"Yearn API",description:"Production Endpoint",source:"@site/versioned_docs/version-0.4.3/yearn-api.md",sourceDirName:".",slug:"/yearn-api",permalink:"/vaults/yearn-api",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.3/yearn-api.md",tags:[],version:"0.4.3",frontMatter:{},sidebar:"version-0.4.3/mySidebar",previous:{title:"Yearn Stack + FE Features",permalink:"/vaults/yearn-sdk/yearn-stack"},next:{title:"Yearn Lens",permalink:"/vaults/yearn-lens/yearn-lens"}},p=[{value:"Production Endpoint",id:"production-endpoint",children:[]},{value:"API Schema",id:"api-schema",children:[]}],m={toc:p};function k(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yearn-api"},"Yearn API"),(0,l.kt)("h3",{id:"production-endpoint"},"Production Endpoint"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://api.yearn.finance/v1/chains/1/vaults/all"},"https://api.yearn.finance/v1/chains/1/vaults/all")),(0,l.kt)("h3",{id:"api-schema"},"API Schema"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"address")),(0,l.kt)("td",{parentName:"tr",align:null},"Checksummed address of the vault")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"inception")),(0,l.kt)("td",{parentName:"tr",align:null},"The block number a vault was created at")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"symbol")),(0,l.kt)("td",{parentName:"tr",align:null},"Vault token symbol (used primarily in metamask)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Vault token name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Vault name as displayed in UI (usually based on underlying symbol)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Vault token icon url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying vault token metadata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.name")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.symbol")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token symbol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.address")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token address")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.decimals")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token decimal amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token display name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"token.icon")),(0,l.kt)("td",{parentName:"tr",align:null},"Underlying token icon (usually used as vault dispaly icon)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tvl")),(0,l.kt)("td",{parentName:"tr",align:null},"TVL information about a vault")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tvl.total_assets")),(0,l.kt)("td",{parentName:"tr",align:null},"TVL in underlying token denomination")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tvl.price")),(0,l.kt)("td",{parentName:"tr",align:null},"Token price in USD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tvl.tvl")),(0,l.kt)("td",{parentName:"tr",align:null},"TVL in USD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy")),(0,l.kt)("td",{parentName:"tr",align:null},"Vault APY metadata")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.type")),(0,l.kt)("td",{parentName:"tr",align:null},"APY type. Options are ",(0,l.kt)("inlineCode",{parentName:"td"},"v2:simple"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"v2:averaged"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"v1:simple"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"crv"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.gross_apr")),(0,l.kt)("td",{parentName:"tr",align:null},"Uncompounded gross APR before fees")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.net_apy")),(0,l.kt)("td",{parentName:"tr",align:null},"Net APY (compounded) after fees. This is what the UI shows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees")),(0,l.kt)("td",{parentName:"tr",align:null},"Fee structure breakdown for a vault")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees.performance")),(0,l.kt)("td",{parentName:"tr",align:null},"Performance fee in bips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees.withdrawal")),(0,l.kt)("td",{parentName:"tr",align:null},"Withdrawal fee in bips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees.management")),(0,l.kt)("td",{parentName:"tr",align:null},"Management fee in bips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees.keep_crv")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of CRV to keep upon harvest for curve vaults in bips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.fees.cvx_keep_crv")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of CRV to keep upon harvest for curve convex vaults in bips")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.points")),(0,l.kt)("td",{parentName:"tr",align:null},"APY samples for various timeframes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.points.week_ago")),(0,l.kt)("td",{parentName:"tr",align:null},"APY calculated from one week sample of pricePerShare")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.points.month_ago")),(0,l.kt)("td",{parentName:"tr",align:null},"APY calculated from one month sample of pricePerShare")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.points.month_ago")),(0,l.kt)("td",{parentName:"tr",align:null},"APY calculated from inception block sample of pricePerShare")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite")),(0,l.kt)("td",{parentName:"tr",align:null},"Complex APY breakdown (for curve vaults)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.boost")),(0,l.kt)("td",{parentName:"tr",align:null},"Current boost of the strategies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.pool_apy")),(0,l.kt)("td",{parentName:"tr",align:null},"APY of the Curve LP position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.base_apr")),(0,l.kt)("td",{parentName:"tr",align:null},"Base APR of Curve emissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.boosted_apr")),(0,l.kt)("td",{parentName:"tr",align:null},"Boosted APR of Curve emissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.cvx_apr")),(0,l.kt)("td",{parentName:"tr",align:null},"APR of Convex rewards")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apy.composite.rewards_apr")),(0,l.kt)("td",{parentName:"tr",align:null},"APR of additional pool rewards")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strategies")),(0,l.kt)("td",{parentName:"tr",align:null},"A list of active vault strategies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strategies[idx].address")),(0,l.kt)("td",{parentName:"tr",align:null},"Address of an active strategy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strategies[idx].name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of an active strategy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endorsed")),(0,l.kt)("td",{parentName:"tr",align:null},"True if the vault is an endorsed production vault. Do not show the vault if it's not endorsed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},"API version of the vault")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"decimals")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of decimals for the vault token")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"High level vault classification. Valid options are v1 and v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"emergency_shutdown")),(0,l.kt)("td",{parentName:"tr",align:null},"If true the vault is in shut down mode and no new deposits should be accepted")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updated")),(0,l.kt)("td",{parentName:"tr",align:null},"Unix timestamp of the last vault update")))))}k.isMDXComponent=!0}}]);