export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${process.env.METADATA_URL}sitemap.xml`,
  };
}
