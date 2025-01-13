import CodeBlock from "@/components/CodeBlock";

export default function DynamicRoutingPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Dynamic Routing i Next.js</h1>

      <h2>Hvad er Dynamic Routing?</h2>
      <p>
        Dynamic Routing i Next.js giver dig mulighed for at oprette sider, hvor
        URL-strukturen er dynamisk og kan indeholde variable værdier. Dette er
        særligt nyttigt når du skal oprette sider for:
      </p>

      <ul>
        <li>Blog indlæg med forskellige slugs</li>
        <li>Produkt sider med forskellige ID'er</li>
        <li>Bruger profiler med forskellige brugernavne</li>
      </ul>

      <h2>Eksempel på Dynamic Routing</h2>
      <CodeBlock
        code={`// pages/posts/[slug].tsx
export default function Post({ params }) {
  return <h1>Post: {params.slug}</h1>
}

// URL: /posts/min-første-post
// Vil vise: "Post: min-første-post"`}
        language="typescript"
      />
    </div>
  );
}
