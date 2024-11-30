import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4 max-w-lg mx-auto">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </Layout>
  );
}
