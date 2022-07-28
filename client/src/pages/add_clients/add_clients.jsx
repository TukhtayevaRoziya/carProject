import AdminHeader from '../../components/admin_header/admin_header'
import AddClientsForm from '../../components/add_clients_form/add_clients_form'
import { Navigate } from 'react-router-dom';


function AddClients(props) {
    
    return (
        <>
        {
            props.login===true?<> <AdminHeader />
            <AddClientsForm /></>:<Navigate replace to="/login" />
        }
           
        </>
    );
}

export default AddClients;
