export default function sitemap() {
  const baseUrl = 'https://786.at';

  // Alle Routen mit Priorität und Änderungsfrequenz
    return [
      {
          url: baseUrl,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 1.0,
      },
      {
          url: `${baseUrl}/services`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.9,
      },
      {
          url: `${baseUrl}/about`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
      },
      {
          url: `${baseUrl}/contact`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
      },
      {
          url: `${baseUrl}/appointment`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.9,
      },
      {
          url: `${baseUrl}/imprint`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 0.3,
      },
      {
          url: `${baseUrl}/privacy`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 0.3,
      },
  ];
}
