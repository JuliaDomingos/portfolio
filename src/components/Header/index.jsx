import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { SwitchMode } from '../SwitchMode'

import { Nav } from '../Nav'
import './style.css'

export const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
    const [logoSrc, setLogoSrc] = useState('');

    useEffect(() => {
        setLogoSrc(isDarkMode ? '../assets/images/logo_beje.png' : '../assets/images/logo_escuro.png');
    }, [isDarkMode]);

    const handleToggleMode = (isDark) => {
        setIsDarkMode(isDark);
    };

    return (
        <header className='header__promo'>
            <SwitchMode onToggle={handleToggleMode} />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 col-6 justify-content-center align-items-center h-100 my-auto'>
                        <Link to='/'>
                            <img width={'auto'} height={'auto'} src={logoSrc} alt="Logo da empresa" className='img-fluid logo' />
                        </Link>
                    </div>
                    <div className='col-md-9 col-6 my-auto'>
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    )
}