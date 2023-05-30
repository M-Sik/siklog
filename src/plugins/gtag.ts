import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const GA_TRACKING_ID = `${process.env.NEXT_PUBLIC_GA_ID}`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams,
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};

// route가 변경될 때 gtag에서
export const useGtag = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathName + searchParams.toString();
    pageview(url);
    // console.log('-----url-----', url);
  }, [pathName, searchParams]);
};
