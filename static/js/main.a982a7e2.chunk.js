(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{32:function(e,t,c){},52:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(25),o=c.n(s),i=c(8),r=c(2),l=(c(32),c(1));var j=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},d=c(15),b=c(26),u=c.n(b),h="https://api.themoviedb.org/3/movie/popular?api_key=".concat("7b8130ffeb52a6a150ca0612cded1154");c(52);var m=function(e){return Object(l.jsx)(i.b,{to:{pathname:"/movie/".concat(e.id),state:{props:e}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:"".concat("http://image.tmdb.org/t/p/","w500").concat(e.poster_path),alt:e.title,title:e.title}),Object(l.jsxs)("div",{className:"movie_data",children:[Object(l.jsx)("h3",{className:"movie_title",children:e.title}),Object(l.jsx)("h5",{className:"movie_release_date",children:e.release_date}),Object(l.jsx)("ul",{className:"movie_genre",children:e.genre.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie_summary",children:[e.overview.slice(0,140),"..."]})]})]})})};c(58);var p=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)([]),i=Object(d.a)(o,2),r=i[0],j=i[1];Object(a.useEffect)((function(){b(h)}),[]);var b=function(e){u.a.get(e).then((function(e){j(e.data.results),console.log(e.data.results),s(!1)})).catch((function(e){console.log(e)}))};return Object(l.jsx)("section",{className:"container",children:c?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:r&&r.map((function(e,t){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(m,{id:e.id,title:e.title,overview:e.overview,popularity:e.popularity,vote_average:e.vote_average,release_date:e.release_date,poster_path:e.poster_path,genre:e.genre_ids})},t)}))})})};c(59);var v=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})};var O=function(e){return Object(a.useEffect)((function(){console.log(e),void 0===e.location.state&&e.history.push("/")}),[]),Object(l.jsx)("div",{children:"Detail Page"})};var x=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(r.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(r.a,{path:"/about",component:j}),Object(l.jsx)(r.a,{path:"/movie/:id",component:O})]})};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a982a7e2.chunk.js.map