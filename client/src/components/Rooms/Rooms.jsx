import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import Loader from "../Loading/Loading";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        if (category) {
          const filterdRooms = data.filter(
            (room) => room.category === category
          );
          setRooms(filterdRooms);
        } else setRooms(data);

        setLoading(false);
      });
  }, [category]);
  if (loading) return <Loader />;

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <RoomsCard key={room._id} room={room}></RoomsCard>
          ))}
        </div>
      ) : (
        <div className="flex  items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center
            title={`No Rooms Available in this category!`}
            subtitle={`Please select another category`}
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;
