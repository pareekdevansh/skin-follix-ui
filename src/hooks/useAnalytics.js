import { useEffect } from 'react';
import { trackPageView } from '../analytics/ga4';

const useAnalytics = () => {
    const location = window.location;

    useEffect(() => {
        trackPageView(location.pathname + location.search);
    }, [location]);
};

export default useAnalytics;
