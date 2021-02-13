import axios from "axios";
const apiFetch = async () => {
  try {
    let apiValue = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return apiValue.data;
  } catch (error) {
    return error;
  }
};

export default apiFetch;
