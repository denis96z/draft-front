(this["webpackJsonpgodraft-front"]=this["webpackJsonpgodraft-front"]||[]).push([[0],{196:function(e,t,n){e.exports=n(558)},485:function(e,t,n){},558:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(3),c=n(61),o=n(20),l=n(53),i=n(571),u=n(560),s=n(131),m=n(569),d=Object(a.createContext)({});function p(){return Object(a.useContext)(d)}function f(){return p().state}var v=n(167),h=n(168),E=n.n(h);function g(e){var t=e.name;return e.scheme&&e.scheme.project&&(t="".concat(e.scheme.project).concat(t)),t}function y(){var e=p().updateState;return a.useCallback((function(t){e({search:"",queryString:""}),window.location.hash=t}),[e])}var b={};function j(e,t){void 0===b[e]&&(b[e]={}),void 0===b[e][t]&&(b[e][t]=Object(v.match)(t,e,{pre:'<span style="background: yellow;">',post:"</span>"}));var n=b[e][t];return n?a.createElement("span",{dangerouslySetInnerHTML:{__html:n.rendered}}):null}function k(e,t){var n;return"#".concat(e.id).concat(t?":".concat((null===(n=t.scheme)||void 0===n?void 0:n.project)||"").concat(t.name):"")}function w(e,t,n){return"".concat(k(e,t),"?case=").concat(n.name)}var S=/^\/godraft:doc[a-z]+(\/api\/[^?#]+)/;function O(e,t){if(t){var n=window.location.pathname.match(S);if(n)return window.history.pushState(null,"","/godraft:docs/"),{activeEndpoint:n[1]}}var a=window.location.hash.match(/^#?([\w-]+)(?::([^?]+))?(?:\?(.*))?/i)||[],r=Object(o.a)(a,4),c=(r[0],r[1]),l=r[2],i=r[3];return{activeGroup:e.groups[c]?c:Object.keys(e.groups)[0],activeEndpoint:l||"",queryString:i||""}}function C(e){return e.reduce((function(e,t){return e[t.id]=t,e}),{})}function _(e){var t=null,n=e.replace(/^\s*\n/,"").split("\n").map((function(e){if(null===t){var n=e.match(/^\s+/);t=!!n&&new RegExp("^".concat(n[0]))}return t?e.replace(t,""):e})).join("\n");return E()(n)}function x(){var e=p(),t=e.state,n=t.search,r=t.activeGroup,c=t.groups,o=e.updateState,l=a.useCallback((function(e){o("search",e.target.value)}),[o]),i=y();return a.createElement(u.a.Header,{className:"header"},a.createElement(u.a,null,a.createElement(u.a.Sider,{width:200},a.createElement(q,null)),a.createElement(u.a.Content,null,a.createElement(s.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:r?[r]:void 0},Object.values(c).map((function(e){return a.createElement(s.a.Item,{key:e.id,onClick:function(){i(k(e))}},e.name)})))),a.createElement(u.a.Sider,{width:200},a.createElement(m.a.Search,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043c\u0435\u0442\u043e\u0434\u0430\u043c",value:n,onChange:l}))))}function q(){return a.createElement("img",{height:"32",src:"https://img.imgsmail.ru/pm/1.0.3/blocks/ph-logo/img/logotype-mail.ru@2x.png"})}var N=n(561);function I(){var e=p(),t=e.state,n=t.activeGroupEntries,r=t.activeEndpoint,c=e.updateState,o=a.useCallback((function(e){c({search:"",queryString:"",activeEndpoint:e.key})}),[c]),l=n.flatMap((function(e){return e.entries}))||[],i=[],u=l.map((function e(t,n){if("G"===t.type)return i.push("group-".concat(n)),a.createElement(s.a.SubMenu,{key:"group-".concat(n),title:t.name},t.entries.map(e));if("E"===t.type)return a.createElement(s.a.Item,{key:g(t),title:t.scheme.description||t.scheme.name},t.scheme.name);if("HR"===t.type)return a.createElement(N.a,null);throw"not supproted: ".concat(t.type)}));return a.createElement(s.a,{mode:"inline",defaultOpenKeys:i,defaultSelectedKeys:r?[r]:void 0,style:{height:"100%",borderRight:0},onSelect:o},u)}var G=n(562);function R(){return a.createElement("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}},a.createElement(G.a,{size:"large"}))}var F=n(572),T=n(566),M=n(563),A=n(573);function H(e){var t=e.name,n=e.badge,r="ok"===t?"success":"error",c=t.toUpperCase(),o=n?{borderRadius:5,fontSize:"50%",padding:"0 4px",lineHeight:"14px",verticalAlign:"super"}:void 0;return a.createElement(A.a,{color:r,style:o},c)}var J=n(564),L=n(567),B=n(80),z=n(574),K=n(565),U=n(570),D=n(575),W=n(576),$=n(577),P={processing:102,ok:200,accepted:202,non_authoritative:203,partial:206,move:301,notmodified:304,invalid:400,payment_required:402,denied:403,notfound:404,unacceptable:406,timeout:408,conflict:409,expectation_failed:417,unprocessable:422,locked:423,failed_dependency:424,upgrade_required:426,many_requests:429,retry_with:449,unavailable_for_legal_reasons:451,fail:500,not_implemented:501,unavaliable:503,insufficient:507},V=n(173);n(484);function Q(e){var t=a.useRef(null),n=e.value;return a.useEffect((function(){V.highlightBlock(t.current)}),[n]),a.createElement("pre",null,a.createElement("code",{ref:t,className:"javascript",dangerouslySetInnerHTML:{__html:n}}))}n(485);function X(e){var t,n=e.group,r=e.entry,c=e.value,l=p().state.accessRights,i=r.scheme,u=a.useState(null===(t=l[c.access])||void 0===t?void 0:t.extra[0]),s=Object(o.a)(u,2),m=s[0],d=s[1],f=y(),v=i.detail[c.status],h=function(e){if(!e||null===e.value)return null;return e.reflect.nested.map((function(t){return ne(t.name,e.value[t.name],t,": ")}))}(null===m||void 0===m?void 0:m.headers),E=function(e,t,n){if(null==e&&n&&null==n.value)return null;var a=Object.entries(Object(e)).map((function(e){var n=Object(o.a)(e,2),a=n[0];return ne(a,n[1],t[a])}));return n?n.reflect.nested.map((function(e){return ne(e.name,n.value[e.name],e)})).concat(a):a}(c.params,v.request.params,null===m||void 0===m?void 0:m.params),g=ee(v.response.body,c.body,"  "),b="ok"===c.status,j=w(n,r,c);return a.createElement(J.a,{style:b?{}:{borderColor:"#ffa39e"},title:a.createElement(a.Fragment,null,a.createElement("div",{id:j,className:"endpoint-case-hidden-anchor"}),a.createElement("span",{className:"endpoint-case-copy-to-clipboard",onClick:function(){f(j),function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),a=[];if(n)for(var r=0;r<(n.rangeCount||0);r++)a.push(n.getRangeAt(r));if(t.select(),document.execCommand("copy"),document.body.removeChild(t),a.length){var c=document.getSelection();c&&(c.removeAllRanges(),a.forEach((function(e){c.addRange(e)})))}}(window.location.toString()),L.a.success("Copied",.4)}},a.createElement(D.a,null)),a.createElement("a",{href:j},c.name),a.createElement("br",null),a.createElement(H,{name:c.status}),a.createElement(A.a,null,c.method),a.createElement("span",null," \u2192 ","\xa0",a.createElement(ae,{entry:r,scheme:c,access:m})))},c.description&&a.createElement(oe,{value:c.description}),h&&a.createElement(Y,{bg:"#f5f5f5",name:"request \u2192 headers",extra:a.createElement(Z,{type:c.access,active:m,onSelect:d})},h),E&&a.createElement(Y,{bg:"#fafafa",name:"request \u2192 params",extra:!h&&a.createElement(Z,{type:c.access,active:m,onSelect:d})},E),a.createElement(Y,{name:"response"},a.createElement(Q,{value:"{\n"+'  "status": '.concat(P[c.status],",\n")+'  "body": '.concat(g)+"\n}"})))}function Y(e){var t=e.bg,n=e.name,r=e.extra,c=e.children;return a.createElement("div",{className:"request-section",style:{background:t}},r&&a.createElement("div",{className:"request-section-extra"},r),a.createElement("div",{className:"request-section-label"},n),a.createElement("div",{className:"request-section-body"},c))}function Z(e){var t=e.type,n=e.active,r=e.onSelect,c=f().accessRights[t];return c?a.createElement("div",{className:"access-selector"},c.extra.map((function(e){return a.createElement("div",{className:"\n\t\t\t\taccess-selector-tab\n\t\t\t\t".concat(e===n&&"access-selector-tab-active","\n\t\t\t"),key:e.name,onClick:function(){return r(e)}},e.name,e.description&&a.createElement(a.Fragment,null," ",a.createElement(B.a,{title:a.createElement("span",{dangerouslySetInnerHTML:{__html:_(e.description)}})},a.createElement(W.a,null))))}))):a.createElement("div",{className:"access-selector-badge"},a.createElement(A.a,{color:"blue"},t))}function ee(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(null==t||"object"!==typeof t)return JSON.stringify(t);var a=n+"  ";return"{\n".concat(Object.entries(t).map((function(t){var r=Object(o.a)(t,2),c=r[0],l=r[1],i=e&&e[c],u=i&&i.nested;u&&u.length?l=ee(u.reduce((function(e,t){return e[t.name]=t,e}),{}),l,a):l=le(l)?JSON.stringify(l,null,(a+n).length).replace(/\}$/,"".concat(a,"}")):JSON.stringify(l);var s=["".concat(a,'"').concat(c,'": ').concat(l)];return i&&s.unshift("".concat(a,"/* ").concat(i.comment,". <b>").concat(te(i),"</b> */")),s.join("\n")})).join(",\n"),"\n").concat(n,"}")}function te(e){var t=e.type,n=e.meta_type,a=e.enum;switch(t){case"map":return"map[".concat(a?"".concat(a.join(" | ")):"string","]string");case"struct":return"object";case"slice":return"".concat(a?"Enum<".concat(a.join(" | "),">"):n,"[]")}return t}function ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"=",c="".concat(e).concat(n.required?"":"?"),o="".concat(t);return t&&"object"===typeof t&&(o=n.nested.length?ee(n.nested.reduce((function(e,t){return e[t.name]=t,e}),{}),t,"   "):JSON.stringify(t)),a.createElement("div",{key:e},a.createElement("div",null,"/* ",n.comment,". ",a.createElement("b",null,te(n))," */"),a.createElement("b",null,c),r,o)}function ae(e){var t,n=e.entry,r=e.scheme,c=e.access,l=f().projects[null===(t=n.scheme)||void 0===t?void 0:t.project],i=[],u=a.useState(""),m=Object(o.a)(u,2),d=m[0],p=m[1],v=null;if(l)if(l.host&&i.push(l.host),l.host_rc&&i.push(l.host_rc),l.host_dev&&i.push(l.host_dev),d=i.includes(d)?d:l.host_rc||i[0],i.length>1){var h=a.createElement(s.a,{onClick:function(e){var t=e.key;p(t)}},i.map((function(e){return a.createElement(s.a.Item,{key:e},e)}))),E=a.createElement(z.a,{overlay:h},a.createElement("span",{className:"endpoint-case-host"},d));v=a.createElement(a.Fragment,null,"https://",E)}else i.length&&(v=a.createElement(a.Fragment,null,"https://",i[0]));return a.createElement("span",null,v,n.name," ",a.createElement(re,{access:c,project:n.scheme.project,detail:n.scheme.detail[r.status],scheme:r,host:d,url:n.name}))}function re(e){var t=e.project,n=e.access,r=e.detail,c=e.scheme,l=e.host,i=e.url,u=a.useRef(null),s=a.useState(!1),m=Object(o.a)(s,2),d=m[0],p=m[1],f=function(){if(u.current){var e=Array.from(u.current.elements).reduce((function(e,t){return e[t.name]=["".concat("checkbox"===t.type?t.checked:t.value)],e}),{});window.open("/godraft:request/?data=".concat(encodeURIComponent(JSON.stringify({project:t,access:c.access,access_extra:null===n||void 0===n?void 0:n.name,method:c.method,host:l,path:i,values:e}))))}p(!1)},v="https://".concat(l).concat(i);return a.createElement(a.Fragment,null,a.createElement("a",{onClick:function(){p(!0)}},a.createElement($.a,null)),a.createElement(K.a,{visible:d,width:Math.max(520,150+7.4*v.length),title:a.createElement(a.Fragment,null,a.createElement(A.a,null,c.method)," \u2192 ","\xa0",a.createElement("span",null,v)),onOk:f,onCancel:function(){p(!1)},okText:"Execute"},a.createElement("form",{ref:u,onSubmit:function(e){e.preventDefault(),f()}},a.createElement(ce,{detail:r,params:Object(c.params)}))))}function ce(e){var t=e.params,n=e.detail,r=a.useState({}),i=Object(o.a)(r,2),u=i[0],s=i[1];return a.createElement(a.Fragment,null,Object.entries(t).map((function(e){var t=Object(o.a)(e,2),r=t[0],i=t[1],d=n.request.params[r],p="bool"===d.type?U.a:m.a,f={name:r,required:d.required,value:void 0,checked:void 0,onChange:function(e){var t=e.target;s(Object(l.a)({},u,Object(c.a)({},r,"bool"===d.type?t.checked:t.value)))}};return void 0===u[r]&&(u[r]=i),"bool"===d.type?(f.checked=u[r],f.value="true"):f.value=u[r],a.createElement("div",{key:r,className:"request-form-item required-".concat(f.required)},a.createElement("div",null,a.createElement("b",null,r),": ",d.comment),a.createElement(p,f))})))}function oe(e){var t=e.value;return a.createElement("div",{className:"endpoint-case-descr",dangerouslySetInnerHTML:{__html:_(t)}})}function le(e){return"[object Object]"===Object.prototype.toString.call(e)}var ie=n(187),ue=n.n(ie);function se(e){var t=e.id,n=p().state,r=n.groups,c=n.projects,o=n.activeGroup,l=n.activeGroupEntries,u=n.activeEndpoint,s=n.fastEndpointIndex,m=a.useMemo((function(){var e=null;return l.some((function n(a){return g(a)===t?(e=a,!0):a.entries.some(n)})),!e&&u&&(e=s[u]||null),e}),[l,t]);if(!m)return a.createElement(i.a,{status:"error",title:a.createElement(a.Fragment,null,"\u041e\u0448\u0438\u0431\u043a\u0430: \xab",a.createElement("b",null,t),"\xbb \u2014 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")});var d=r[o];if(!d)return a.createElement(i.a,{status:"error",title:a.createElement(a.Fragment,null,"\u041e\u0448\u0438\u0431\u043a\u0430: \xab",a.createElement("b",null,o||"<<undefined>>"),"\xbb \u2014 \u0433\u0440\u0443\u043f\u043f\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430")});var f=m.scheme,v=c[f.project];return a.createElement(a.Fragment,null,a.createElement(F.a,{style:{marginBottom:20}},a.createElement(F.a.Item,null,d.name),v&&a.createElement(F.a.Item,null,v.name),a.createElement(F.a.Item,null,f.name)),f.description&&a.createElement(T.a,{style:{fontSize:"120%"}},a.createElement(ue.a,null,f.description)),f.cases.length>1&&a.createElement("ul",null,f.cases.map((function(e,t){return a.createElement("li",{key:t},a.createElement("a",{href:w(d,m,e)},e.name),"\xa0",a.createElement(H,{name:e.status,badge:!0}))}))),a.createElement(M.a,{direction:"vertical",style:{width:"100%"}},f.cases.map((function(e,t){return a.createElement(X,{key:"".concat(d.id,"-").concat(m.name,"-").concat(e.name,"-").concat(t),group:d,entry:m,value:e})}))))}var me=n(568);function de(){var e=p().state,t=e.search,n=e.groups,r=e.activeGroup,c=e.activeGroupEntries,o=n[r],l=c.flatMap((function(e){return e.entries}))||[],u=!0,s=l.map((function e(n){if("G"===n.type)return a.createElement(me.a.TreeNode,{key:n.name,title:n.name},n.entries.map(e));if("E"===n.type){var r=j(n.name,t),c=j(n.scheme.name,t);return null===r&&null===c?null:(u=!1,a.createElement(me.a.TreeNode,{key:k(o,n),title:a.createElement(a.Fragment,null,a.createElement("a",null,r||n.name),a.createElement("span",null," \u2014 ",c||n.scheme.name))}))}throw"not supproted: ".concat(n.type)})),m=y(),d=a.useCallback((function(e){m(e.join(""))}),[]);return a.createElement(J.a,{title:"\u0412\u0441\u0435 \u043c\u0435\u0442\u043e\u0434\u044b"},u?a.createElement(i.a,{status:"info",title:a.createElement(a.Fragment,null,"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \xab",a.createElement("b",null,t),"\xbb \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")}):a.createElement(me.a,{showLine:!0,onSelect:d,defaultExpandAll:!0},s))}function pe(){var e=p().state,t=e.loading,n=e.search,r=e.activeEndpoint,c=t?a.createElement(R,null):null;return null===c&&(c=!n&&r?a.createElement(se,{id:r}):a.createElement(de,null)),a.createElement(u.a,{style:{height:"100%"}},a.createElement(x,null),a.createElement(u.a,null,a.createElement(u.a.Sider,{width:250,className:"site-layout-background"},a.createElement(I,null)),a.createElement(u.a.Content,{key:r||n,className:"site-layout-background",style:{margin:20,minHeight:280}},c)))}var fe={};function ve(e){var t=e.config,n=a.useMemo((function(){var e={loading:!0,search:"",queryString:"",activeGroup:(null===t||void 0===t?void 0:t.active_group)||null,activeGroupEntries:[],activeEndpoint:null,fastEndpointIndex:{},groups:C((null===t||void 0===t?void 0:t.groups)||[]),projects:C((null===t||void 0===t?void 0:t.projects)||[]),accessRights:C((null===t||void 0===t?void 0:t.rights)||[])};return Object(l.a)({},e,{},O(e,!0))}),[t]);return t&&t.groups&&t.groups.length?a.createElement(he,{state:n}):(console.warn("Brocked state:",n),a.createElement(i.a,{status:"error",title:"Broken config (no groups)"}))}function he(e){var t,n,r=a.useState(e.state),i=Object(o.a)(r,2),u=i[0],s=i[1],m={state:u,updateState:a.useCallback((function(){2===arguments.length?s(Object(l.a)({},u,Object(c.a)({},arguments[0],arguments[1]))):s(Object(l.a)({},u,{},Object(arguments[0])))}),[u])};return function(e){a.useEffect((function(){var t=e.groups,n=e.activeGroup,a=e.activeEndpoint,r=e.queryString,c=e.search,o=setTimeout((function(){var e,o=n||"",l=null===(e=t[n])||void 0===e?void 0:e.name;a&&(o+=":".concat(a),l+=a),c?o+="?search=".concat(c):r&&!r.includes("search=")&&(o+="?".concat(r)),window.location.hash=o,l&&(window.document.title=l)}),250);return function(){clearTimeout(o)}}),[window.location.hash,e])}(u),t=function(){s(Object(l.a)({},u,{},O(u)))},n=[u],a.useEffect((function(){return window.addEventListener("hashchange",t),function(){window.removeEventListener("hashchange",t)}}),n),function(e){var t=e.state,n=e.updateState,r=a.useState(0),c=Object(o.a)(r,2),l=c[0],i=c[1],u=a.useCallback((function(){i(l+1)}),[l]),s=t.groups[t.activeGroup];if(!s)return;var m=!1,d=s.entries.map((function(e){var n=fe[e];return void 0===n?(m=!0,fe[e]=null,fetch(e).then((function(e){return e.json()})).then((function(n){fe[e]=n,n.entries.forEach((function e(n){"E"===n.type?t.fastEndpointIndex[n.name]=n:"G"===n.type&&n.entries.forEach(e)})),u()}))):null===n&&(m=!0),n}));m!==t.loading&&n(m?{loading:!0}:{loading:!1,activeGroupEntries:d})}(m),function(e){var t=a.useRef(!0);a.useEffect((function(){if(!e){var n=document.querySelector('[id="'.concat(decodeURIComponent(window.location.hash),'"]'));requestAnimationFrame((function(){n&&n.scrollIntoView({behavior:t.current?"auto":"smooth"}),t.current=!1}))}}),[e,window.location.hash])}(u.loading),a.createElement(d.Provider,{value:m},a.createElement(pe,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(557);Object(r.render)(a.createElement(ve,{config:Object(globalThis.GODRAFT_CONFIG)}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.ea0b36de.chunk.js.map