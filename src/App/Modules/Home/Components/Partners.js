import React from 'react'

import Partner1 from '../../../Assets/img/home-one/partner1.png';
import Partner2 from '../../../Assets/img/home-one/partner2.png';
import Partner3 from '../../../Assets/img/home-one/partner3.png';
import Partner4 from '../../../Assets/img/home-one/partner4.png';
import Partner5 from '../../../Assets/img/home-one/partner5.png';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Partners() {
    return (
        <div className="partner-area pt-100 pb-70">
            <div className="container">
                <OwlCarousel items={5}  
                    className="partner-slider owl-theme owl-carouse"  
                    dots = {false}
                    loop  > 
                    <div className="partner-item">
                        <img src={Partner1} alt="Partner" />
                        <img src={Partner1} alt="Partner" />
                    </div>
                    <div className="partner-item">
                        <img src={Partner2} alt="Partner" />
                        <img src={Partner2} alt="Partner" />
                    </div>
                    <div className="partner-item">
                        <img src={Partner3} alt="Partner" />
                        <img src={Partner3} alt="Partner" />
                    </div>
                    <div className="partner-item">
                        <img src={Partner4} alt="Partner" />
                        <img src={Partner4} alt="Partner" />
                    </div>
                    <div className="partner-item">
                        <img src={Partner5} alt="Partner" />
                        <img src={Partner5} alt="Partner" />
                    </div>
                    <div className="partner-item">
                        <img src={Partner1} alt="Partner" />
                        <img src={Partner1} alt="Partner" />
                    </div>
                </OwlCarousel>
                
            </div>
        </div>

    )
}
