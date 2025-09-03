import "./globals.css";

export const metadata = {
  title: "Happy Birthday Rajesh 🎉",
  description: "Special Birthday Website for Rajesh by DeveloperAshish",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen text-white font-sans">
        {children}
      </body>
    </html>
  );
}
