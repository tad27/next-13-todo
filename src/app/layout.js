import "./globals.css";

export const metadata = {
  title: "Next 13 TODO",
  description: "A simple Todo app created with Next 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
