import React from "react";
import "./contactform.css";

const ContactForm = () => {
    return (
        <>
            <div className="form-body mt-5">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Contactanos</h3>
                                <p>Dejanos tu consulta, feedback, etc</p>
                                <form className="requires-validation" >
                                    <div className="col-md-12">
                                        <input className="form-control" type="text" name="name" placeholder="Nombre Completo" required />
                                        <div className="invalid-feedback">Campo obligatorio!</div>
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="email" name="email" placeholder="E-mail" required />
                                        <div className="valid-feedback">Email no valido!</div>
                                        <div className="invalid-feedback">Campo obligatorio!</div>
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="col-md-12 mt-3 textarea" placeholder="Mensaje" />
                                    </div>
                                    <div className="form-button mt-5 d-flex justify-content-center">
                                        <button id="submit" type="submit" className="btn btn-warning col-md-6 mb-2">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;