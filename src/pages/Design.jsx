import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"

import './style.css'
import { ScriptSlide } from "../components/ScriptSlide"

export const Design = () => {

    return (
        <>
            <Header />
            <main className="design pb-5">
                <Section content="container" conteudo={
                    <div className="row py-5">
                        <div className="col-md-4">
                            <h1><span>Design gráfico</span></h1>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Aqui você encontra alguns dos meus projetos. Cada um é uma história visual única, uma colaboração dedicada à expressão de cada cliente. Meu trabalho reflete a essência de cada marca. Explore como transformei ideias em realidade visual, criando conexões autênticas e impactantes.
                            </p>
                        </div>
                        <div className="col-12">
                            <ScriptSlide />
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    )
}