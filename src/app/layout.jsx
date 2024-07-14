import Head from "next/head";
import Wrapper from "../layout/wrapper";
import "../styles/index.scss";

export const metadata = {
  metadataBase: new URL(process.env.METADATA_URL),
  title: "Webentwicklung Hamburg",
  description: `Als Web- und Softwareentwickler mit Sitz in Hamburg, strebe ich danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen. Meine Leidenschaft liegt darin, 
  hervorragende Websites und Software zu entwickeln, die das Leben der Menschen in meiner Umgebung verbessert.`,
  openGraph: {
    title: "Webentwicklung Hamburg",
    description: `Als Web- und Softwareentwickler mit Sitz in Hamburg, strebe ich danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen. Meine Leidenschaft liegt darin, 
  hervorragende Websites und Software zu entwickeln, die das Leben der Menschen in meiner Umgebung verbessert.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
  twitter: {
    creator: "@Tarek25986815",
    site: "@Tarek25986815",
    title: "Webentwicklung Hamburg",
    description: `Als Web- und Softwareentwickler mit Sitz in Hamburg, strebe ich danach, 
  saubere und benutzerfreundliche Erlebnisse zu schaffen. Meine Leidenschaft liegt darin, 
  hervorragende Websites und Software zu entwickeln, die das Leben der Menschen in meiner Umgebung verbessert.`,
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
    siteName: "Tarek's Tech Solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
