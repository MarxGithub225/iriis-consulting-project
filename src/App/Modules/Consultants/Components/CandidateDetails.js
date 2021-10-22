import React, { useEffect } from 'react'

import Candidate1 from '../../../Assets/img/home-two/candidate1.jpg';
export default function CandidateDetails() {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div>
            <div className="page-title-area two three">
                <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                        <div className="left two">
                            <img src={Candidate1} alt="Details" />
                            <h2>Marx N'Guessan</h2>
                            <ul>
                            <li>
                                <i className="bx bx-box" />
                                Software engineer
                            </li>
                            <li>
                                <i className="bx bx-phone-call" />
                                <a href="tel:002250787467290">+225 078 746 7290</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="person-details-area ptb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="details-item">
                        <div className="profile">
                        <h3>Mon profile</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                        </div>
                        <div className="work bottom-item">
                        <h3>Experiences professionnelles</h3>
                        <ul>
                            <li>
                            Path Technologies, Washington, DC, USA
                            </li>
                            <li>
                            <span>04/2011 - 01/2012</span>
                            </li>
                        </ul>
                        <h4>Senior Software Engineer</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="work bottom-item">
                        <ul>
                            <li>
                            University Of Maryland
                            </li>
                            <li>
                            <span>03/2014 - 03/2016</span>
                            </li>
                        </ul>
                        <h4>Professor</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="work bottom-item bottom-item-last">
                        <ul>
                            <li>
                            3s Software Bangladesh
                            </li>
                            <li>
                            <span>02/2015 - 02/2018</span>
                            </li>
                        </ul>
                        <h4>John Hopkins, Bangladesh</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="work bottom-item">
                        <h3>Education</h3>
                        <ul>
                            <li>
                            Path Technologies, Washington, DC, USA
                            </li>
                        </ul>
                        <h4>MBA (2018-2019)</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="work bottom-item">
                        <ul>
                            <li>
                            School of Design at University of Michigan
                            </li>
                        </ul>
                        <h4>BBA (2010-2014)</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="work bottom-item bottom-item-last">
                        <ul>
                            <li>
                            Design at Institute of Technology &amp; Marketing
                            </li>
                        </ul>
                        <h4>Section UX &amp; UI design (2014 - 2018)</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        
                        
                        <div className="review">
                        <h3>Laisser un message à Marx N'Guessan</h3>
                        
                        <form>
                            
                            <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                <i className="bx bx-user" />
                                <input type="text" className="form-control" placeholder="Nom complet*" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                <i className="bx bx-mail-send" />
                                <input type="email" className="form-control" placeholder="Email*" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <i className="bx bx-mail-send" />
                                <textarea id="your-message" rows={10} className="form-control" placeholder="Ecrivez votre message" defaultValue={""} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button type="submit" className="btn">Envoyer</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="widget-area">
                        <div className="information widget-item">
                        <h3>Employabilité</h3>
                        <ul>
                            <li>
                            <h4>Salaire:</h4>
                            <span>800000 Fcfa - 1200000 Fcfa</span>
                            </li>
                            <li>
                            <h4>Experience:</h4>
                            <span>5 années</span>
                            </li>
                            
                            
                            <li>
                            <h4>Languages:</h4>
                            <span>Anglais, Français</span>
                            </li>
                            
                        </ul>
                        </div>
                        <div className="download widget-item">
                        <a href="#">Télécharger le CV</a>
                        </div>
                        <div className="owner">
                        <div className="top">
                            <h3>Autres informations</h3>
                            <i className="flaticon-send" />
                            <span>Abidjan, Dokui azur</span>
                        </div>
                        <div className="information widget-item">
                            <ul>
                            <li>
                                <h4>Téléphone</h4>
                                <a href="tel:002250787467290">+225 0787367290</a>
                            </li>
                            <li>
                                <h4>Email</h4>
                                <a href="">nguessanmarx@gmail.com</a>
                            </li>
                           
                            </ul>
                        </div>
                        </div>
                       
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
