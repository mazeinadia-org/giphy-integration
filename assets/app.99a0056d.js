import"./style.7f2dd081.js";import{R as y,r,d as i}from"./vendor.b9133ecf.js";const x=()=>r.exports.createElement(i.SearchContextManager,{apiKey:"u3Ro9JQ5EzjkWOHIN0iNBe5WBA5Q7bOW"},r.exports.createElement(E,null)),E=()=>{const{fetchGifs:n,searchKey:e}=r.exports.useContext(i.SearchContext);return r.exports.createElement(r.exports.Fragment,null,r.exports.createElement(i.SearchBar,{className:"miro-giphy-searchbar",autoFocus:!0}),r.exports.createElement(i.Grid,{className:"miro-giphy-grid",key:e,columns:2,width:305,fetchGifs:n,onGifClick:(t,s)=>{s.preventDefault(),g(t.embed_url)}}))};async function g(n){let e,t,s;const c=await miro.board.get({type:"embed"});if(c.length>0){const a=c[0];e=a.width,t=a.x;let m=a.y;c.forEach(u=>{u.y>m&&(m=u.y)}),s=m+e+10}else{const a=await miro.board.viewport.get();e=a.height/2,t=a.x+a.width/2,s=a.y+a.height/2}await miro.board.createEmbed({url:n,mode:"inline",x:t,y:s,width:e,height:e})}function w(){return r.exports.createElement(x,null)}y.render(r.exports.createElement(w,null),document.getElementById("root"));const p=[{name:"Seva",avatar:""},{name:"Memie",avatar:""},{name:"Edu",avatar:""},{name:"Juan",avatar:""},{name:"Nadia",avatar:""}];function b(){const n=(Math.random()*p.length).toFixed();return p[n]}const h=[];let f=!1;const d=window.document.getElementById("autoplay"),l=window.document.createElement("iframe"),o=window.document.createElement("div");l.className="reaction";o.className="user";d.prepend(o);d.prepend(l);setInterval(async()=>{const e=(await miro.board.get({type:"embed"})).find(t=>!h.includes(t.id));if(o.className="user",e){f||(f=!0,d.className="autoplay"),h.push(e.id),l.src=e.url;const t=b();o.innerHTML=t.name,o.className="user user-border"}},2500);
