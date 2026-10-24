import { useEffect } from 'react';
import { COMPANY_CONFIG } from '../../config/company';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'LocalBusiness' | 'Service' | 'FAQPage' | 'WebPage';
  schemaData?: Record<string, unknown>;
  breadcrumbs?: { name: string; url: string }[];
}

export function SEOHead({
  title,
  description,
  canonicalPath = '/',
  schemaType = 'LocalBusiness',
  schemaData,
  breadcrumbs,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | ${COMPANY_CONFIG.shortName}`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', `${title} | ${COMPANY_CONFIG.shortName}`);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://socalsolarclean.com';
    canonical.setAttribute('href', `${currentOrigin}${canonicalPath}`);

    // Inject Schema.org JSON-LD
    const scriptId = 'seo-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: COMPANY_CONFIG.name,
      legalName: COMPANY_CONFIG.legalName,
      url: currentOrigin,
      telephone: COMPANY_CONFIG.phone,
      email: COMPANY_CONFIG.email,
      description: COMPANY_CONFIG.tagline,
      areaServed: [
        'Southern California',
        'Orange County',
        'Los Angeles County',
        'San Diego County',
        'Riverside County',
        'San Bernardino County',
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '16:00',
        },
      ],
    };

    let structuredPayload: Record<string, unknown> = baseLocalBusinessSchema;

    if (schemaType === 'Service' && schemaData) {
      structuredPayload = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        provider: baseLocalBusinessSchema,
        ...schemaData,
      };
    } else if (schemaData) {
      structuredPayload = {
        '@context': 'https://schema.org',
        '@type': schemaType,
        ...schemaData,
      };
    }

    // Add breadcrumb list schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${currentOrigin}${crumb.url}`,
        })),
      };

      scriptTag.textContent = JSON.stringify([structuredPayload, breadcrumbSchema]);
    } else {
      scriptTag.textContent = JSON.stringify(structuredPayload);
    }
  }, [title, description, canonicalPath, schemaType, schemaData, breadcrumbs]);

  return null;
}
