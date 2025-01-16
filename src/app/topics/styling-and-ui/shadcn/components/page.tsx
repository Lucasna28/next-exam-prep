import CodeBlock from "@/components/CodeBlock";

export default function ShadcnComponentsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Komponenter i shadcn/ui</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          En samling af de mest brugte komponenter med praktiske eksempler og
          kode snippets. Alle komponenter er bygget med tilgængelighed og
          brugervenlighed i fokus.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-md">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold">Data Input Komponenter</h2>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Input komponenter er designet til at indsamle data fra brugeren på
            en sikker og tilgængelig måde. De inkluderer validering,
            fejlhåndtering og forskellige states.
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Input med label og beskrivelse
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
      <p className="text-sm text-gray-500">
        Vi deler aldrig din email.
      </p>
    </div>
  )
}`}
              language="tsx"
            />
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Tilgængelige komponenter:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Input - Tekstfelter med forskellige typer</li>
              <li>Select - Dropdown med valgmuligheder</li>
              <li>Checkbox - Afkrydsningsfelter</li>
              <li>RadioGroup - Radio button grupper</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-md">
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold">Layout & Struktur</h2>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Layout komponenter hjælper med at strukturere indhold og skabe
            hierarki i brugergrænsefladen. De er fleksible og kan tilpasses
            forskellige behov.
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Card komponent med header, content og footer
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Opret Konto</CardTitle>
        <CardDescription>
          Indtast dine oplysninger nedenfor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Formular indhold */}
      </CardContent>
      <CardFooter>
        <Button>Opret</Button>
      </CardFooter>
    </Card>
  )
}`}
              language="tsx"
            />
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Tilgængelige komponenter:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Card - Fleksibel container til indhold</li>
              <li>Tabs - Organisér indhold i faner</li>
              <li>Accordion - Sammenfoldeligt indhold</li>
              <li>Sheet - Slide-in panel til ekstra indhold</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-500/10 rounded-md">
              <svg
                className="w-5 h-5 text-amber-600 dark:text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-base font-semibold">Feedback & Interaktion</h2>
          </div>

          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
            Feedback komponenter giver brugeren besked om handlinger og
            tilstande i applikationen. De er vigtige for en god brugeroplevelse.
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`// Toast notifikation med titel og beskrivelse
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ToastDemo() {
  const { toast } = useToast()
  
  return (
    <Button
      onClick={() => {
        toast({
          title: "Succes!",
          description: "Din handling blev gennemført.",
        })
      }}
    >
      Vis Toast
    </Button>
  )
}`}
              language="tsx"
            />
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Tilgængelige komponenter:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Toast - Midlertidige notifikationer</li>
              <li>Alert - Permanente beskeder</li>
              <li>Dialog - Modal vinduer</li>
              <li>Progress - Loading indikatorer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">Best Practices</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">
                Genbrugt komponenter
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Placer komponenter i separate filer under components/ui mappen
                for bedre organisering.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">TypeScript Support</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Definer interfaces for component props og brug TypeScript for
                bedre type-sikkerhed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 mt-0.5 text-blue-500 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <strong className="block text-xs mb-1">Tilgængelighed</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug ARIA attributter og keyboard navigation hvor det er
                relevant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
