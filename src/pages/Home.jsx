import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"

import './style.css'

export const Home = () => {

  return (
    <>
      <Header />
      <main className="home">
        <Section content="container" conteudo={
          <div className="row pt-5">
            <div className="col-lg-4">
              <h1>Bem-vindo a meu <br className="d-none d-lg-block" />mundo <span>criativo</span></h1>
              <p>
                Sou apaixonada por transformar ideias em realidade visual. Com um olhar atento ao detalhe e uma paixão pela inovação, meu objetivo é criar experiências visuais memoráveis que inspiram e encantam. Explore meu portfólio e descubra como posso ajudar a contar a sua história através do design.
              </p>
            </div>
            <div className="image-container col-lg-7 p-0">
              <Banner />
            </div>
          </div>
        }>
        </Section>
      </main>
      <Footer />
    </>
  )
}