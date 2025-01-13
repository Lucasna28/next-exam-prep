export default function Skeleton() {
  return (
    <div className="animate-pulse space-y-8 p-4">
      {/* Header skeleton */}
      <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-lg" />

      {/* Text blocks skeleton */}
      <div className="space-y-4">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6" />
      </div>

      {/* Code block skeleton */}
      <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg" />

      {/* List skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5" />
      </div>
    </div>
  );
}
