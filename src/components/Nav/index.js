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

function Nav(props) {
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
                    <li data-active='false' className='mx-2 nav-status'>
                        <span onClick={() => props.setCurrentPage("About")}>
                            About
                        </span>
                    </li>

                    <li data-active='false' className='mx-2 nav-status'>
                        <span onClick={() => props.setCurrentPage("Works")}>
                            Work
                        </span>
                    </li>
                    <li data-active='false' className='mx-2 nav-status'>
                        <span onClick={() => props.setCurrentPage("Contact")}>
                            Contact
                        </span>
                    </li>
                    <li  data-active='false' className='mx-2 nav-status'>
                        <a href="">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
