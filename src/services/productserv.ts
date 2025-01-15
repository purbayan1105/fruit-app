import axios from "axios";

export async function productServ() {
  try {
    const response = await axios.get(`/api/seedproductapi`);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
}
