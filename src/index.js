const API_KEY = import.meta.env.VITE_TOKEN;
let MY_IP = import.meta.env.VITE_IP;

document.addEventListener('DOMContentLoaded',async()=>{
  let form = document.getElementById('myform');
  
  getipaddress();
  
  form.addEventListener('submit',async(event)=>{
    event.preventDefault();
    let input = document.getElementById('ipaddress').value.trim();
    let regex = /^(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/;
  
    if(input && regex.test(input)){
      MY_IP = input;
      console.log("ip",MY_IP);
      
      await getipaddress(MY_IP)
    }else{
      alert('Formato de IP incorrecto')
    }
  })
  
})

//methods
const getipaddress = async(ipaddress = MY_IP) =>{  
    if (ipaddress) {
        try {
            const req = await fetch(`https://ipinfo.io/${ipaddress}?token=${API_KEY}`);
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
  let detailContainer = document.getElementById("ip-details");

  if (!detailContainer) {
      detailContainer = document.createElement("div");
      detailContainer.id = "ip-details";
      detailContainer.className = `w-4/5 py-3 px-3 bg-white absolute top-[61%] rounded-lg border-3
        flex flex-col z-10 lg:flex-row lg:py-2 lg:px-6 lg:items-center lg:h-[60%]`;

      header.appendChild(detailContainer);
  }

  detailContainer.innerHTML = `
        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start 
       lg:border-r-2 lg:border-darkgray-500">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">IP ADDRESS</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${data.ip}</p>
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
              ${data.region}, ${data.city} ${data.postal}
            </p>
          </div>
        </div>

        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start lg:border-r-2 
        lg:border-darkgray-500">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">TIMEZONE</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${data.timezone}</p>
          </div>
        </div>

        <div class="w-full h-1/4 py-2 text-center lg:h-1/2 lg:px-5 lg:flex lg:flex-col lg:items-start">
          <div>
            <h2 class="font-rubik font-semibold text-darkgray text-[0.6rem]">ISP</h2>
          </div>
          <div>
            <p class="font-rubik font-semibold text-blackdarkgray text-lg">${data.org}</p>
          </div>
        </div>
    `
}
  
  let map;
  const renderMap = (resp) =>{    
    const [lat,lng] = resp.loc.split(",");
    
    if(!map){
      map = L.map('map').setView([lat, lng], 10);
      
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
  
  map.flyTo([lat, lng], 10);

  L.marker([lat, lng]).addTo(map).bindPopup('Hola desde aquí!').openPopup();

}
