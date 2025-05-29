import React from "react";
import './Footer.css'

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <p className="footer">
                <b>© {year} Bakhtiyor Alimov. All rights reserved. <br/></b>
                Thanks for visiting my page!
            </p>
        </div>
    )
}