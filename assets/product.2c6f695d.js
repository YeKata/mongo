import{e as b,q as i,i as g,o as k,b as w,f as e,x as u,y as d,z as _,u as r,s as f,A as I,p as S,h as U,a as R}from"./entry.38e4e8ea.js";import{u as V}from"./asyncData.1aa73387.js";import{u as B}from"./index.f0a8d269.js";const p=o=>(S("data-v-f88907ef"),o=o(),U(),o),C={class:"container"},N={class:"wrapper"},P=p(()=>e("div",{class:"inline-block"}," 상품명 ",-1)),z={class:"wrapper"},A=p(()=>e("div",{class:"inline-block"}," 가격 ",-1)),D={class:"wrapper"},L=p(()=>e("div",{class:"inline-block"}," 사진 ",-1)),T=b({__name:"product",setup(o){const c=i(""),a=i(""),n=i(""),m=B(),v=g(),h=m.indexNum,x=l=>{const t=l.target.files;t&&(c.value=URL.createObjectURL(t[0]))},y=async()=>{const l={id:h,name:n.value,price:a.value,imageUrl:c.value};await V("Products",async()=>await $fetch("/api/products",{method:"post",body:l})),v.push("/")};return(l,s)=>(k(),w("div",null,[e("div",C,[e("div",N,[P,u(),d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>f(n)?n.value=t:null),class:"input-box",type:"text"},null,512),[[_,r(n)]])]),e("div",z,[A,u(),d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>f(a)?a.value=t:null),class:"input-box",type:"number"},null,512),[[_,r(a)]])]),e("div",D,[L,u(),e("input",{id:"file",multiple:"",type:"file",class:"inputfile",onChange:x},null,32)]),e("div",{class:"upload-image",style:I({backgroundImage:`url(${r(c)})`})},null,4),e("button",{onClick:y}," 등록 ")])]))}});const E=R(T,[["__scopeId","data-v-f88907ef"]]);export{E as default};
