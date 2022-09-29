import axios from "axios";

export async function getAllExperiences() {
  try {
    const response = await axios.get(
      "https://portfolio-api-ikram.vercel.app/experiences"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
