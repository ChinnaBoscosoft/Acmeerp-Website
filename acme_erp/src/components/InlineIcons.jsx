import React from 'react';

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const SvgIcon = ({ children, size = 20, viewBox = '0 0 24 24', className, ...props }) => (
  <svg
    aria-hidden="true"
    viewBox={viewBox}
    width={size}
    height={size}
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const PhoneIcon = ({ size = 16, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3a2 2 0 0 1-2 2C10.82 21 3 13.18 3 6a2 2 0 0 1 2-2Z" />
  </SvgIcon>
);

export const EnvelopeIcon = ({ size = 16, className }) => (
  <SvgIcon size={size} className={className}>
    <rect {...baseProps} x="3" y="5" width="18" height="14" rx="2" />
    <path {...baseProps} d="m4 7 8 6 8-6" />
  </SvgIcon>
);

export const UserIcon = ({ size = 16, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path {...baseProps} d="M5 20a7 7 0 0 1 14 0" />
  </SvgIcon>
);

export const MenuIcon = ({ size = 24, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="M4 7h16M4 12h16M4 17h16" />
  </SvgIcon>
);

export const CloseIcon = ({ size = 24, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="m6 6 12 12M18 6 6 18" />
  </SvgIcon>
);

export const ArrowUpIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="M12 19V5" />
    <path {...baseProps} d="m6 11 6-6 6 6" />
  </SvgIcon>
);

export const ArrowLeftIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className}>
    <path {...baseProps} d="M19 12H5" />
    <path {...baseProps} d="m11 18-6-6 6-6" />
  </SvgIcon>
);

export const FacebookIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M13.5 22v-8.1h2.7l.4-3.2h-3.1V8.7c0-.9.2-1.6 1.5-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.2H7.3v3.2h2.7V22h3.5Z" />
  </SvgIcon>
);

export const TwitterIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.7 21H3.6l7.3-8.4L1.5 3h6.2l4.3 5.8L18.9 3Zm-1.1 16h1.7L6.8 4.9H5.1L17.8 19Z" />
  </SvgIcon>
);

export const LinkedinIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M6.9 8.5H3.7V20h3.2V8.5ZM5.3 3A1.9 1.9 0 1 0 5.3 6.8 1.9 1.9 0 0 0 5.3 3Zm14.9 9.8c0-3-1.6-4.4-3.9-4.4-1.8 0-2.6 1-3.1 1.7v-1.5H10V20h3.2v-6.4c0-.3 0-.7.1-1 .3-.7 1-1.5 2.2-1.5 1.6 0 2.2 1.2 2.2 3V20H21v-7.2Z" />
  </SvgIcon>
);

export const InstagramIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4A4.8 4.8 0 0 1 16.2 21H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 1.8A3 3 0 0 0 4.8 7.8v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3V7.8a3 3 0 0 0-3-3H7.8Zm8.9 1.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7.3A4.7 4.7 0 1 1 12 16.7 4.7 4.7 0 0 1 12 7.3Zm0 1.8A2.9 2.9 0 1 0 12 14.9 2.9 2.9 0 0 0 12 9.1Z" />
  </SvgIcon>
);

export const YoutubeIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.4V8.6l5.7 3.4-5.7 3.4Z" />
  </SvgIcon>
);

export const WhatsappIcon = ({ size = 18, className }) => (
  <SvgIcon size={size} className={className} viewBox="0 0 24 24">
    <path fill="currentColor" d="M20 11.9A8 8 0 0 0 6.3 6.3a8 8 0 0 0-1.2 9.4L4 20l4.4-1.1a8 8 0 0 0 3.6.8h0A8 8 0 0 0 20 11.9Zm-8 6.4a6.4 6.4 0 0 1-3.3-.9l-.2-.1-2.6.7.7-2.5-.2-.3a6.3 6.3 0 1 1 5.6 3.1Zm3.5-4.7c-.2-.1-1.2-.6-1.4-.6-.2-.1-.3-.1-.5.1l-.4.6c-.1.1-.2.2-.4.1a5.2 5.2 0 0 1-2.5-2.2c-.1-.2 0-.3.1-.4l.3-.4.2-.4c.1-.1 0-.3 0-.4l-.6-1.4c-.1-.2-.2-.2-.4-.2h-.3c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.5 2.4 3.7 3.2.5.2.9.3 1.2.4.5.1 1 .1 1.4.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3Z" />
  </SvgIcon>
);
