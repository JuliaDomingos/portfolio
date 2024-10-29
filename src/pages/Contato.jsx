import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"
import emailjs from '@emailjs/browser'
import './style.css'
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from "react"

export const Contato = () => {

    const form = useRef();
    let success = false;

    const notify = () => toast((success === true) ? `✅Enviado com sucesso!` : `❌Não foi possível enviar sua mensagem!`);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gn69m9o', 'template_nzmhkun', e.target, 'D2oW_4zBjW6w24Uwk').then((result) => {
            success = true;
            console.log(result.text);
            notify()
        }, (error) => {
            success = false;
            console.log(error.text);
            notify()
        });
        e.target.reset();
    }

    return (
        <>
            <Header />
            <main className="contato">
                <Section content="container" conteudo={
                    <div className="row py-5">
                        <div className="col-lg-6 col-xl-12">
                            <h1 className="mb-0">Tem algum projeto legal?</h1>
                            <h2>
                                Me manda um <span>E-mail!</span>
                            </h2>
                            <p>
                                Caso tenha interesse em desenvolver algum projeto de design ou vídeo, mencione pelo formulário ao lado para marcarmos um bate-papo e alinharmos as ideias.
                            </p>
                            <p>
                                <a href="mailto:domingos.julia@gmail.com">
                                    <i>
                                        domingos.julia@gmail.com
                                    </i>
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-6 col-xl-12">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="d-flex flex-column form-group">
                                    <label className="mb-0" htmlFor="form_name">Nome*</label>
                                    <input id="form_name" name="form_name" className="form-control" type="text" required />
                                </div>
                                <div className="d-flex flex-column mt-2 form-group">
                                    <label className="mb-0" htmlFor="form_email">E-mail*</label>
                                    <input id="form_email" name="form_email" className="form-control" type="email" required />
                                </div>
                                <div className="d-flex flex-column mt-2 form-group">
                                    <label className="mb-0" htmlFor="form_msg">Mensagem*</label>
                                    <textarea id="form_msg" name="form_msg" className="form-control" type="text" required />
                                </div>
                                <div className="text-right mt-2">
                                    <input className="btn btn-primary" type="submit" value="Enviar" />
                                </div>
                            </form>
                            <Toaster
                                position="bottom-right"
                                reverseOrder={false}
                            />
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    )
}