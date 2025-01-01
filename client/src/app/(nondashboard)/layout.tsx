import NonDashboardNavbar from "@/src/components/NonDashboardNavbar"
import React from "react";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        {children}
      </main>
    </div>
  );
}
