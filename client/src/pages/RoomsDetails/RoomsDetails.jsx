import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import Loader from "../../components/Loading/Loading";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo";
import RoomReservation from "../../components/RoomDetails/RoomReservation";

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
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          {" "}
          <Header room={room} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
          {" "}
          <RoomInfo room={room} />
          <div className="md:col-span-3 order-first md:order-last">
            <RoomReservation room={room}></RoomReservation>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomsDetails;
