import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"

import './style.css'
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiFigma } from "react-icons/si"

export const NotFound = () => {

    return (
        <>
            <Header />
            <main className="sobre">
                <Section content="container" conteudo={
                    <div className="row">
                        <div className="col-md-12 py-5">
                            <h1 className="text-center">Página não encontrada - 404</h1>
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    )
}