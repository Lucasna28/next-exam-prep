import CodeBlock from "@/components/CodeBlock";

export default function PrefetchingPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Prefetching</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær hvordan du kan forbedre din applikations ydeevne ved at
          forudindlæse data og komponenter, før brugeren har brug for dem.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Next.js Link Prefetching
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Next.js Link komponenten understøtter automatisk prefetching af
            sider, når linket kommer inden for viewport.
          </p>
          <CodeBlock
            code={`import Link from 'next/link'

// Automatisk prefetching
export default function Navigation() {
  return (
    <nav>
      <Link href="/about">Om os</Link>
      
      {/* Deaktiver prefetching */}
      <Link href="/contact" prefetch={false}>
        Kontakt
      </Link>
    </nav>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Data Prefetching</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Du kan også prefetche data ved hjælp af React Query eller SWR.
          </p>
          <CodeBlock
            code={`import { useQuery, prefetchQuery } from '@tanstack/react-query'

// Prefetch data når musen hover over et link
const prefetchUserData = async (userId) => {
  await prefetchQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })
}

export default function UserList() {
  return (
    <div>
      {users.map(user => (
        <Link
          key={user.id}
          href={\`/user/\${user.id}\`}
          onMouseEnter={() => prefetchUserData(user.id)}
        >
          {user.name}
        </Link>
      ))}
    </div>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Route Prefetching</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Next.js App Router understøtter route prefetching med
            router.prefetch.
          </p>
          <CodeBlock
            code={`'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button onMouseEnter={() => router.prefetch('/dashboard')}>
      Dashboard
    </button>
  )
}`}
            language="typescript"
          />
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Avanceret Prefetching
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Betinget Prefetching</h3>
              <CodeBlock
                code={`// Prefetch baseret på brugerinteraktion
const prefetchBasedOnScroll = () => {
  const threshold = 0.8 // 80% scrollet ned
  const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
  
  if (scrollPosition > threshold) {
    router.prefetch('/next-page')
  }
}`}
                language="typescript"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">
                Prioriteret Prefetching
              </h3>
              <CodeBlock
                code={`// Prefetch kritiske ressourcer først
const prefetchCriticalResources = async () => {
  // Prefetch vigtige routes først
  await router.prefetch('/dashboard')
  
  // Derefter prefetch mindre vigtige routes
  Promise.all([
    router.prefetch('/settings'),
    router.prefetch('/profile')
  ])
}`}
                language="typescript"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
          <h3 className="text-base font-semibold mb-3">Best Practices</h3>
          <ul className="space-y-3 text-xs text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Prefetch kun de mest sandsynlige næste sider
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Overvej brugerens netværksforbindelse
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Implementer intelligent prefetching baseret på brugeradfærd
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500">•</span>
              Monitor og optimer prefetching strategier løbende
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
