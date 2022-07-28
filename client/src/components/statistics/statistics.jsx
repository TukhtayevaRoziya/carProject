import { useState, useEffect } from 'react'
import car from '../../images/car.png'
import pageIcon from '../../images/landing-page.png'
import priceTag from '../../images/price-tag.png'
import order from '../../images/order.png'


function Statistics() {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/news/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNews(data)
            });
    }, [])
    const [announcements, setAnnouncements] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/announcements/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setAnnouncements(data)
            });
    }, [])
    const [pages, setPages] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/sub_categories/all')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPages(data)
            });
    }, [])
    return (
        <>
            <div class="row pt-3 statistics_wrapper">
                <h3>Saytdagi kontentlar statistikasi</h3>
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={priceTag} alt="" width={35} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha Maxsus takliflar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {announcements.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={car} alt="" width={35} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha Avtomobillar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {news.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={order} alt="" width={35} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha buyurtmalar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {news.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                    <div class="card  bg-primary_all">
                        <div class="card-heading p-4">
                            <div class="mini-stat-icon float-right">
                                <img src={pageIcon} alt="" width={25} />
                            </div>
                            <div>
                                <h5 class="font-16 text-white">Barcha Sahifalar</h5>
                            </div>
                            <h3 class="mt-4 text-white">
                                {pages.length}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
