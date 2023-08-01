import axios from "axios";
import aspida from '@aspida/axios'
import api from "@/api/$api";


export const handleFetchLocates = async ():Promise<any> => {
  const client = api(aspida(axios, { baseURL: process.env.NEXT_PUBLIC_API_URL }))
  const response = await client.locates.get().then((response) => console.log(response));
  const data = await response;
  return data;
}


