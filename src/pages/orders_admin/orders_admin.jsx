import AdminHeader from '../../components/admin_header/admin_header'
import AdminNews from '../../components/admin_orders/admin_orders'

function OrdersAdmin() {
  
  return (
    <div className='d-flex'>
      <AdminHeader />
      <AdminNews />
    </div>
  );
}

export default OrdersAdmin;
