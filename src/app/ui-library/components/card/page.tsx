import CodeBlock from "@/components/CodeBlock";

export default function CardPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Card Components</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Moderne og interaktive card komponenter med avancerede animationer og
        features.
      </p>

      <section className="mt-8">
        <h2 className="text-base">Glassmorphism Card</h2>
        <div className="my-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-30"></div>
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-slate-800/30 rounded-xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Glassmorphism Design
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Moderne og elegant
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Et moderne card med glaseffekt og gradient bagrund. Perfekt til
              featured content og premium sektioner.
            </p>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="relative">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-30"></div>
  <div className="relative backdrop-blur-xl bg-white/30 dark:bg-slate-800/30 rounded-xl border border-white/30 dark:border-gray-700/30 p-6 shadow-lg hover:shadow-xl transition-all">
    <div className="flex items-center space-x-4 mb-4">
      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Glassmorphism Design</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Moderne og elegant</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300">
      Et moderne card med glaseffekt og gradient bagrund.
    </p>
  </div>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">3D Hover Card</h2>
        <div className="my-4">
          <div className="group h-96 w-full [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                  alt="Landskab"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <h3 className="text-2xl font-bold">3D Flip Card</h3>
                  <p className="text-lg mt-4">
                    Hover over kortet for at se den fede 3D flip animation!
                  </p>
                  <button className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600">
                    Læs mere
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="group h-96 w-full [perspective:1000px]">
  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
    <div className="absolute inset-0">
      <img
        className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
        src="your-image-url"
        alt="Landskab"
      />
    </div>
    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <div className="flex min-h-full flex-col items-center justify-center">
        <h3 className="text-2xl font-bold">3D Flip Card</h3>
        <p className="text-lg mt-4">Hover over kortet for at se den fede 3D flip animation!</p>
        <button className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-sm hover:bg-blue-600">
          Læs mere
        </button>
      </div>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Animated Feature Card</h2>
        <div className="my-4">
          <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Animated background gradient */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>

            {/* Content */}
            <div className="relative flex flex-col items-start">
              {/* Icon */}
              <div className="rounded-lg bg-blue-500 p-3 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              {/* Text content */}
              <h3 className="mt-4 text-xl font-semibold text-slate-800 dark:text-white">
                Animeret Feature Card
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-[280px]">
                Avancerede hover effekter med animeret gradient baggrund og
                skalerende ikon.
              </p>

              {/* Call to action */}
              <div className="mt-4 flex items-center space-x-2">
                <span className="text-blue-500 group-hover:text-blue-600 transition-colors">
                  Læs mere
                </span>
                <svg
                  className="h-4 w-4 text-blue-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
  {/* Animated background gradient */}
  <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-20 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
  
  {/* Content */}
  <div className="relative flex flex-col items-start">
    {/* Icon */}
    <div className="rounded-lg bg-blue-500 p-3 text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    
    {/* Text content */}
    <h3 className="mt-4 text-xl font-semibold text-slate-800 dark:text-white">
      Animeret Feature Card
    </h3>
    <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-[280px]">
      Avancerede hover effekter med animeret gradient baggrund og skalerende ikon.
    </p>
    
    {/* Call to action */}
    <div className="mt-4 flex items-center space-x-2">
      <span className="text-blue-500 group-hover:text-blue-600 transition-colors">Læs mere</span>
      <svg className="h-4 w-4 text-blue-500 group-hover:text-blue-600 transition-transform group-hover:translate-x-2">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Pricing Card</h2>
        <div className="my-4">
          <div className="group relative rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Popular badge */}
            <div className="absolute -top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                Populær
              </span>
            </div>

            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Pro Plan
              </h3>
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-800 dark:text-white">
                  299
                </span>
                <span className="ml-1 text-2xl text-gray-500 dark:text-gray-400">
                  kr
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  /md
                </span>
              </div>
            </div>

            {/* Features list */}
            <ul className="mt-8 space-y-4">
              {[
                "Ubegrænset storage",
                "Priority support",
                "Custom domæne",
                "Analytics dashboard",
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button className="mt-8 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity">
              Vælg Pro Plan
            </button>
          </div>
        </div>
        <CodeBlock
          language="jsx"
          code={`<div className="group relative rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300">
  {/* Popular badge */}
  <div className="absolute -top-4 right-4">
    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
      Populær
    </span>
  </div>

  {/* Header */}
  <div className="text-center">
    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Pro Plan</h3>
    <div className="mt-4 flex items-baseline justify-center">
      <span className="text-5xl font-bold text-gray-800 dark:text-white">299</span>
      <span className="ml-1 text-2xl text-gray-500 dark:text-gray-400">kr</span>
      <span className="ml-2 text-gray-500 dark:text-gray-400">/md</span>
    </div>
  </div>

  {/* Features list */}
  <ul className="mt-8 space-y-4">
    {['Ubegrænset storage', 'Priority support', 'Custom domæne', 'Analytics dashboard'].map((feature) => (
      <li key={feature} className="flex items-center">
        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className="ml-3 text-gray-600 dark:text-gray-300">{feature}</span>
      </li>
    ))}
  </ul>

  {/* CTA Button */}
  <button className="mt-8 w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition-opacity">
    Vælg Pro Plan
  </button>
</div>`}
        />
      </section>
    </div>
  );
}
