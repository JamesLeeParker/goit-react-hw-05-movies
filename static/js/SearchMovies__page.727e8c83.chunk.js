(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[5],{34:function(t,e,c){},38:function(t,e,c){"use strict";c.r(e);var n=c(30),r=c(0),a=c(2),s=(c(34),c(1)),i=function(t){var e=t.getValue,c=Object(r.useState)(""),i=Object(n.a)(c,2),o=i[0],u=i[1],j=Object(a.g)();console.log("AAA",j);return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(o),function(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(c){return null}}("searchingQuery",o)},children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"text",value:o,onChange:function(t){t.preventDefault(),u(t.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Serch"})]})})},o=c(8),u=c(31),j=function(t){var e=t.searchingQuery,c=Object(r.useState)([]),i=Object(n.a)(c,2),j=i[0],l=i[1],b=Object(a.g)();return console.log("\u2708\ufe0f ~ location!!!!!!!!",b),Object(r.useEffect)((function(){e&&Object(u.d)(e).then((function(t){l(t.results)}))}),[e]),j.map((function(t){var e="https://image.tmdb.org/t/p/w300/".concat(t.poster_path);return Object(s.jsx)("li",{children:Object(s.jsxs)(o.b,{to:{pathname:"/movie/".concat(t.id),state:{from:b}},children:[Object(s.jsx)("img",{src:e,alt:"",width:"100"}),Object(s.jsx)("p",{children:t.title})]})},t.id)}))};e.default=function(){var t=Object(r.useState)(""),e=Object(n.a)(t,2),c=e[0],a=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{getValue:a}),Object(s.jsx)("ul",{children:Object(s.jsx)(j,{searchingQuery:c})})]})}}}]);
//# sourceMappingURL=SearchMovies__page.727e8c83.chunk.js.map