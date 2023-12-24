import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Loading/Loading";

const RoomsDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const singleRoom = data.find((room) => room._id === id);
        setRoom(singleRoom);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  return (
    <Container>
      <div>
        <div className="flex justify-center">
          <img src={room.image} alt="" className="w-full h-[50vh] rounded-lg" />
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <p className="text-2xl font-bold">{room.title}</p>
            <p>{room.description}</p>
          </div>
          <div className="w-1/2">
            <p className="text-center">calender</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomsDetails;
