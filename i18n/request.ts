import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      ...(await import(`../messages/${locale}/common.json`)).default,
      homepage: (await import(`../messages/${locale}/homepage.json`)).default,
      pricing: (await import(`../messages/${locale}/pricing.json`)).default,
      docs: (await import(`../messages/${locale}/docs.json`)).default,
      docsDetail: (await import(`../messages/${locale}/docs-detail.json`)).default,
      landing: (await import(`../messages/${locale}/landing.json`)).default,
      metadata: (await import(`../messages/${locale}/metadata.json`)).default,
    },
  };
});
