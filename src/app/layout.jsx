import Wrapper from "../layout/wrapper";
import "../styles/index.scss";

export const metadata = {
  title: "Tarek's Tech Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
