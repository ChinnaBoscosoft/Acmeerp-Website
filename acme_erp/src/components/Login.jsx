import React, { useEffect, useState } from "react";
import "../css/login.css";
import Acme_logo from "../assets/icon.png";

export default function Login() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const msg = params.get("msg");
        const map = {
            "1": "Session Expired. Please Login again.",
            "2": "Successfully Logged out.",
            "3": "Invalid Username or Password.",
            "4": "Server is under maintenance.",
        };
        if (msg && map[msg]) setMessage(map[msg]);
    }, []);

    return (
        <div className="acme-login-page">
            <div className="acme-login-wrap">
                <h1 className="acme-login-title">Sign in to continue to Acme.erp Portal</h1>

                <div className="acme-login-card">
                    <img className="acme-login-logo" src={Acme_logo} alt="Acme.erp" />

                    <form
                        className="acme-login-form"
                        method="post"
                        action="https://acmeerp.org/Account/portal/Default.aspx"
                    >
                        <input
                            type="text"
                            className="acme-input"
                            name="hocode"
                            placeholder="Head Office Code"
                            required
                            autoFocus
                        />
                        <input
                            type="text"
                            className="acme-input"
                            name="username"
                            placeholder="User Name"
                            required
                        />
                        <input
                            type="password"
                            className="acme-input"
                            name="password"
                            placeholder="Password"
                            required
                        />
                        <button className="acme-submit-btn" type="submit">
                            Sign in
                        </button>

                        {message && (
                            <div id="divmessage" className="acme-login-alert" role="alert">
                                {message}
                            </div>
                        )}
                    </form>
                </div>

                <footer className="acme-login-footer">
                    <p>
                        Powered By{" "}
                        <a
                            href="http://www.boscosofttech.com"
                            title="Visit Boscosoft"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Boscosoft
                        </a>
                        | All Rights Reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}
