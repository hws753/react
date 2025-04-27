import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "1d07e6ebd8c24e959cdb7c7a947726ec"
    }
})