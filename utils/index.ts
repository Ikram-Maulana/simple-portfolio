import axios from "axios";

export async function getAllExperiences() {
  try {
    const response = await axios.get(`${process.env.API_URL}/experiences`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllProjects() {
  try {
    const response = await axios.get(`${process.env.API_URL}/projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProfile() {
  try {
    const response = await axios.get(`${process.env.API_URL}/profile`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
