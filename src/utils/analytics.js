// Helper utility for Meta Pixel and Analytics tracking
export const trackPixelEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', eventName, params);
    } catch (e) {
      console.warn('Meta Pixel tracking error:', e);
    }
  }
};

export const trackPixelCustom = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('trackCustom', eventName, params);
    } catch (e) {
      console.warn('Meta Pixel custom tracking error:', e);
    }
  }
};
