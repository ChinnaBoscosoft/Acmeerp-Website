import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * SEO Component
 * Dynamically updates meta tags for each page
 */
const SEO = ({
    title = 'Acme.erp - Institute ERP for Not-for-Profit Organisations',
    description = 'Comprehensive ERP solution for religious and non-profit organizations. Streamline financial management, accounting, and operations with cloud-based software.',
    keywords = 'accounting software, ERP software, non-profit ERP, financial management',
    ogImage = 'https://acmeerp.org/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl = null,
    noindex = false,
}) => {
    const location = useLocation();
    const baseUrl = 'https://acmeerp.org';
    const currentUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update document title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (name, content, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${name}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Primary meta tags
        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

        // Open Graph tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:site_name', 'Acme ERP', true);

        // Twitter Card tags
        updateMetaTag('twitter:card', twitterCard);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', currentUrl);

        // Send page view to Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'G-FXDZ6ZE3NY', {
                page_path: location.pathname,
                page_title: title,
            });
        }

        // Send page view to Microsoft Clarity
        if (typeof window !== 'undefined' && window.clarity) {
            window.clarity('set', 'page', location.pathname);
        }
    }, [title, description, keywords, ogImage, ogType, twitterCard, currentUrl, location.pathname, noindex]);

    return null; // This component doesn't render anything
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    ogImage: PropTypes.string,
    ogType: PropTypes.string,
    twitterCard: PropTypes.string,
    canonicalUrl: PropTypes.string,
    noindex: PropTypes.bool,
};

export default SEO;
