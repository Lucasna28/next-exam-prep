import CodeBlock from "@/components/CodeBlock";

export default function ShadcnFormsPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-lg border border-green-100 dark:border-green-900">
        <h1 className="text-lg mb-2">Forms & Validering</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Byg brugervenlige formularer med indbygget validering og
          fejlhåndtering. shadcn/ui kombinerer React Hook Form med Zod for
          type-sikker formular validering.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Form Setup</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Start med at installere de nødvendige komponenter og opsæt en basis
            formular med validering:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`# Installer form komponenter
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add label`}
              language="bash"
            />
          </div>

          <div className="mb-6">
            <CodeBlock
              code={`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Brugernavn skal være mindst 2 tegn.",
  }),
  email: z.string().email({
    message: "Indtast en gyldig email adresse.",
  }),
})
 
export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brugernavn</FormLabel>
              <FormControl>
                <Input placeholder="Dit brugernavn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="din@email.dk" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Opret konto</Button>
      </form>
    </Form>
  )
}`}
              language="tsx"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Avancerede Form Felter
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            shadcn/ui tilbyder en række avancerede form komponenter der kan
            kombineres med React Hook Form:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`# Installer avancerede komponenter
npx shadcn@latest add select
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add textarea
npx shadcn@latest add switch`}
              language="bash"
            />
          </div>

          <div className="text-xs text-gray-600 dark:text-gray-400">
            <strong>Tilgængelige Form Komponenter:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Select - Dropdown med valgmuligheder</li>
              <li>Checkbox - Afkrydsningsfelter</li>
              <li>Radio Group - Radio buttons</li>
              <li>Textarea - Tekst område</li>
              <li>Switch - Toggle knap</li>
              <li>Date Picker - Dato vælger</li>
              <li>Slider - Numerisk input</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">
            Form Validering med Zod
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">
            Zod gør det nemt at definere komplekse valideringsregler:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`const formSchema = z.object({
  username: z.string()
    .min(2, "Brugernavn skal være mindst 2 tegn.")
    .max(50, "Brugernavn må ikke overstige 50 tegn."),
  email: z.string()
    .email("Indtast en gyldig email adresse."),
  age: z.number()
    .min(18, "Du skal være mindst 18 år.")
    .max(100, "Ugyldig alder."),
  password: z.string()
    .min(8, "Password skal være mindst 8 tegn.")
    .regex(/[A-Z]/, "Password skal indeholde mindst ét stort bogstav.")
    .regex(/[0-9]/, "Password skal indeholde mindst ét tal."),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords matcher ikke.",
  path: ["confirmPassword"],
})`}
              language="tsx"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
        <h3 className="text-base font-semibold mb-3">Form Best Practices</h3>
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
                Validering på Klientsiden
              </strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Implementer validering på klientsiden for hurtig feedback, men
                husk også server-validering.
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
              <strong className="block text-xs mb-1">Loading States</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Vis loading states under form submission og deaktiver submit
                knappen.
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
              <strong className="block text-xs mb-1">Fejlhåndtering</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Vis tydelige fejlbeskeder og marker fejlbehæftede felter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
