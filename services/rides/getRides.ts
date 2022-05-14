import axios, { AxiosResponse } from "axios";

export default async function getRides() {
  try {
    const respose: AxiosResponse = await axios.get(
      "https://assessment.api.vweb.app/rides"
    );
    // const rides: Ride[] = Convert.toRide(respose.data);\
    const rides = respose.data;
    return rides;
  } catch (error) {
    throw error;
  }
}
