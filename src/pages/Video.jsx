import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Section } from "../components/Section"

import './style.css'

export const Video = () => {

    return (
        <>
            <Header />
            <main className="video pb-5">
                <Section content="container" conteudo={
                    <div className="row py-5">
                        <div className="col-md-4">
                            <h1><span>Edição de vídeo</span></h1>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Neste espaço, você verá uma amostra dos meus projetos de captura e edição de vídeo. Em cada um, tive o intuito de contar uma narrativa de forma breve e delicada para cativar o espectador. Navegue pelos vídeos e veja como posso contribuir para o seu próximo projeto.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/wYWRfm2xYPs?si=x6l-y9LKcPCoRMGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/5TjvdeJH2bg?si=Xaz6bmdnTddsqP2F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/ASzUAr3h4Iw?si=lmtPWmU7nRsa_pDf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/pzcTLPqITsE?si=Z4LMxugn90cDuC6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/4oo5IyFKuH8?si=hVL3GIDCf_3B-F5p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="col-md-4">
                            <iframe src="https://www.youtube.com/embed/oGx8ZFG2yXE?si=WfLvcKPhzmZICEi2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                }>
                </Section>
            </main>
            <Footer />
        </>
    )
}