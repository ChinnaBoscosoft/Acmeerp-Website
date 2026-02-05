/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals (LCP, FID, CLS) and sends to Google Analytics
 */

// Function to send metrics to Google Analytics
const sendToAnalytics = ({ name, delta, value, id }) => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', name, {
            event_category: 'Web Vitals',
            event_label: id,
            value: Math.round(name === 'CLS' ? delta * 1000 : delta),
            non_interaction: true,
            metric_value: value,
            metric_delta: delta,
        });

        console.log(`[Web Vitals] ${name}:`, {
            value: Math.round(value),
            delta: Math.round(delta),
            rating: getRating(name, value)
        });
    }
};

// Get performance rating based on thresholds
const getRating = (name, value) => {
    const thresholds = {
        LCP: { good: 2500, needsImprovement: 4000 },
        FID: { good: 100, needsImprovement: 300 },
        CLS: { good: 0.1, needsImprovement: 0.25 },
        FCP: { good: 1800, needsImprovement: 3000 },
        TTFB: { good: 800, needsImprovement: 1800 },
    };

    const threshold = thresholds[name];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
};

// Initialize Web Vitals tracking
export const initWebVitals = () => {
    if (typeof window === 'undefined') return;

    // Dynamically import web-vitals library
    import('web-vitals').then(({ onCLS, onFID, onLCP, onFCP, onTTFB }) => {
        onCLS(sendToAnalytics);
        onFID(sendToAnalytics);
        onLCP(sendToAnalytics);
        onFCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
    }).catch(err => {
        console.warn('[Web Vitals] Failed to load web-vitals library:', err);
    });
};

// Report custom performance metrics
export const reportPerformance = (metricName, value, additionalData = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: metricName,
            value: Math.round(value),
            ...additionalData,
        });
    }
};

// Measure and report page load time
export const reportPageLoad = () => {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            reportPerformance('page_load_time', pageLoadTime);
            reportPerformance('server_response_time', connectTime);
            reportPerformance('dom_render_time', renderTime);

            console.log('[Performance Metrics]', {
                pageLoadTime: `${pageLoadTime}ms`,
                connectTime: `${connectTime}ms`,
                renderTime: `${renderTime}ms`,
            });
        }, 0);
    });
};

// Initialize all performance monitoring
export const initPerformanceMonitoring = () => {
    initWebVitals();
    reportPageLoad();
};

export default initPerformanceMonitoring;
