import{L as l,M as f,q as o}from"./entry.38e4e8ea.js";const C=l("products",()=>{const e=f([]),a=o(!1),c=o(),d=o(),u=o();return{isLogin:a,userToken:u,cartItems:e,indexNum:c,idNum:d,addCartItem:(t,s)=>{const n={...t,id:parseInt(`${t.id}`),name:`${t.name}`,price:`${t.price}`,imageUrl:`${t.imageUrl}`,count:1};if(e.length>0){let r=0;for(const i in e)if(parseInt(s)===e[i].id)return e[i].count++,console.log("이프"),r=1,r;r===0&&e.push(n)}else console.log("엘스2"),e.push(n)},deleteCartItem:t=>{const s=t;for(const n in e)if(s===e[n].id)if(e[n].count>1){e[n].count--;break}else{e.splice(parseInt(n),1);break}}}});export{C as u};
