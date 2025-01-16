"use client";

import CodeBlock from "@/components/CodeBlock";
import { motion } from "framer-motion";

export default function FramerMotionPage() {
  return (
    <div className="prose lg:prose-xs">
      <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950 dark:to-fuchsia-950 rounded-lg border border-purple-100 dark:border-purple-900">
        <h1 className="text-lg mb-2">Framer Motion</h1>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Lær at skabe avancerede animationer med Framer Motion - et kraftfuldt
          bibliotek til React.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Installation & Setup</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Framer Motion er nemt at installere og komme i gang med. Start med
            at installere pakken via npm:
          </p>

          <div className="mb-6">
            <CodeBlock code={`npm install framer-motion`} language="bash" />
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Efter installation kan du importere motion komponenter i dine React
            filer:
          </p>

          <div className="mb-6">
            <CodeBlock
              code={`import { motion } from 'framer-motion'

// Brug motion komponenter
const MyComponent = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    Indhold
  </motion.div>
)`}
              language="jsx"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="text-xs font-medium mb-2">Vigtige Koncepter</h4>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                • motion.* komponenter erstatter HTML elementer (div, button,
                etc.)
              </li>
              <li>• initial definerer start tilstanden</li>
              <li>• animate definerer slut tilstanden</li>
              <li>• transition styrer hvordan animationen udføres</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Basis Animationer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Framer Motion gør det nemt at tilføje animationer til dine React
            komponenter. Her er nogle grundlæggende eksempler:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Hover Animation</h3>
              <motion.div
                className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <p className="text-sm">Hover & Tap Mig</p>
              </motion.div>
              <div className="mt-4">
                <CodeBlock
                  code={`<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover & Tap Mig
</motion.div>`}
                  language="jsx"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Entrance Animation</h3>
              <motion.div
                className="p-4 bg-green-100 dark:bg-green-900 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm">Jeg fader ind</p>
              </motion.div>
              <div className="mt-4">
                <CodeBlock
                  code={`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Jeg fader ind
</motion.div>`}
                  language="jsx"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h4 className="text-xs font-medium mb-2">Animation Properties</h4>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-2">
              <li>• scale: Ændrer størrelsen (1 er normal størrelse)</li>
              <li>• x/y: Flytter elementet horisontalt/vertikalt</li>
              <li>• rotate: Roterer elementet i grader</li>
              <li>• opacity: Styrer gennemsigtighed (0-1)</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Gesture Animationer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Framer Motion tilbyder kraftfulde gesture animationer der reagerer
            på brugerinteraktion. Dette er særligt nyttigt for at skabe
            interaktive og engagerende brugergrænseflader.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Drag Animation</h3>
              <motion.div
                className="w-16 h-16 bg-purple-500 rounded-lg cursor-move"
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                whileDrag={{ scale: 1.2 }}
              />
              <div className="mt-4">
                <CodeBlock
                  code={`<motion.div
  drag
  dragConstraints={{
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  }}
  whileDrag={{ scale: 1.2 }}
/>`}
                  language="jsx"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Pan Animation</h3>
              <motion.div
                className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg cursor-grab"
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm">Pan & Grab Mig</p>
              </motion.div>
              <div className="mt-4">
                <CodeBlock
                  code={`<motion.div
  whileTap={{ cursor: "grabbing" }}
  whileHover={{ scale: 1.05 }}
>
  Pan & Grab Mig
</motion.div>`}
                  language="jsx"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-base font-semibold mb-4">Variants</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Variants gør det nemt at definere og genbruge animationstilstande.
            De er særligt nyttige når du har komplekse animationer eller
            animationer der skal genbruges på tværs af komponenter.
          </p>

          <div className="mb-4">
            <CodeBlock
              code={`const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: { scale: 1.1 }
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
/>`}
              language="jsx"
            />
          </div>

          <motion.div
            className="p-4 bg-pink-100 dark:bg-pink-900 rounded-lg cursor-pointer"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
              hover: { scale: 1.1 },
            }}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <p className="text-sm">Prøv at hover over mig!</p>
          </motion.div>
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
              <strong className="block text-xs mb-1">Brug Variants</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Organiser animationer i variants for bedre genbrug og
                vedligeholdelse.
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
              <strong className="block text-xs mb-1">Animér med Formål</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug animationer til at guide brugeren og forbedre
                interaktionen.
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
              <strong className="block text-xs mb-1">Performance</strong>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Brug transform og opacity for bedste performance. Undgå at
                animere layout properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
