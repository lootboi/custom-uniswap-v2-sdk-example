(this["webpackJsonpcra-ts"]=this["webpackJsonpcra-ts"]||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(47),c=n(161),r=n(0),o=n.n(r),i=n(140),s=n(12);var u=function(){var e=o.a.useContext(i.a),t=e.connect,n=Object(c.a)(e,["connect"]);return Object(a.a)(Object(a.a)({},n),{},{connect:function(e,n){var a;return"string"===typeof n?(a=s.a.bep,"erc"===n&&(a=s.a.erc),"polygon"===n&&(a=s.a.polygon)):a=n,t(e,a)}})}},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p}));var a=n(22),c={BSC_RPC_URL:"https://bsc-dataseed1.ninicoin.io",POLYGON_RPC_URL:Object({NODE_ENV:"production",PUBLIC_URL:"https://gndplayground.github.io/custom-uniswap-v2-sdk-example",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BSC_RPC_URL:"https://bsc-dataseed1.ninicoin.io",REACT_APP_POLYGON_CHAIN:"137",REACT_APP_BEP_CHAIN:"56",REACT_APP_ERC_CHAIN:"1",REACT_APP_POLYGON_RPC_URL:"https://rpc-mainnet.matic.network",REACT_APP_AVAX_RPC_URL:"https://api.avax.network/ext/bc/C/rpc",REACT_APP_OGOERLI_RPC_URL:"https://goerli.optimism.io",REACT_APP_OPTIMISM_RPC_URL:"https://mainnet.optimism.io",REACT_APP_AVAX_CHAIN:"43114",REACT_APP_OGOERLI_CHAIN:"420",REACT_APP_OPTIMISM_CHAIN:"10"}).POLYGON_RPC_URL,AVAX_RPC_URL:"https://api.avax.network/ext/bc/C/rpc",OGOERLI_RPC_URL:"https://goerli.optimism.io",OPTIMISM_RPC_URL:"https://mainnet.optimism.io",PANCAKE_ROUTER:"0x10ED43C718714eb63d5aA57B78B54704E256024E",QUICK_SWAP_ROUTER:"0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",TRADER_JOE_ROUTER:"0x60aE616a2155Ee3d9A68541Ba4544862310933d4",DETH_SWAP_ROUTER:"0x1C232F01118CB8B424793ae03F870aa7D0ac7f77",DETH_SWAP_MAINNET_ROUTER:"0xE6Df0BB08e5A97b40B21950a0A51b94c4DbA0Ff6",PANCAKE_CODE_HASH:"0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5",QUICK_SWAP_CODE_HASH:"0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",TRADER_JOE_CODE_HASH:"0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91",DETH_SWAP_CODE_HASH:"0x5fb4d2ee093edb2e66bbe1a947e831a783d59c4ae498563976a61f3ef610c3ee",DETH_SWAP_MAINNET_CODE_HASH:"0x1a76b7e7272f6187014e23f04d1b2e543eed2fd1f76481149008cc6eacb05c22",PUBLIC_URL:"https://gndplayground.github.io/custom-uniswap-v2-sdk-example/"},r={lastWallet:"lastWallet",lastChainId:"lastChainId",transactionSetting:"transactionSetting"},o=parseInt("1",10),i=parseInt("56",10),s=parseInt("137",10),u=parseInt("https://api.avax.network/ext/bc/C/rpc",10),l=parseInt("https://goerli.optimism.io",10),b=parseInt("https://mainnet.optimism.io",10),d={erc:isNaN(o)?1:o,bep:isNaN(i)?56:i,polygon:isNaN(s)?137:s,avax:isNaN(u)?43114:u,ogoerli:isNaN(l)?420:l,optimism:isNaN(b)?10:b},p=Object(a.a)({},d.avax,{swapETHForExactTokens:"swapAVAXForExactTokens",swapExactETHForTokens:"swapExactAVAXForTokens",swapExactETHForTokensSupportingFeeOnTransferTokens:"swapExactAVAXForTokensSupportingFeeOnTransferTokens",swapExactTokensForETH:"swapExactTokensForAVAX",swapExactTokensForETHSupportingFeeOnTransferTokens:"swapExactTokensForAVAXSupportingFeeOnTransferTokens",swapTokensForExactETH:"swapTokensForExactAVAX"})},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=n(241).a;t.b=a},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return k}));var a=n(13),c=n(5),r=n.n(c),o=n(88),i=n(0),s=n.n(i),u=n(156),l=n.n(u),b=n(101),d=n(51),p=function(e){return new Promise((function(t){n.e(6).then(n.bind(null,315)).then((function(n){var a=new n.InjectedConnector({supportedChainIds:[e]});t(a)}))}))},f=function(e){return new Promise((function(t){n.e(5).then(n.t.bind(null,316,7)).then((function(n){var a=new n.BscConnector({supportedChainIds:[e]});t(a)}))}))},m=n(72),h=n(199),x=n(12);function j(){return window.ethereum&&window.ethereum.isMetaMask}function v(){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,e.next=3,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(x.a.bep.toString(16)),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org"],blockExplorerUrls:["https://bscscan.com/"]}]});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,e.next=3,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(x.a.polygon.toString(16)),chainName:"Polygon POS",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com"],blockExplorerUrls:["https://polygonscan.com"]}]});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.ethereum,e.next=3,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(x.a.avax.toString(16)),chainName:"Avalanche Network",nativeCurrency:{name:"Avalanche",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax.network/ext/bc/C/rpc"],blockExplorerUrls:["https://snowtrace.io"]}]});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return new Promise((function(t){setTimeout((function(){t()}),e)}))}var E=n(164),A=n(14),k=s.a.createContext({}),P=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum||!j()){e.next=24;break}e.prev=2,e.t0=t,e.next=e.t0===x.a.bep?6:e.t0===x.a.polygon?9:e.t0===x.a.avax?12:15;break;case 6:return e.next=8,v();case 8:return e.abrupt("return",!0);case 9:return e.next=11,g();case 11:return e.abrupt("return",!0);case 12:return e.next=14,_();case 14:return e.abrupt("return",!0);case 15:return e.abrupt("return",!1);case 18:return e.prev=18,e.t1=e.catch(2),console.error(e.t1),e.abrupt("return",!1);case 22:e.next=26;break;case 24:return console.error("Can't setup the network id ".concat(t," on metamask because window.ethereum is undefined")),e.abrupt("return",!1);case 26:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}();var R=function(e){var t=e.children,n=Object(E.a)(),c=s.a.useState(""),u=Object(a.a)(c,2),v=u[0],O=u[1],g=s.a.useState(""),C=Object(a.a)(g,2),_=C[0],I=C[1],R=s.a.useState(void 0),S=Object(a.a)(R,2),T=S[0],y=S[1],L=s.a.useState(""),U=Object(a.a)(L,2),B=U[0],N=U[1],F=s.a.useState(null),H=Object(a.a)(F,2),W=H[0],M=H[1],D=s.a.useState("disconnected"),V=Object(a.a)(D,2),X=V[0],z=V[1],G=s.a.useState(),K=Object(a.a)(G,2),Y=K[0],J=K[1],q=Object(b.c)(),Q=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){t.current=e})),t.current}(X),Z=q.chainId,$=void 0===Z?x.a.bep:Z,ee=q.connector,te=q.deactivate,ne=q.activate,ae=q.library,ce=q.error,re=q.account;s.a.useEffect((function(){switch($){case x.a.bep:I("BNB");break;case x.a.polygon:I("MATIC");break;case x.a.avax:I("AVAX");break;case x.a.optimism:I("ETH");break;default:I("ETH")}}),[$]),s.a.useEffect((function(){if(re&&ae)null===ae||void 0===ae||ae.getBalance(re).then((function(e){var t=new l.a(Object(m.formatEther)(e));O(t.toFixed(2)),y(e)})),J(new h.a.providers.Web3Provider(ae.provider));else switch(O(""),y(void 0),J(void 0),$){case x.a.bep:J(new d.a(x.b.BSC_RPC_URL,x.a.bep));break;case x.a.polygon:J(new d.a(x.b.POLYGON_RPC_URL,x.a.polygon));break;case x.a.avax:J(new d.a(x.b.AVAX_RPC_URL,x.a.avax));break;case x.a.optimism:J(new d.a(x.b.OPTIMISM_RPC_URL,x.a.optimism))}}),[re,$,ae]);var oe=s.a.useCallback((function(){ee&&ee.close&&ee.close(),te(),z("disconnected"),M(""),N("")}),[ee,te]),ie=s.a.useCallback(function(){var e=Object(o.a)(r.a.mark((function e(t,a){var c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,oe(),z("connecting"),e.t0=t,e.next="bsc"===e.t0?6:12;break;case 6:return e.next=8,w(500);case 8:return e.next=10,f(a);case 10:return c=e.sent,e.abrupt("break",15);case 12:return e.next=14,p(a);case 14:c=e.sent;case 15:return e.next=17,ne(c,void 0,!0);case 17:N(t||"injected"),z("connected"),localStorage.setItem(x.d.lastWallet,t||"injected"),localStorage.setItem(x.d.lastChainId,a.toString()),e.next=55;break;case 23:if(e.prev=23,e.t1=e.catch(0),!(e.t1 instanceof b.a)){e.next=52;break}if(a===x.a.erc){e.next=51;break}return e.next=29,P(a);case 29:return o=e.sent,e.next=32,w(1e3);case 32:if(!o||(j()?parseInt(window.ethereum.chainId):-1)!==a){e.next=49;break}return e.prev=33,z("connecting"),e.next=37,ie(t,a);case 37:return z("connected"),N("injected"),M(void 0),e.abrupt("return");case 43:return e.prev=43,e.t2=e.catch(33),N(""),M(e.t2),z("disconnected"),e.abrupt("return");case 49:e.next=52;break;case 51:n({description:"Please change to the correct network",status:"error"});case 52:N(""),M(e.t1),z("disconnected");case 55:case"end":return e.stop()}}),e,null,[[0,23],[33,43]])})));return function(t,n){return e.apply(this,arguments)}}(),[ne,oe,n]);return s.a.useEffect((function(){"disconnected"===X&&"connected"===Q&&(localStorage.removeItem(x.d.lastWallet),localStorage.removeItem(x.d.lastChainId))}),[X,Q]),s.a.useEffect((function(){var e;return re&&ae?e=setInterval((function(){null===ae||void 0===ae||ae.getBalance(re).then((function(e){var t=new l.a(Object(m.formatEther)(e));O(t.toFixed(2)),y(e)}))}),1e4):(O(""),y(void 0)),function(){e&&clearInterval(e)}}),[re,ae]),s.a.useEffect((function(){ce instanceof b.a&&n({description:"Please change to the correct network",status:"error"})}),[ce,n]),s.a.useEffect((function(){var e=localStorage.getItem(x.d.lastWallet);if(!re&&"disconnected"===X&&void 0===Q&&e)try{var t=parseInt(localStorage.getItem(x.d.lastChainId)||"");localStorage.removeItem(x.d.lastWallet),ie(e,t).catch((function(){localStorage.removeItem(x.d.lastWallet),localStorage.removeItem(x.d.lastChainId)}))}catch(n){localStorage.removeItem(x.d.lastWallet),localStorage.removeItem(x.d.lastChainId)}}),[ie,re,X,Q,$]),Object(A.jsx)(k.Provider,{value:{rawBalance:T,name:B,account:re,chainId:$||x.a.bep,reset:oe,connect:ie,balance:v,error:W,status:X,library:ae,providerError:ce,ether:Y,etherSymbol:_},children:t})}},162:function(e,t,n){"use strict";var a=n(47),c=(n(0),n(14));t.a=function(e){return Object(c.jsx)("svg",Object(a.a)(Object(a.a)({xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 24 24",width:"1em",fill:"#f1f1f2"},e),{},{children:Object(c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.7 2l6.358 6.243L18.416 2 22 5.584l-6.243 6.358L22 18.301 18.416 22l-6.358-6.36-6.359 6.36L2 18.3l6.358-6.359L2 5.584 5.7 2z"})}))}},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(47),c=n(259),r=n(0),o=n.n(r);function i(e){var t=o.a.useMemo((function(){return Object(a.a)({position:"top-right"},e)}),[e]);return Object(c.a)(t)}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(47),c=(n(0),n(258)),r=n(14);var o=function(e){var t=e.children,n=e.isOpen,o=void 0!==n&&n,i=e.onClose,s=e.modalContentProps,u=e.modalContainerProps;return Object(r.jsxs)(c.a,{onClose:function(){i&&i()},isOpen:o,children:[Object(r.jsx)(c.c,{zIndex:"1300",bg:"rgba(0, 0, 0, 0.75)"}),Object(r.jsx)(c.b,Object(a.a)(Object(a.a)({mt:"50px",boxShadow:"none",maxWidth:"480px",bg:"transparent",mx:"auto",containerProps:Object(a.a)({zIndex:1700},u)},s),{},{children:t}))]})}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(13),c=n(0),r=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],o=n[1],i=Object(c.useCallback)((function(){o(!0)}),[]),s=Object(c.useCallback)((function(){o(!1)}),[]),u=Object(c.useCallback)((function(e){o("boolean"===typeof e?e:!r)}),[r]),l=Object(c.useCallback)((function(e){return function(){o("boolean"===typeof e?e:!r)}}),[r]);return Object(c.useMemo)((function(){return{active:r,setActive:i,setInActive:s,toggle:u,toggleCallback:l}}),[r,i,s,u,l])}},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(13),c=n(0),r="visibilityState"in document;function o(){return!r||"hidden"!==document.visibilityState}function i(){var e=Object(c.useState)(o()),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(c.useCallback)((function(){i(o())}),[i]);return Object(c.useEffect)((function(){if(r)return document.addEventListener("visibilitychange",s),function(){document.removeEventListener("visibilitychange",s)}}),[s]),n}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return v}));var a,c=n(0),r=n.n(c),o=n(169),i=n(13),s=n(22),u=n(39),l=n(165),b=n(162),d=n(12),p=n(14),f=[{name:"Binance Chain",icon:"".concat(d.b.PUBLIC_URL,"images/icon/bsc-wallet.svg"),chainId:d.a.bep},{name:"Polygon",icon:"".concat(d.b.PUBLIC_URL,"images/icon/polygon-white.svg"),chainId:d.a.polygon},{name:"Avalanche",icon:"".concat(d.b.PUBLIC_URL,"images/icon/avax.svg"),chainId:d.a.avax},{name:"Optimism Goerli",icon:"".concat(d.b.PUBLIC_URL,"images/icon/optimism.svg"),chainId:d.a.ogoerli},{name:"Optimism",icon:"".concat(d.b.PUBLIC_URL,"images/icon/optimism.svg"),chainId:d.a.optimism}],m=(a={},Object(s.a)(a,d.a.avax,[{name:"Metamask",icon:"".concat(d.b.PUBLIC_URL,"images/icon/metamask-fox.svg"),connector:"injected"}]),Object(s.a)(a,d.a.ogoerli,[{name:"Metamask",icon:"".concat(d.b.PUBLIC_URL,"images/icon/metamask-fox.svg"),connector:"injected"}]),Object(s.a)(a,d.a.optimism,[{name:"Metamask",icon:"".concat(d.b.PUBLIC_URL,"images/icon/metamask-fox.svg"),connector:"injected"}]),Object(s.a)(a,d.a.polygon,[{name:"Metamask",icon:"".concat(d.b.PUBLIC_URL,"images/icon/metamask-fox.svg"),connector:"injected"}]),Object(s.a)(a,d.a.bep,[{name:"Metamask",icon:"".concat(d.b.PUBLIC_URL,"images/icon/metamask-fox.svg"),connector:"injected"},{name:"Binance Chain Wallet",icon:"".concat(d.b.PUBLIC_URL,"images/icon/bsc-wallet.svg"),connector:"bsc"},{name:"Wallet Connect",icon:"".concat(d.b.PUBLIC_URL,"images/icon/wallet-connect.png"),connector:"walletconnect"}]),a);var h=function(e){var t,n=e.isOpen,a=e.onClose,c=e.onConnect,o=e.currentChainId,s=void 0===o?d.a.bep:o,h=r.a.useState(s),x=Object(i.a)(h,2),j=x[0],v=x[1];return Object(p.jsxs)(l.a,{isOpen:n,modalContentProps:{maxWidth:"700px"},children:[Object(p.jsxs)(u.b,{borderTopLeftRadius:"24px",borderTopRightRadius:"24px",px:"30px",position:"relative",as:"header",bg:"#a6a6a695",minHeight:"70px",display:"flex",alignItems:"center",children:[Object(p.jsx)(u.b,{fontSize:"24px",lineHeight:"28px",color:"primary",as:"h2",fontWeight:700,children:"Connect your wallet"}),Object(p.jsx)(u.b,{onClick:a,ml:"auto",as:"button",color:"#22222280",fontSize:"20px",children:Object(p.jsx)(b.a,{})})]}),Object(p.jsxs)(u.b,{bg:"#a6a6a695",borderBottomRightRadius:"24px",borderBottomLeftRadius:"24px",children:[Object(p.jsxs)(u.b,{as:"section",children:[Object(p.jsx)(u.b,{mt:"10px",color:"primary",as:"h3",fontWeight:"bold",fontSize:"20px",textAlign:"center",children:"Select network"}),Object(p.jsx)(u.b,{mt:"16px",display:{xl:"flex",base:"flex"},flexWrap:"wrap",justifyContent:"center",children:f.map((function(e){return Object(p.jsx)(u.b,{width:{base:"50%",xl:"25%"},color:"#9CAFF1",children:Object(p.jsxs)(u.b,{border:e.chainId===j?"1px solid":"",py:"20px",px:"30px",width:"100%",outline:"none",textAlign:"center",as:"button",fontSize:"16px",fontWeight:700,onClick:(t=e.chainId,function(){c&&v(t)}),children:[Object(p.jsx)(u.b,{mx:"auto",as:"img",alt:"".concat(e.name," icon"),src:e.icon,w:"60px",h:"60px"}),Object(p.jsx)(u.b,{mt:"8px",as:"span",display:"block",children:e.name})]})},e.name);var t}))})]}),Object(p.jsxs)(u.b,{as:"section",mt:"24px",children:[Object(p.jsx)(u.b,{mt:"10px",color:"primary",as:"h3",fontWeight:"bold",fontSize:"20px",textAlign:"center",children:"Select wallet"}),Object(p.jsx)(u.b,{display:"flex",justifyContent:"center",alignItems:"center",children:null===(t=m[j])||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(u.b,{width:{base:"50%",xl:"25%"},py:"20px",px:"30px",as:"button",color:"#9CAFF1",children:Object(p.jsxs)(u.b,{width:"100%",outline:"none",textAlign:"center",fontSize:"16px",fontWeight:700,onClick:(t=e.connector,n=j,function(){c&&c(t,n)}),children:[Object(p.jsx)(u.b,{mx:"auto",as:"img",alt:"".concat(e.name," icon"),src:e.icon,w:"50px",h:"50px"}),Object(p.jsx)(u.b,{mt:"8px",as:"span",display:"block",children:e.name})]})},e.name);var t,n}))})]})]})]})},x=n(103),j=r.a.createContext({});function v(e){var t=Object(o.a)(!1),n=Object(x.a)(),a=e.children;return Object(p.jsxs)(j.Provider,{value:{isOpenConnect:t.active,toggleOpenConnect:t.toggle},children:[a,Object(p.jsx)(h,{currentChainId:n.chainId,onConnect:function(e,a){n.connect(e,a).then((function(){localStorage.setItem(d.d.lastWallet,e),localStorage.setItem(d.d.lastChainId,a.toString()),t.setInActive()}))},onClose:t.toggle,isOpen:t.active})]})}},219:function(e,t,n){},225:function(e,t){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(75),o=n.n(r),i=(n(219),n(101)),s=n(153),u=n(261),l=n(256),b=n(252),d=Object(b.a)({styles:{global:{body:{color:"#f1f1f2",fontFamily:"Source Code Pro, monospace",bg:'url("https://www.theanimedaily.com/wp-content/uploads/2022/05/Skeleton-Knight-In-Another-World-Episode-8-j.jpg")',bgSize:"cover","& .chakra-alert__desc":{color:"#1A202C"}}}},colors:{primary:"#222222",accent:"#222222",error:"#f04f00"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}}),p=n(140),f=n(186),m=n(182),h=n(34),x=n(196),j=n(14),v=Object(x.a)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,319))}));function O(e){var t=e.children;return Object(j.jsx)("main",{children:t})}var g=function(){return Object(j.jsx)(m.a,{children:Object(j.jsx)(O,{children:Object(j.jsx)(h.c,{children:Object(j.jsx)(h.a,{path:"/",exact:!0,children:Object(j.jsx)(v,{})})})})})},C=n(13),_=n(183),I=n(103),w=n(22),E=n(47),A=n(184),k=Object(A.a)((function(e){return{blockNumber:{},setBlockNumber:function(t,n){return e((function(e){return{blockNumber:Object(E.a)(Object(E.a)({},e.blockNumber),{},Object(w.a)({},t,n))}}))}}}));function P(e){return e.setBlockNumber}var R=function(e,t){var n=c.a.useState(e),a=Object(C.a)(n,2),r=a[0],o=a[1];return c.a.useEffect((function(){var n=setTimeout((function(){o(e)}),t);return function(){clearTimeout(n)}}),[e,t]),r};function S(e){var t=new s.a(e);return t.pollingInterval=1e4,t}function T(){return function(){var e=Object(_.a)(),t=c.a.useState(0),n=Object(C.a)(t,2),a=n[0],r=n[1],o=k(P),i=Object(I.a)(),s=i.ether,u=i.chainId,l=R(a,100);c.a.useEffect((function(){u&&o(u,l)}),[l,u,o]),c.a.useEffect((function(){function t(e){r(e)}return e&&s&&(s.getBlockNumber().then(t).catch((function(e){return console.error("Failed to get block number for chainId: ".concat(u),e)})),s.on("block",t)),function(){s&&s.removeListener("block",t)}}),[s,u,e,o])}(),null}var y=function(){return Object(j.jsx)(i.b,{getLibrary:S,children:Object(j.jsx)(u.a,{theme:d,children:Object(j.jsx)(p.b,{children:Object(j.jsxs)(f.b,{children:[Object(j.jsx)(l.a,{}),Object(j.jsx)(g,{}),Object(j.jsx)(T,{})]})})})})},L=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),L()},39:function(e,t,n){"use strict";var a=n(120);n.d(t,"a",(function(){return a.a})),n.d(t,"b",(function(){return a.b}))}},[[236,1,2]]]);
//# sourceMappingURL=main.8a74804b.chunk.js.map