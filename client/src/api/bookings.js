import axiosSecure from ".";

export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post(`/create-payment-intent`, price);
  return data;
};

//save booking info into database
export const saveBooking = async (bookingInfo) => {
  const { data } = await axiosSecure.post(`/bookings`, bookingInfo);
  return data;
};

//update room status after booking

export const updateRoomStauts = async (id, status) => {
  const { data } = await axiosSecure.patch(`/room/status/${id}`, { status });
  return data;
};

//get all guest  bookings
export const getBookings = async (email) => {
  const { data } = await axiosSecure(`/bookings?email=${email}`);
  return data;
};
//get all host bookings
export const getHostBookings = async (email) => {
  const { data } = await axiosSecure(`/bookings/host?email=${email}`);
  return data;
};
