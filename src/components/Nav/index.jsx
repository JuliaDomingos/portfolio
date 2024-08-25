import { useState } from 'react';
import { FaBehance, FaLinkedin } from 'react-icons/fa'
import { LinkCustom } from '../LinkCustom'
import { LinkNav } from '../LinkNav'
import { BtnMobile } from '../BtnMobile';
import './style.css'

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='nav__promo'>
            <ul className={`menu${isOpen ? " active" : ""}`}>
                <LinkNav text="Design gráfico" url="/design" />
                <LinkNav text="Edição de vídeo" url="/video" />
                <LinkNav text="Sobre" url="/sobre" />
                <LinkNav text="Contato" url="/contato" />
                <div className='social_menu'>
                    <LinkCustom aria="instagram" alvo={"_blank"} text={<FaLinkedin />} url={'https://www.linkedin.com/in/julia-domingos-cardoso/'} />
                    <LinkCustom aria="linkedin" alvo={"_blank"} text={<FaBehance />} url={'https://www.behance.net/juliadomingo'} />
                </div>
            </ul>
            <BtnMobile parametroIsOpen={isOpen} parametroSetIsOpen={setIsOpen} />
        </nav>
    )
}