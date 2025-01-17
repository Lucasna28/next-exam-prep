import CodeBlock from "@/components/CodeBlock";
import Skeleton from "@/components/Skeleton";

export default function SkeletonPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold">Skeleton Component</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        En simpel og effektiv loading placeholder komponent med tre
        grundlæggende varianter.
      </p>

      {/* Komponent Implementation */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Implementation</h2>
        <div className="mt-4">
          <CodeBlock
            language="tsx"
            code={`import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Skeleton({
  variant = "text",
  width,
  height,
  className,
  ...props
}: SkeletonProps) {
  const baseStyles = "bg-gray-200 dark:bg-gray-700 animate-pulse";

  const variants = {
    text: "h-4 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-md"
  };

  const classes = twMerge(baseStyles, variants[variant], className);

  const defaultDimensions = {
    text: { width: "100%", height: "1em" },
    circular: { width: "2.5rem", height: "2.5rem" },
    rectangular: { width: "100%", height: "200px" }
  };

  const style = {
    width: width ?? defaultDimensions[variant].width,
    height: height ?? defaultDimensions[variant].height
  };

  return <div className={classes} style={style} {...props} />;
}`}
          />
        </div>
      </section>

      {/* Eksempler */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Eksempler</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          De tre grundlæggende varianter af Skeleton komponenten.
        </p>

        <div className="mt-6 space-y-8">
          {/* Text Variant */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-medium">Text Variant</h3>
            </div>
            <div className="p-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="75%" />
                  <Skeleton variant="text" width="50%" />
                </div>
                <CodeBlock
                  language="jsx"
                  code={`<Skeleton variant="text" />
<Skeleton variant="text" width="75%" />
<Skeleton variant="text" width="50%" />`}
                />
              </div>
            </div>
          </div>

          {/* Circular Variant */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-medium">Circular Variant</h3>
            </div>
            <div className="p-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-center space-x-4">
                  <Skeleton variant="circular" width={32} height={32} />
                  <Skeleton variant="circular" width={48} height={48} />
                  <Skeleton variant="circular" width={64} height={64} />
                </div>
                <CodeBlock
                  language="jsx"
                  code={`<Skeleton variant="circular" width={32} height={32} />
<Skeleton variant="circular" width={48} height={48} />
<Skeleton variant="circular" width={64} height={64} />`}
                />
              </div>
            </div>
          </div>

          {/* Rectangular Variant */}
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
              <h3 className="font-medium">Rectangular Variant</h3>
            </div>
            <div className="p-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <Skeleton variant="rectangular" height={200} />
                </div>
                <CodeBlock
                  language="jsx"
                  code={`<Skeleton variant="rectangular" height={200} />`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Props</h2>
        <div className="mt-6">
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Default
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">
                    Beskrivelse
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">variant</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    &apos;text&apos; | &apos;circular&apos; |
                    &apos;rectangular&apos;
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    &apos;text&apos;
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Bestemmer skeletonens type
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">width</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    string | number
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Varierer
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Tilsidesætter standardbredden
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">height</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    string | number
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Varierer
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Tilsidesætter standardhøjden
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">className</td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    string
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    -
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Tilføjer ekstra CSS klasser
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
