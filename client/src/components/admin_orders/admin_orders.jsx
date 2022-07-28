
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminOrders() {
    const [orders, setOrders] = useState([])
    const getOrders = () => {
        axios.get('http://localhost:3001/order/all').then(res => {
            console.log(res);
            console.log("keldi");
            setOrders(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteOrder = (id) => {
        axios.delete(`http://localhost:3001/order/${id}`).then((res) => {
            console.log(res);
            getOrders()
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getOrders()
        console.log(11);
    }, [])
    return (
        <div className='ml-5 admin_news_section'>
            <div class="row pt-5">
                <div class="col-12">
                    <div class="box content_wrapper">
                        <form name="search" className='search_form'>
                            <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" /> <span class="deff">Search</span>
                        </form>
                    </div>
                    <a href="/admin/orders" class="btn btn-danger btn-sm float-right">Asosiy sahifaga o'tish</a>
                    <h4 class="mt-0 mb-4">
                        Buyurtma beruvchilar ro'yhati
                    </h4>
                    <div class="table-responsive">
                        <table class="table table-hover mt-5">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Ism</th>
                                    <th scope="col">Sana</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Link</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody class="thead-dark">
                                {orders.length && orders.map((item, index) => (
                                    <tr>
                                        <td>{item.ismiz}</td>
                                        <td>{item.date}</td>
                                        <td>{item.gmail}</td>
                                        <td><Link to={`/more/${item._id}`}>To product</Link></td>
                                        <td><button onClick={() => deleteOrder(item._id)} style={{ border: '1px solid black', padding: "5px 10px" }}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminOrders;
