"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3182],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),k=p(a),N=r,u=k["".concat(d,".").concat(N)]||k[N]||o[N]||l;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var d in t)hasOwnProperty.call(t,d)&&(m[d]=t[d]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1412:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return o}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i={},m="Registry.vy",d={unversionedId:"smart-contracts/registry",id:"version-0.3.4/smart-contracts/registry",isDocsHomePage:!1,title:"Registry.vy",description:"Functions",source:"@site/versioned_docs/version-0.3.4/smart-contracts/registry.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/registry",permalink:"/vaults/0.3.4/smart-contracts/registry",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.4/smart-contracts/registry.md",tags:[],version:"0.3.4",frontMatter:{},sidebar:"version-0.3.4/mySidebar",previous:{title:"VaultAPI",permalink:"/vaults/0.3.4/smart-contracts/VaultAPI"},next:{title:"AffiliateToken",permalink:"/vaults/0.3.4/smart-contracts/test/AffiliateToken"}},p=[{value:"Functions",id:"functions",children:[{value:"setGovernance",id:"setgovernance",children:[]},{value:"acceptGovernance",id:"acceptgovernance",children:[]},{value:"latestRelease",id:"latestrelease",children:[]},{value:"latestVault",id:"latestvault",children:[]},{value:"newRelease",id:"newrelease",children:[]},{value:"newVault",id:"newvault",children:[]},{value:"newVault",id:"newvault-1",children:[]},{value:"newExperimentalVault",id:"newexperimentalvault",children:[]},{value:"newExperimentalVault",id:"newexperimentalvault-1",children:[]},{value:"endorseVault",id:"endorsevault",children:[]},{value:"endorseVault",id:"endorsevault-1",children:[]},{value:"setBanksy",id:"setbanksy",children:[]},{value:"setBanksy",id:"setbanksy-1",children:[]},{value:"tagVault",id:"tagvault",children:[]}]},{value:"Events",id:"events",children:[]}],s={toc:p};function o(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"registryvy"},"Registry.vy"),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"setgovernance"},"setGovernance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setGovernance(address)\n")),(0,l.kt)("p",null,"Starts the 1st phase of the governance transfer.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if the caller is not current governance.")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," governance ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The next governance address "))))),(0,l.kt)("h3",{id:"acceptgovernance"},"acceptGovernance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function acceptGovernance()\n")),(0,l.kt)("p",null,"Completes the 2nd phase of the governance transfer.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if the caller is not the pending caller. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewGovernance")," event.")),(0,l.kt)("h3",{id:"latestrelease"},"latestRelease"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function latestRelease()\n")),(0,l.kt)("p",null,"Returns the api version of the latest release.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if no releases are registered yet.")),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The api version of the latest release. "))))),(0,l.kt)("h3",{id:"latestvault"},"latestVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function latestVault(address)\n")),(0,l.kt)("p",null,"Returns the latest deployed vault for the given token.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if no vaults are endorsed yet for the given token.")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," token ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The token address to find the latest vault for. "))))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address of the latest vault for the given token. "))))),(0,l.kt)("h3",{id:"newrelease"},"newRelease"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function newRelease(address)\n")),(0,l.kt)("p",null,"Add a previously deployed Vault as the template contract for the latest release, to be used by further ",'"',"forwarder-style",'"'," delegatecall proxy contracts that can be deployed from the registry throw other methods (to save gas).    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if caller isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if ",(0,l.kt)("inlineCode",{parentName:"em"},"vault"),"'","s governance isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if the api version is the same as the previous release. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewVault")," event.")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," vault ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The vault that will be used as the template contract for the next release. "))))),(0,l.kt)("h3",{id:"newvault"},"newVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function newVault(address,address,address,string,string)\n")),(0,l.kt)("p",null,"Create a new vault for the given token using the latest release in the registry, as a simple ",'"',"forwarder-style",'"'," delegatecall proxy to the latest release. Also adds the new vault to the list of ",'"',"endorsed",'"'," vaults for that token.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"governance")," is set in the new vault as ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),", with no ability to override. Throws if caller isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if no releases are registered yet. Throws if there already is a registered vault for the given token with the latest api version. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewVault")," event.")),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," token ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The token that may be deposited into the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," guardian ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for guardian interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," rewards ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to use for collecting rewards in the new Vault "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," name ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," symbol ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault symbol name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h4",{id:"return-values-2"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address of the newly-deployed vault "))))),(0,l.kt)("h3",{id:"newvault-1"},"newVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function newVault(address,address,address,string,string,uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"governance")," is set in the new vault as ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),", with no ability to override. Throws if caller isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if no releases are registered yet. Throws if there already is a registered vault for the given token with the latest api version. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewVault")," event.")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," token ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The token that may be deposited into the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," guardian ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for guardian interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," rewards ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to use for collecting rewards in the new Vault "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," name ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," symbol ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault symbol name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h4",{id:"return-values-3"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address of the newly-deployed vault "))))),(0,l.kt)("h3",{id:"newexperimentalvault"},"newExperimentalVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function newExperimentalVault(address,address,address,address,string,string)\n")),(0,l.kt)("p",null,"Create a new vault for the given token using the latest release in the registry, as a simple ",'"',"forwarder-style",'"'," delegatecall proxy to the latest release. Does not add the new vault to the list of ",'"',"endorsed",'"'," vaults for that token.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if no releases are registered yet. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewExperimentalVault")," event.")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," token ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The token that may be deposited into the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," governance ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for governance interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," guardian ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for guardian interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," rewards ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to use for collecting rewards in the new Vault "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," name ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," symbol ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault symbol name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h4",{id:"return-values-4"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address of the newly-deployed vault "))))),(0,l.kt)("h3",{id:"newexperimentalvault-1"},"newExperimentalVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function newExperimentalVault(address,address,address,address,string,string,uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if no releases are registered yet. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewExperimentalVault")," event.")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," token ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The token that may be deposited into the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," governance ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for governance interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," guardian ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address authorized for guardian interactions in the new Vault. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," rewards ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to use for collecting rewards in the new Vault "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," name ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," symbol ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify a custom Vault symbol name. Set to empty string for default choice. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h4",{id:"return-values-5"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address of the newly-deployed vault "))))),(0,l.kt)("h3",{id:"endorsevault"},"endorseVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function endorseVault(address)\n")),(0,l.kt)("p",null,"Adds an existing vault to the list of ",'"',"endorsed",'"'," vaults for that token.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"governance")," is set in the new vault as ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),", with no ability to override. Throws if caller isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if ",(0,l.kt)("inlineCode",{parentName:"em"},"vault"),"'","s governance isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if no releases are registered yet. Throws if ",(0,l.kt)("inlineCode",{parentName:"em"},"vault"),"'","s api version does not match latest release. Throws if there already is a deployment for the vault","'","s token with the latest api version. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewVault")," event.")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," vault ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The vault that will be endorsed by the Registry. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h3",{id:"endorsevault-1"},"endorseVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function endorseVault(address,uint256)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"governance")," is set in the new vault as ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),", with no ability to override. Throws if caller isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if ",(0,l.kt)("inlineCode",{parentName:"em"},"vault"),"'","s governance isn","'","t ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),". Throws if no releases are registered yet. Throws if ",(0,l.kt)("inlineCode",{parentName:"em"},"vault"),"'","s api version does not match latest release. Throws if there already is a deployment for the vault","'","s token with the latest api version. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"NewVault")," event.")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," vault ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The vault that will be endorsed by the Registry. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," releaseDelta ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Specify the number of releases prior to the latest to use as a target. Default is latest. "))))),(0,l.kt)("h3",{id:"setbanksy"},"setBanksy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setBanksy(address)\n")),(0,l.kt)("p",null,"Set the ability of a particular tagger to tag current vaults.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if caller is not ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),".")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," tagger ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to approve or deny access to tagging. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," allowed ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Whether to approve or deny ",(0,l.kt)("inlineCode",{parentName:"em"},"tagger"),". Defaults to approve. "))))),(0,l.kt)("h3",{id:"setbanksy-1"},"setBanksy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function setBanksy(address,bool)\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if caller is not ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance"),".")),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," tagger ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to approve or deny access to tagging. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," allowed ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," Whether to approve or deny ",(0,l.kt)("inlineCode",{parentName:"em"},"tagger"),". Defaults to approve. "))))),(0,l.kt)("h3",{id:"tagvault"},"tagVault"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function tagVault(address,string)\n")),(0,l.kt)("p",null,"Tag a Vault with a message.    "),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Throws if caller is not ",(0,l.kt)("inlineCode",{parentName:"em"},"self.governance")," or an approved tagger. Emits a ",(0,l.kt)("inlineCode",{parentName:"em"},"VaultTagged")," event.")),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," vault ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The address to tag with the given ",(0,l.kt)("inlineCode",{parentName:"em"},"tag")," message. "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," tag ")),(0,l.kt)("td",{parentName:"tr",align:"left"},"*  *"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("em",{parentName:"td"}," The message to tag ",(0,l.kt)("inlineCode",{parentName:"em"},"vault")," with. "))))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NewRelease")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"release_id")," : uint256, ",(0,l.kt)("em",{parentName:"li"},"indexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"template")," : address, ",(0,l.kt)("em",{parentName:"li"},"notIndexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api_version")," : string, ",(0,l.kt)("em",{parentName:"li"},"notIndexed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NewVault")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"token")," : address, ",(0,l.kt)("em",{parentName:"li"},"indexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vault_id")," : uint256, ",(0,l.kt)("em",{parentName:"li"},"indexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vault")," : address, ",(0,l.kt)("em",{parentName:"li"},"notIndexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api_version")," : string, ",(0,l.kt)("em",{parentName:"li"},"notIndexed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NewExperimentalVault")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"token")," : address, ",(0,l.kt)("em",{parentName:"li"},"indexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployer")," : address, ",(0,l.kt)("em",{parentName:"li"},"indexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vault")," : address, ",(0,l.kt)("em",{parentName:"li"},"notIndexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api_version")," : string, ",(0,l.kt)("em",{parentName:"li"},"notIndexed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NewGovernance")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"governance")," : address, ",(0,l.kt)("em",{parentName:"li"},"notIndexed"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"VaultTagged")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"vault")," : address, ",(0,l.kt)("em",{parentName:"li"},"notIndexed")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag")," : string, ",(0,l.kt)("em",{parentName:"li"},"notIndexed"))))}o.isMDXComponent=!0}}]);