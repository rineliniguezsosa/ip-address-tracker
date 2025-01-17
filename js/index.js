document.addEventListener('DOMContentLoaded',()=>{
    getipaddress();   
    
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
    
    // Opcional: Añade un marcador inicial
    L.marker([51.505, -0.09]).addTo(map).bindPopup('Hola desde aquí!').openPopup();
})

//methods
const getipaddress = async() =>{
    // const ip = "192.212.174.101";
    const ipaddress = document.getElementById('ipaddress').value
    console.log("valor",ipaddress);
    if (ipaddress) {
        try {
            const API_KEY = "at_ni029uBQxjPqAHdYFZ41lO7T2nANz";
            const req = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipaddress}`);
            console.log("valor de request ok:",req.ok);
            if(req.ok){
                const info = await req.json()
                console.log("info api",info);
                
            }
            // console.log(resp);
            
        } catch (error) {
            console.log(error);
            
        }
    }

}

//draw the map
// var map = L.map('map').setView([51.505, -0.09], 13);
// const map = L.map('map').setView([51.505, -0.09], 13);