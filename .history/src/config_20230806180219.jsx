export const fetcher = (...args) => fetch(...args).then((res) => res.json());

const apiUrl = "http://localhost:20474/store/api/getAllCategories/";

const getAllCategories = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
