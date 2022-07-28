import AdminHeader from '../../components/admin_header/admin_header'
import EditCardForm from '../../components/edit_card/edit_card'
import { Navigate } from 'react-router-dom';

function EditCard(props) {
  
  return (
    <div className='d-flex'>
      {
        props.login===true?<> <AdminHeader />
      <EditCardForm /></>:   <Navigate replace to="/login" />
      }
     
    </div>
  );
}

export default EditCard;
