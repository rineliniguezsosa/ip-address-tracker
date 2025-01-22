document.addEventListener('DOMContentLoaded',()=>{
    getipaddress();
})

//methods
const getipaddress = async() =>{
    const ipaddress = document.getElementById('ipaddress').value
    if (ipaddress) {
        try {
            const API_KEY = "at_ni029uBQxjPqAHdYFZ41lO7T2nANz";
            const req = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress&domain=${ipaddress}`);
            console.log("valor de request ok:",req.ok);
            if(req.ok){
                const resp = await req.json()
                renderIpDetails(resp);
                renderMap(resp);
            }

        } catch (error) {
            console.log(error);

        }
    }

}

const renderIpDetails = (data) =>{
    const header = document.getElementsByTagName("header")[0];

    const detailip  = `
        <div
          class="w-4/5 h-4/5 py-3 px-3 bg-white absolute top-[61%] rounded-lg border-3
          flex flex-col z-10 lg:flex-row lg:py-2 lg:px-6 lg:items-center lg:h-[60%]"
        >
          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start 
         lg:border-r-2 lg:border-darkgray-500">

            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">IP ADDRESS</h2>
            </div>

            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${data.ip}
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
                ${data.location.region},${data.location.city} ${data.location.postalCode}
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
                ${data.location.timezone}
              </p>
            </div>
          </div>

          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
            </div>
            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${data.isp}
              </p>
            </div>
          </div>
        </div>
    `
    header.innerHTML += detailip;
}

const renderMap = ({location}) =>{
  const { lat, lng } = location;

  const map = L.map('map').setView([lat, -lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map).bindPopup('Hola desde aquí!').openPopup();
}
