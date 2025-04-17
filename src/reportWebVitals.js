const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      // Core Web Vitals
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getLCP(onPerfEntry); // Largest Contentful Paint
      getINP(onPerfEntry); // Interaction to Next Paint
      
      // Additional metrics
      getFID(onPerfEntry); // First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte

      // Send to Google Analytics if available
      if (window.gtag) {
        window.gtag('send', 'event', {
          eventCategory: 'Web Vitals',
          eventAction: 'CLS',
          eventValue: Math.round(getCLS() * 1000),
          nonInteraction: true,
        });
      }
    });
  }
};

export default reportWebVitals;
