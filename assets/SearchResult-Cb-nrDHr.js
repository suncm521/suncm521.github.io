import{u as U,e as se,f as ae,g as Y,h as te,P as le,t as re,i as ue,j as F,k as q,l as ie,w as M,m as a,n as oe,R as j,p as ne,q as ce,v as ve,C as pe,x as de,y as ye,z as he,A as me,B as ge,D as fe,E as He,F as B,G as I,H as Re,I as x,J as ke}from"./app-BUgpOmOP.js";const we=["/","/base/network/cherry.html","/404.html","/base/network/","/base/","/category/","/category/%E6%A8%B1%E6%A1%83/","/tag/","/tag/%E7%BA%A2/","/tag/%E5%B0%8F/","/tag/%E5%9C%86/","/article/","/star/","/timeline/"],Qe="SEARCH_PRO_QUERY_HISTORY",g=U(Qe,[]),qe=()=>{const{queryHistoryCount:t}=x,l=t>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,t-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},P=t=>we[t.id]+("anchor"in t?`#${t.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=x,f=U(xe,[]),Ce=()=>{const t=_>0;return{enabled:t,resultHistory:f,addResultHistory:l=>{if(t){const r={link:P(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ee=t=>{const l=pe(),r=Y(),C=de(),i=F(0),k=q(()=>i.value>0),y=ye([]);return he(()=>{const{search:h,terminate:E}=me(),H=Re(c=>{const R=c.join(" "),{searchFilter:S=d=>d,splitWord:A,suggestionsFilter:O,...m}=l.value;R?(i.value+=1,h(c.join(" "),r.value,m).then(d=>S(d,R,r.value,C.value)).then(d=>{i.value-=1,y.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(y.value=[])})):y.value=[]},x.searchDelay-x.suggestDelay);M([t,r],([c])=>H(c),{immediate:!0}),ge(()=>{E()})}),{isSearching:k,results:y}};var Ae=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:l}){const r=ae(),C=Y(),i=te(le),{enabled:k,addQueryHistory:y,queryHistory:h,removeQueryHistory:E}=qe(),{enabled:H,resultHistory:c,addResultHistory:R,removeResultHistory:S}=Ce(),A=k||H,O=re(t,"queries"),{results:m,isSearching:d}=Ee(O),u=ue({isQuery:!0,index:0}),v=F(0),p=F(0),T=q(()=>A&&(h.value.length>0||c.value.length>0)),b=q(()=>m.value.length>0),D=q(()=>m.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:h.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?h.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},V=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<D.value.contents.length-1?p.value+=1:V()},N=()=>{p.value>0?p.value-=1:J()},L=e=>e.map(s=>ke(s)?s:a(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,Q=""]=He(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>a("div",L([o,...n,Q])))}return e.display.map(s=>a("div",L(s)))},w=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>k?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.queryHistory),h.value.map((e,s)=>a("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[a(B,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),E(s)}})]))])):null,Z=()=>H?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{w()}},()=>[a(B,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>L(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),S(s)}})]))])):null;return ie("keydown",e=>{if(t.isFocusing){if(b.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=D.value.contents[p.value];y(t.queries.join(" ")),R(s),r.push(P(s)),w()}}else if(H){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",h.value[s]),e.preventDefault()):(r.push(c.value[s].link),w())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:t.queries.length?!b.value:!T.value}],id:"search-pro-results"},t.queries.length?d.value?a(oe,{hint:i.value.searching}):b.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const Q=v.value===o;return a("li",{class:["search-pro-result-list-item",{active:Q}]},[a("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const $=Q&&p.value===ee;return a(j,{to:P(n),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{y(t.queries.join(" ")),R(n),w()}},()=>[n.type==="text"?null:a(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?a("div",{class:"content-header"},n.header):null,a("div",W(n))])])})])})):i.value.emptyResult:A?T.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Ae as default};