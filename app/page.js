import CryptoTable from "@/components/layout/CryptoTable";
import HeaderCard from "@/components/layout/HeaderCard";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mt-10">
        <div className="container mx-auto">
          <HeaderCard />
          <CryptoTable />
        </div>
      </div>
    </main>
  );
}
