import newsIcon from '../../images/newspaper-solid.png'
import announcementIcon from '../../images/rating.png'
import chartIcon from '../../images/statistics.png'
import order from '../../images/order.png'
import './admin_header.css'

function AdminHeader() {
    return (
        <>
            <div id="wrapper">
                <div class="topbar">
                    <div class="topbar-left">
                        <a href=" " class="logo">
                            <span class="logo-light">
                                <h1>RAUTO</h1>
                            </span>
                            <span class="logo-sm">
                                <i class="fa-solid fa-newspaper"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="left side-menu">
                    <div class="slimscroll-menu" id="remove-scroll">
                        <div id="sidebar-menu">
                            <ul class="metismenu" id="side-menu">
                                <li class="menu-title">Menu</li>
                                <li>
                                    <a href="/admin/orders" class="waves-effect">
                                        <i
                                            class="mdi  mdi-message-text-outline text-white bg-warning"><img src={order} alt="" width={20} /></i>
                                        <span> Buyurtmalar </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/cards" class="waves-effect">
                                        <i
                                            class="mdi  mdi-message-text-outline text-white bg-warning"><img src={newsIcon} alt="" width={20} /></i>
                                        <span> Avtomobil qo'shish </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/clients" class="waves-effect">
                                        <i
                                            class="mdi  mdi-message-text-outline text-white bg-warning"><img src={announcementIcon} alt="" width={20} /></i>
                                        <span> Bizning mijozlar </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/admin/statistic/all" class="waves-effect">
                                        <i
                                            class="mdi mdi-trending-up bg-success text-white"><img src={chartIcon} alt="" width={20} /></i>
                                        <span> Statistika </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
