import axios from 'axios'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Editor } from '@tinymce/tinymce-react';
function AddClientsForm() {

    const navigate=useNavigate()
    const [data, setData] = useState({
        ismizuz: "",
        ismizru: "",
        data: "",
    })

    const [file, setFile] = useState("")

    const handleFile = (e) => {
        setFile(e.target.files[0].name)
        console.log(e.target.files[0].name);
    }

    const saveClient = () => {
        let myData = { ...data }
        myData.file = file
        axios.post('http://localhost:3001/client/add', myData).then(res => {
            console.log(res);
        navigate("/admin/clients")
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <div class="content announcements_list2">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4>Yangi Mijoz qo'shish</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <h4 class="mt-0 header-title">Yangi Mijoz qo'shish</h4>
                            <form autocomplete="off" >
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-sm-2 col-form-label">Mijoz ismi o'zbek tilida</label>
                                    <div class="col-sm-10">
                                        <input value={data.ismizuz} onChange={(e) => setData({ ...data, ismizuz: e.target.value })} class="form-control input_elon_news_name_uz" type="text" name="name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-sm-2 col-form-label">Mijoz ismi rus tilida</label>
                                    <div class="col-sm-10">
                                        <input value={data.ismizru} onChange={(e) => setData({ ...data, ismizru: e.target.value })} class="form-control input_elon_news_name_ru" type="text" name="name" />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="example-text-input" class="col-sm-2 col-form-label">Sana</label>
                                    <div class="col-sm-10">
                                        <input value={data.data} onChange={(e) => setData({ ...data, data: e.target.value })} class="form-control Input_elon_news_date" type="text" name="image" />
                                    </div>
                                </div>
                                <div class="m-5">
                                    <form enctype="multipart/form-data">
                                        <div class="download">
                                            <p>Mijoz Rasmini yuklash</p>
                                        </div>
                                        <div class="files">`
                                            <a href=' '>
                                                Fayllar
                                            </a>
                                        </div>
                                        <input onChange={(event) => handleFile(event)} type="file" class="file_input_download" />
                                        <div class="max_size">
                                            <p>Max:100mb</p>
                                        </div>
                                        {/* <div class="upload_button_3">
                                            <button class="upload_button_file">
                                                <a href=' '>Yuklash</a>
                                            </button>
                                        </div> */}
                                    </form>
                                </div>
                                <div>
                                    <a href="/api/news/all" class="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                    <button onClick={saveClient} type='button' class="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddClientsForm;
