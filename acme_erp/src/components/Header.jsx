import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  WhatsappIcon,
} from './InlineIcons.jsx';
import '../css/Header.css';

const socialLinks = [
  { href: 'https://www.facebook.com/acme.erp.boscsoft/', label: 'Facebook', Icon: FacebookIcon },
  { href: 'https://x.com/i/flow/login?redirect_after_login=%2FBoscosoft1', label: 'X', Icon: TwitterIcon },
  { href: 'https://www.linkedin.com/showcase/acme-erp-accounting-management-software', label: 'LinkedIn', Icon: LinkedinIcon },
  { href: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Facme.erp%2F%3Fnext%3D%252F&is_from_rle', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.youtube.com/@boscosofttechnologies2022', label: 'YouTube', Icon: YoutubeIcon },
  { href: 'https://www.whatsapp.com/channel/0029ValB9Yn6buMSw2fqOF2a', label: 'WhatsApp', Icon: WhatsappIcon },
];

const Header = () => {
  return (
    <header className="header-top text-white py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center contact-info">
              <div className="d-flex align-items-center me-4 mb-1">
                <PhoneIcon className="me-2" size={16} />
                <span className="contact-text">+91 96 26 800 800</span>
              </div>
              <div className="d-flex align-items-center mb-1">
                <EnvelopeIcon className="me-2" size={16} />
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
                {socialLinks.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link me-2" aria-label={label}>
                    <Icon size={16} />
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
