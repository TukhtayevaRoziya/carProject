import AdminHeader from '../../components/admin_header/admin_header'
import AdminClients from '../../components/admin_clients/admin_clients'
import { Navigate } from 'react-router-dom';


function AdminAnnouncements(props) {
    
    return (
        <>
        {props.login===true?<> <AdminHeader />
            <AdminClients /></>: <Navigate replace to="/login" />}
           
        </>
    );
}

export default AdminAnnouncements;
