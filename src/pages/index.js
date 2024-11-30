import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to My Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/blog/javascript" className="p-4 bg-blue-100 rounded-lg shadow hover:shadow-md">
          <h2 className="text-2xl font-semibold">JavaScript Series</h2>
          <p>Explore tutorials on JavaScript concepts.</p>
        </Link>
        <Link href="/blog/react" className="p-4 bg-green-100 rounded-lg shadow hover:shadow-md">
          <h2 className="text-2xl font-semibold">React Series</h2>
          <p>Deep dive into React best practices.</p>
        </Link>
      </div>
    </Layout>
  );
}
