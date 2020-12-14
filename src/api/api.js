import axios from "axios";
import {CHARACTERS_BY_PAGE} from "./routers";

const axiosInstance=axios.create({
    baseURL:"https://rickandmortyapi.com/api/"
})
const apiSdk={
    getCharacters(page){
        return axiosInstance.get(CHARACTERS_BY_PAGE(page)).then(res=>res.data)
    }
}
export default apiSdk