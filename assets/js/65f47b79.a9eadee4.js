(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return c})),n.d(e,"toc",(function(){return o})),n.d(e,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(256)),s={},c={unversionedId:"smart-contracts/test/TestGuestList",id:"version-0.4.2/smart-contracts/test/TestGuestList",isDocsHomePage:!1,title:"TestGuestList",description:"A basic guest list contract for testing.",source:"@site/versioned_docs/version-0.4.2/smart-contracts/test/TestGuestList.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestGuestList",permalink:"/v2/smart-contracts/test/TestGuestList",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/smart-contracts/test/TestGuestList.md",version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"AffiliateToken",permalink:"/v2/smart-contracts/test/AffiliateToken"},next:{title:"TestStrategy",permalink:"/v2/smart-contracts/test/TestStrategy"}},o=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"setGuests",id:"setguests",children:[]},{value:"authorized",id:"authorized",children:[]}]}],b={toc:o};function l(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A basic guest list contract for testing."),Object(i.b)("p",null,"For a Vyper implementation of this contract containing additional\nfunctionality, see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy"},"https://github.com/banteg/guest-list/blob/master/contracts/GuestList.vy")),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),Object(i.b)("p",null,"Create the test guest list, setting the message sender as\n",Object(i.b)("inlineCode",{parentName:"p"},"bouncer"),"."),Object(i.b)("p",null,"Note that since this is just for testing, you're unable to change\n",Object(i.b)("inlineCode",{parentName:"p"},"bouncer"),"."),Object(i.b)("h3",{id:"setguests"},"setGuests"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function setGuests(\n    address[] _guests,\n    bool[] _invited\n  ) external\n")),Object(i.b)("p",null,"Invite guests or kick them from the party."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"_guests")),Object(i.b)("td",{parentName:"tr",align:"left"},"address[]"),Object(i.b)("td",{parentName:"tr",align:"left"},"The guests to add or update.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"_invited")),Object(i.b)("td",{parentName:"tr",align:"left"},"bool[]"),Object(i.b)("td",{parentName:"tr",align:"left"},"A flag for each guest at the matching index, inviting or")))),Object(i.b)("p",null,"uninviting the guest."),Object(i.b)("h3",{id:"authorized"},"authorized"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function authorized(\n    address _guest,\n    uint256 _amount\n  ) external returns (bool)\n")),Object(i.b)("p",null,"Check if a guest with a bag of a certain size is allowed into\nthe party."),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"_amount")," isn't checked to keep test setup simple, since\nfrom the vault tests' perspective this is a pass/fail call anyway."),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"),Object(i.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"_guest")),Object(i.b)("td",{parentName:"tr",align:"left"},"address"),Object(i.b)("td",{parentName:"tr",align:"left"},"The guest's address to check.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"_amount")),Object(i.b)("td",{parentName:"tr",align:"left"},"uint256"),Object(i.b)("td",{parentName:"tr",align:"left"},"Not used. The amount of tokens the guest is bringing.")))))}l.isMDXComponent=!0},256:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),l=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,b=o(t,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:e},b),{},{components:n})):a.a.createElement(m,c({ref:e},b))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:r,s[1]=c;for(var b=2;b<i;b++)s[b]=n[b];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);