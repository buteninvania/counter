(this["webpackJsonpexam-01"]=this["webpackJsonpexam-01"]||[]).push([[0],[,,,function(e,r,n){e.exports={counterWrapper:"counter_counterWrapper__3tC1R",counter:"counter_counter__2YnyU",red:"counter_red__2m8zK",buttonsWrapper:"counter_buttonsWrapper__1dM7_",btn:"counter_btn__hkvmD",header:"counter_header__2MAUr",active:"counter_active__29DxB",footer:"counter_footer__3uzB2"}},,function(e,r,n){e.exports={wrapper:"settings_wrapper__1VO3X",control:"settings_control__1v9Xo",conservation:"settings_conservation___6Vo5"}},,function(e,r,n){e.exports={default:"button_default__2JwxQ",error:"button_error__2PSF7"}},,,function(e,r,n){e.exports={spanError:"error_spanError__2WAa5"}},,,,,,,function(e,r,n){},function(e,r,n){},,function(e,r,n){"use strict";n.r(r);var t,a=n(2),c=n.n(a),o=n(8),u=n.n(o),i=(n(17),n(18),n(11)),s=n(9),b=n(1),l=n(12),m=n(7),j=n.n(m),d=n(0),p=function(e){var r=e.error,n=Object(l.a)(e,["error"]),t=r?j.a.error:j.a.default;return Object(d.jsx)("button",Object(b.a)({className:t},n))},N=n(5),O=n.n(N),x=n(10),h=n.n(x),g=function(e){var r=e.message,n=e.className,t=n||h.a.spanError;return Object(d.jsx)("span",{className:t,children:r})},f=n(4);!function(e){e.Change="CHANGING-VALUE-NUMBER",e.ToggleShowSettings="TOGGLE-IS-SHOW-SETTINGS",e.SetCounterNumber="SET-COUNTER-NUMBER",e.SetError="SET-ERROR"}(t||(t={}));var S={isShowSettings:!1,maxNumber:5,minNumber:0,counterNumber:0,error:""},_=function(e,r){switch(r.type){case t.Change:return"inc"===r.payload.changeType?Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},r.payload.value,e[r.payload.value]+1)):Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},r.payload.value,e[r.payload.value]-1));case t.ToggleShowSettings:return Object(b.a)(Object(b.a)({},e),{},{isShowSettings:!e.isShowSettings});case t.SetCounterNumber:return Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},r.payload.mutableKey,r.payload.value));case t.SetError:return Object(b.a)(Object(b.a)({},e),{},{error:r.payload.message})}return e},v=function(e,r){return{type:t.Change,payload:{value:e,changeType:r}}},y=function(){return{type:t.ToggleShowSettings,payload:{}}},C=function(e,r){return{type:t.SetCounterNumber,payload:{mutableKey:e,value:r}}},T=function(e){return{type:t.SetError,payload:{message:e}}},w=function(e){var r=e.dispatch,n=e.minNumber,t=e.maxNumber,a=e.error,c=e.onClickSettings;return Object(d.jsxs)("div",{className:O.a.wrapper,children:[Object(d.jsx)("div",{children:"Counter settings"}),Object(d.jsxs)("div",{className:O.a.control,children:[Object(d.jsx)("span",{children:"Min value:"}),Object(d.jsx)(p,{children:"-",disabled:0===n,onClick:function(){return r(v("minNumber","dec"))}}),Object(d.jsx)("span",{children:n}),Object(d.jsx)(p,{children:"+",error:!!a,onClick:function(){return r(v("minNumber","inc"))}})]}),Object(d.jsxs)("div",{className:O.a.control,children:[Object(d.jsx)("span",{children:"Max value:"}),Object(d.jsx)(p,{children:"-",error:!!a,onClick:function(){return r(v("maxNumber","dec"))}}),Object(d.jsx)("span",{children:t}),Object(d.jsx)(p,{children:"+",onClick:function(){return r(v("maxNumber","inc"))}})]}),Object(d.jsxs)("div",{className:O.a.conservation,children:[Object(d.jsx)(p,{onClick:function(e){return c(e.currentTarget.innerHTML)},disabled:!!a,children:"Apply"}),Object(d.jsx)(p,{onClick:function(e){return c(e.currentTarget.innerHTML)},disabled:!!a,children:"Save"})]}),a&&Object(d.jsx)(g,{message:a})]})},E=n(3),k=n.n(E),M=function(e){Object(s.a)(e),console.log("render"),Object(a.useEffect)((function(){var e=Number(localStorage.getItem("maxValue")),r=Number(localStorage.getItem("minValue"));(r||e)&&(c(C("minNumber",r)),c(C("counterNumber",r)),c(C("maxNumber",e)))}),[]);var r=Object(a.useReducer)(_,S),n=Object(i.a)(r,2),t=n[0],c=n[1];Object(a.useEffect)((function(){t.minNumber>=t.maxNumber?c(T("Invalid value")):c(T(""))}),[t.maxNumber,t.minNumber]);var o=function(e){t.isShowSettings&&"Apply"===e?c(C("counterNumber",t.minNumber)):t.isShowSettings?(c(y()),c(C("counterNumber",t.minNumber)),localStorage.setItem("maxValue",JSON.stringify(t.maxNumber)),localStorage.setItem("minValue",JSON.stringify(t.minNumber))):c(y())};return Object(d.jsxs)("div",{className:k.a.counterWrapper,children:[Object(d.jsx)("div",{className:k.a.header,children:Object(d.jsx)("span",{className:t.isShowSettings?k.a.active:"",onClick:function(e){return o(e.currentTarget.innerHTML)},children:"settings"})}),Object(d.jsx)("div",{className:t.counterNumber===t.maxNumber?k.a.counter+" "+k.a.red:k.a.counter,children:t.counterNumber}),Object(d.jsxs)("div",{className:k.a.buttonsWrapper,children:[Object(d.jsx)(p,{children:"inc",disabled:t.counterNumber>=t.maxNumber||!!t.error,className:k.a.btn,onClick:function(){return c(v("counterNumber","inc"))}}),Object(d.jsx)(p,{children:"reset",disabled:t.counterNumber===t.minNumber||!!t.error,className:k.a.btn,onClick:function(){return c(C("counterNumber",t.minNumber))}})]}),t.isShowSettings&&Object(d.jsx)(w,{maxNumber:t.maxNumber,minNumber:t.minNumber,onClickSettings:o,error:t.error,dispatch:c}),Object(d.jsxs)("div",{className:k.a.footer,children:[Object(d.jsxs)("span",{children:["Minimum value: ",t.minNumber]}),Object(d.jsxs)("span",{children:["Maximum value: ",t.maxNumber]})]})]})},I=function(){return Object(d.jsx)("div",{className:"app-wrapper",children:Object(d.jsx)(M,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(r){var n=r.getCLS,t=r.getFID,a=r.getFCP,c=r.getLCP,o=r.getTTFB;n(e),t(e),a(e),c(e),o(e)}))};u.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),R()}],[[20,1,2]]]);
//# sourceMappingURL=main.733f08c2.chunk.js.map