export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-slate-200 dark:border-slate-700"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-4 border-blue-500 dark:border-blue-400 animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
}
