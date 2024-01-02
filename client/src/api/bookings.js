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
