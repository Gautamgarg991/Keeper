import React from "react"

function Footer(){
    const currYear = new Date().getFullYear();
    return <footer>
        Copyright © {currYear}
    </footer>
}
export default Footer;