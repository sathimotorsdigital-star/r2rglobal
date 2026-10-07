import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.r2rglobal.in';

const DEFAULT_DESC =
  'R2R Global provides PCB design, electronic circuit development, power electronics, EV charger circuits, solar electronics and automation solutions in Ghaziabad, Uttar Pradesh.';

export default function Seo({
  title = 'R2R Global | PCB Design, Power Electronics & EV Charger Solutions',
  description = DEFAULT_DESC,
  noindex = false,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl =
      pathname === '/'
        ? `${SITE_URL}/`
        : `${SITE_URL}${pathname}`;

    // Page Title
    document.title = title;

    // Meta Description
    let descriptionMeta = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }

    descriptionMeta.setAttribute('content', description);

    // Robots
    let robotsMeta = document.querySelector(
      'meta[name="robots"]'
    );

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute(
      'content',
      noindex ? 'noindex, nofollow' : 'index, follow'
    );

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalUrl);

    // Open Graph Title
    let ogTitle = document.querySelector(
      'meta[property="og:title"]'
    );

    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute('content', title);

    // Open Graph Description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );

    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute(
        'property',
        'og:description'
      );
      document.head.appendChild(ogDescription);
    }

    ogDescription.setAttribute('content', description);

    // Open Graph URL
    let ogUrl = document.querySelector(
      'meta[property="og:url"]'
    );

    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }

    ogUrl.setAttribute('content', canonicalUrl);

    // Open Graph Site Name
    let ogSiteName = document.querySelector(
      'meta[property="og:site_name"]'
    );

    if (!ogSiteName) {
      ogSiteName = document.createElement('meta');
      ogSiteName.setAttribute(
        'property',
        'og:site_name'
      );
      document.head.appendChild(ogSiteName);
    }

    ogSiteName.setAttribute('content', 'R2R Global');

    // Open Graph Type
    let ogType = document.querySelector(
      'meta[property="og:type"]'
    );

    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }

    ogType.setAttribute('content', 'website');

    // Twitter Card
    let twitterCard = document.querySelector(
      'meta[name="twitter:card"]'
    );

    if (!twitterCard) {
      twitterCard = document.createElement('meta');
      twitterCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twitterCard);
    }

    twitterCard.setAttribute('content', 'summary');

    // Twitter Title
    let twitterTitle = document.querySelector(
      'meta[name="twitter:title"]'
    );

    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }

    twitterTitle.setAttribute('content', title);

    // Twitter Description
    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );

    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute(
        'name',
        'twitter:description'
      );
      document.head.appendChild(twitterDescription);
    }

    twitterDescription.setAttribute(
      'content',
      description
    );
  }, [title, description, pathname, noindex]);

  return null;
}
