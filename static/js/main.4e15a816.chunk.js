(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{58:function(A,e,t){},60:function(A,e,t){"use strict";t.r(e);var n=t(0),c=t(6),u=t.n(c),f=t(33),d=t(21),r=t(41),b=t.n(r),j=t(78),s=t(40),O=t.n(s),o=t(77),v=t(3);var B=function(A){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],u=t[1];return Object(v.jsxs)("div",{className:"items",children:[Object(v.jsxs)("li",{style:{textDecoration:c?"line-Through":null},onClick:function(){u(!0)},children:["   ",A.text,"  "]}),Object(v.jsx)(o.a,{title:"Delete",children:Object(v.jsx)(j.a,{className:"dltbtn",onClick:function(){A.dltitems(A.id)},children:Object(v.jsx)(O.a,{})})})]})};var N=function(){var A=Object(n.useState)(""),e=Object(d.a)(A,2),t=e[0],c=e[1],u=Object(n.useState)([]),r=Object(d.a)(u,2),s=r[0],O=r[1],N=Object(n.useState)(""),p=Object(d.a)(N,2),w=p[0],a=p[1],x=function(A){O((function(e){return e.filter((function(e,t){return t!==A}))}))};return Object(v.jsx)("div",{className:"main-container",children:Object(v.jsxs)("div",{className:"todo-box",children:[Object(v.jsx)("img",{src:"data:image/png;base64,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",alt:"book",className:"todoimg"}),Object(v.jsx)("h2",{className:"heading",children:"Write Your Todo List Here"}),Object(v.jsxs)("h3",{className:"validation",children:[" ",w," "]}),Object(v.jsxs)("div",{className:"input-container",children:[Object(v.jsx)("input",{type:"text",autoComplete:"off",onChange:function(A){var e=A.target,t=(e.name,e.value);c(t)},value:t,name:"search",placeholder:" Enter Your Task"}),Object(v.jsx)(o.a,{title:"Add",children:Object(v.jsx)(j.a,{className:"addbtn",onClick:function(){""===t?a("Null Not Allowd"):(O((function(A){return console.log([].concat(Object(f.a)(A),[t])),[].concat(Object(f.a)(A),[t])})),c(""),a(""))},children:Object(v.jsx)(b.a,{})})})]}),Object(v.jsx)("div",{className:"store-container",children:Object(v.jsx)("ol",{children:s.map((function(A,e){return Object(v.jsx)(B,{id:e,text:A,dltitems:x},e)}))})})]})})};t(58);u.a.render(Object(v.jsx)(N,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.4e15a816.chunk.js.map