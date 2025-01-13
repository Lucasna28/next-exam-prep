import CodeBlock from "@/components/CodeBlock";

export default function ImageOptimizationPage() {
  return (
    <div className="prose lg:prose-xl">
      <h1>Image Optimization i Next.js</h1>

      <p>
        Next.js tilbyder automatisk billedoptimering gennem Image komponenten.
        Dette inkluderer automatisk størrelsestilpasning, moderne formater og
        lazy loading.
      </p>

      <h2>Brug af Next.js Image Komponent</h2>
      <CodeBlock
        language="typescript"
        code={`import Image from 'next/image'

function MyComponent() {
  return (
    <Image
      src="/billede.jpg"
      alt="Mit billede"
      width={500}
      height={300}
      priority={false}
      loading="lazy"
    />
  )
}`}
      />

      <h2>Vigtige Egenskaber</h2>
      <ul>
        <li>Automatisk størrelsestilpasning til forskellige enheder</li>
        <li>Konvertering til moderne formater (WebP, AVIF)</li>
        <li>Lazy loading som standard</li>
        <li>Blur-up placeholder mens billedet indlæses</li>
      </ul>

      <h2>Responsive Billeder</h2>
      <CodeBlock
        language="typescript"
        code={`<Image
  src="/billede.jpg"
  alt="Responsivt billede"
  fill
  sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  className="object-cover"
/>`}
      />

      <h2>Med Blur Placeholder</h2>
      <CodeBlock
        language="typescript"
        code={`<Image
  src="/billede.jpg"
  alt="Billede med blur"
  width={500}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j..."`}
      />

      <h2>Best Practices</h2>
      <ul>
        <li>Brug altid width og height props for at undgå layout shifts</li>
        <li>Tilføj priority={`{true}`} til billeder over folden</li>
        <li>Brug sizes prop for responsive billeder</li>
        <li>Inkluder beskrivende alt tekster</li>
      </ul>
    </div>
  );
}
