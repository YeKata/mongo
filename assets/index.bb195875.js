import{e as h,o as u,b as l,f as e,a as y,i as k,q as P,j as $,u as i,s as b,F as C,r as I,t as m}from"./entry.f5d8022f.js";import{u as d}from"./asyncData.3aa05ef2.js";import{u as S}from"./index.82027fac.js";const K={class:"input-wrapper flex"},V=["value"],N=h({__name:"SearchInput",props:{searchKeyword:{type:String,required:!0,defalt:()=>""}},emits:["input-keyword","search-products"],setup(p,{emit:o}){const c=n=>{const r=n.target.value;o("input-keyword",r)},t=()=>{o("search-products")};return(n,r)=>(u(),l("div",K,[e("input",{class:"search-input",type:"text",value:p.searchKeyword,onInput:c},null,40,V),e("button",{class:"btn",type:"button",onClick:t}," search ")]))}});const B=y(N,[["__scopeId","data-v-982df57d"]]),D={class:"app"},L=["onClick"],q=["src","alt"],F=h({__name:"index",setup(p){const o=d("Products",async()=>await $fetch("/api/products")).data,c=k(),t=P(""),n=S(),r=s=>{t.value=s},f=s=>{n.idNum=s,c.push(`detail/${s}`)},v=async()=>{const s=t.value;s?await d("Products",async()=>await $fetch(`/api/name/${s}`)):await d("Products",async()=>await $fetch("/api/products"))},w=()=>{n.isLogin?c.push("/cart"):alert("로그인 해주세요")},x=()=>{n.isLogin?(n.indexNum=o.value.length,c.push("/product")):alert("로그인 해주세요")};return(s,_)=>{const g=B;return u(),l("div",D,[e("main",null,[$(g,{modelValue:i(t),"onUpdate:modelValue":_[0]||(_[0]=a=>b(t)?t.value=a:null),"search-keyword":i(t),onInputKeyword:r,onSearchProducts:v},null,8,["modelValue","search-keyword"]),e("ul",null,[(u(!0),l(C,null,I(i(o),a=>(u(),l("li",{key:a.id,class:"item flex",onClick:R=>f(a.id)},[e("img",{src:a.imageUrl,alt:a.name,class:"product-image"},null,8,q),e("p",null,m(a.name),1),e("span",null,m(a.price),1)],8,L))),128))]),e("div",{class:"cart-wrapper"},[e("button",{class:"btn",onClick:x}," 글 작성 "),e("button",{class:"btn",onClick:w}," 장바구니 바로가기 ")])])])}}});const A=y(F,[["__scopeId","data-v-36599117"]]);export{A as default};
