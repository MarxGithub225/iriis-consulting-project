import React from 'react'

import ShapeBottom from '../../../Assets/img/home-one/banner/shape-bottom.png';
import BannerMain from '../../../Assets/img/home-one/banner/banner-main.jpg';
import Banner1 from '../../../Assets/img/home-one/banner/banner1.png';
import Banner2 from '../../../Assets/img/home-one/banner/banner2.png';
import Banner3 from '../../../Assets/img/home-one/banner/banner3.png';
import Banner4 from '../../../Assets/img/home-one/banner/banner4.png';
import Banner5 from '../../../Assets/img/home-one/banner/banner5.png';
import Banner6 from '../../../Assets/img/home-one/banner/banner6.png';
import Banner7 from '../../../Assets/img/home-one/banner/banner7.png';
import Banner8 from '../../../Assets/img/home-one/banner/banner8.png';
import Banner9 from '../../../Assets/img/home-one/banner/banner9.png';
import Banner10 from '../../../Assets/img/home-one/banner/banner10.jpg';
import Banner11 from '../../../Assets/img/home-one/banner/banner11.png';
import Banner12 from '../../../Assets/img/home-one/banner/banner12.png';
import Banner13 from '../../../Assets/img/home-one/banner/banner13.png';
export default function Banner() {
    return (
        <div className="banner-area">
            <div className="banner-shape">
                <img src={ShapeBottom} alt="Shape" />
            </div>
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-8">
                    <div className="banner-content">
                    <div className="d-table">
                        <div className="d-table-cell">

                            <h1>l'<span>humain</span> au <span>cœur</span> de notre <span>identité</span>.</h1>

                            <h1>&nbsp;</h1>
                        <img src={Banner12} alt="Shape" />
                        <img src={Banner13} alt="Shape" />
                        <img src={Banner4} alt="Shape" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="banner-img">
                        <img src={BannerMain} alt="Shape" />
                        <img src={Banner1} alt="Shape" />
                        <img src={Banner3} alt="Shape" />
                        <img src={Banner4} alt="Shape" />
                        <img src={Banner5} alt="Shape" />
                        <img src={Banner6} alt="Shape" />
                        <img src={Banner7} alt="Shape" />
                        <img src={Banner8} alt="Shape" />
                        <img src={Banner9} alt="Shape" />
                        <img src={Banner10} alt="Shape" />
                        
                        <div className="inner">
                            <img src={Banner2} alt="Shape" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
