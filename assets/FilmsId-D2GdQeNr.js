import{p as f,q as I,s as S,y as A,u as E,z as L,A as N,j as k,B as V,C as m,k as P,r as u,b as Q,c as d,f as e,g as a,t as o,F as b,n as w,a as B,x as j,o as l,d as q,w as O,e as W}from"./index-D5wGFiLi.js";const X=f("movieRecsStore",{state:()=>({path:"https://api.themoviedb.org/3/movie/",recs:null}),actions:{async getRecs(i){this.trailer=null;try{const n=(await I.get(`${this.path}${i}/recommendations?language=ru-RU`,S)).data;this.recs=n.results}catch(t){console.log(t)}}},getters:{getMovieRecs:i=>t=>i.recs?i.recs.slice(0,t):[]}}),Y=f("movieTrailerStore",{state:()=>({path:"https://api.themoviedb.org/3/movie/",trailer:null}),actions:{async getTrailer(i){this.trailer=null;try{const n=(await I.get(`${this.path}${i}/videos?language=ru-RU`,S)).data;this.trailer=n}catch(t){console.log(t)}}},getters:{}}),G={key:0,class:"main"},H={class:"main__contentId"},J={class:"main__contentId-media"},K=["src"],Z={class:"main__contentId-media-block"},ee={class:"main__contentId-media-left"},te={class:"main__contentId-media-left-title"},se={class:"main__contentId-media-left-text"},oe={class:"main__contentId-media-left-genre"},ae={class:"main__contentId-media-date"},ie=["href"],ne=e("span",{class:"main__contentId-media-span"},"Смотреть Трейлер",-1),ce={class:"main__contentId-media-right"},le=["src"],de={class:"main__contentId-media-actors"},_e=e("h2",{class:"main__contentId-media-title"},"В главных ролях",-1),re={class:"main__contentId-media-casts"},me={class:"main__budgetBlock container"},ue=e("div",{class:"main__budgetBlock-item budgetBlock-title"},"Бюджет",-1),ve=e("div",{class:"main__budgetBlock-item budgetBlock-title"},"Сборы",-1),he=e("div",{class:"main__budgetBlock-item budgetBlock-title"},"Статус",-1),ge=e("div",{class:"main__budgetBlock-item budgetBlock-title"},"Исходное название",-1),pe={class:"main__budgetBlock-item budgetBlock-descr"},ke={class:"main__budgetBlock-item budgetBlock-descr"},be={class:"main__budgetBlock-item budgetBlock-descr"},we={class:"main__budgetBlock-item budgetBlock-descr"},Be={class:"main__recomendations container"},ye=e("h3",{class:"main__recomendations-title"},"Рекомендации",-1),fe={class:"main__recomendations-list"},Ie={alt:"",class:"main__recomendations-item-img"},Se={class:"main__recomendations-item-name"},Re={key:1,class:"loading"},$e=e("div",{class:"loading__spiner"},null,-1),Me=[$e],y="/movie/",Fe={__name:"FilmsId",setup(i){const t=A(),n=E(),v=X(),h=Y(),R=L(),$=N(),M=k(4);V([1,2,3,4]);const s=m(()=>t.movie);var r=m(()=>h.trailer),g=k(null);P(async()=>{await p(R.params.id)});const p=async _=>{await t.getMovieById(_),await h.getTrailer(t.movie.id),await v.getRecs(t.movie.id),g.value=x.value},x=m(()=>v.getMovieRecs(M.value)),C=async _=>{await p(_),$.push(`${y}${_}`),window.scrollTo(0,0)};return(_,xe)=>{const D=u("fa"),F=u("Actor"),T=u("router-link"),U=Q("lazy");return s.value?(l(),d("div",G,[e("div",H,[e("div",J,[e("img",{src:a(n).imageFullUrl+s.value.backdrop_path,alt:"",class:"main__contentId-media-poster"},null,8,K),e("div",Z,[e("div",ee,[e("h1",te,o(s.value.title),1),e("p",se,o(s.value.overview),1),e("p",oe,[e("span",ae,o(new Date(s.value.release_date).getFullYear()),1),(l(!0),d(b,null,w(s.value.genres,c=>(l(),d("span",{key:c.id},o(c.name),1))),128))]),a(r)?(l(),d("a",{key:0,href:a(r)&&a(r).results.length?`https://www.youtube.com/watch?v=${a(r).results[0].key}`:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",class:"main__contentId-media-trailer",target:"blank"},[B(D,{icon:"play",class:"main__contentId-media-icon"}),ne],8,ie)):j("",!0)]),e("div",ce,[e("img",{src:a(n).imageFullUrl+s.value.poster_path,alt:""},null,8,le)]),e("div",de,[_e,e("div",re,[B(F,{type:"/movie/",id:s.value.id,count:6},null,8,["id"])])])])])]),e("div",me,[ue,ve,he,ge,e("div",pe,o(`$${s.value.budget.toLocaleString("de-DE")}`),1),e("div",ke,o(`$${s.value.revenue.toLocaleString("de-DE")}`),1),e("div",be,o(s.value.status),1),e("div",we,o(s.value.original_title),1)]),e("div",Be,[ye,e("div",fe,[(l(!0),d(b,null,w(a(g),(c,z)=>(l(),q(T,{to:y+c.id,class:"main__recomendations-item",key:z,onClick:Ce=>C(c.id)},{default:O(()=>[W(e("img",Ie,null,512),[[U,a(n).imageFullUrl+c.backdrop_path]]),e("h2",Se,o(c.title),1)]),_:2},1032,["to","onClick"]))),128))])])])):(l(),d("div",Re,Me))}}};export{Fe as default};
//# sourceMappingURL=FilmsId-D2GdQeNr.js.map
