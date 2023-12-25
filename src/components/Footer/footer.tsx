import React from "react"
import "./footer.scss";
export default function Footer() {
    return (
        <footer>
            <div className="company">
                &#169;{" "}
                <a href="company.html">
                    <button className="btn">2023 Quickrise Limited</button>
                </a>
            </div>
            <div className="terms-and-conditions">
                <a href="termsAndConditions.html">
                    <button className="btn">Terms and Conditions</button>
                </a>
            </div>
            <div className="privacy-and-cookies">
                <a href="privacyAndCookies.html">
                    <button className="btn">Privacy & Cookies</button>
                </a>
            </div>
        </footer>
    )
}
