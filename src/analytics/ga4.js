import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA4_MEASUREMENT_ID;

export const initializeAnalytics = () => {
    ReactGA.initialize(TRACKING_ID);
};

export const trackPageView = (path) => {
    ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (category, action, label = '') => {
    ReactGA.event({
        category,
        action,
        label,
    });
};
