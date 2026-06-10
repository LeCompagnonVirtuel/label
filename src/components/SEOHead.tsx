import { useEffect } from 'react';
import { company } from '../config/company';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
}

export default function SEOHead({ title, description, keywords, url }: Props) {
  useEffect(() => {
    document.title = title || company.seo.title;

    const setMeta = (name: string, content: string, property = false) => {
      let el = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description || company.seo.description);
    setMeta('keywords', (keywords || company.seo.keywords).join(', '));
    setMeta('og:title', title || company.seo.title, true);
    setMeta('og:description', description || company.seo.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', url || window.location.href, true);
    setMeta('og:site_name', company.name, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title || company.seo.title);
    setMeta('twitter:description', description || company.seo.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url || window.location.href);

    const ldJson = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: company.name,
          description: company.description,
          telephone: [company.contact.phone, company.contact.phoneSecondary],
          email: company.contact.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Yamoussoukro',
            addressRegion: 'Lacs',
            addressCountry: 'CI',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: company.contact.gps.lat,
            longitude: company.contact.gps.lng,
          },
          url: 'https://labelproci.com',
          areaServed: company.zones.map(z => ({ '@type': 'City', name: z })),
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
          ],
        },
        {
          '@type': 'Organization',
          name: company.name,
          url: 'https://labelproci.com',
        },
        ...company.services.map(s => ({
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
          provider: { '@type': 'LocalBusiness', name: company.name },
        })),
      ],
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);
  }, [title, description, keywords, url]);

  return null;
}
