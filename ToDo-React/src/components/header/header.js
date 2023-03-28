import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header>
            <div onClick={() => props.changeTab(1)} className={`header-cell ${props.tab === 1 ? '' : 'inactive-header-cell'}`}>
            </div>

            <div onClick={() => props.changeTab(2)} className={`header-cell ${props.tab === 2 ? '' : 'inactive-header-cell'}`}>
            </div>

            <div onClick={() => props.changeTab(3)} className={`header-cell ${props.tab === 3 ? '' : 'inactive-header-cell'}`}>

            </div>
        </header>
    );
}

export default Header;