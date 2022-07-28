import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function ClientsAdmin() {
    const [clients, setClients] = useState([])
    const [searchTerm, setSearchTerm] = useState("a")
    const getClients = () => {
        axios.get('http://localhost:3001/client/all').then(res => {
            setClients(res.data)
        }).catch(err => {
            console.log(err);
        })
    }

    const deleteClient = (id) => {
        axios.delete(`http://localhost:3001/client/${id}`).then((res) => {
            getClients()
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getClients()
    }, [])
    return (
        <>
            <div class="row pt-5 announcements_list">
                <div class="col-xl-12">
                    <div class="box">
                        <form name="search" className='search_form'>
                            <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" onChange={e => {
                                setSearchTerm(e.target.value)
                            }} /> <span class="deff">Search</span>
                        </form>
                    </div>
                    <a href="/admin/orders" class="btn btn-danger btn-sm float-right" >Asosiyga qaytish</a>
                    <a href="/admin/clients/add" class="btn btn-success mr-3 mdi mdi-account-multiple-plus btn-sm float-right"> Mijoz qo'shish</a>

                    <h4 class="mt-0 mb-4 pt-2">Barcha mijozlar ro'yhati</h4>
                    <div class="table-responsive mt-5">
                        <table class="table table-hover">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Rasm</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Ismi</th>
                                    <th scope="col">Viloyat</th>
                                    <th scope="col">O'zgartirish </th>
                                    <th scope="col">O'chirish </th>
                                </tr>
                            </thead>
                            <tbody class="thead-dark">
                                {clients.length && clients.map((item, index) => (
                                    <tr>
                                        {console.log(item)}
                                        <td>rasm</td>
                                        <td>{item._id}</td>
                                        <td>{item.ismizuz}</td>
                                        <td>No data</td>
                                        <td><Link to={`/admin/clients/edit/${item._id}`} style={{ border: '1px solid black', padding: "5px 10px", color: "blue" }}>Edit</Link></td>
                                        <td><button onClick={() => deleteClient(item._id)} style={{ border: '1px solid black', padding: "5px 10px" }}>Delete</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ClientsAdmin;
