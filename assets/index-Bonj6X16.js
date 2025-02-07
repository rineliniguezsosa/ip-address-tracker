(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();const c="c229935b014d8c";let n="200.68.172.61";document.addEventListener("DOMContentLoaded",async()=>{let l=document.getElementById("myform");a(),l.addEventListener("submit",async t=>{t.preventDefault();let e=document.getElementById("ipaddress").value.trim();e&&/^(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(e)?(n=e,await a(n)):alert("Fatal error, ingrese una ip ó un formato adecuado")})});const a=async(l=n)=>{try{const t=await fetch(`https://ipinfo.io/${l}?token=${c}`);t.ok||alert("Error al obtener los datos de la ip");const e=await t.json();g(e),p(e)}catch(t){console.log(t),alert("Error algo salio mal")}},g=l=>{const t=document.getElementsByTagName("header")[0];let e=document.getElementById("ip-details");e||(e=document.createElement("div"),e.id="ip-details",e.className=`w-4/5 py-3 px-3 bg-white absolute top-[61%] rounded-lg border-3
        flex flex-col z-10 lg:flex-row lg:py-2 lg:px-6 lg:items-center lg:h-[60%]`,t.appendChild(e)),e.innerHTML=`
        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start 
       lg:border-r-2 lg:border-darkgray-500">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">IP ADDRESS</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${l.ip}</p>
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
              ${l.region}, ${l.city} ${l.postal}
            </p>
          </div>
        </div>

        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start lg:border-r-2 
        lg:border-darkgray-500">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">TIMEZONE</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${l.timezone}</p>
          </div>
        </div>

        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${l.org}</p>
          </div>
        </div>
    `};let i;const p=l=>{const[t,e]=l.loc.split(",");i||(i=L.map("map").setView([t,e],10),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"}).addTo(i)),i.flyTo([t,e],10),L.marker([t,e]).addTo(i).bindPopup("Hola desde aquí!").openPopup()};
