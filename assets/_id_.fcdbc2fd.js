import{e as l,k as m,i as h,l as f,o as n,b as i,f as t,u as a,t as d,m as y,a as g}from"./entry.fa0b2a1e.js";import{u as r}from"./asyncData.c4cd0235.js";import{u as v}from"./index.1c33710c.js";const k={class:"container"},C={class:"main-panel"},$=["src","alt"],x={class:"side-panel"},b={class:"name"},N={class:"price"},P={key:0},w=l({__name:"[id]",setup(B){const _=m(),c=h(),s=v(),o=_.params.id,e=r("Products",async()=>await $fetch(`/api/products/${o}`)).data,u=()=>{s.isLogin?(s.addCartItem(e.value,o),c.push("/cart")):alert("로그인 해주세요")},p=async()=>{s.isLogin?await r("Products",async()=>await $fetch(`/api/products/${o}`,{method:"delete"})):alert("로그인 해주세요"),s.idNum=0,c.push("/")};return f({title:`Shopping Item Detail - ${e.name}`,meta:[{hid:"description",name:"description",content:`이상품은 ${e.name}입니다.`}]}),(D,I)=>(n(),i("div",null,[t("div",k,[t("div",C,[t("img",{class:"product-image",src:a(e).imageUrl,alt:a(e).name},null,8,$)]),t("div",x,[t("p",b,d(a(e).name),1),t("p",N,d(a(e).price),1),t("button",{type:"button",onClick:u}," 카트에 담기 "),a(s).idNum>=30?(n(),i("p",P,[t("button",{onClick:p}," x ")])):y("",!0)])])]))}});const V=g(w,[["__scopeId","data-v-2979329e"]]);export{V as default};
