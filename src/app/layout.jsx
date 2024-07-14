import "../styles/index.scss";

export const metadata = {
  metadataBase: new URL(process.env.METADATA_URL),
  title: "Web- und Softwareentwicklung Hamburg",
  description: `Als erfahrener Web- und Softwareentwickler mit Sitz in Hamburg bin ich in der Lage, 
  Anwendungen jeglicher Art mit den neuesten Technologien wie JavaScript, React, Next.js und Node.js zu entwickeln. 
  Meine Expertise erstreckt sich über verschiedene Plattformen und ich strebe stets danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen, die das Leben der Menschen in meiner Umgebung verbessern.`,
  openGraph: {
    title: "Web- und Softwareentwicklung Hamburg",
    description: `Als erfahrener Web- und Softwareentwickler mit Sitz in Hamburg bin ich in der Lage, 
  Anwendungen jeglicher Art mit den neuesten Technologien wie JavaScript, React, Next.js und Node.js zu entwickeln. 
  Meine Expertise erstreckt sich über verschiedene Plattformen und ich strebe stets danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen, die das Leben der Menschen in meiner Umgebung verbessern.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
  twitter: {
    creator: "@Tarek25986815",
    site: "@Tarek25986815",
    title: "Web- und Softwareentwicklung Hamburg",
    description: `Als erfahrener Web- und Softwareentwickler mit Sitz in Hamburg bin ich in der Lage, 
  Anwendungen jeglicher Art mit den neuesten Technologien wie JavaScript, React, Next.js und Node.js zu entwickeln. 
  Meine Expertise erstreckt sich über verschiedene Plattformen und ich strebe stets danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen, die das Leben der Menschen in meiner Umgebung verbessern.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
