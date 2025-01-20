import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function PrefetchingPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Prefetching i Next.js</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Prefetching er en teknik til at forhåndshente data og ressourcer, før
        brugeren har brug for dem. Next.js tilbyder forskellige måder at
        implementere prefetching på, hvilket kan forbedre brugeroplevelsen
        markant.
      </p>

      {/* Automatisk Prefetching med next/link */}
      <section className="mt-8">
        <h2 className="text-base">Automatisk Prefetching med next/link</h2>
        <p className="text-xs">
          Next.js&apos;s <code>Link</code> komponent udfører automatisk
          prefetching af sider, når linket kommer inden for viewport. Dette er
          aktiveret som standard i produktion.
        </p>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-medium mb-2">
            Eksempel på Link med Prefetching
          </h3>
          <CodeBlock
            language="tsx"
            code={`import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <Link href="/dashboard">
        Dashboard
      </Link>
      {/* Deaktiver prefetching hvis nødvendigt */}
      <Link href="/profile" prefetch={false}>
        Profil
      </Link>
    </nav>
  )
}`}
          />
        </div>
      </section>

      {/* Manuel Prefetching */}
      <section className="mt-8">
        <h2 className="text-base">Manuel Prefetching</h2>
        <p className="text-xs">
          I nogle tilfælde vil du måske have mere kontrol over hvornår
          prefetching sker. Next.js tilbyder <code>router.prefetch()</code>{" "}
          metoden til manuel prefetching.
        </p>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-medium mb-2">
            Manuel Prefetching med useRouter
          </h3>
          <CodeBlock
            language="tsx"
            code={`'use client'
 
import { useRouter } from 'next/navigation'
 
export default function PreloadButton() {
  const router = useRouter()
 
  return (
    <button
      onMouseEnter={() => router.prefetch('/dashboard')}
      onClick={() => router.push('/dashboard')}
    >
      Gå til Dashboard
    </button>
  )
}`}
          />
        </div>
      </section>

      {/* Data Prefetching */}
      <section className="mt-8">
        <h2 className="text-base">Data Prefetching</h2>
        <p className="text-xs">
          Next.js 13+ introducerede nye måder at prefetche data på ved hjælp af
          React Suspense og Server Components.
        </p>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-medium mb-2">
            Prefetching med generateStaticParams
          </h3>
          <CodeBlock
            language="tsx"
            code={`// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getPosts()
 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
 
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)
  return <article>{post.content}</article>
}`}
          />
        </div>
      </section>

      {/* Bedste Praksis */}
      <section className="mt-8">
        <h2 className="text-base">Bedste Praksis for Prefetching</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">
              Anbefalinger
            </h3>
            <ul className="text-xs text-blue-700 dark:text-blue-200 space-y-2">
              <li>
                • Brug <code>Link</code> komponenten til navigation hvor muligt
              </li>
              <li>• Prefetch kun de mest sandsynlige næste sider</li>
              <li>
                • Overvej at deaktivere prefetching på mindre vigtige links
              </li>
              <li>• Brug manuel prefetching strategisk på kritiske stier</li>
            </ul>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300 mb-2">
              Overvejelser
            </h3>
            <ul className="text-xs text-amber-700 dark:text-amber-200 space-y-2">
              <li>• Prefetching øger initial bundle size</li>
              <li>• Vær opmærksom på data-forbrug på mobile enheder</li>
              <li>• Balance mellem performance og ressourceforbrug</li>
              <li>
                • Test prefetching strategier med forskellige
                netværkshastigheder
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Avancerede Teknikker */}
      <section className="mt-8">
        <h2 className="text-base">Avancerede Prefetching Teknikker</h2>
        <p className="text-xs">
          For mere komplekse applikationer kan du kombinere forskellige
          prefetching strategier:
        </p>

        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Betinget Prefetching</h3>
          <CodeBlock
            language="tsx"
            code={`'use client'
 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
 
export default function SmartPrefetch() {
  const router = useRouter()
 
  useEffect(() => {
    // Kun prefetch hvis brugeren har god forbindelse
    if (navigator.connection && navigator.connection.effectiveType === '4g') {
      router.prefetch('/dashboard')
    }
 
    // Prefetch baseret på brugeradfærd
    const handleUserIdle = () => {
      router.prefetch('/notifications')
    }
 
    let idleCallback = requestIdleCallback(handleUserIdle)
 
    return () => cancelIdleCallback(idleCallback)
  }, [router])
 
  return <div>Smart Prefetching Demo</div>
}`}
          />
        </div>
      </section>
    </div>
  );
}
