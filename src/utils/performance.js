export const sendToAnalytics = ({ name, delta, value, id }) => {
  // Send metrics to Google Analytics
  if (window.gtag) {
    window.gtag('event', name, {
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${name}`, {
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      delta: Math.round(delta * 1000) / 1000,
    });
  }
};

export const trackUserInteractions = () => {
  let firstInput = true;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      // Only track first input
      if (entry.entryType === 'first-input' && firstInput) {
        sendToAnalytics({
          name: 'FID',
          delta: entry.processingStart - entry.startTime,
          value: entry.duration,
          id: entry.id,
        });
        firstInput = false;
      }
    });
  });

  observer.observe({ entryTypes: ['first-input', 'layout-shift'] });
};

export const initializePerformanceTracking = () => {
  // Track user interactions
  trackUserInteractions();

  // Track page load performance
  window.addEventListener('load', () => {
    // Get navigation timing metrics
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      sendToAnalytics({
        name: 'TTFB',
        delta: navigation.responseStart - navigation.requestStart,
        value: navigation.responseStart,
        id: 'navigation-ttfb',
      });
    }
  });
};