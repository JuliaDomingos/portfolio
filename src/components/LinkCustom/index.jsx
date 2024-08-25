import { Link } from 'react-router-dom'
import './style.css'

export const LinkCustom = (props) => {
    return (
        <li title={typeof props.text !== 'string' ? props.text.textContent : props.text}>
            <Link aria-label={props.aria === '' ? '' : props.aria} target={props.alvo} to={props.url} title={typeof props.text !== 'string' ? props.text.textContent : props.text}>
                {props.text}
            </Link>
        </li>
    )
}