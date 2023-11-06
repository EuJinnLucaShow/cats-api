import{a as d,S as h,i as p}from"./assets/vendor-7e69f3e5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();d.defaults.headers.common["x-api-key"]="live_URYiUDVMJKnsTYSLnYWeR31PUeH8c5Yz2b0ev0a1MU6oS9U6mrAOkeE6lCc4s4wU";async function y(){return await d.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function g(e){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(r=>r.data)}const u=document.getElementById("breed-select"),c=document.querySelector(".cat-info"),a=document.querySelector(".spinner"),b=new h({select:u,settings:{placeholderText:"Search breeds"}}),f={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topCenter",color:"red"};function m(e){e.style.display="flex"}function l(e){e.style.display="none"}function v(e){const r=e[0].breeds[0];c.innerHTML=`
    <div class="wrapper">
      <img class="cat-img" src="${e[0].url}" alt="Cat Image"/>
      <div>
        <h2>${r.name}</h2>
        <article><b>Description:</b> ${r.description}</article><br>
        <article><b>Temperament:</b> ${r.temperament}</article>
      </div>
    </div>
  `,m(c)}async function w(){try{const e=u.value;l(c),m(a);const r=await g(e);v(r)}catch{p.show(f)}finally{l(a)}}async function S(){try{const r=(await y()).map(({id:o,name:s})=>({text:s,value:o}));b.setData([{placeholder:!0,text:""},...r]),u.addEventListener("change",w)}catch{p.show(f)}finally{l(a)}}S();
//# sourceMappingURL=commonHelpers.js.map
