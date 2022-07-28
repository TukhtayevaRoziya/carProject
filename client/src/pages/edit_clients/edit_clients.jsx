import { Navigate } from "react-router-dom";
import AdminHeader from "../../components/admin_header/admin_header";
import EditClientsForm from "../../components/edit_clients/edit_clients";

function EditClients(props) {
  return (
    <>
      {props.login === true ? (
        <>
          <AdminHeader />
          <EditClientsForm />
        </>
      ) : (
        <Navigate replace to="/login" />
      )}
    </>
  );
}

export default EditClients;
