export default function Sidebar() {
  return (
    <div className="h-full flex flex-col justify-between p-6 text-white">
      <div>
        <h1 className="text-xl font-semibold mb-8">DevTrack</h1>
        <nav className="space-y-4 text-sm">
          <p className="text-teal-400">Dashboard</p>
          <p className="text-white/70">Projects</p>
          <p className="text-white/70">Analytics</p>
          <p className="text-white/70">Coding Logs</p>
          <p className="text-white/70">Profile</p>
        </nav>
      </div>
      <div className="text-sm text-white/60">
        John Doe<br />
        Developer
      </div>
    </div>
  );
}
