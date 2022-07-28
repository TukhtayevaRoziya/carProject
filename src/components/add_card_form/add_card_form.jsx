import { useRef, useState } from 'react'
import axios from "axios";
import { message } from "antd";

function AddCardForm() {
    const marka_id = useRef()
    const model_id = useRef()
    const color_car_id = useRef()
    const year_car_id = useRef()
    const motor_sigimi = useRef()
    const fuel_id = useRef()
    const transmissiya_id = useRef()
    const kuzov_id = useRef()
    const privod_id = useRef()
    const probeg_id = useRef()
    const page_main_id = useRef()
    const page_title_uz = useRef()
    const aksiya_id = useRef()
    const opisaniya_id = useRef()
    const page_title_ru = useRef()
    const page_definition = useRef()

    const [data, setData] = useState({
        madel: "",
        marka: "",
        aksiya:"",
        opisaniya:"",
        color: "",
        yili: 0,
        divigitel: 0,
        yoqilgi: "",
        transmission: "",
        kuzuv: "",
        perevod: "",
        yurgani: "",
        narxi: "",
        gmail: "",
        ismiz: ""
    })
    const [file, setFile] = useState("")

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        await e.preventDefault()
        if (
            data.madel === "" ||
            data.marka === "" ||
            data.color === "" ||
            data.yili === 0 ||
            data.divigitel === 0 ||
            data.yoqilgi === "" ||
            data.transmission === "" ||
            data.kuzuv === "" ||
            data.perevod === "" ||
            data.yurgani === "" ||
            data.gmail === "" ||
            data.ismiz === "" ||
            data.narxi === "" ||
            file === ""
        ) {
            await message.warn("To'liq to'ldiring")
        } else {
            // const formData = new FormData()
            // formData.append("madel", data.madel)
            // formData.append("marka", data.marka)
            // formData.append("color", data.color)
            // formData.append("yili", data.yili)
            // formData.append("divigitel", data.divigitel)
            // formData.append("yoqilgi", data.yoqilgi)
            // formData.append("transmission", data.transmission)
            // formData.append("kuzuv", data.transmission)
            // formData.append("perevod", data.perevod)
            // formData.append("yurgani", data.yurgani)
            // formData.append("narxi", data.narxi)
            // formData.append("gmail", data.narxi)
            // formData.append("gmail", data.gmail)
            // formData.append("ismiz", data.ismiz)
            // formData.append("photo", file)
            let myData={...data}
            myData.photo=file

            await axios.post("http://localhost:3001/Car/add", myData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }).then(res => console.log(res), message.success("Qo'shildi"))
                .catch(err => new Error(err))
        }
    }

    return (
        <>
            <div className="content">
                <form autoComplete="off" className="el_form page_form" onSubmit={handleSubmit}>
                    <div className="container-fluid">
                        <div className="page-title-box">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h4>Yangi Avtomobil qo'shish</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-avto">
                                    <div className="card-avto-body">
                                        <h4 className="mt-0 header-title">Yangi Avtomobil qo'shish</h4>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Avtomashina
                                                markasini tanlang</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    ref={marka_id}
                                                    onChange={event => setData({
                                                        ...data,
                                                        marka: event.target.value
                                                    })}
                                                    value={data.marka}
                                                >
                                                    <option value=""></option>
                                                    <option value="Chevrolet">Chevrolet</option>
                                                    <option value="Ravon">Ravon</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Modelini
                                                tanlang</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        madel: event.target.value
                                                    })}
                                                    value={data.madel}
                                                    ref={model_id}
                                                >
                                                    <optgroup label="Damas">
                                                        <option value=""></option>
                                                        <option value="Damas DLX">Damas DLX</option>
                                                        <option value="Damas Labo">Damas Labo</option>
                                                    </optgroup>
                                                    <optgroup label="Matiz">
                                                        <option value="Matiz">Matiz</option>
                                                        <option value="Matiz Best">Matiz Best</option>
                                                    </optgroup>
                                                    <optgroup label="Nexia-2">
                                                        <option value="Nexia DOHS">Nexia DOHS</option>
                                                        <option value="Nexia SOHS">Nexia SOHS</option>
                                                    </optgroup>
                                                    <optgroup label="Nexia-3">
                                                        <option value="Nexia-3 1-позиция">Nexia-3 1-позиция</option>
                                                        <option value="Nexia-3 2-позиция">Nexia-3 2-позиция</option>
                                                        <option value="Nexia-3 3-позиция">Nexia-3 3-позиция</option>
                                                        <option value="Nexia-3 4-позиция">Nexia-3 4-позиция</option>
                                                    </optgroup>
                                                    <optgroup label="Spark">
                                                        <option value="Spark 1-позиция">Spark 1-позиция</option>
                                                        <option value="Spark 1-евро позиция">Spark 1-евро позиция
                                                        </option>
                                                        <option value="Spark 2-позиция">Spark 2-позиция</option>
                                                        <option value="Spark 2-евро позиция">Spark 2-евро позиция
                                                        </option>
                                                        <option value="Spark 3-позиция">Spark 3-позиция</option>
                                                        <option value="Spark 3-евро позиция">Spark 3-евро позиция
                                                        </option>
                                                        <option value="Spark 4-позиция">Spark 4-позиция</option>
                                                        <option value="Spark 4-евро позиция">Spark 4-евро позиция
                                                        </option>
                                                    </optgroup>
                                                    <optgroup label="Cobalt">
                                                        <option value="Cobalt 1-позиция">Cobalt 1-позиция</option>
                                                        <option value="Cobalt 2-позиция">Cobalt 2-позиция</option>
                                                        <option value="Cobalt 2-евро позиция">Cobalt 2-евро позиция
                                                        </option>
                                                        <option value="Cobalt 3-позиция">Cobalt 3-позиция</option>
                                                        <option value="Cobalt 4-позиция">Cobalt 4-позиция</option>
                                                        <option value="Cobalt 4-евро позиция">Cobalt 4-евро позиция
                                                        </option>
                                                    </optgroup>
                                                    <optgroup label="Lacetti-Gentra">
                                                        <option value="Lacetti 1-п L-COMFORT PLUS">Lacetti 1-п L-COMFORT
                                                            PLUS
                                                        </option>
                                                        <option value="Lacetti Full CDX A/T Elegant Plus">Lacetti Full
                                                            CDX A/T Elegant Plus
                                                        </option>
                                                        <option value="Lacetti L-Style MT">Lacetti L-Style MT</option>
                                                        <option value="Lacetti L-Style AT">Lacetti L-Style AT</option>
                                                    </optgroup>
                                                    <optgroup label="Malibu-1">
                                                        <option value="Malibu-1 1-позиция">Malibu-1 1-позиция</option>
                                                        <option value="Malibu-1 2-позиция">Malibu-1 2-позиция</option>
                                                        <option value="Malibu-1 3-позиция">Malibu-1 3-позиция</option>
                                                    </optgroup>
                                                    <optgroup label="Malibu-2">
                                                        <option value="Malibu-2 2.0L LTZ">Malibu-2 2.0L LTZ</option>
                                                        <option value="Malibu-2 2-позиция">Malibu-2 2-позиция</option>
                                                        <option value="Malibu-2 3-позиция">Malibu-2 3-позиция</option>
                                                    </optgroup>
                                                    <optgroup label="Tracker-2">
                                                        <option value="Tracker-2 1.0T LT AT FWD">Tracker-2 1.0T LT AT
                                                            FWD
                                                        </option>
                                                        <option value="Tracker-2 LT AT Redline 1.0L">Tracker-2 LT AT
                                                            Redline 1.0L
                                                        </option>
                                                    </optgroup>
                                                    <optgroup label="Equinox">
                                                        <option value="Equinox AT 1LT FWD MH">Equinox AT 1LT FWD MH
                                                        </option>
                                                        <option value="Equinox AT 1LT AWD MH">Equinox AT 1LT AWD MH
                                                        </option>
                                                        <option value="Equinox AT 3LT AWD MH">Equinox AT 3LT AWD MH
                                                        </option>
                                                    </optgroup>
                                                    <optgroup label="Traverse">
                                                        <option value="Traverse Начальная комплектация">Traverse
                                                            Начальная комплектация
                                                        </option>
                                                        <option value="Traverse Premier MY22">Traverse Premier MY22
                                                        </option>
                                                    </optgroup>
                                                    <optgroup label="Trailblazer">
                                                        <option value="Trailblazer LTZ 6АT">Trailblazer LTZ 6АT</option>
                                                    </optgroup>
                                                    <optgroup label="Tahoe">
                                                        <option value="Tahoe Начальная комплектация">Tahoe Начальная
                                                            комплектация
                                                        </option>
                                                        <option value="Tahoe RST MY22">Tahoe RST MY22</option>
                                                    </optgroup>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Rangini
                                                tanlang</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        color: event.target.value
                                                    })}
                                                    value={data.color}
                                                    ref={color_car_id}>
                                                    <option value=""></option>
                                                    <option value="Белый \ Oq">Белый \ Oq</option>
                                                    <option value="Глянцево-серый">Глянцево-серый</option>
                                                    <option value="Темно бирюзовый">Темно бирюзовый</option>
                                                    <option value="Желто зеленый">Желто зеленый</option>
                                                    <option value="Серый">Серый</option>
                                                    <option value="Синий">Синий</option>
                                                    <option value="Черный">Черный</option>
                                                    <option value="Красный">Красный</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Ishlab
                                                chiqarilgan yili</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        yili: event.target.value
                                                    })}
                                                    value={data.yili}
                                                    ref={year_car_id}>
                                                    <option value=""></option>
                                                    <option value="2015">2015</option>
                                                    <option value="2016">2016</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2019">2019</option>
                                                    <option value="2020">2020</option>
                                                    <option value="2021">2021</option>
                                                    <option value="2022">2022</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label"

                                            >Dvigatel
                                                sig'imi 'litr'</label>
                                            <div className="col-sm-5">
                                                <input ref={motor_sigimi} type="number"
                                                    className="form-control page_title_uz"
                                                    onChange={event => setData({
                                                        ...data,
                                                        divigitel: event.target.value
                                                    })}
                                                    value={data.divigitel}
                                                    name="motor_sigimi"
                                                    required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Yoqilg'i
                                                turi</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        yoqilgi: event.target.value
                                                    })}
                                                    value={data.yoqilgi}
                                                    ref={fuel_id}
                                                >
                                                    <option value=""></option>
                                                    <option value="Бензин">Бензин</option>
                                                    <option value="Газ-Бензин">Газ-Бензин</option>
                                                    <option value="Дизель">Дизель</option>
                                                    <option value="Электрокар">Электрокар</option>
                                                    <option value="Гибрид">Гибрид</option>
                                                    <option value="Газ">Газ</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Transmissiya</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        transmission: event.target.value
                                                    })}
                                                    value={data.transmission}
                                                    ref={transmissiya_id
                                                    }>
                                                    <option value=""></option>
                                                    <option value="mexanika">Mexanika</option>
                                                    <option value="avtomat">Avtomat</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Kuzov
                                                turi</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        kuzuv: event.target.value
                                                    })}
                                                    value={data.kuzuv}
                                                    ref={kuzov_id}>
                                                    <option value=""></option>
                                                    <option value="Кроссовер">Кроссовер</option>
                                                    <option value="Минивэн">Минивэн</option>
                                                    <option value="Седан">Седан</option>
                                                    <option value="Универсал">Универсал</option>
                                                    <option value="Фургон">Фургон</option>
                                                    <option value="Хэтчбек">Хэтчбек</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Привод</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        perevod: event.target.value
                                                    })}
                                                    value={data.perevod}
                                                    ref={privod_id}>
                                                    <option value=""></option>
                                                    <option value="Передный">Передный</option>
                                                    <option value="Задный">Задный</option>
                                                    <option value="Полный">Полный</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Yurgan
                                                masofa / Пробег</label>
                                            <div className="col-sm-5">
                                                <input ref={probeg_id} type="number"
                                                    className="form-control page_title_uz"
                                                    onChange={event => setData({
                                                        ...data,
                                                        yurgani: event.target.value
                                                    })}
                                                    value={data.yurgani}
                                                    name="probeg" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Aksiya</label>
                                            <div className="col-sm-5">
                                                <select name="subCategoryId menu_id"
                                                    className="main_selector form-control"
                                                    onChange={event => setData({
                                                        ...data,
                                                        aksiya: event.target.value
                                                    })}
                                                    value={data.aksiya}
                                                    ref={aksiya_id}>
                                                    <option value="0">Kerak emas</option>
                                                    <option value="Aksiya">Aksiya</option>
                                                    <option value="AksyaEmas">Aksiya emas</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Opisaniya</label>
                                            <div className="col-sm-5">
                                                <input ref={opisaniya_id}
                                                    className="form-control page_title_uz"
                                                    onChange={event => setData({
                                                        ...data,
                                                        opisaniya: event.target.value
                                                    })}
                                                    value={data.opisaniya}
                                                    name="probeg" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Gmail</label>
                                            <div className="col-sm-5">
                                                <input ref={probeg_id}
                                                    className="form-control page_title_uz"
                                                    onChange={event => setData({
                                                        ...data,
                                                        gmail: event.target.value
                                                    })}
                                                    value={data.gmail}
                                                    name="probeg" required />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label for="example-text-input"
                                                className="col-sm-2 col-form-label">Ismingiz</label>
                                            <div className="col-sm-5">
                                                <input ref={probeg_id}
                                                    className="form-control page_title_uz"
                                                    onChange={event => setData({
                                                        ...data,
                                                        ismiz: event.target.value
                                                    })}
                                                    value={data.ismiz}
                                                    name="probeg" required />
                                            </div>
                                        </div>
                                        {/*<div className="form-group row">*/}
                                        {/*    <label for="example-text-input" className="col-sm-2 col-form-label">Bo'lim*/}
                                        {/*        turini tanlang</label>*/}
                                        {/*    <div className="col-sm-5">*/}
                                        {/*        <select name="subCategoryId menu_id"*/}
                                        {/*                className="main_selector form-control"*/}
                                        {/*                onChange={event => setData({*/}
                                        {/*                    ...data,*/}
                                        {/*                    perevod: event.target.value*/}
                                        {/*                })}*/}
                                        {/*                value={data.perevod}*/}
                                        {/*                ref={page_main_id}>*/}
                                        {/*            <option value="0">=Kerak emas=</option>*/}
                                        {/*            <option value="1">Maxsus taklif, Chegirmalar</option>*/}
                                        {/*        </select>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className="form-group row">
                                            <label for="example-text-input" className="col-sm-2 col-form-label">Narxi
                                                sumda</label>
                                            <div className="col-sm-5">
                                                <input type="number" className="form-control page_title_uz"
                                                    name="auto_price"
                                                    onChange={event => setData({
                                                        ...data,
                                                        narxi: event.target.value
                                                    })}
                                                    value={data.narxi}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        {/*<div className="form-group row">*/}
                                        {/*    <label for="example-text-input" className="col-sm-2 col-form-label">Narxi*/}
                                        {/*        AQSH $</label>*/}
                                        {/*    <div className="col-sm-5">*/}
                                        {/*        <input type="number" className="form-control page_title_uz"*/}
                                        {/*               name="auto_price" required/>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="form-group row">*/}
                                        {/*    <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa*/}
                                        {/*        Sarlavhasini kiriting o'zbek*/}
                                        {/*        tilida</label>*/}
                                        {/*    <div className="col-sm-6">*/}
                                        {/*        <input ref={page_title_uz} type="text"*/}
                                        {/*               className="form-control page_title_uz" name="section_title_uz"*/}
                                        {/*               required/>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="form-group row">*/}
                                        {/*    <label for="example-text-input" className="col-sm-2 col-form-label">Sahifa*/}
                                        {/*        Sarlavhasini kiriting rus*/}
                                        {/*        tilida</label>*/}
                                        {/*    <div className="col-sm-6">*/}
                                        {/*        <input ref={page_title_ru} type="text"*/}
                                        {/*               className="form-control page_title_ru" name="section_title_ru"*/}
                                        {/*               required/>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="form-group row">*/}
                                        {/*    <label for="example-text-input" className="col-sm-2 col-form-label">Tavsif*/}
                                        {/*        kiriting</label>*/}
                                        {/*    <div classNameName="col-sm-6">*/}
                                        {/*        <Editor*/}
                                        {/*            onInit={(evt, editor) => page_definition.current = editor}*/}
                                        {/*            initialValue={``}*/}
                                        {/*            init={{*/}
                                        {/*                height: 300,*/}
                                        {/*                menubar: false,*/}
                                        {/*                plugins: [*/}
                                        {/*                    'advlist autolink lists link image charmap print preview anchor',*/}
                                        {/*                    'searchreplace visualblocks code fullscreen',*/}
                                        {/*                    'insertdatetime media table paste code help wordcount image'*/}
                                        {/*                ],*/}
                                        {/*                toolbar: 'undo redo | formatselect | ' +*/}
                                        {/*                    'bold italic backcolor | alignleft aligncenter ' +*/}
                                        {/*                    'alignright alignjustify | bullist numlist outdent indent | ' +*/}
                                        {/*                    'removeformat | help | image | media | link',*/}
                                        {/*                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'*/}
                                        {/*            }}*/}
                                        {/*        />*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}


                                        <div className="m-5">
                                            <div className="download">
                                                <p>Avto rasmini yuklash</p>
                                            </div>
                                            <div className="max_size">
                                                <p>Max:100mb</p>
                                            </div>
                                            <div className="upload_button_3">
                                                <input
                                                    onChange={event => handleFile(event)}
                                                    value={data.photo}
                                                    type="file"
                                                />
                                            </div>
                                            <div className="btn-admin">
                                                <a href="/api/news/all"
                                                    className="button_sumbit_news btn btn-dark btn-sm float-right ml-3">Orqaga</a>
                                                <input type="submit"
                                                    className="button_sumbit_news btn btn-success btn-sm float-right ml-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCardForm;
