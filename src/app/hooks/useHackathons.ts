import { useState } from "react";
import { Hackathons } from "../../../api/@types";
import axios from "axios";
import api from "../../../api/$api";
import aspida from '@aspida/axios'


export const useHackathons = () => {
    const [hackathons, setHackathons] = useState<Hackathons[]>([]);
    const handleFetchHackathons = async () => {
        const client = api(aspida(axios, { baseURL: 'https://seaffood.com/api/v1' }))
        const response = await client.hackathons.get({query:{page_size:3,page_id:1}}).then((response) => console.log(response));
    }
    return { hackathons, handleFetchHackathons };
}