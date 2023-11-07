import{a as d,S as h,i as u}from"./assets/vendor-7e69f3e5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();d.defaults.headers.common["x-api-key"]="live_URYiUDVMJKnsTYSLnYWeR31PUeH8c5Yz2b0ev0a1MU6oS9U6mrAOkeE6lCc4s4wU";async function y(){return await d.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function g(e){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(t=>t.data)}const b="/cats-api/assets/flag_of_none-7a96cc16.svg",p=document.getElementById("breed-select"),i=document.querySelector(".cat-info"),a=document.querySelector(".spinner"),v=new h({select:p,settings:{placeholderText:"Search breeds"}}),f={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"};function m(e){e.style.display="flex"}function l(e){e.style.display="none"}function w(e){const t=e[0].breeds[0];i.innerHTML=`
    <div class="wrapper">
      <img class="cat-img" src="${e[0].url}" alt="Cat Image"/>
      <div>
        <h2>${t.name}</h2>
        <article><b>Description:</b> ${t.description}</article><br>
        <article><b>Temperament:</b> ${t.temperament}</article><br>
        <article><b>Country:</b> ${t.origin}</article>
        <img class="country-flag" src="https://flagsapi.com/${t.country_code}/shiny/64.png" onerror="src='${b}'" width="64px" alt="country flag"> 
      </div>
    </div>
  `,m(i)}async function S(){try{const e=p.value;l(i),m(a);const t=await g(e);w(t)}catch{u.show(f)}finally{l(a)}}async function O(){try{const t=(await y()).map(({id:o,name:n})=>({text:n,value:o}));v.setData([{placeholder:!0,text:""},...t]),p.addEventListener("change",S)}catch{u.show(f)}finally{l(a)}}O();
//# sourceMappingURL=commonHelpers.js.map
