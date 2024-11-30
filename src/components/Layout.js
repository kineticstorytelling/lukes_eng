import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <header className="bg-white shadow">
      <nav className="container mx-auto p-4 flex justify-between">
        <Link href="/" className="text-xl font-bold">My Blog</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </nav>
    </header>
    <main className="flex-grow container mx-auto p-6">{children}</main>
    <footer className="bg-gray-900 text-white text-center p-4">
      © 2024 My Blog
    </footer>
  </div>
);

export default Layout;
