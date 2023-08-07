import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <p className="mb-2 text-sm font-semibold text-blue-600">
          Starter Pages & Examples
        </p>
        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Application Layout: Sidebar & Header using Tailwind CSS
        </h1>
        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">
          This is a simple application layout with sidebar and header examples
          using Tailwind CSS.
        </p>
      </div>
    </Layout>
  );
}
