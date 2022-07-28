import { Navigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import AdminCards from "../../components/card_pages/card_pages";

function CardsAdmin(props) {
  return (
    <div className="d-flex">
      {props.login === true ? (
        <>
          <AdminHeader />
          <AdminCards />
        </>
      ) : (
        <>
          <Navigate replace to="/login" />
        </>
      )}
    </div>
  );
}

export default CardsAdmin;
