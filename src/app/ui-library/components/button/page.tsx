import CodeBlock from "@/components/CodeBlock";
import Button from "@/components/Button";

export default function ButtonPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Button Component</h1>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        Moderne og fleksible button komponenter med forskellige varianter og
        states.
      </p>

      <section className="mt-8">
        <h2 className="text-base">Primær Button</h2>
        <div className="my-4 flex space-x-4">
          <Button>Primær</Button>
          <Button disabled>Disabled</Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`import Button from '@/components/Button';

<Button>Primær</Button>
<Button disabled>Disabled</Button>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Sekundær Button</h2>
        <div className="my-4 flex space-x-4">
          <Button variant="secondary">Sekundær</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button variant="secondary">Sekundær</Button>
<Button variant="secondary" disabled>Disabled</Button>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Gradient Button</h2>
        <div className="my-4 flex space-x-4">
          <Button variant="gradient">Gradient</Button>
          <Button variant="gradient" disabled>
            Disabled
          </Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button variant="gradient">Gradient</Button>
<Button variant="gradient" disabled>Disabled</Button>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Størrelser</h2>
        <div className="my-4 flex items-center space-x-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Icon Button</h2>
        <div className="my-4 flex space-x-4">
          <Button
            icon={
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            }
          >
            Upload
          </Button>
        </div>
        <CodeBlock
          language="jsx"
          code={`<Button
  icon={
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  }
>
  Upload
</Button>`}
        />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Loading Button</h2>
        <div className="my-4 flex space-x-4">
          <Button isLoading>Loading</Button>
        </div>
        <CodeBlock language="jsx" code={`<Button isLoading>Loading</Button>`} />
      </section>

      <section className="mt-8">
        <h2 className="text-base">Props Reference</h2>
        <div className="my-4">
          <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm">
            {`interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
  // Alle standard button props er også tilgængelige
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
