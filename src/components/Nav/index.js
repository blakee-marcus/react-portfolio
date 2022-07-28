import React from "react";

const mobileNavButton = () => {
    const nav = document.querySelector(".navigation");
    const navToggle = document.querySelector(".nav-toggle");

    navToggle.addEventListener("click", () => {
        const visible = nav.getAttribute("data-visible");

        if (visible === "false") {
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
        } else if (visible === "true") {
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
};

const setActive = () => {
    const navItem = document.querySelector(".nav-status");

    navItem.addEventListener("click", () => {
        const active = navItem.getAttribute("data-active");

        if (active === "false") {
            navItem.setAttribute("data-active", true);
        } else if (active === "true") {
            navItem.setAttribute("data-active", false);
        }
    });
};

function Nav() {
    return (
        <header className='flex-row px-1'>
            <button
                className='nav-toggle'
                aria-controls='navigation'
                aria-expanded='false'
                onClick={mobileNavButton}
            >
                <span className='sr-only'>Menu</span>
            </button>
            <nav>
                <ul
                    id='navigation'
                    data-visible='false'
                    className='flex-row navigation'
                >
                    <li data-active='false' className='mx-2 nav-status' onClick={setActive}>
                        <a href='/' >
                            About
                        </a>
                    </li>
                    <li data-active='false' className='mx-2 nav-status' onClick={setActive}>
                        <a href='/works'>
                            Work
                        </a>
                    </li>

                    <li data-active='false' className='mx-2 nav-status' onClick={setActive}>
                        <a href='/contact'>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
            <script></script>
        </header>
    );
}

export default Nav;
