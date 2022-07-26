import React from "react";

const navButton = () => {
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

function Nav() {
    return (
        <header className='flex-row px-1'>
            <button
                className='nav-toggle'
                aria-controls='navigation'
                aria-expanded='false'
                onClick={navButton}
            >
                <span className='sr-only'>Menu</span>
            </button>
            <nav>
                <ul
                    id='navigation'
                    data-visible='false'
                    className='flex-row navigation'
                >
                    <li className='mx-2'>
                        <a href='/'>
                            <div className='name'>
                                <b>
                                    {" "}
                                    Bla<span>ke</span>Ma<span>rc</span>us
                                </b>
                            </div>
                        </a>
                    </li>
                    <li className='mx-2'>
                        <a href='/works'>Work</a>
                    </li>

                    <li className='mx-2'>
                        <a href='/contact'>Contact Me</a>
                    </li>
                </ul>
            </nav>
            <script></script>
        </header>
    );
}

export default Nav;
