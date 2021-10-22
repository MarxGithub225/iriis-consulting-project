import React, { useEffect } from 'react'

export default function Contact() {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div>
           
            <div className="page-title-area">
                <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                    <div className="title-item">
                        <h2>Nos contacts</h2>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                <div className="row justify-content-around">
                    <div className="col-sm-6 col-lg-4">
                    <div className="info-item">
                        <i className="bx bx-world" />
                        <h3>Côte d'Ivoire</h3>
                        <p>Angre Star 12 Cocody, Abidjan</p>
                        <ul>
                        <li>
                            <span>Mobile:</span> <a href="tel:002250769752078">(+225) 076 975 2078</a>
                        </li>
                        <li>
                            <span>Email:</span> <a href="mailto:support@iriss-consulting.com">support@iriss-consulting.com</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                    <div className="info-item">
                        <i className="bx bx-world" />
                        <h3>Niger</h3>
                        <p>Sonuci-Boulevard Tanimoune, Niamey</p>
                        <ul>
                        <li>
                            <span>Mobile:</span> <a href="tel:002250769752078">(+225) 076 975 2078</a>
                        </li>
                        <li>
                            <span>Email:</span> <a href="mailto:support@iriss-consulting.com">support@iriss-consulting.com</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className="contact-form-area pb-100">
                <div className="container">
                <div className="form-item">
                    <h2>Ecrivez-nous</h2>
                    <form id="contactForm">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                            <label>Adresse email</label>
                            <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                            <label>Téléphone</label>
                            <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-6">
                        <div className="form-group">
                            <label>Objet</label>
                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" defaultValue={""} />
                            <div className="help-block with-errors" />
                        </div>
                        </div>
                        <div className="col-md-12 col-lg-12">
                        <button type="submit" className="btn">
                            Envoyer
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="map-area">
                <div className="container-fluid p-0">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59843174.53779285!2d62.17507173408571!3d23.728204508550363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3663f18a24cbe857%3A0xa9416bfcd3a0f459!2sAsia!5e0!3m2!1sen!2sbd!4v1599227927146!5m2!1sen!2sbd" allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
            </div>
        </div>

    )
}
