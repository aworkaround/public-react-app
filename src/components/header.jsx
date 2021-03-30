import React from 'react';

import favicon from './../icons/favicon.svg';


const Header = () => {
    return (
        <header id="header">
            <a href="#" className="logo" title="Home page"><img src={ favicon } alt='T'/>&nbsp;<strong>TECHAWARE</strong></a>
            <ul className="icons">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCIezQtn9M-E0sF2yu-p5U4Q/" className="icon brands fa-youtube" title="YouTube channel"> </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://m.me/techaware.in" title="Text me on Facebook" className="icon brands fa-facebook-messenger"> </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/techawarein" title="Facebook page" className="icon brands fa-facebook-f"> </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/techaware.in" title="Instagram" className="icon brands fa-instagram"> </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:contact@techaware.in" title="Email contact@techaware.in" className="icon solid fa-envelope"> </a>
                </li>
            </ul>
        </header>
);
}

export default Header;