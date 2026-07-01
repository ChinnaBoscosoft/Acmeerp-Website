import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Dynamically updates meta tags for each page
 */
const SEO = ({
    title = 'Acme.erp - Institute ERP for Not-for-Profit Organisations',
    description = 'Comprehensive ERP solution for religious and non-profit organizations. Streamline financial management, accounting, and operations with cloud-based software.',
    keywords = 'accounting software, ERP software, non-profit ERP, financial management',
    ogImage = 'https://acmeerp.org/assets/og-image.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl = null,
    schemaMarkup = null,
    noindex = false,
}) => {
    const location = useLocation();
    const baseUrl = 'https://acmeerp.org';
    const currentUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        document.title = title;

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

        const updateJsonLd = (schema) => {
            if (!schema) return;
            let script = document.querySelector('script[type="application/ld+json"][data-react-seo]');
            if (!script) {
                script = document.createElement('script');
                script.type = 'application/ld+json';
                script.setAttribute('data-react-seo', 'true');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(schema);
        };

        updateMetaTag('description', description);
        updateMetaTag('keywords', keywords);
        updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:image', ogImage, true);
        updateMetaTag('og:url', currentUrl, true);
        updateMetaTag('og:type', ogType, true);
        updateMetaTag('og:site_name', 'Acme ERP', true);

        updateMetaTag('twitter:card', twitterCard);
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', ogImage);

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', currentUrl);

        updateJsonLd(schemaMarkup);

        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'G-FXDZ6ZE3NY', {
                page_path: location.pathname,
                page_title: title,
            });
        }

        if (typeof window !== 'undefined' && window.clarity) {
            window.clarity('set', 'page', location.pathname);
        }
    }, [title, description, keywords, ogImage, ogType, twitterCard, currentUrl, location.pathname, noindex, schemaMarkup]);

    return null;
};

export default SEO;
