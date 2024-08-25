import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"

import './style.css'
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop, SiAdobepremierepro, SiFigma } from "react-icons/si"

export const Sobre = () => {

    return (
        <>
            <Header />
            <main className="sobre">
                <Section content="container" conteudo={
                    <div className="row">
                        <div className="col-md-5 py-5">
                            <h1 className="mb-0">Olá, Muito prazer!</h1>
                            <h2>
                                Me chamo <span>Júlia Domingos</span>
                            </h2>
                            <p>
                                A absorção de arte e cultura me formaram como indivíduo. Com isso, trilhei o meu caminho à procura de conhecimentos que usufruem da criatividade humana como principal virtude. Logo, conheci o design.<br /><br />
                                Sou designer gráfica formada pela Faculdade Méliès em 2020 e pós-graduanda em UX Design na PUC-RS. Possuo experiência em editora e agências de marketing, tanto com criações de layouts on-line e off-line, captura e edição de vídeo e foto. Nesse site, você pode conhecer um pouco de como transformo uma ideia em algo visual, para propagar ideias e solucionar problemas.
                            </p>
                            <div className="icons">
                                <SiAdobephotoshop color="#2a4a97" title="Adobe Photoshop" />
                                <SiAdobeillustrator color="#F26716" title="Adobe Illustrator" />
                                <SiAdobepremierepro color="#3F2D67" title="Adobe Premiere" />
                                <SiAdobeaftereffects color="#3C2A64" title="Adobe After Effect" />
                                <SiAdobeindesign color="#BE3450" title="Adobe InDesign" />
                                <SiFigma title="Figma" />
                            </div>
                        </div>
                        <div className="col-md-7 text-center">
                            <img src="../assets/images/xuxu.jpeg" className="img-fluid" alt="Julia Domingos Cardoso" />
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    )
}