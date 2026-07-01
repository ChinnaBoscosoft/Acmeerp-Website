import React from 'react';
import '../css/Header.css';

const IconPhone = () => <span aria-hidden="true">tel</span>;
const IconMail = () => <span aria-hidden="true">@</span>;
const IconFacebook = () => <span aria-hidden="true">f</span>;
const IconX = () => <span aria-hidden="true">x</span>;
const IconLinkedIn = () => <span aria-hidden="true">in</span>;
const IconInstagram = () => <span aria-hidden="true">ig</span>;
const IconYouTube = () => <span aria-hidden="true">yt</span>;
const IconWhatsApp = () => <span aria-hidden="true">wa</span>;

const socialLinks = [
  { href: 'https://www.facebook.com/acme.erp.boscsoft/', label: 'Follow Acme ERP on Facebook', className: 'facebook', Icon: IconFacebook },
  { href: 'https://x.com/i/flow/login?redirect_after_login=%2FBoscosoft1', label: 'Follow Acme ERP on X', className: 'twitter', Icon: IconX },
  { href: 'https://www.linkedin.com/showcase/acme-erp-accounting-management-software', label: 'Follow Acme ERP on LinkedIn', className: 'linkedin', Icon: IconLinkedIn },
  { href: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Facme.erp%2F%3Fnext%3D%252F&is_from_rle', label: 'Follow Acme ERP on Instagram', className: 'instagram', Icon: IconInstagram },
  { href: 'https://www.youtube.com/@boscosofttechnologies2022', label: 'Follow Acme ERP on YouTube', className: 'youtube', Icon: IconYouTube },
  { href: 'https://www.whatsapp.com/channel/0029ValB9Yn6buMSw2fqOF2a', label: 'Follow Acme ERP on WhatsApp', className: 'whatsapp', Icon: IconWhatsApp },
];

const Header = () => {
  return (
    <header className="header-top text-white py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center contact-info">
              <div className="d-flex align-items-center me-4 mb-1">
                <span className="me-2"><IconPhone /></span>
                <span className="contact-text">+91 96 26 800 800</span>
              </div>
              <div className="d-flex align-items-center mb-1">
                <span className="me-2"><IconMail /></span>
                <a href="mailto:binfo@boscosofttech.com" className="contact-text">
                  binfo@boscosofttech.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-md-end justify-content-start">
              <span className="follow-text me-3">Follow Us On :</span>
              <div className="social-icons d-flex">
                {socialLinks.map(({ href, label, className, Icon }, index) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${className}${index < socialLinks.length - 1 ? ' me-2' : ''}`}
                    aria-label={label}
                    title={label}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
