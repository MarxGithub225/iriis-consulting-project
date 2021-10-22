import React, { useEffect } from 'react'

import Title from '../../Assets/img/home-three/title-img-two.png';
import Candidate from '../../Assets/img/candidate1.jpg';
import { Link } from 'react-router-dom';

const consultants = [
    {
        reference : 'RFE56126',
        fullname: 'Marx N\'Guessan',
        djob: 'Software engineer',
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
export default function ConsultantsView() {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <>
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                    <div className="container">
                        <div className="title-item">
                        <h2>Nos consultants</h2>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="job-showing-area" style = {{marginTop : '25px'}}>
                <div className="container">
                <h4>Rechercher par activité</h4>
                <div className="showing">
                    <div className="row">
                    <div className="col-sm-6 col-lg-6">
                        <div className="left">
                        <div className="form-group">
                            <select>
                            <option>Développeur</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </div>
            <div className="candidate-area pb-100">
                <div className="container">
                <div className="row">
                    {consultants.map((item, index) => {
                        return (
                            <div className="col-lg-6" key = {index}>
                                <div className="candidate-item two">
                                    <div className="left">
                                    <h3>
                                        <a href="candidate-details.html">{item.fullname}</a>
                                    </h3>
                                    <span>{item.djob}</span>
                                    <ul className="experience">
                                        <li>Experiences: <span>{item.experienceyear} années</span></li>
                                        <li>Valeur minimale: <span>{item.rate} Fcfa</span></li>
                                        <li>
                                        <i className="flaticon-send" />
                                        {item.address}
                                        </li>
                                    </ul>
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
                                    <img src={Candidate} alt="Candidate" />
                                </div>
                            </div>
                        )
                    }) }
                </div>
                
                </div>
            </div>
        </>

    )
}
