import "../styles/globals.css";

export const metadata = {
  title: "Kaimono",
  description: "E commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
