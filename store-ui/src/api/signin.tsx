import axiosClient, { userUrl } from "./config";

const signin = async (email: string, password: string) => {
  try {
    const response = await axiosClient.post(userUrl + "users", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (err: any) {
    console.log(err);
  }
};

export default signin;
