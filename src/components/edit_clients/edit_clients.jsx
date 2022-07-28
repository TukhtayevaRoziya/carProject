import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
// import { Editor } from '@tinymce/tinymce-react';

function EditClientsForm() {
    const announcements_title_uz = useRef()
    const announcements_title_ru = useRef()
    const announcements_date = useRef()
    const { id } = useParams()
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3001/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    return (
        <div class="content">
            <div class="container-fluid">
                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <h4>Form Elements</h4>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-avto-body">
                                <h4 class="mb-2 header-title">Yangilik ni Tahrirlash</h4>
                                {news.map(item => (
                                    <form autocomplete="off" >
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Mijoz ismi o'zbek tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_title_uz} class="form-control input_elon_news_name_uz" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Mijoz ismi rus tilida</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_title_ru} class="form-control input_elon_news_name_ru" type="text" name="name" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Sana</label>
                                            <div class="col-sm-10">
                                                <input ref={announcements_date} class="form-control Input_elon_news_date" type="text" name="image" />
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
                                                <input type="file" class="file_input_download" />
                                                <div class="max_size">
                                                    <p>Max:100mb</p>
                                                </div>
                                                <div class="upload_button_3">
                                                    <button class="upload_button_file">
                                                        <a href=' '>Yuklash</a>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div>
                                            <a href="/api/news/all" class="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                            <button type="submit" class="button_sumbit_news btn btn-success btn-sm float-right ml-3">Saqlash</button>
                                        </div>

                                    </form>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditClientsForm;
