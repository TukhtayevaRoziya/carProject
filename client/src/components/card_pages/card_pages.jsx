import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function AdminCards() {
    const [orders, setOrders] = useState([])
    const getCards = () => {
        axios.get('http://localhost:3001/Car/all').then(res => {
            console.log(res);
            console.log("keldi");
            setOrders(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteOrder = (id) => {
        axios.delete(`http://localhost:3001/Car/${id}`).then((res) => {
            console.log(res);
            getCards()
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getCards()
        console.log(11);
    }, [])
    return (
        <>
            <div class="row pt-5 page_list">
                <div class="col-xl-12">
                    <div class="card-avto">
                        <div class="card-avto-body page_body_admin">
                            <div div class="box page_box content_wrapper">
                                <form name="search" className='search_form'>
                                    <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" /> <span class="deff">Search</span>
                                </form>
                            </div>
                            <a href="/admin/cards" class="btn btn-danger btn-sm float-right" >Asosiyga qaytish</a>
                            <a href="/admin/card/add" class="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"> Avtomashina qo'shish</a>
                            <h4 class="mt-0 mb-4">Barcha Avtomashinalar ro'yhati</h4>
                            <div class="table-responsive mt-5">
                                <table class="table table-hover">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Rasm</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Marka</th>
                                            <th scope="col">Model</th>
                                            <th scope="col">Havola</th>
                                            <th scope="col" colspan="2">O'zgartirish </th>
                                            <th scope="col" colspan="2">O'chirish </th>
                                        </tr>
                                    </thead>
                                    <tbody class="thead-dark">
                                        {orders.length && orders.map((item, index) => (
                                            <tr>
                                                <td>rasm</td>
                                                <td>{item._id}</td>
                                                <td>{item.marka}</td>
                                                <td>{item.madel}</td>
                                                <td><Link style={{ color: "blue" }} to={`/more/${item._id}`}>To product</Link></td>
                                                <td><Link to={`/admin/card/edit/${item._id}`} style={{ border: '1px solid black', padding: "5px 10px", color: "blue" }}>Edit</Link></td>
                                                <td><button onClick={() => deleteOrder(item._id)} style={{ border: '1px solid black', padding: "5px 10px" }}>Delete</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminCards;
