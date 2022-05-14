import axios, { AxiosResponse } from "axios";

export default async function getUser() {
  try {
    const respose: AxiosResponse = await axios.get(
      "https://assessment.api.vweb.app/user"
    );

    const user = respose.data;
    return user;
  } catch (error) {
    throw error;
  }
}
