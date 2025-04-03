import axios from "axios";

//get ip = http://ip-api.com/json/24.48.0.1
//get ip = https://api.ipify.org?format=json
//ip details = http://ip-api.com/json/${response.data.ip}

async function getILocation() {
    try {
        console.log("Function called...")
        if (!localStorage.getItem('firstUser')) {
            let ip = await axios.get('https://api.ipify.org?format=json')
            let location = await axios.get(`http://ip-api.com/json/${ip.data.ip}`)
            if (location.data.status == 'success') {
                let send = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/location/set`, {
                    location: location.data
                })
                if (send.data.success) {
                    localStorage.setItem('firstUser', 'true')
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export default getILocation;