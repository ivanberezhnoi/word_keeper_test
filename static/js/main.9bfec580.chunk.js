(this["webpackJsonpword-keeper"]=this["webpackJsonpword-keeper"]||[]).push([[0],{55:function(t,n,e){},56:function(t,n,e){"use strict";e.r(n);var r,a,o,i,c,s,d,u,f,p,l,b,j,g,h,x,O,m,v,w,S=e(0),k=e(26),y=e.n(k),W=e(4),_=e(2),I=e(3),M=e.p+"static/media/star_white.dddeb565.svg",C=e.p+"static/media/star_white_empty.1e66b125.svg",E=e(1),F=I.a.div(r||(r=Object(_.a)(["\n  background-color: var(--main);\n  color: #fff;\n  width: 100%;\n  padding: 20px 30px;\n  font-weight: bold;\n  font-size: 22px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"]))),T=I.a.button(a||(a=Object(_.a)(["\n  font-size: inherit;\n  color: inherit;\n  font-weight: inherit;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    text-shadow: 0 0 2px #fff;\n    img {\n      filter: drop-shadow(0 0 2px #fff);\n    }\n  }\n"]))),D=I.a.img(o||(o=Object(_.a)(["\n  margin-right: 5px;\n"]))),N=function(t){var n=t.setStarMod,e=t.starMod;return Object(E.jsxs)(F,{className:"border-radius",children:["Word Keeper",Object(E.jsxs)(T,{onClick:function(){return n(!e)},children:[Object(E.jsx)(D,{src:e?M:C,alt:""}),"Starred Words"]})]})},J=e(11),z=e(6),P=e.p+"static/media/search.d95a3156.svg",L=e(7),B=e.n(L),Y=e(12),K=e(37).create({baseURL:"http://api.datamuse.com"}),R={n:"noun",v:"verb",adj:"adjective",adv:"adverb"},U=function(t){return Object(Y.a)(B.a.mark((function n(){var e;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K.get("/words?max=10&md=d,p,r&ipa=1&sp=".concat(t,"*"));case 2:return e=n.sent,n.abrupt("return",e.data.map((function(t){return Object(z.a)(Object(z.a)({},t),{},{defs:t.defs?t.defs.map((function(t){return t.replace(/^.+\t/g,"")})):[],tags:t.tags.reduce((function(t,n){return R[n]&&"noun"!==R[n]&&(t.part_of_speach=R[n]),n.match(/ipa_pron/)&&(t.ipa_pron="[ ".concat(n.replace(/ipa_pron:/,"")," ]")),t}),{part_of_speach:"noun"})})})).sort((function(t,n){return t.word.localeCompare(n.word)})));case 4:case"end":return n.stop()}}),n)})))()},q=function(t){var n=Object(S.useState)([]),e=Object(W.a)(n,2),r=e[0],a=e[1],o=Object(S.useCallback)(function(){var t=Object(Y.a)(B.a.mark((function t(n){var e;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(n);case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[]);return Object(S.useEffect)((function(){t?o(t):a([])}),[t,o]),{list:r}},A=I.a.div(i||(i=Object(_.a)(["\n  padding: 15px;\n  background-color: #efefef;\n  width: 25%;\n  min-width: 25%;\n  margin-right: 20px;\n"]))),G=I.a.div(c||(c=Object(_.a)(["\n  position: relative;\n  margin-bottom: 15px;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    right: 10px;\n    top: 50%;\n    transform: translateY(-50%);\n    background: url(",") no-repeat;\n  }\n"])),P),H=I.a.input(s||(s=Object(_.a)(["\n  border-radius: 3px;\n  border: 1px solid var(--main);\n  padding: 15px;\n  outline: none;\n  width: 100%;\n  font-weight: bold;\n  padding-right: 50px;\n\n  &:focus {\n    box-shadow: 0 0 2px var(--main);\n  }\n"]))),Q=I.a.div(d||(d=Object(_.a)(["\n  margin-bottom: 10px;\n\n  input {\n    display: none;\n\n    &:checked + label::before {\n      background-color: var(--main);\n    }\n  }\n"]))),V=I.a.label(u||(u=Object(_.a)(["\n  cursor: pointer;\n  position: relative;\n  padding-left: 30px;\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n  }\n"]))),X=function(t){var n=t.setWords,e=t.starMod,r=t.filterStarredWords,a=Object(S.useState)(""),o=Object(W.a)(a,2),i=o[0],c=o[1],s=q(i).list,d=Object(S.useState)({adjective:!1,verb:!1,noun:!1}),u=Object(W.a)(d,2),f=u[0],p=u[1];Object(S.useEffect)((function(){var t=localStorage.getItem("searchText");t&&c(t);var n=JSON.parse(localStorage.getItem("filters"));n&&p(n)}),[]),Object(S.useEffect)((function(){n(s)}),[s,n]),Object(S.useEffect)((function(){e&&r(i,f),localStorage.setItem("searchText",i),localStorage.setItem("filters",JSON.stringify(f))}),[i,r,e,f]);var l=function(t){p((function(n){return Object(z.a)(Object(z.a)({},n),{},Object(J.a)({},t.target.id,!f[t.target.id]))}))};return Object(E.jsxs)(A,{className:"border-radius",children:[Object(E.jsx)(G,{children:Object(E.jsx)(H,{value:i,onChange:function(t){return c(t.target.value)}})}),e&&Object.keys(f).map((function(t){return Object(E.jsxs)(Q,{children:[Object(E.jsx)("input",{checked:f[t],onChange:l,type:"checkbox",id:t}),Object(E.jsx)(V,{htmlFor:t,children:t})]},t)}))]})},Z=e(13),$=e.p+"static/media/star_empty.e1554bd5.svg",tt=e.p+"static/media/star_full.195e88a1.svg",nt=I.a.div(f||(f=Object(_.a)(["\n  background-color: #fff;\n  padding: 8px 15px;\n  display: flex;\n  flex-wrap: wrap;\n  border-radius: 3px;\n\n  opacity: ",";\n  box-shadow: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"])),(function(t){return t.dragging?.2:1}),(function(t){return t.dragging?"inset 0 0 0 2px #000":"none"})),et=I.a.button(p||(p=Object(_.a)(["\n  margin-left: auto;\n  img {\n    display: block;\n  }\n\n  &:hover {\n    filter: drop-shadow(0 0 2px var(--main));\n  }\n"]))),rt=I.a.span(l||(l=Object(_.a)(["\n  font-weight: bold;\n  margin-right: 20px;\n"]))),at=I.a.span(b||(b=Object(_.a)(["\n  font-style: italic;\n  margin-right: 20px;\n"]))),ot=I.a.span(j||(j=Object(_.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 20px;\n"]))),it=I.a.div(g||(g=Object(_.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  width: 100%;\n  cursor: pointer;\n"]))),ct=I.a.span(h||(h=Object(_.a)(["\n  margin-right: 20px;\n  min-width: 30px;\n  height: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  span {\n    height: 1px;\n    width: 100%;\n    background-color: #000;\n  }\n"]))),st=I.a.div(x||(x=Object(_.a)(["\n  width: 100%;\n  font-size: 16px;\n  margin-top: 20px;\n\n  * {\n    font-size: 16px;\n  }\n"]))),dt=function(t){var n=t.item,e=t.addToStarred,r=t.removeFromStarred,a=t.starred,o=t.starMod,i=t.onDragOver,c=t.dragging,s=t.setDragging,d=n.word,u=n.defs,f=n.tags,p=Object(S.useState)(!1),l=Object(W.a)(p,2),b=l[0],j=l[1];return Object(E.jsxs)(nt,{draggable:o,onDragStart:function(){return s(d)},onDragEnd:function(){return s(null)},dragging:c===d,onDragEnter:function(){return i(d)},children:[Object(E.jsxs)(it,{onClick:function(){return j(!b)},children:[o&&Object(E.jsxs)(ct,{children:[Object(E.jsx)("span",{}),Object(E.jsx)("span",{}),Object(E.jsx)("span",{})]}),Object(E.jsx)(rt,{children:d}),Object(E.jsx)(at,{children:f.part_of_speach}),!!u.length&&!b&&Object(E.jsx)(ot,{children:u[0]}),Object(E.jsx)(et,{onClick:function(t){t.stopPropagation(),a?r(n):e(n)},children:Object(E.jsx)("img",{src:a?tt:$,width:"30",height:"30",alt:""})})]}),b&&Object(E.jsxs)(st,{children:[Object(E.jsx)("b",{children:"Pronunciation"}),": ",Object(E.jsx)("span",{children:f.ipa_pron}),!!u.length&&Object(E.jsxs)("div",{children:[Object(E.jsx)("p",{children:Object(E.jsx)("b",{children:"Definitions:"})}),Object(E.jsx)("ul",{children:u.map((function(t,n){return Object(E.jsx)("li",{children:t},n)}))})]})]})]})},ut=I.a.div(O||(O=Object(_.a)(["\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n"]))),ft=function(t){var n=t.words,e=t.removeFromStarred,r=t.addToStarred,a=t.starredWords,o=t.filtredStarredWords,i=t.starMod,c=t.setStarredWords,s=i?o:n,d=Object(S.useState)(null),u=Object(W.a)(d,2),f=u[0],p=u[1],l=function(t){if(f!==t){console.log(t);var n=a.findIndex((function(t){return t.word===f})),e=a.findIndex((function(n){return n.word===t})),r=Object(Z.a)(a),o=r[n];r[n]=r[e],r[e]=o,c(r)}};return Object(E.jsx)(ut,{children:s.map((function(t){return Object(E.jsx)(dt,{item:t,starred:a.some((function(n){return n.word===t.word})),addToStarred:r,removeFromStarred:e,starMod:i,onDragOver:l,dragging:f,setDragging:p},t.word)}))})},pt=function(t){var n=Object(S.useState)([]),e=Object(W.a)(n,2),r=e[0],a=e[1];return{starredWords:r,addToStarred:function(t){a((function(n){return[].concat(Object(Z.a)(n),[t])}))},removeFromStarred:function(t){a((function(n){return n.filter((function(n){return n.word!==t.word}))}))},setStarredWords:a}},lt=I.a.div(m||(m=Object(_.a)(["\n  width: 1000px;\n  background-color: #f8f5f5;\n  padding: 10px;\n  margin-top: 200px;\n"]))),bt=I.a.div(v||(v=Object(_.a)(["\n  margin-bottom: 20px;\n  display: flex;\n  min-height: 150px;\n"]))),jt=I.a.p(w||(w=Object(_.a)(["\n  font-size: 30px;\n  margin-left: 15px;\n  font-weight: bold;\n"]))),gt=function(){var t=Object(S.useState)([]),n=Object(W.a)(t,2),e=n[0],r=n[1],a=Object(S.useState)(!1),o=Object(W.a)(a,2),i=o[0],c=o[1],s=pt(),d=s.starredWords,u=s.addToStarred,f=s.removeFromStarred,p=s.setStarredWords,l=Object(S.useState)(d),b=Object(W.a)(l,2),j=b[0],g=b[1],h=Object(S.useCallback)((function(t,n){var e=Object.keys(n).filter((function(t){return n[t]}));g(d.filter((function(n){var r=n.word.startsWith(t);return(!e.length||e.includes(n.tags.part_of_speach))&&r})))}),[d]);return Object(S.useEffect)((function(){var t=JSON.parse(localStorage.getItem("starredWords"));(null===t||void 0===t?void 0:t.length)&&p(t)}),[p]),Object(S.useEffect)((function(){var t=JSON.parse(localStorage.getItem("starMod"));t&&c(t)}),[]),Object(S.useEffect)((function(){localStorage.setItem("starredWords",JSON.stringify(d))}),[d]),Object(S.useEffect)((function(){localStorage.setItem("starMod",JSON.stringify(i))}),[i]),Object(E.jsxs)(lt,{className:"border-radius",children:[Object(E.jsx)(N,{setStarMod:c,starMod:i}),i&&Object(E.jsx)(jt,{children:"Starred Words"}),Object(E.jsxs)(bt,{children:[Object(E.jsx)(X,{setWords:r,starMod:i,filterStarredWords:h}),Object(E.jsx)(ft,{words:e,addToStarred:u,starredWords:d,filtredStarredWords:j,removeFromStarred:f,starMod:i,setStarredWords:p})]})]})},ht=(e(55),function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,57)).then((function(n){var e=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),r(t),a(t),o(t),i(t)}))});y.a.render(Object(E.jsx)(gt,{}),document.getElementById("root")),ht()}},[[56,1,2]]]);
//# sourceMappingURL=main.9bfec580.chunk.js.map