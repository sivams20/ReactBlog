(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(16),s=c.n(a),j=(c(22),c(23),c(7)),i=c(0),l=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)("h1",{children:"My Blog..."}),Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(j.b,{to:"/",children:"Home"}),Object(i.jsx)(j.b,{to:"/create",children:"New Blog"})]})]})},o=function(e){var t=e.blogs;e.deleteBlog;return Object(i.jsx)("div",{className:"blog-container",children:t.map((function(e){return Object(i.jsxs)("div",{className:"blog-preview",children:[Object(i.jsx)(j.b,{to:"blog/".concat(e.id),children:Object(i.jsx)("h2",{children:e.title})}),Object(i.jsxs)("p",{children:["written by ",e.author]})]},e.id)}))})},b=c(9),d=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(null),j=Object(b.a)(s,2),i=j[0],l=j[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("Could not fetch data from server");return e.json()})).then((function(e){console.log("data",e),a(e),l(null)})).catch((function(e){console.log("error",e.message),l(e.message)}))}),[e]),{data:r,error:i}},u=function(){var e=d("https://run.mocky.io/v3/69378cb7-4a9e-4b51-b01c-4c8d66aa3a11"),t=e.data,c=e.error;return Object(i.jsxs)("div",{className:"home",children:[c&&Object(i.jsx)("div",{children:c}),t&&Object(i.jsx)(o,{blogs:t})]})},h=c(2),O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(b.a)(a,2),j=s[0],l=s[1],o=Object(n.useState)("daniel"),d=Object(b.a)(o,2),u=d[0],O=d[1],x=Object(h.f)();return Object(i.jsxs)("div",{className:"create",children:[Object(i.jsx)("h1",{children:"Add New Blog"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();x.push("/")},children:[Object(i.jsx)("label",{children:"Blog Title:"}),Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){return r(e.target.value)},required:!0}),Object(i.jsx)("label",{children:"Blog Body:"}),Object(i.jsx)("input",{type:"textarea",value:j,onChange:function(e){return l(e.target.value)},required:!0}),Object(i.jsx)("label",{children:"Blog Author:"}),Object(i.jsxs)("select",{value:u,onChange:function(e){return O(e.target.value)},children:[Object(i.jsx)("option",{value:"mario",children:"Mario"}),Object(i.jsx)("option",{value:"daniel",children:"Daniel"})]}),Object(i.jsx)("button",{children:"Add Blog"})]})]})},x=function(){var e=Object(h.g)().id,t=d("https://jsonplaceholder.typicode.com/comments/"+e),c=t.data,n=t.error;return Object(i.jsxs)("div",{className:"blog-details",children:[n&&Object(i.jsx)("div",{children:n}),c&&Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:c.name}),Object(i.jsx)("p",{children:c.body})]})]})},g=function(){return Object(i.jsxs)("div",{className:"not-found",children:[Object(i.jsx)("p",{children:"Page cannot be found!"}),Object(i.jsx)(j.b,{to:"/",children:"Back to the home page"})]})};var f=function(){return Object(i.jsx)(j.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"content",children:Object(i.jsxs)(h.c,{children:[Object(i.jsx)(h.a,{exact:!0,path:"/",children:Object(i.jsx)(u,{})}),Object(i.jsx)(h.a,{path:"/create",children:Object(i.jsx)(O,{})}),Object(i.jsx)(h.a,{path:"/blog/:id",children:Object(i.jsx)(x,{})}),Object(i.jsx)(h.a,{path:"*",children:Object(i.jsx)(g,{})})]})})]})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}},[[30,1,2]]]);
//# sourceMappingURL=main.0d17a0f6.chunk.js.map