import React from "react";

function Nav() {
    return (
        <header className='flex-row px-1'>
            <nav>
                <ul className='flex-row'>
                    <li className='nav-item mx-2'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item mx-2'>
                        <a href='/works'>Work</a>
                    </li>
                    <li className='nav-item mx-2'>
                        <a href='/contact'>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
