import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveen Kalansooriya",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
