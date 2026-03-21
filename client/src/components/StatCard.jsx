export default function StatCard({ title, value, subtitle, badge }) {
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
      {/* Optional badge */}
      {badge && (
        <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400">
          {badge}
        </span>
      )}

      <p className="text-sm text-white/60 mb-2">{title}</p>

      <h3 className="text-3xl font-semibold mb-1">{value}</h3>

      {subtitle && (
        <p className="text-sm text-white/40">{subtitle}</p>
      )}
    </div>
  );
}
