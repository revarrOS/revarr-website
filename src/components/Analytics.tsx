import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
    fbq?: (...args: any[]) => void
    _fbq?: any
    linkedin_partner_id?: string
    _linkedin_data_partner_ids?: string[]
  }
}

export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
      })
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }

    trackEvent('page_view', {
      page_path: location.pathname,
      page_title: document.title,
    })
  }, [location])

  return null
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }

  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params)
  }

  console.log('Event tracked:', eventName, params)
}

export const trackConversion = (conversionType: 'signup' | 'purchase' | 'lead', value?: number) => {
  trackEvent(conversionType, {
    value: value || 0,
    currency: 'GBP',
  })

  if (typeof window.fbq === 'function') {
    window.fbq('track', conversionType === 'purchase' ? 'Purchase' : 'Lead', {
      value: value || 0,
      currency: 'GBP',
    })
  }
}

export function initializeAnalytics() {
  if (typeof window === 'undefined') return

  const gaScript = document.createElement('script')
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
  gaScript.async = true
  document.head.appendChild(gaScript)

  window.dataLayer = window.dataLayer || []
  window.gtag = function() {
    window.dataLayer?.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', 'G-XXXXXXXXXX', {
    send_page_view: false,
  })

  const fbScript = document.createElement('script')
  fbScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
    fbq('track', 'PageView');
  `
  document.head.appendChild(fbScript)

  const linkedinScript = document.createElement('script')
  linkedinScript.innerHTML = `
    _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  `
  document.head.appendChild(linkedinScript)

  const linkedinTagScript = document.createElement('script')
  linkedinTagScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
  linkedinTagScript.async = true
  document.head.appendChild(linkedinTagScript)
}