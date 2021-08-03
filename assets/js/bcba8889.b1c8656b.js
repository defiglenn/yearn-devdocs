(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(8),i=(a(0),a(256)),l={},o={unversionedId:"products/yvaults/overview",id:"products/yvaults/overview",isDocsHomePage:!1,title:"Overview",description:"---",source:"@site/docs/getting-started/products/yvaults/overview.md",sourceDirName:"products/yvaults",slug:"/products/yvaults/overview",permalink:"/getting-started/products/yvaults/overview",version:"current",lastUpdatedBy:"philburrrt",lastUpdatedAt:1626684723,formattedLastUpdatedAt:"7/19/2021",frontMatter:{},sidebar:"mySidebar",previous:{title:"Using Yearn",permalink:"/getting-started/using-yearn"},next:{title:"Vaults and Strategies",permalink:"/getting-started/products/yvaults/vaults-and-strategies"}},c=[{value:"What are yVaults?",id:"what-are-yvaults",children:[]},{value:"Zap in with any asset",id:"zap-in-with-any-asset",children:[]},{value:"yVault Fee Structure",id:"yvault-fee-structure",children:[]},{value:"v2 yVault Improvements",id:"v2-yvault-improvements",children:[]}],s={toc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"what-are-yvaults"},"What are yVaults?"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://yearn.finance/vaults"},"yVaults")," are like savings accounts for your crypto assets. They accept your deposit, then route it through a strategies which seek out the highest yield available in DeFi. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/yXnJqsn.png",alt:null})),Object(i.b)("h2",{id:"zap-in-with-any-asset"},"Zap in with any asset"),Object(i.b)("p",null,"Thanks to ",Object(i.b)("a",{parentName:"p",href:"https://zapper.fi/"},"Zapper"),", yVaults are extremely easy to deposit into. As long as you hold a token that can be swapped on Uniswap with less than 1% slippage, the vault will accept the token, convert it into what's required for the vault, and deposit all in the same transaction."),Object(i.b)("p",null,"When withdrawing, users will be able to zap back into one of the following tokens: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ETH, WETH, DAI, USDT, USDC, WBTC")),Object(i.b)("h2",{id:"yvault-fee-structure"},"yVault Fee Structure"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"yVault Version"),Object(i.b)("th",{parentName:"tr",align:"center"},"Withdrawal Fee"),Object(i.b)("th",{parentName:"tr",align:"center"},"Performance Fee"),Object(i.b)("th",{parentName:"tr",align:"center"},"Management Fee"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"v1"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.5%"),Object(i.b)("td",{parentName:"tr",align:"center"},"5%"),Object(i.b)("td",{parentName:"tr",align:"center"},"-")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"v2"),Object(i.b)("td",{parentName:"tr",align:"center"},"-"),Object(i.b)("td",{parentName:"tr",align:"center"},"20%"),Object(i.b)("td",{parentName:"tr",align:"center"},"2%")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Withdrawal Fee: One time fee during withdrawal"),Object(i.b)("li",{parentName:"ul"},"Performance Fee: Percent deducted from income "),Object(i.b)("li",{parentName:"ul"},"Management Fee: Percent deducted from total balance per year.")),Object(i.b)("h2",{id:"v2-yvault-improvements"},"v2 yVault Improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Up to 20 strategies per vault:")," This will increase the flexibility to manage capital efficiently during different market scenarios. Each strategy has a capital cap. This is useful to avoid over allocating funds to a strategy which cannot increase APY anymore."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Strategist and Guardian are the new Controllers:")," The Controller concept is not available in V2 yVaults and has been replaced by a Guardian and the Strategy creator ","(","strategist",")",". These 2 actors oversee strategy performance and are empowered to take action to improve capital management or act on critical situations."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Automated vault housekeeping ","(","Keep3r network",")",":")," ",Object(i.b)("inlineCode",{parentName:"li"},"harvest()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"earn()")," calls are now automated through the Keep3r bots network. These 2 function calls are used to purchase new underlying collateral by selling the earned tokens while moving the profits back to the vault and later into strategies. The keep3r network takes the heavy lifting of doing these calls and running with the gas costs in exchange for keep3r tokens. This approach unloads humans from these housekeeping tasks."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bouncers and Guest lists"),": Yearn has created an unique development process for new vaults. All vaults are launched as Test Vaults ","(","tyvToken",")"," to start with. Test vaults have a cap and therefore their strategies as well. Also, the Bouncer has a guest list of wallets which can interact by depositing and withdrawing funds in the Test Vaults. This approach prevents uninformed users from potentially losing funds in a not production ready product.")))}u.isMDXComponent=!0},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||b[d]||i;return a?n.a.createElement(h,o(o({ref:t},s),{},{components:a})):n.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);