import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
    // const [categories] = useState([
    //     { name: "About",},
    //     { name: "Works" },
    //     { name: "Contact" },
    // ]);
    const [currentPage, setCurrentPage] = useState("About");

    // const [contactSelected, setContactSelected] = useState(false);

    function pageChange(page) {
        if (page === "About") {
            return <About />;
        }
        if (page === "Works") {
            return <Works />;
        }
        if (page === "Contact") {
            return <Contact />;
        }
    }

    return (
        <div className="main">
            <Nav setCurrentPage={setCurrentPage} />
            {pageChange(currentPage)}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
