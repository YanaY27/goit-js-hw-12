import{S as L,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();async function h(r,o){const s="43325710-e7e524061030eee35d9931e23",i="https://pixabay.com/api",t=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15",page:o});try{const e=await fetch(`${i}/?${t}`);if(!e.ok)throw new Error(e.status);return await e.json()}catch(e){throw console.error("Error fetching photos:",e),e}}const m=document.querySelector(".js-loader");function f(r){return r.map(({webformatURL:o,largeImageURL:s,tags:i,likes:t,views:e,comments:a,downloads:y})=>`<li class="gallery-items">      
          <div class="gallery-item">
            <a  href="${s}">
            <img  data-source=${s} src="${o}" alt="${i}" >
           </a>
          </div>
          <div class="photo-info">
            <div>
             <p class="photo-title">Likes:</p> 
             <p class="photo-num"> ${t}</p>
            </div>
            <div>
              <p class="photo-title">Views:</p>
              <p class="photo-num"> ${e}</p>
            </div>
            <div>
             <p class="photo-title">Comments:</p>
             <p class="photo-num"> ${a}</p>
            </div>
            <div>
             <p class="photo-title">Downloads:</p>
             <p class="photo-num"> ${y}</p>
            </div>
          </div>
      </li>`).join("")}function v(){m.classList.remove("is-hidden")}function u(){m.classList.add("is-hidden")}const w=new L(".gallery a",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".gallery"),g=document.querySelector(".js-form");document.querySelector(".js-loader");const p=document.querySelector(".btn-load-more");let c=1,d=null;const S=15;g.addEventListener("submit",b);async function b(r){if(r.preventDefault(),d=r.currentTarget.elements.search.value.trim(),v(),p.classList.add("is-hidden"),n.innerHTML="",c=1,!d)return n.innerHTML="",u(),r.target.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});try{const o=await h(d,c);if(o.totalHits>0&&l.success({message:`We found ${o.totalHits} fotos!`,position:"topRight"}),o.hits.length===0)return n.innerHTML="",r.target.reset(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.innerHTML=f(o.hits),o.totalHits>15&&p.classList.remove("is-hidden"),w.refresh()}catch(o){console.log(o)}finally{u(),g.reset()}}p.addEventListener("click",P);async function P(){c+=1;try{const r=await h(d,c);n.insertAdjacentHTML("beforeEnd",f(r.hits));const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),Math.ceil(r.totalHits/S)===c&&(p.classList.add("is-hidden"),l.info({message:"That's all!",position:"topRight"}))}catch(r){console.log(r)}}
//# sourceMappingURL=commonHelpers.js.map
