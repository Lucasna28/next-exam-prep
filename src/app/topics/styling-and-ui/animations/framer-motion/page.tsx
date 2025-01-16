"use client";

import CodeBlock from "@/components/CodeBlock";
import { motion } from "framer-motion";

export default function FramerMotionPage() {
  return (
    <div className="prose lg:prose-xs">
      <h1 className="text-lg">Animationer med Framer Motion</h1>
      <p className="text-xs">
        Framer Motion er et kraftfuldt bibliotek til at tilføje animationer i
        React applikationer. Det tilbyder en simpel API til komplekse
        animationer.
      </p>

      <h2 className="text-base">Basis Animation</h2>
      <div className="my-4 flex gap-4">
        <motion.div
          className="w-16 h-16 bg-blue-500 rounded-lg"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.div
          className="w-16 h-16 bg-purple-500 rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>

      <CodeBlock
        code={`import { motion } from "framer-motion";

// Roterende boks
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 180, 0],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  }}
/>

// Interaktiv boks
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>`}
        language="typescript"
      />

      <h2 className="text-base">Gesture Animations</h2>
      <div className="my-4">
        <motion.button
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hover & Klik Mig
        </motion.button>
      </div>

      <h2 className="text-base">Stagger Effekter</h2>
      <div className="my-4 flex gap-2">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="w-8 h-8 bg-indigo-500 rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
            }}
          />
        ))}
      </div>

      <CodeBlock
        code={`// Stagger animation
{[0, 1, 2, 3].map((index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.1,
    }}
  />
))}`}
        language="typescript"
      />

      <h2 className="text-base">Variants</h2>
      <CodeBlock
        code={`const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>`}
        language="typescript"
      />

      <h2 className="text-base">Best Practices</h2>
      <ul className="text-xs">
        <li>Brug variants for genbrugelige animationer</li>
        <li>Hold animationer subtile og meningsfulde</li>
        <li>Overvej reduceret bevægelse for tilgængelighed</li>
        <li>Brug layout prop for automatisk layout animationer</li>
      </ul>
    </div>
  );
}
