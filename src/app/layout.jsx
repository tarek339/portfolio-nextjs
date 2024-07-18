import "../styles/index.scss";

const title = "Web & Software Development Hamburg";
const description = `Als erfahrener Web- und Softwareentwickler mit Sitz in Hamburg bin ich in der Lage, 
  Anwendungen jeglicher Art mit den neuesten Technologien wie JavaScript, React, Next.js und Node.js zu entwickeln. 
  Meine Expertise erstreckt sich über verschiedene Plattformen und ich strebe stets danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen, die das Leben der Menschen in meiner Umgebung verbessern.`;
const type = "website";
const locale = "de-DE";
const siteName = "Tarek's Tech Solutions";
const creator = "@Tarek25986815";

export const metadata = {
  metadataBase: new URL(process.env.METADATA_URL),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: type,
    locale: locale,
    url: process.env.METADATA_URL,
    siteName: siteName,
  },
  twitter: {
    creator: creator,
    site: creator,
    title: title,
    description: description,
    type: type,
    locale: locale,
    url: process.env.METADATA_URL,
    siteName: siteName,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
