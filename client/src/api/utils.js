import axios from "axios";
import axiosSecure from ".";
export const imgUpload = async (image) => {
  const formData = new FormData();

  formData.append("image", image);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb_api_key}`,
    formData
  );

  return data;
};

//admin stat
export const getAdminStat = async () => {
  const { data } = await axiosSecure(`/admin-stat`)
  return data
}