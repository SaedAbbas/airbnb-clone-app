import { Geist } from 'next/font/google';
import apiUrl from "./apiURL";

const exploreAPI = async() => {
    try{

        const response = await apiUrl.get('/b/4G1G')
        return response.data;

    }catch(error) {
        console.error("Error in exploreAPI:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}



const getLiveAPI = async() => {
    try{
        const response = await apiUrl.get('/b/VHHT')
        return response.data;

    }catch(error) {
        console.error("Error in getLiveAPI:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}

const getSearchResultData = async() => {
    try{
        const response = await apiUrl.get('/b/5NPS')
        return response.data;

    }catch(error){
        console.error(error)
    }
}

export default {exploreAPI,getLiveAPI,getSearchResultData}