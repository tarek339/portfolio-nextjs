import Wrapper from "../layout/wrapper";
import "../styles/index.scss";

export const metadata = {
  metadataBase: new URL(process.env.METADATA_URL),
  title: "Webentwicklung Hamburg",
  description: `Als erfahrener Webentwickler aus Hamburg spezialisiere 
  ich mich auf die Entwicklung von serverseitigen Webseiten und Webanwendungen. 
  Meine Expertise liegt insbesondere in der Verwendung von React.js, Next.js, JavaScript, TypeScript und Node.js. 
  Mit meiner Leidenschaft für innovative Technologien und mein fundiertes Fachwissen arbeite ich daran, 
  benutzerfreundliche und funktionale Lösungen für meine Kunden zu entwickeln.`,
  openGraph: {
    title: "Webentwicklung Hamburg",
    description: `Als erfahrener Webentwickler aus Hamburg spezialisiere 
  ich mich auf die Entwicklung von serverseitigen Webseiten und Webanwendungen. 
  Meine Expertise liegt insbesondere in der Verwendung von React.js, Next.js, JavaScript, TypeScript und Node.js. 
  Mit meiner Leidenschaft für innovative Technologien und mein fundiertes Fachwissen arbeite ich daran, 
  benutzerfreundliche und funktionale Lösungen für meine Kunden zu entwickeln.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
  twitter: {
    creator: "@Tarek25986815",
    site: "@Tarek25986815",
    title: "Webentwicklung Hamburg",
    description: `Als erfahrener Webentwickler aus Hamburg spezialisiere 
  ich mich auf die Entwicklung von serverseitigen Webseiten und Webanwendungen. 
  Meine Expertise liegt insbesondere in der Verwendung von React.js, Next.js, JavaScript, TypeScript und Node.js. 
  Mit meiner Leidenschaft für innovative Technologien und mein fundiertes Fachwissen arbeite ich daran, 
  benutzerfreundliche und funktionale Lösungen für meine Kunden zu entwickeln.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
