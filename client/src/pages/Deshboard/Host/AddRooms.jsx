import { useState } from "react";
import AddRoomForm from "../../../components/Form/addRoomForm";
import useAuth from "../../../hooks/useAuth";
import { imgUpload } from "../../../api/utils";
import { addRoom } from "../../../api/rooms";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddRooms = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const [loading, setLoading] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const title = form.title.value;
    const to = dates.endDate;
    const from = dates.startDate;
    const price = form.price.value;
    const guests = form.total_guest.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const bedrooms = form.bedrooms.value;
    const image = form.image.files[0];
    const host = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    };
    const image_url = await imgUpload(image);
    const roomData = {
      location,
      category,
      title,
      to,
      from,
      price,
      guests,
      bathrooms,
      description,
      bedrooms,
      host,
      image: image_url?.data?.display_url,
    };

    try {
      setLoading(true);
      const data = await addRoom(roomData);
      setUploadButtonText("Uploaded");
      toast.success("Room Added successfully");
      navigate("/deshboard/my-listings");
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDates = (ranges) => {
    setDates(ranges.selection);
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image?.name);
  };

  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        handleDates={handleDates}
        dates={dates}
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      ></AddRoomForm>
    </div>
  );
};

export default AddRooms;
