import { Helmet } from 'react-helmet-async';

const siteUrl = 'https://akshay-vagle-portfolio.vercel.app';
const title = 'Akshay Singh Vagle | Digital Marketing & eCommerce Portfolio · Melbourne';
const description = 'MBA-qualified Digital Marketing and eCommerce professional in Melbourne. Google Analytics & Ads certified. Proven across retail, wholesale and digital commerce.';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Akshay Singh Vagle',
  jobTitle: 'Digital Marketing & eCommerce Professional',
  email: 'singhvagle.akshay@gmail.com',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Melbourne',
    addressCountry: 'AU',
  },
  sameAs: ['https://www.linkedin.com/in/akshayvagle/'],
};

export default function SEO() {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={`${siteUrl}/og-image.png`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
