import { trackEvent } from './ga4';

export const trackCallEvent = () => {
    trackEvent('Button', 'click', 'Call Button');
};

export const trackLocationClick = () => {
    console.log('location button')
    trackEvent('Button', 'click', 'Location Icon');
};

export const trackEmailClick = () => {
    trackEvent('Button', 'click', 'Email Icon');
}

export const trackSearchEvent = (searchTerm) => {
    trackEvent('Search', 'Search Triggered', searchTerm);
};

export const trackFilterEvent = (filterName) => {
    trackEvent('Filter', 'Filter Applied', filterName);
};
export { initializeAnalytics, trackPageView } from './ga4';