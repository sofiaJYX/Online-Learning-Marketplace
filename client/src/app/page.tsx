import NonDashboardNavbar from "@/src/components/NonDashboardNavbar"
import Landing from "@/src/app/(nondashboard)/landing/page";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
    </div>
  );
}
