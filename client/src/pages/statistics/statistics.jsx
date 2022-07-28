import { Navigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import Statistics from "../../components/statistics/statistics";

function StatisticsPage(props) {
  return (
    <>
      {props.login === true ? (
        <>
          <AdminHeader />
          <Statistics />
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}

export default StatisticsPage;
