import { Link, useLocation } from 'react-router-dom'

import './style.css'

export const LinkNav = (props) => {
    const localizacao = useLocation();

    return (
        <li title={props.text}>
            <Link to={props.url} className={`cta ${localizacao.pathname === props.url ? 'active' : ''}`}>
                <span className="hover-underline-animation">
                    {props.text}
                </span>
            </Link>
        </li>
    )
}