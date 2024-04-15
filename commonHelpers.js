import{S as h,i as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function m(s){const o="43325710-e7e524061030eee35d9931e23",r="https://pixabay.com/api",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${r}/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const u=document.querySelector(".js-loader");function f(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:n,downloads:d})=>`<li class="gallery-items">      
          <div class="gallery-item">
            <a  href="${r}">
            <img  data-source=${r} src="${o}" alt="${i}" >
           </a>
          </div>
          <div class="photo-info">
            <div>
             <p class="photo-title">Likes:</p> 
             <p class="photo-num"> ${e}</p>
            </div>
            <div>
              <p class="photo-title">Views:</p>
              <p class="photo-num"> ${t}</p>
            </div>
            <div>
             <p class="photo-title">Comments:</p>
             <p class="photo-num"> ${n}</p>
            </div>
            <div>
             <p class="photo-title">Downloads:</p>
             <p class="photo-num"> ${d}</p>
            </div>
          </div>
      </li>`).join("")}function y(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}const g=new h(".gallery a",{captionsData:"alt",captionDelay:250}),a=document.querySelector(".gallery"),p=document.querySelector(".js-form");document.querySelector(".js-loader");p.addEventListener("submit",L);function L(s){s.preventDefault();const o=s.currentTarget.elements.search.value.trim();if(y(),a.innerHTML="",!o)return a.innerHTML="",l(),s.target.reset(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});m(o).then(r=>{if(r.hits.length===0)return a.innerHTML="",s.target.reset(),c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});a.innerHTML=f(r.hits),g.refresh()}).catch(r=>{console.log(r)}).finally(()=>{l()}),p.reset()}
//# sourceMappingURL=commonHelpers.js.map
