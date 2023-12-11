import axios from "axios";

export async function login(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Login was called with", email, password);
      let request = await axios.post(
        "https://p10backend-eugreg-dev.4.us-1.fl0.io/api/token/",
        {
          email: email,
          password: password,
        }
      );
      resolve(request.data);
    } catch (error) {
      reject(error);
    }
  });
}