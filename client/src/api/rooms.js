import axiosSecure from ".";
//get all rooms
export const getAllRooms = async () => {
  const { data } = await axiosSecure("/rooms");
  return data;
};

//to get all rooms for host

export const getHostRooms = async (email) => {
  const { data } = await axiosSecure(`/rooms/${email}`);
  return data;
};

export const getSingleRooms = async (id) => {
  const { data } = await axiosSecure(`/room/${id}`);
  return data;
};

//save a room data to database

export const addRoom = async (roomData) => {
  const { data } = await axiosSecure.post(`/rooms`, roomData);
  return data;
};
