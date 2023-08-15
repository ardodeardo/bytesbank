import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Users() {
  return (
    <Layout>
      <div>
        <Breadcrumb current="Users" />

        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">
          Users
        </h1>
      </div>
    </Layout>
  );
}
