document.addEventListener('DOMContentLoaded',()=>{
    getipaddress();
})

//methods
const getipaddress = async() =>{
    const ipaddress = document.getElementById('ipaddress').value
    if (ipaddress) {
        try {
            const API_KEY = "at_ni029uBQxjPqAHdYFZ41lO7T2nANz";
            const req = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipaddress}`);
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
          class="w-4/5 h-4/5 py-3 px-3 bg-white absolute top-1/2 rounded-lg border-3
          border-blue-400 flex flex-col z-10"
        >
          <div class="w-full h-1/4 pb-2 text-center">
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">IP ADDRESS</h2>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">
              ${data.ip}
            </p>
          </div>
          <div class="w-full h-1/4 py-2 text-center">
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">LOCATION</h2>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">
              ${data.location.region},${data.location.city} ${data.location.postalCode}
            </p>
          </div>
          <div class="w-full h-1/4 py-2 text-center">
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">TIMEZONE</h2>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">
              ${data.location.timezone}
            </p>
          </div>
          <div class="w-full h-1/4 py-2 text-center">
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">
              ${data.isp}
            </p>
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
