import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="shadow-lg">
          <Navbar />
        </header>

        <main className="flex-grow">{children}</main>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
