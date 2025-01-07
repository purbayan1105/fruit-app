import axios from "axios";

const baseUrl = process.env.BASE_URL;

export async function ProductServ() {
  try {
    const response = await axios.get(`/api/seedproductapi`);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
