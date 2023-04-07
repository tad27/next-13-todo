import "./globals.css";

export const metadata = {
  title: "Next 13 TODO",
  description: "A simple Todo app created with Next 13 and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-1">
        <main className="min-h-[750px]">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
