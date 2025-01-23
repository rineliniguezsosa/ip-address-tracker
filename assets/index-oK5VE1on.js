(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const c="c229935b014d8c",a="200.68.172.61";document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("searchButton"),e=document.getElementById("ipaddress");t&&t.addEventListener("click",n),e&&(e=document.addEventListener("input",l=>{n(l.target.value)})),n()});const n=async(t=a)=>{if(t)try{const e=await fetch(`https://ipinfo.io/${t}?token=${c}`);if(e.ok){const l=await e.json();console.log(l),g(l),f(l)}}catch(e){console.log(e)}},g=t=>{const e=document.getElementsByTagName("header")[0],l=`
        <div
          class="w-4/5 py-3 px-3 bg-white absolute top-[61%] rounded-lg border-3
          flex flex-col z-10 lg:flex-row lg:py-2 lg:px-6 lg:items-center lg:h-[60%]"
        >
          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start 
         lg:border-r-2 lg:border-darkgray-500">

            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">IP ADDRESS</h2>
            </div>

            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${t.ip}
              </p>
            </div>

          </div>

          <div 
            class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start lg:border-r-2 
            lg:border-darkgray-500">

            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">LOCATION</h2>
            </div>

            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${t.region},${t.city} ${t.postal}
              </p>
            </div>

          </div>

          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start lg:border-r-2 
          lg:border-darkgray-500">
            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">TIMEZONE</h2>
            </div>
            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${t.timezone}
              </p>
            </div>
          </div>

          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
            </div>
            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${t.org}
              </p>
            </div>
          </div>
        </div>
    `;e.innerHTML+=l};let i;const f=t=>{const[e,l]=t.loc.split(",");i||(i=L.map("map").setView([e,l],10),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(i)),i.flyTo([e,l],10),L.marker([e,l]).addTo(i).bindPopup("Hola desde aquí!").openPopup()};
