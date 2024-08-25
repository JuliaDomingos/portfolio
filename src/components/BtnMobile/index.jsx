import './style.css'

export const BtnMobile = (props) => {
    const handleToggle = () => {
        props.parametroSetIsOpen(!props.parametroIsOpen);
    };

    return (
        <label className="burger d-block d-md-none" htmlFor="burger">
            <input type="checkbox" id="burger" onClick={handleToggle} />
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}