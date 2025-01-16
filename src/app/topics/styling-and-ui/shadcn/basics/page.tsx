import CodeBlock from "@/components/CodeBlock";

export default function ShadcnBasicsPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Kom i Gang med shadcn/ui</h1>
      <p className="text-xs mb-6">
        shadcn/ui er en samling af genbrugelige komponenter bygget med Radix UI
        og Tailwind CSS. Det er ikke et traditionelt npm-package, men i stedet
        en samling af komponenter du kan kopiere og tilpasse til dit projekt.
      </p>

      <h2 className="text-base">Installation</h2>
      <p className="text-xs mb-4">
        Start med at initialisere shadcn/ui i dit Next.js projekt:
      </p>

      <CodeBlock
        code={`# Kør CLI værktøjet
npx shadcn-ui@latest init

# Vælg følgende indstillinger:
✓ Would you like to use TypeScript (recommended)? yes
✓ Which style would you like to use? Default
✓ Which color would you like to use as base color? Slate
✓ Where is your global CSS file? app/globals.css
✓ Would you like to use CSS variables? yes
✓ Where is your tailwind.config.js located? tailwind.config.js
✓ Configure the import alias for components: @/components
✓ Configure the import alias for utils: @/lib/utils`}
        language="bash"
      />

      <h2 className="text-base">Installer Komponenter</h2>
      <p className="text-xs mb-4">Installer de komponenter du har brug for:</p>

      <CodeBlock
        code={`# Installer enkelte komponenter
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog`}
        language="bash"
      />

      <h2 className="text-base">Brug af Komponenter</h2>
      <p className="text-xs mb-4">Eksempel på brug af Button komponenten:</p>

      <CodeBlock
        code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Slet</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`}
        language="tsx"
      />

      <h2 className="text-base">Dialog Eksempel</h2>
      <p className="text-xs mb-4">Sådan bruger du Dialog komponenten:</p>

      <CodeBlock
        code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Åbn Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Er du sikker?</DialogTitle>
          <DialogDescription>
            Denne handling kan ikke fortrydes.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-3">
          <Button variant="outline">Annuller</Button>
          <Button variant="destructive">Slet</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}`}
        language="tsx"
      />

      <h2 className="text-base">Tilpasning af Tema</h2>
      <p className="text-xs mb-4">
        Du kan nemt tilpasse komponenternes udseende via globals.css:
      </p>

      <CodeBlock
        code={`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
 
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
 
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
 
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
 
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
 
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
 
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }
}`}
        language="css"
      />

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Best Practices</h3>
        <ul className="text-xs space-y-2">
          <li>Installer kun de komponenter du har brug for</li>
          <li>Tilpas komponenterne til dit design system</li>
          <li>Brug TypeScript for bedre type-sikkerhed</li>
          <li>Organiser dine komponenter i en ui mappe</li>
          <li>Hold styr på dine tema variabler i globals.css</li>
        </ul>
      </div>

      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
        <h3 className="text-base font-semibold mb-2">Fordele ved shadcn/ui</h3>
        <ul className="text-xs space-y-2">
          <li>Fuld kontrol over koden - ingen black box</li>
          <li>Bygget med Radix UI for god tilgængelighed</li>
          <li>Nem at tilpasse med Tailwind CSS</li>
          <li>Moderne og clean design</li>
          <li>Aktiv community og god dokumentation</li>
        </ul>
      </div>
    </div>
  );
}
