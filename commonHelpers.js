import{a as d,S as h,i as p}from"./assets/vendor-7e69f3e5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();d.defaults.headers.common["x-api-key"]="live_URYiUDVMJKnsTYSLnYWeR31PUeH8c5Yz2b0ev0a1MU6oS9U6mrAOkeE6lCc4s4wU";async function y(){return await d.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function g(e){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(t=>t.data)}const u=document.getElementById("breed-select"),c=document.querySelector(".cat-info"),a=document.querySelector(".spinner"),b=new h({select:u,settings:{placeholderText:"Search breeds"}}),f={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"};function m(e){e.style.display="flex"}function l(e){e.style.display="none"}function v(e){const t=e[0].breeds[0];c.innerHTML=`
    <div class="wrapper">
      <img class="cat-img" src="${e[0].url}" alt="Cat Image"/>
      <div>
        <h2>${t.name}</h2>
        <article><b>Description:</b> ${t.description}</article><br>
        <article><b>Temperament:</b> ${t.temperament}</article><br>
        <article><b>Country:</b> ${t.origin}</article>
        <img src="https://flagsapi.com/${t.country_code}/shiny/64.png" alt="country code"> 
      </div>
    </div>
  `,m(c)}async function w(){try{const e=u.value;l(c),m(a);const t=await g(e);v(t)}catch{p.show(f)}finally{l(a)}}async function S(){try{const t=(await y()).map(({id:o,name:s})=>({text:s,value:o}));b.setData([{placeholder:!0,text:""},...t]),u.addEventListener("change",w)}catch{p.show(f)}finally{l(a)}}S();
//# sourceMappingURL=commonHelpers.js.map
