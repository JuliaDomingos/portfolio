import React from 'react';
import emailjs from '@emailjs/browser';

import './style.css'

const SERVICE_ID = "service_xvvi70a";
const TEMPLATE_ID = "template_nzmhkun";
const PUBLIC_KEY = "D2oW_4zBjW6w24Uwk";

export const ContactForm = (props) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                document.querySelector("#email-result").textContent = "Enviado com sucesso";
                setTimeout(() => {
                    document.querySelector("#email-result").textContent = "";
                }, 5000);
            }, (error) => {
                document.querySelector("#email-result").textContent = "Algo deu errado, tente novamente mais tarde";
                setTimeout(() => {
                    document.querySelector("#email-result").textContent = "";
                }, 5000);
            });
        e.target.reset()
    };

    return (
        <>
            <div className='form-contact'>
                <form className="formContainer" onSubmit={handleOnSubmit}>
                    <h2 className={props.classTitulo + ' text-center'}>Entre em contato</h2>
                    <div className='d-block d-lg-flex justify-content-center align-items-center'>
                        <div className="formElement w-100 mr-md-1">
                            <label htmlFor="from_name" className={props.classTitulo}>Nome*</label>
                            <input type="text" id="from_name" name="from_name" required />
                        </div>

                        <div className="formElement w-100 ml-md-1">
                            <label htmlFor="from_email" className={props.classTitulo}>E-mail*</label>
                            <input type="email" id="from_email" name="from_email" required />
                        </div>
                    </div>

                    <div className="formElement">
                        <label htmlFor="message" className={props.classTitulo}>Mensagem*</label>
                        <textarea id='message' name="message" rows="8" cols="30" required />
                        <small id='email-result' className='text-white'></small>
                    </div>
                    <button type='submit' className='formButton'>Enviar</button>
                </form>
            </div>
        </>
    )
}

// function ContactForm(props) {

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
//             .then((result) => {
//                 document.querySelector("#email-result").textContent = "Enviado com sucesso";
//                 setTimeout(() => {
//                     document.querySelector("#email-result").textContent = "";
//                 }, 5000);
//             }, (error) => {
//                 document.querySelector("#email-result").textContent = "Algo deu errado, tente novamente mais tarde";
//                 setTimeout(() => {
//                     document.querySelector("#email-result").textContent = "";
//                 }, 5000);
//             });
//         e.target.reset()
//     };

//     return (
//         <>
//             <div className='form-contact'>
//                 <form className="formContainer" onSubmit={handleOnSubmit}>
//                     <h2 className={props.classTitulo + ' text-center'}>Entre em contato</h2>
//                     <div className='d-block d-lg-flex justify-content-center align-items-center'>
//                         <div className="formElement w-100 mr-md-1">
//                             <label htmlFor="from_name" className={props.classTitulo}>Nome*</label>
//                             <input type="text" id="from_name" name="from_name" required />
//                         </div>

//                         <div className="formElement w-100 ml-md-1">
//                             <label htmlFor="from_email" className={props.classTitulo}>E-mail*</label>
//                             <input type="email" id="from_email" name="from_email" required />
//                         </div>
//                     </div>

//                     <div className="formElement">
//                         <label htmlFor="message" className={props.classTitulo}>Mensagem*</label>
//                         <textarea id='message' name="message" rows="8" cols="30" required />
//                         <small id='email-result' className='text-white'></small>
//                     </div>
//                     <button type='submit' className='formButton'>Enviar</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default ContactForm