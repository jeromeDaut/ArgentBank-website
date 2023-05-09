import axios from "axios";

export const updateUserProfile = (token, userName) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const body = {
      userName,
    };
    return axios.put("http://localhost:3001/api/v1/user/profile", body, config);
  };