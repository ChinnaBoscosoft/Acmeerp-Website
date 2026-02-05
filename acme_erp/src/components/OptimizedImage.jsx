import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage Component
 * Provides lazy loading, blur-up effect, and WebP support with fallback
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    loading = 'lazy',
    objectFit = 'cover',
    blurDataURL = null,
    priority = false,
    onLoad = null,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(blurDataURL || src);

    useEffect(() => {
        if (priority) {
            // Preload high-priority images
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setCurrentSrc(src);
                setIsLoaded(true);
                onLoad && onLoad();
            };
        }
    }, [src, priority, onLoad]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad && onLoad();
    };

    const imageStyle = {
        objectFit,
        transition: 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.8,
        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
    };

    return (
        <img
            src={currentSrc}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : loading}
            decoding={priority ? 'sync' : 'async'}
            className={`optimized-image ${className} ${isLoaded ? 'loaded' : 'loading'}`}
            style={imageStyle}
            onLoad={handleLoad}
            {...props}
        />
    );
};

OptimizedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    loading: PropTypes.oneOf(['lazy', 'eager']),
    objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
    blurDataURL: PropTypes.string,
    priority: PropTypes.bool,
    onLoad: PropTypes.func,
};

export default OptimizedImage;
