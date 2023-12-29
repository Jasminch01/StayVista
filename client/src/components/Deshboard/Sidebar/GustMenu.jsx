import { BsFingerprint } from "react-icons/bs";
import MenuItem from "./MenuItem";

const GustMenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="My-bookings"
      />
    </>
  );
};

export default GustMenu;
