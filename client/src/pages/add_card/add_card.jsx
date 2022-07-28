import AdminHeader from "../../components/admin_header/admin_header";
import AddCardForm from "../../components/add_card_form/add_card_form";
import { Navigate } from "react-router-dom";

function AddCard(props) {
  return (
    <>
      {props.login === true ? (
        <>
          <AdminHeader />
          <AddCardForm />
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}

export default AddCard;
