import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from "./MenuItem";
import useRole from "../../../hooks/useRole";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import HostModal from "../../Modal/HostRequestModal";
import { becomeHost } from "../../../api/auth";
import { toast } from "react-hot-toast";

const GustMenu = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const modalHandler = async () => {
    try {
      const data = await becomeHost(user?.email);
      if (data.modifiedCount > 0) {
        toast.success("success! wait for admin comfirmation");
      } else {
        toast.success("please! wait form admin appruval");
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsOpen(false)
    }
  };

  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="My-bookings"
      />
      {role === "guest" && (
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      ></HostModal>
    </>
  );
};

export default GustMenu;
