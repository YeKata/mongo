import{e as l,o as c,b as o,f as t,F as v,r as f,u as y,t as i,p as u,h as d,a as p,i as x,j as b}from"./entry.eb389247.js";import{u as C,r as g}from"./asyncData.c2f78b58.js";import{u as h}from"./index.8ca3dede.js";const k=s=>(u("data-v-1872524c"),s=s(),d(),s),S={class:"list-wrapper"},w=["src","alt"],L={class:"description"},$=k(()=>t("p",null,null,-1)),B=["onClick"],P=l({__name:"CartList",setup(s){const a=h(),{data:n}=C("Products",async()=>await a.cartItems),r=async _=>{await a.deleteCartItem(_),g("Products")};return(_,m)=>(c(),o("div",S,[t("ul",null,[(c(!0),o(v,null,f(y(n),e=>(c(),o("li",{key:e,class:"list-item"},[t("img",{src:e.imageUrl,alt:e.name,class:"thumbnail"},null,8,w),t("div",L,[t("p",null,i(e.name),1),t("span",null,i(e.price),1),t("p",null,i(e.count)+" 개",1),$,t("button",{onClick:j=>r(e.id)}," x ",8,B)])]))),128))])]))}});const D=p(P,[["__scopeId","data-v-1872524c"]]),N=s=>(u("data-v-cae8e3cb"),s=s(),d(),s),F={class:"container"},I=N(()=>t("h1",{class:"list-title"}," 카트 페이지 ",-1)),V=l({__name:"cart",setup(s){const a=x(),n=h(),r=()=>{n.isLogin?a.push("/buy"):alert("로그인 해주세요")};return(_,m)=>(c(),o("div",F,[I,b(D),t("div",{class:"extra-panel"},[t("button",{onClick:r}," 구매하기 ")])]))}});const U=p(V,[["__scopeId","data-v-cae8e3cb"]]);export{U as default};
