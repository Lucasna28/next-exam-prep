import CodeBlock from "@/components/CodeBlock";
import { motion } from "framer-motion";

export default function AnimationerFramerMotionPage() {
  return (
    <div className="prose lg:prose-lg">
      <h1 className="text-lg">Animationer med Framer Motion</h1>
      <p className="text-base">
        Framer Motion er et populært animationsbibliotek til React, der gør det nemt at skabe avancerede animationer og transitions. Med et simpelt og intuitivt API kan du hurtigt animere komponenter og forbedre brugeroplevelsen.
      </p>

      <h2 className="text-base">Grundlæggende Eksempel</h2>
      <p className="text-base">
        For at bruge Framer Motion skal du installere biblioteket først:
      </p>
      <CodeBlock
        code={`npm install framer-motion`}
        language="bash"
      />
      <p className="text-base">
        Derefter kan du begynde at animere elementer ved hjælp af <code>motion</code>-komponenter:
      </p>
      <CodeBlock
        code={`import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Velkommen til Framer Motion!</h1>
    </motion.div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Animationer med Events</h2>
      <p className="text-base">
        Framer Motion understøtter interaktioner som hover og klik. Du kan definere forskellige animationstilstande ved hjælp af <code>whileHover</code> og <code>whileTap</code>.
      </p>
      <CodeBlock
        code={`export default function InteractiveExample() {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Hover eller Klik mig!
    </motion.button>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Keyframes</h2>
      <p className="text-base">
        Du kan også definere keyframe-animationer for at skabe mere komplekse bevægelser:
      </p>
      <CodeBlock
        code={`export default function KeyframeExample() {
  return (
    <motion.div
      animate={{
        x: [0, 100, 0],
        opacity: [1, 0.5, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      <p>Jeg bevæger mig frem og tilbage!</p>
    </motion.div>
  );
}`}
        language="javascript"
      />

      <h2 className="text-base">Fordele ved Framer Motion</h2>
      <ul className="text-base">
        <li>
          <strong>Intuitivt API:</strong> Nem at bruge og kræver minimal opsætning.
        </li>
        <li>
          <strong>Interaktive Animationer:</strong> Understøtter events som hover og klik.
        </li>
        <li>
          <strong>Performance:</strong> Optimeret til høj ydeevne.
        </li>
        <li>
          <strong>Flexibilitet:</strong> Understøtter komplekse animationer som keyframes og transitions.
        </li>
      </ul>

      <h2 className="text-base">Konklusion</h2>
      <p className="text-base">
        Framer Motion er en kraftfuld tilføjelse til ethvert React-projekt, når du vil skabe glatte og engagerende animationer. Uanset om det er simple fades eller komplekse sekvenser, har Framer Motion et værktøj til opgaven.
      </p>
    </div>
  );
}
