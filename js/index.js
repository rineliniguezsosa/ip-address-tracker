
//methods
const getipaddress = async() =>{
    const ipadress = document.getElementById('ipaddress').value
    console.log("valor",ipadress);
    if (ipadress) {
        try {
            const API_KEY = "at_ni029uBQxjPqAHdYFZ41lO7T2nANz";
            const req = await fetch(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ipadress}`);
            console.log("valor de request ok:",req.ok);
            if(req.ok){
                const info = await req.json()
                console.log("info api",info);
                
            }
            console.log(resp);
            
        } catch (error) {
            
        }
    }

}

