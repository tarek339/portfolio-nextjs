import Wrapper from "../layout/wrapper";
import "../styles/index.scss";

export const metadata = {
  metadataBase: new URL(process.env.METADATA_URL),
  title: "Webentwicklung Hamburg",
  description: "Web- und Softwareentwicklung aus Hamburg",
  opgenGraph: {
    title: "Webentwicklung Hamburg",
    description: "Web- und Softwareentwicklung Hamburg",
    type: "website",
    locale: "de-DE",
    url: process.env.METADATA_URL,
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
