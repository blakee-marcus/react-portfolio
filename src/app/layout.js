import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blake Marcus | Full Stack Developer',
  description: 'Portfolio site for Blake Marcus.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <main className='min-h-screen pb-3'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
