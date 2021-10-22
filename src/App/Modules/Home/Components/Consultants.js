import React from 'react'

import Candidate1 from '../../../Assets/img/home-two/candidate1.jpg';

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const consultants = [
    {
        reference : 'RFE56126',
        fullname: 'Marx N\'Guessan',
        djob: 'Software engineer',
        description : 'dolor sit amet conscu adiing elitsed eusmod tempor',
        experienceyear: 5,
        rate: 250000,
        address: 'Abidjan, Dokui pharmacie azur',
        domaines : [
            'MEAN',
            'MERN',
            'PHP',
            'JAVASCRIPT',
            'FLUTTRE',
            'REACT NATIVE'
        ]

    },

    {
        reference : 'RFE56126',
        fullname: 'Marx N\'Guessan',
        djob: 'Software engineer',
        description : 'dolor sit amet conscu adiing elitsed eusmod tempor',
        experienceyear: 5,
        rate: 250000,
        address: 'Abidjan, Dokui pharmacie azur',
        domaines : [
            'MEAN',
            'MERN',
            'PHP',
            'JAVASCRIPT',
            'FLUTTRE',
            'REACT NATIVE'
        ]

    },

    {
        reference : 'RFE56126',
        fullname: 'Marx N\'Guessan',
        djob: 'Software engineer',
        description : 'dolor sit amet conscu adiing elitsed eusmod tempor',
        experienceyear: 5,
        rate: 800000,
        address: 'Abidjan, Dokui pharmacie azur',
        domaines : [
            'MEAN',
            'MERN',
            'PHP',
            'JAVASCRIPT',
            'FLUTTRE',
            'REACT NATIVE'
        ]

    },

    {
        reference : 'RFE56126',
        fullname: 'Marx N\'Guessan',
        djob: 'Software engineer',
        description : 'dolor sit amet conscu adiing elitsed eusmod tempor',
        experienceyear: 5,
        rate: 250000,
        address: 'Abidjan, Dokui pharmacie azur',
        domaines : [
            'MEAN',
            'MERN',
            'PHP',
            'JAVASCRIPT',
            'FLUTTRE',
            'REACT NATIVE'
        ]

    }
]
export default function Consultants() {

    return (
        <section className="candidate-area pb-100">
            <div className="container">
                <div className="section-title two">
                <h2>Nos consultants</h2>
                </div>
                <OwlCarousel items={2}  
                className="candidate-slider owl-theme owl-carouse"  
                autoplay = {true}
                dots = {false}
                loop  
                nav  >
                    {consultants.map((item, index) => {
                        return (
                            <div className="candidate-item" key = {index}>
                                <div className="left">
                                <h3>
                                    <a href="candidate-details.html">{item.fullname}</a>
                                </h3>
                                <span>{item.djob}</span>
                                <p>{item.description}</p>
                                <ul>
                                    {item.domaines.map((domain, key) => {
                                        return (<li key = {key}>{domain}</li>)
                                    })}
                                </ul>
                                <div className="cmn-link">
                                    <Link to={`/cv/${item.reference}`}>
                                        <i className="flaticon-right-arrow one" />
                                        Consulter
                                        <i className="flaticon-right-arrow two" />
                                    </Link>
                                </div>
                                </div>
                                <img src={Candidate1} alt="Candidate" />
                            </div>
                        )
                        
                    })}
                    
                </OwlCarousel>
                
                <div className="candidate-browse">
                <p>Voir tous nos <Link to="/consultants">Consultants</Link></p>
                </div>
            </div>
        </section>

    )
}
