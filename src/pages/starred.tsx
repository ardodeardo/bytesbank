import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Starred() {
  return (
    <Layout>
      <div>
        <Breadcrumb current="Starred" />

        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Starred Files
        </h1>
      </div>
    </Layout>
  );
}
