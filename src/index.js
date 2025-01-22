const API_KEY = import.meta.env.VITE_TOKEN;

document.addEventListener('DOMContentLoaded',()=>{
    
    let searchButton = document.getElementById('searchButton');
    let ipaddress = document.getElementById('ipaddress')
    
    if(searchButton){
        searchButton.addEventListener('click',getipaddress)
    }

    if(ipaddress){
      ipaddress = document.addEventListener('change',(event)=>{
        getipaddress(event.target.value)
      })
    }

    getipaddress();
})

//methods
const getipaddress = async(ipaddress = '192.212.174.101') =>{
    if (ipaddress) {
        try {
            const req = await fetch(`https://ipinfo.io/${ipaddress}?token=${API_KEY}`);
            console.log("valor de request ok:",req.ok);
            if(req.ok){
                const resp = await req.json()
                console.log(resp);
                renderIpDetails(resp);
                renderMap(resp);
            
            }

        } catch (error) {
            console.log(error)
        }
    }

}

const renderIpDetails = (data) =>{
    const header = document.getElementsByTagName("header")[0];

    const detailip  = `
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
                ${data.region},${data.city} ${data.postal}
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
                ${data.timezone}
              </p>
            </div>
          </div>

          <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start">
            <div>
              <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
            </div>
            <div>
              <p class="font-rubik font-semibold text-blackdarkgray text-lg">
                ${data.org}
              </p>
            </div>
          </div>
        </div>
    `
    header.innerHTML += detailip;
}

const renderMap = (resp) =>{    
  const [lat,lng] = resp.loc.split(",");
  
  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map).bindPopup('Hola desde aquí!').openPopup();
}
