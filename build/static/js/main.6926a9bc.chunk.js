(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{31:function(e,t,n){e.exports=n(45)},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(5),l=n.n(o),m=n(1),i=(n(41),n(6)),u=n(7),s=n(26),b=n(48),d=Object(i.b)("ADD_CONTACT",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(b.a)(),name:t,number:n}}})),f=Object(i.b)("DELETE_CONTACT"),p=Object(i.b)("FILTER_CONTACT"),E=Object(i.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(u.a)(a,d,(function(e,t){return[].concat(Object(s.a)(e),[t.payload])})),Object(u.a)(a,f,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),N={filterState:Object(i.c)("",Object(u.a)({},p,(function(e,t){return t.payload}))),contacts:E},O=Object(i.a)({reducer:N,devTools:!1}),v=(n(42),n(22)),j=n(23),h=n(25),k=n(28),y=n(24),g=n(27),C=n(12),T=function(e){e.name,e.number;var t={name:"",number:""},n=Object(c.useState)(t),a=Object(g.a)(n,2),o=a[0],l=a[1],i=Object(m.c)(),s=Object(m.d)((function(e){return e.contacts}));console.log(s);var b=function(e){var t=e.target,n=t.name,a=t.value;l(Object(y.a)({},o,Object(u.a)({},n,a)))};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=s.find((function(e){return e.name===o.name}));return""===o.name||""===o.number?(C.a.configure(),void C.a.error("Fill the form")):n?(C.a.configure(),C.a.error("".concat(o.name," is already in contact")),void l(t)):(i(d(o)),void l(t))},className:"block"},r.a.createElement("p",{className:"label"},"Name"),r.a.createElement("input",{type:"text",onChange:b,value:o.name,name:"name"}),r.a.createElement("p",{className:"label"},"Number input"),r.a.createElement("input",{type:"text",onChange:b,value:o.number,name:"number"}),r.a.createElement("button",{type:"submit"},"Add phone"))},A=n(47),I=n(46),w=Object(m.b)((function(e){return{contacts:e.contacts}}))((function(){var e=Object(m.d)((function(e){return e.contacts})),t=Object(m.d)((function(e){return e.filterState})),n=Object(m.c)(),a=function(){return e.filter((function(e){return e.name.toLowerCase().includes(t)}))};return console.log(t),console.log(e),r.a.createElement(r.a.Fragment,null,e.length>2?r.a.createElement(A.a,{component:"ul",className:"list"},a().map((function(e){return r.a.createElement(I.a,{classNames:"listItem",timeout:300,key:e.id},r.a.createElement("li",{className:"listItem"},r.a.createElement("div",{className:"listName"},e.name)," ",r.a.createElement("div",{className:"listName"},e.number),r.a.createElement("button",{onClick:function(){return n(f(e.id))},className:"deletBtn"},"X")))}))):r.a.createElement(A.a,{component:"ul",className:"list"},a().map((function(e){return r.a.createElement(I.a,{classNames:"listItem",timeout:300},r.a.createElement("li",{key:e.id,className:"listItem"},r.a.createElement("div",{className:"listName"},e.name)," ",r.a.createElement("div",{className:"listName"},e.number),r.a.createElement("button",{onClick:function(){return n(f(e.id))},className:"deletBtn"},"X")))}))))})),S=function(){var e=Object(m.c)();return r.a.createElement("div",{className:"block"},r.a.createElement("p",{className:"label"},"Find contacts by name"),r.a.createElement("input",{type:"text",onInput:function(t){e(p(t.target.value))},name:"filter"}))},x=(n(43),n(44),function(e){Object(k.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={book:!1},e}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"overlay"},r.a.createElement(I.a,{in:this.state.book,classNames:"phonebook",timeout:{enter:500}},r.a.createElement("h1",{className:"phonebook"},"Phonebook")),r.a.createElement(T,null),r.a.createElement("h2",{className:"phonebook"},"Contact List"),r.a.createElement(S,null),r.a.createElement(w,null))}}]),n}(c.Component)),D=Object(m.b)((function(e){return{contacts:e.contacts}}))(x);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:O},r.a.createElement(D,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.6926a9bc.chunk.js.map