import CodeBlock from "@/components/CodeBlock";

export default function InputPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Input Component</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Moderne og brugervenlige input komponenter med fokus på tilgængelighed
        og UX.
      </p>

      <section className="mt-8">
        <h2 className="text-base">Floating Label Input</h2>
        <div className="my-4">
          <div className="relative">
            <input
              type="text"
              id="floating-input"
              className="peer w-full px-4 py-2 pt-6 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 placeholder-transparent"
              placeholder="Indtast navn"
            />
            <label
              htmlFor="floating-input"
              className="absolute left-4 top-2 text-xs text-gray-500 transition-all 
                       peer-placeholder-shown:text-base peer-placeholder-shown:top-3 
                       peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
            >
              Navn
            </label>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="relative">
  <input
    type="text"
    id="floating-input"
    className="peer w-full px-4 py-2 pt-6 border border-gray-300 dark:border-gray-700 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 
             placeholder-transparent"
    placeholder="Indtast navn"
  />
  <label
    htmlFor="floating-input"
    className="absolute left-4 top-2 text-xs text-gray-500 transition-all 
             peer-placeholder-shown:text-base peer-placeholder-shown:top-3 
             peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
  >
    Navn
  </label>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Search Input med Icon</h2>
        <div className="my-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Søg..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800
                       transition-all duration-200 ease-in-out
                       hover:border-gray-400 dark:hover:border-gray-600"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="relative">
  <input
    type="search"
    placeholder="Søg..."
    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800
             transition-all duration-200 ease-in-out
             hover:border-gray-400 dark:hover:border-gray-600"
  />
  <svg
    className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Input med Validation</h2>
        <div className="my-4 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="eksempel@email.dk"
                className="w-full pl-4 pr-10 py-2 border-2 border-green-500 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-800"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="mt-1 text-sm text-green-500">Email er gyldig</p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-2 border-2 border-red-500 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <p className="mt-1 text-sm text-red-500">
                Password skal være mindst 8 tegn langt
              </p>
            </div>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`// Success State
<div className="space-y-2">
  <label className="block text-sm font-medium">Email</label>
  <div className="relative">
    <input
      type="email"
      placeholder="eksempel@email.dk"
      className="w-full pl-4 pr-10 py-2 border-2 border-green-500 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-800"
    />
    <svg className="absolute right-3 top-2.5 h-5 w-5 text-green-500">
      {/* Check icon */}
    </svg>
    <p className="mt-1 text-sm text-green-500">Email er gyldig</p>
  </div>
</div>

// Error State
<div className="space-y-2">
  <label className="block text-sm font-medium">Password</label>
  <div className="relative">
    <input
      type="password"
      placeholder="••••••••"
      className="w-full pl-4 pr-10 py-2 border-2 border-red-500 rounded-md 
               focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-slate-800"
    />
    <svg className="absolute right-3 top-2.5 h-5 w-5 text-red-500">
      {/* X icon */}
    </svg>
    <p className="mt-1 text-sm text-red-500">
      Password skal være mindst 8 tegn langt
    </p>
  </div>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Input Groups</h2>
        <div className="my-4">
          <div className="flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 text-gray-500 text-sm">
              https://
            </span>
            <input
              type="text"
              placeholder="din-side.dk"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
            />
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="flex rounded-md shadow-sm">
  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 
                 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-slate-700 
                 text-gray-500 text-sm">
    https://
  </span>
  <input
    type="text"
    placeholder="din-side.dk"
    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md 
             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800"
  />
</div>`}
        />
      </section>
    </div>
  );
}
