import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
    const [currentPage, setCurrentPage] = useState("About");
    document.title = `${currentPage} | Blake Marcus Portfolio`
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
        </div>
    );
}

export default App;
