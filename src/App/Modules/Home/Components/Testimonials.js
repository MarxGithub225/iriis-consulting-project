import React from 'react'
import ShapeBottom from '../../../Assets/img/home-one/banner/shape-bottom.png';
import FeedBack1 from '../../../Assets/img/home-one/feedback1.jpg';
import FeedBack2 from '../../../Assets/img/home-one/feedback2.jpg';
import FeedBack3 from '../../../Assets/img/home-one/feedback3.jpg';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
export default function Testimonials() {
    return (
       <section className="feedback-area pt-100">
            <div className="feedback-shape">
                <img src={ShapeBottom} alt="Shape" />
            </div>
            <div className="container">
                <div className="section-title">
                <h2>Témoignages</h2>
                </div>

                <OwlCarousel items={2}  
                    className="feedback-slider owl-theme owl-carouse"  
                    autoplay = {true}
                    dots = {false}
                    loop  
                    nav >  
                     <div className="feedback-item">
                    <h3>Jubra Ward</h3>
                    <span>CEO at Alfa School</span>
                    <p>“I’m ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaxn ullamco laboris nisi ut at voluptatem.</p>
                    <h4>
                    <i className="flaticon-left-quote" />
                    Just Awesome
                    </h4>
                    <img src ={FeedBack1} alt="Feedback" />
                </div>
                <div className="feedback-item">
                    <h3>Robin William</h3>
                    <span>Manager Support Act It</span>
                    <p>“I’m ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaxn ullamco laboris nisi ut at voluptatem.</p>
                    <h4>
                    <i className="flaticon-left-quote" />
                    Very Reliable
                    </h4>
                    <img src ={FeedBack2} alt="Feedback" />
                </div>
                <div className="feedback-item">
                    <h3>Tom Henry</h3>
                    <span>Director at Alfa School</span>
                    <p>“I’m ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniaxn ullamco laboris nisi ut at voluptatem.</p>
                    <h4>
                    <i className="flaticon-left-quote" />
                    Looking Nice
                    </h4>
                    <img src ={FeedBack3} alt="Feedback" />
                </div>
                </OwlCarousel>  

                
            </div>
        </section>

    )
}
