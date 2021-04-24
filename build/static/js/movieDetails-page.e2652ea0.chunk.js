(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{56:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return j}));var c=a(59),n=a.n(c),i="0d4e8a72aec64d2db9275b816bb7cbd6";n.a.defaults.baseURL="https://api.themoviedb.org/3",n.a.defaults.params={api_key:i};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.a.get("/trending/movie/day?api_key=".concat(i,"&page=").concat(e)).then((function(e){return e.data}))},r=function(e){return n.a.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false")).then((function(e){return e.data}))},o=function(e){return n.a.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))},l=function(e){return n.a.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))},j=function(e){return n.a.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US")).then((function(e){return e.data}))}},57:function(e,t,a){"use strict";t.a=a.p+"static/media/noImage.0e049a38.png"},91:function(e,t,a){e.exports={card:"MovieCard_card__31Gno",imageMovie:"MovieCard_imageMovie__1DcBf",content:"MovieCard_content__3wQ9c",category:"MovieCard_category__3pGjO",link:"MovieCard_link__yRl8A",item:"MovieCard_item__1u59L",activeLink:"MovieCard_activeLink__2XQ9O",ulGenre:"MovieCard_ulGenre__1M51b",list:"MovieCard_list__3DcO7",nav:"MovieCard_nav__2hcaR"}},92:function(e,t,a){e.exports={list:"Cast_list__OKlox",movieItem:"Cast_movieItem__33F8_",title:"Cast_title__SVHQ5",image:"Cast_image__s5Lgj"}},93:function(e,t,a){e.exports={list:"Reviews_list__24B7I",ReviewsList:"Reviews_ReviewsList__2Gcjd",Item:"Reviews_Item__1ih_J",NotReviews:"Reviews_NotReviews__1M6Le"}},95:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var c=a(58),n=a(0),i=a(3),s=a(56),r=a(9),o=a(57),l=a(91),j=a.n(l),u=a(1),d=function(e){var t,a,c,n,s=e.movie,l=Object(i.h)(),d=Object(i.j)().url,m=s.poster_path,v=s.original_title,h=s.release_date,b=s.overview,_=s.vote_average;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:j.a.card,children:[Object(u.jsx)("img",{className:j.a.imageMovie,src:m?"https://image.tmdb.org/t/p/w500".concat(s.poster_path):o.a,alt:v}),Object(u.jsxs)("div",{className:j.a.content,children:[Object(u.jsx)("h2",{className:j.a.title,children:v}),Object(u.jsxs)("p",{className:j.a.text,children:["User Score: ",10*_,"%"]}),Object(u.jsx)("p",{className:j.a.category,children:"Overview:"}),Object(u.jsx)("p",{className:j.a.text,children:b}),Object(u.jsx)("p",{className:j.a.category,children:"Genres:"}),s.genres&&Object(u.jsx)("ul",{className:j.a.ulGenre,children:s.genres.map((function(e,t){return Object(u.jsx)("li",{children:e.name},t)}))}),h&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:j.a.text,children:"Date:"}),Object(u.jsx)("p",{className:j.a.text,children:h})]})]})]}),Object(u.jsxs)("div",{className:j.a.nav,children:[Object(u.jsx)("p",{className:j.a.category,children:"Additional information"}),Object(u.jsxs)("ul",{className:j.a.list,children:[Object(u.jsx)("li",{className:j.a.item,children:Object(u.jsx)(r.c,{to:{pathname:"".concat(d,"/cast"),state:{from:null!==(t=null===l||void 0===l||null===(a=l.state)||void 0===a?void 0:a.from)&&void 0!==t?t:"/"}},className:j.a.link,activeClassName:j.a.activeLink,children:"Cast"})}),Object(u.jsx)("li",{className:j.a.item,children:Object(u.jsx)(r.c,{to:{pathname:"".concat(d,"/reviews"),state:{from:null!==(c=null===l||void 0===l||null===(n=l.state)||void 0===n?void 0:n.from)&&void 0!==c?c:"/"}},className:j.a.link,activeClassName:j.a.activeLink,children:"Reviews"})})]})]})]})},m=a(17),v=a.n(m),h=a(92),b=a.n(h),_=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],l=Object(i.i)().movieId;return Object(n.useEffect)((function(){Object(s.a)(l).then((function(e){var t=e.cast;r(t)})).catch((function(e){return console.log("Error: ",e)}))}),[l]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(v.a,{type:"Hearts",color:"#00BFFF",height:80,width:80,timeout:2e3}),a&&a.length>0?Object(u.jsx)("ul",{className:b.a.movieItem,children:a.map((function(e){var t=e.original_name,a=e.id,c=e.profile_path;return Object(u.jsxs)("li",{className:b.a.item,children:[Object(u.jsx)("img",{className:b.a.image,src:c?"https://image.tmdb.org/t/p/w200".concat(c):o.a,alt:t||"image",width:"150",height:"230"}),Object(u.jsx)("h4",{className:b.a.title,children:t||"No name"})]},a)}))}):Object(u.jsx)("p",{children:"No information"})]})},O=a(93),f=a.n(O),g=function(){var e=Object(i.i)().movieId,t=Object(n.useState)(null),a=Object(c.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){Object(s.c)(e).then((function(e){var t=e.data;return o(t.results)})).catch((function(e){return console.log("Error: ",e)}))}),[e]),Object(u.jsx)("div",{className:f.a.wrapper,children:r?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{className:f.a.list,children:r.map((function(e,t){return Object(u.jsxs)("li",{className:f.a.item,children:[Object(u.jsxs)("p",{className:f.a.title,children:["Author: ",e.author]}),Object(u.jsxs)("p",{children:[" ",e.content]})]},t)}))})}):Object(u.jsx)("p",{className:f.a.text,children:"No reviews to show"})})},p=function(){var e=Object(i.j)().path,t=Object(i.i)().movieId,a=Object(n.useState)({}),r=Object(c.a)(a,2),o=r[0],l=r[1],j=Object(i.h)(),m=Object(i.g)();Object(n.useEffect)((function(){Object(s.b)(t).then((function(e){l(e)}))}),[t]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{type:"button",onClick:function(){var e;return m.push((null===j||void 0===j||null===(e=j.state)||void 0===e?void 0:e.from)||"/")},children:"Go back"}),o&&Object(u.jsx)(d,{movie:o}),Object(u.jsx)(i.b,{path:"".concat(e,":movieId/cast"),children:o&&Object(u.jsx)(_,{})}),Object(u.jsx)(i.b,{path:"".concat(e,":movieId/reviews"),children:o&&Object(u.jsx)(g,{})})]})}}}]);
//# sourceMappingURL=movieDetails-page.e2652ea0.chunk.js.map