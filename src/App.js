import React from "react"
import NavBar from "./components/nav"
import Logo from "./components/logo"
import SearchBar from "./components/searchBar"
import Button from "./components/button"
import Language from "./components/language"
import Footer from "./components/footer"
import "./styles.css"

export default function App() {
    return (
        <div>
            <NavBar />
            <Logo />
            <SearchBar />
            <div className="button">
                <Button text="Google Search"/>
                <Button text="I'm Feeling Lucky"/>
            </div>
            <Language />
            <Footer />
        </div>
    )
    
}