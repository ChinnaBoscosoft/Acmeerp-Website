import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 
import "../css/login.css";
import Acme_logo from "../assets/icon.png";

const MESSAGE_MAP = {
  "1": "Session Expired. Please Login again.",
  "2": "Successfully Logged out.",
  "3": "Invalid Username or Password.",
  "4": "Server is under maintenance.",
};

export default function Login() {
  const [message, setMessage] = useState("");
  const location = useLocation(); 

  useEffect(() => {
  
    const params = new URLSearchParams(location.search || "");
    let msg = params.get("msg");

  
    if (!msg) {
      const hash = window.location.hash || "";
      const qIndex = hash.indexOf("?");
      if (qIndex !== -1) {
        const hashParams = new URLSearchParams(hash.substring(qIndex));
        msg = hashParams.get("msg");
      }
    }

    if (msg && MESSAGE_MAP[msg]) {
      setMessage(MESSAGE_MAP[msg]);
    } else {
      setMessage("");
    }
  }, [location.search]);

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
            autoComplete="on"
          >
            <input
              type="text"
              className="acme-input"
              name="hocode"
              placeholder="Head Office Code"
              required
              autoFocus
              autoComplete="organization"
            />
            <input
              type="text"
              className="acme-input"
              name="username"
              placeholder="User Name"
              required
              autoComplete="username"
            />
            <input
              type="password"
              className="acme-input"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
            <button className="acme-submit-btn" type="submit">
              Sign in
            </button>

            {message && (
              <div
                id="divmessage"
                className="acme-login-alert"
                role="status"
                aria-live="polite"
              >
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
            </a>{" "}
            | All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
