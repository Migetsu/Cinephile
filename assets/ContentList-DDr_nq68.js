import{u as g,r as f,b as w,o as l,d as p,w as S,e as k,f as a,g as _,t as h,h as x,i as y,j as u,k as M,l as C,m as b,c as d,F as B,n as L}from"./index-DjeT7avg.js";const P={alt:"",class:"main__content-item-img"},T={class:"main__content-item-name"},D={__name:"ContentItem",props:{item:Object,content:String},setup(t){const i=t.content=="movie"?"/movie/":"/tv/",n=g();return(o,c)=>{const e=f("router-link"),s=w("lazy");return l(),p(e,{to:_(i)+t.item.id,class:"main__content-item"},{default:S(()=>[k(a("img",P,null,512),[[s,_(n).imageFullUrl+t.item.backdrop_path]]),a("h2",T,h(t.item.title||t.item.name),1)]),_:1},8,["to"])}}},E={class:"container"},F={class:"main__content"},$={class:"main__content-title"},j={class:"main__content-list"},U={__name:"ContentList",props:{content:String},setup(t){const r=x(),i=y(),n=t,o=u(1),c=u(!1),e=u([]),s=async()=>{c.value||(c.value=!0,n.content==="movie"?(await r.getPopularMovie(o.value),e.value=[...e.value,...r.popularMovies]):(await i.getPopularTvs(o.value),e.value=[...e.value,...i.popularTvs]),c.value=!1,o.value++)},m=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-10&&s()};return M(()=>{s(),window.addEventListener("scroll",m)}),C(()=>n.content,()=>{o.value=1,e.value=[],s()}),b(()=>{window.removeEventListener("scroll",m)}),(z,H)=>(l(),d("div",E,[a("div",F,[a("h2",$,h(n.content=="movie"?"Все фильмы":"Все сериалы"),1),a("div",j,[(l(!0),d(B,null,L(e.value,v=>(l(),p(D,{key:v.id,item:v,content:n.content},null,8,["item","content"]))),128))])])]))}};export{U as _};
//# sourceMappingURL=ContentList-DDr_nq68.js.map