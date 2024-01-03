import AdminStatistics from "../../../components/Statistics/AdminStatistics";
import useRole from "../../../hooks/useRole";
// import GuestStatistics from '../../../components/Dashboard/Statistics/Guest/GuestStatistics'
// import HostStatistics from '../../../components/Dashboard/Statistics/Host/HostStatistics'

const Statistics = () => {
  const [role] = useRole();
  console.log(role);
  return (
    <div>
      {/* {role === 'guest' && <GuestStatistics />}
      {role === 'host' && <HostStatistics />}*/}
      {role === "admin" && <AdminStatistics />}
    </div>
  );
};

export default Statistics;
