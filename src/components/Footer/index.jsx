import { Link } from 'react-router-dom'

import './style.css'

export const Footer = () => {
    return (
        <footer>
            <div className='text-center bg1 copy-content'>
                <small>
                    Copyright ©2024 Júlia Domingos - Todos os direitos reservados. Desenvolvido por <Link to={'https://devandreakira.github.io/'} target='_blank'>DevAndreAkira</Link>
                </small>
            </div>
        </footer>
    )
}