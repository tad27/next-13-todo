import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Next 13 TODO",
  description: "A simple Todo app created with Next 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-10 flex flex-col h-screen">
        <main className="flex-grow">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
