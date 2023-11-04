import{a as d,S as h,i as u}from"./assets/vendor-7e69f3e5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();d.defaults.headers.common["x-api-key"]="live_URYiUDVMJKnsTYSLnYWeR31PUeH8c5Yz2b0ev0a1MU6oS9U6mrAOkeE6lCc4s4wU";async function y(){return await d.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}async function g(e){return await d.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(r=>r.data)}const p=document.getElementById("breed-select"),i=document.querySelector(".cat-info"),a=document.querySelector(".spinner"),b=new h({select:p}),f={title:"Error",message:"❌ Oops! Something went wrong! Try reloading the page!",position:"topCenter",color:"red"};function m(e){e.style.display="block"}function l(e){e.style.display="none"}async function v(){try{const e=p.value;if(e==="Search breeds")return;l(i),m(a);const r=await g(e);w(r)}catch{u.show(f)}l(a)}function w(e){const r=e[0].breeds[0];i.innerHTML=`
    <div class="wrapper">
      <img class="cat-img" src="${e[0].url}" alt="Cat Image"/>
      <div>
        <h2>${r.name}</h2>
        <p><b>Description:</b> ${r.description}</p>
        <p><b>Temperament:</b> ${r.temperament}</p>
      </div>
    </div>
  `,m(i)}async function S(){try{await y().then(e=>{const r=e.map(({id:s,name:o})=>({text:o,value:s}));b.setData([{placeholder:!0,text:"Search breeds"},...r])}),p.addEventListener("change",v)}catch{u.show(f)}l(a)}S();
//# sourceMappingURL=commonHelpers.js.map
