import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0B0F19] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 overflow-y-auto text-white">
        <DashboardHeader />
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Coding Streak"
            value="12 days"
            subtitle="Longest streak: 21 days"
          />
          <StatCard
            title="Problems Solved"
            value="23"
            subtitle="This week"
            badge="+15%"
          />
          <StatCard
            title="Weekly Goal"
            value="78%"
            subtitle="18 of 23 problems"
          />
          <StatCard
            title="Weakest Topic"
            value="Dynamic Programming"
            subtitle="Accuracy: 42%"
            badge="Needs work"
          />
        </div>
      </main>
    </div>
  );
}
