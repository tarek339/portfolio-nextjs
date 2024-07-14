export default function sitemap() {
  return [
    {
      url: process.env.METADATA_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
