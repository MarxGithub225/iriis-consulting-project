import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo/logo_iriss.png';

const year = new Date().getFullYear()
export default function Footer() {
    return (
        <div>
            <footer className="pt-100 pb-70">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-lg-6">
                    <div className="footer-item">
                        <div className="footer-logo">
                        <Link className="logo" to="/">
                            <img src={logo} alt="Logo" width = "225"/>
                        </Link>
                        <ul>
                            <li>
                            <span style = {{textTransform: 'uppercase'}}>Adresses: </span>
                            <ul style = {{paddingLeft : '20px'}}>
                                <li>
                                    <small><span>Côte d’Ivoire: </span> Angre Star 12 Cocody, Abidjan</small>
                                </li>
                                <small><span>Niger: </span> Sonuci-Boulevard Tanimoune, Niamey </small>
                                <li>

                                </li>
                            </ul>
                            </li>
                            <li>
                            <span style = {{textTransform: 'uppercase'}}>Email: </span>
                                <a href="mailto: support@iriss-consulting.com">support@iriss-consulting.com</a>
                            </li>
                            <li>
                            <span>Téléphone: </span>
                                <a href="tel:0022790232712">+227 902 327 12 </a> / <a href="tel:002250769752078">+225 076 975 2078 </a>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                   
                    <div className="col-sm-6 col-lg-4">
                    <div className="footer-item">
                        <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <form className="newsletter-form" data-toggle="validator">
                            <input type="email" className="form-control" placeholder="Adresse email*" name="EMAIL" required autoComplete="off" />
                            <button className="btn" type="submit">
                            <i className="flaticon-send" />
                            </button>
                            <div id="validator-newsletter" className="form-result" />
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
            <div className="copyright-area">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="copyright-item">
                        <ul>
                        <li>
                            <a href="#" target="_blank">
                            <i className="bx bxl-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <i className="bx bxl-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <i className="bx bxl-linkedin-square" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <i className="bx bxl-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                            <i className="bx bxl-whatsapp" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="copyright-item">
                        <p>Copyright {year} iRiSs Consulting. Conçu par: <a href="https://marx-nguessan.com/" target="_blank">Marx N'Guessan</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
