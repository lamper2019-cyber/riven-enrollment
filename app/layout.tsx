import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RIVEN — Apply for Coaching",
  description: "12-week personalized nutrition coaching. 20 lb guarantee. Apply now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
