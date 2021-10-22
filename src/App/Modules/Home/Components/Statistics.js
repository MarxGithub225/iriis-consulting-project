import React from 'react'
import ShapeBottom from '../../../Assets/img/home-one/banner/shape-bottom.png';
import Bounty from 'react-bounty';

export default function Statistics() {
    return (
        <>
        <section className="explore-area ptb-100">
            <div className="container">
                <div className="explore-item">
                <div className="section-title">
                    <h2>Présentation</h2>
                </div>
                <p>Fondée au Niger et
                    opérant en Côte d’Ivoire,
                    orientée Agile, met à votre
                    service son savoir-faire et
                    son efficacité.</p>

                    <p>Regroupe des consultants
                    billingue, à l ’écoute, disposant
                    d'excellentes qualités humaines,
                    très expérimentés et repar tis
                    dans le Monde (Etats Unis, France,
                    Tunisie, Maroc, Cote d’Ivoire,
                    Niger ia , Cameroun, Niger, Chine)
                    spécialisés dans plusieurs domaines.</p>
                
                </div>
            </div>
        </section>


        <div className="counter-area pt-100">
            <div className="counter-shape">
                <img src={ShapeBottom} alt="Shape" />
            </div>
            <div className="container">
                <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="counter-item">
                    <i className="flaticon-hiring" />
                    <p>CANDIDATES</p>
                    <h3>
                        <Bounty value={ 87360 } className="bounty"/>
                    </h3>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="counter-item">
                    <i className="flaticon-candidate" />
                    <p>TOTAL JOBS</p>
                    <h3>
                        <Bounty value={ 45257 } className="bounty"/>
                    </h3>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="counter-item">
                    <i className="flaticon-working-at-home" />
                    <p>EMPLOYERS</p>
                    <h3>
                        <Bounty value={ 9650 } className="bounty"/>
                    </h3>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                    <div className="counter-item">
                    <i className="flaticon-choice" />
                    <p>JOB APPLICATIONS</p>
                    <h3>
                        <Bounty value={ 70299 } className="bounty"/>
                    </h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
